const DEFAULT_DRAFT_MODEL = "gpt-4o-mini";
const MAX_TEXT_CHARS = 18000;

module.exports.config = {
  api: {
    bodyParser: {
      sizeLimit: "1mb",
    },
  },
};

function cleanText(value) {
  return String(value || "").trim();
}

function clipText(value, limit = MAX_TEXT_CHARS) {
  return cleanText(value).slice(0, limit);
}

function cleanList(values, limit = 20) {
  if (!Array.isArray(values)) return [];
  return values.map(cleanText).filter(Boolean).slice(0, limit);
}

function cleanStructure(items) {
  if (!Array.isArray(items)) return [];
  return items.slice(0, 8).map((item) => ({
    heading: cleanText(item.heading).slice(0, 120),
    role: cleanText(item.role).slice(0, 280),
    sources: cleanList(item.sources, 6),
  }));
}

function cleanNotes(notes) {
  if (!Array.isArray(notes)) return [];
  return notes
    .slice(0, 12)
    .map((note) => ({
      id: cleanText(note.id).slice(0, 32),
      title: cleanText(note.title).slice(0, 160),
      role: cleanText(note.role).slice(0, 80),
      text: cleanText(note.text).slice(0, 2400),
      transcriptionSource: cleanText(note.transcriptionSource).slice(0, 120),
    }))
    .filter((note) => note.id && note.text);
}

function normalizeParagraphs(paragraphs, allowedSources) {
  if (!Array.isArray(paragraphs)) return [];
  return paragraphs
    .slice(0, 8)
    .map((paragraph) => {
      const text = cleanText(paragraph.text).slice(0, 1600);
      const sources = cleanList(paragraph.sources, 6).filter((source) => allowedSources.has(source));
      return {
        text,
        sources: sources.length ? sources : ["AI inference"],
      };
    })
    .filter((paragraph) => paragraph.text);
}

function parseModelJson(content) {
  const raw = cleanText(content);
  try {
    return JSON.parse(raw);
  } catch {
    const match = raw.match(/\{[\s\S]*\}/);
    if (!match) return {};
    try {
      return JSON.parse(match[0]);
    } catch {
      return {};
    }
  }
}

module.exports = async function draft(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    response.status(405).json({ error: "Method not allowed" });
    return;
  }

  if (!process.env.OPENAI_API_KEY) {
    response.status(500).json({ error: "OPENAI_API_KEY is not configured for draft generation." });
    return;
  }

  const body = request.body || {};
  const notes = cleanNotes(body.notes);
  const targetStructure = cleanStructure(body.targetStructure);

  if (!notes.length) {
    response.status(400).json({ error: "No transcribed voice notes were provided for draft generation." });
    return;
  }

  const allowedSources = new Set([
    ...notes.map((note) => note.id),
    "Project context",
    "Target document schema",
    "Domain context",
    "AI inference",
  ]);

  const model = cleanText(process.env.OPENAI_DRAFT_MODEL) || DEFAULT_DRAFT_MODEL;
  const draftInput = {
    projectIntent: clipText(body.projectIntent, 1600),
    outputShape: cleanText(body.outputShape).slice(0, 120),
    domain: cleanText(body.domain).slice(0, 120),
    domainContext: clipText(body.domainContext, 2400),
    primingWords: cleanList(body.primingWords, 80),
    targetStructure,
    notes,
  };

  const openAiResponse = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model,
      temperature: 0.35,
      max_tokens: 1500,
      response_format: { type: "json_object" },
      messages: [
        {
          role: "system",
          content:
            "You generate concise traceable long-form draft sections from voice-note transcripts. Use the target document schema to shape the output. Do not invent facts. Every paragraph must cite source note IDs from the provided notes, plus Project context, Domain context, Target document schema, or AI inference only when needed. Return only JSON.",
        },
        {
          role: "user",
          content: JSON.stringify({
            instruction:
              "Create a lightweight traceable draft. Return JSON with title and paragraphs. paragraphs must be an array of { text, sources }. Keep the draft 3-6 substantial paragraphs. Make the writing document-like, not a summary of notes.",
            allowedSources: [...allowedSources],
            draftInput,
          }),
        },
      ],
    }),
  });

  const payload = await openAiResponse.json().catch(() => ({}));
  if (!openAiResponse.ok) {
    response.status(openAiResponse.status).json({
      error: payload.error?.message || "OpenAI draft generation failed.",
    });
    return;
  }

  const content = payload.choices?.[0]?.message?.content || "";
  const parsed = parseModelJson(content);
  const paragraphs = normalizeParagraphs(parsed.paragraphs, allowedSources);

  if (!paragraphs.length) {
    response.status(502).json({ error: "The draft model did not return usable paragraphs." });
    return;
  }

  response.status(200).json({
    title: cleanText(parsed.title).slice(0, 180) || `${draftInput.outputShape || "Draft"} from Voice Notes`,
    paragraphs,
    model,
    source: "OpenAI draft generation",
  });
};
