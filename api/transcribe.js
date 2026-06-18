const MAX_AUDIO_BYTES = 25 * 1024 * 1024;

module.exports.config = {
  api: {
    bodyParser: {
      sizeLimit: "26mb",
    },
  },
};

function cleanText(value) {
  return String(value || "").trim();
}

module.exports = async function transcribe(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    response.status(405).json({ error: "Method not allowed" });
    return;
  }

  if (!process.env.OPENAI_API_KEY) {
    response.status(500).json({ error: "OPENAI_API_KEY is not configured for transcription." });
    return;
  }

  const { fileName, mimeType, dataBase64, prompt } = request.body || {};
  if (!fileName || !dataBase64) {
    response.status(400).json({ error: "Missing fileName or dataBase64." });
    return;
  }

  const audioBuffer = Buffer.from(dataBase64, "base64");
  if (!audioBuffer.length) {
    response.status(400).json({ error: "Uploaded audio file is empty." });
    return;
  }
  if (audioBuffer.length > MAX_AUDIO_BYTES) {
    response.status(413).json({ error: "Audio file is too large for this prototype transcription endpoint." });
    return;
  }

  const formData = new FormData();
  formData.append("model", "whisper-1");
  formData.append("file", new Blob([audioBuffer], { type: mimeType || "application/octet-stream" }), fileName);
  const transcriptionPrompt = cleanText(prompt);
  if (transcriptionPrompt) {
    formData.append("prompt", transcriptionPrompt.slice(0, 900));
  }

  const openAiResponse = await fetch("https://api.openai.com/v1/audio/transcriptions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: formData,
  });

  const payload = await openAiResponse.json().catch(() => ({}));
  if (!openAiResponse.ok) {
    response.status(openAiResponse.status).json({
      error: payload.error?.message || "OpenAI transcription failed.",
    });
    return;
  }

  response.status(200).json({
    text: cleanText(payload.text),
    source: "OpenAI audio transcription",
  });
};
