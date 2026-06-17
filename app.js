const scenarios = {
  legal: {
    label: "Legal research",
    intent:
      "Write a dissertation section arguing that algorithmic decision systems shift administrative-law review from interpretive deference toward reasoned decision-making.",
    terms: [
      "Loper Bright",
      "Chevron deference",
      "State Farm",
      "arbitrary and capricious",
      "reasoned decision-making",
      "administrative discretion",
    ],
    rule:
      "Upweight case names, doctrines, and standards of review before interpreting the note. Treat legal conclusions as citation-needed unless a source note or authority is attached.",
    examples: [
      {
        title: "Doctrinal analysis section",
        text: "Starts with rule, narrows the doctrinal issue, applies authority, then names the unresolved implication.",
      },
      {
        title: "Argumentative conclusion",
        text: "Ends with a careful claim, not a broad prediction, and flags what would need further proof.",
      },
    ],
    notes: [
      {
        id: "VN-01",
        title: "After reading agency deference cases",
        time: "03:12",
        role: "Claim",
        text:
          "I keep coming back to the idea that the Chevron issue is not only deference. When agencies use models, the interpretive step gets buried inside procurement and technical design.",
        corrections: ["low per bright → Loper Bright", "chev run → Chevron"],
      },
      {
        id: "VN-02",
        title: "Walk note on reason-giving",
        time: "02:41",
        role: "Evidence",
        text:
          "State Farm may be more useful here because the real question is whether the agency considered relevant factors and explained the path from evidence to decision.",
        corrections: ["state farm → State Farm"],
      },
      {
        id: "VN-03",
        title: "Concern about explainability",
        time: "01:58",
        role: "Open question",
        text:
          "I am not sure if explainability is the same as reasoned decision-making. The chapter should not collapse technical interpretability into legal justification.",
        corrections: ["interpret ability → interpretability"],
      },
    ],
    thesis:
      "The strongest version of the section argues that algorithmic agency action makes reason-giving, not deference, the central administrative-law pressure point.",
    readiness: 64,
    subtitle: "Promising thesis, but missing a counterargument and authority support.",
    support: [
      {
        title: "Clear doctrinal pivot",
        text: "Voice Notes 1 and 2 both move the argument from deference toward reasoned decision-making.",
        sources: ["VN-01", "VN-02"],
      },
      {
        title: "Useful conceptual caution",
        text: "Voice Note 3 prevents the draft from overclaiming that technical explainability and legal justification are identical.",
        sources: ["VN-03"],
      },
    ],
    gaps: [
      {
        kind: "gap",
        title: "Missing Counterargument",
        text: "The target examples include a counterauthority section. Current notes do not explain why deference still might matter after Loper Bright.",
        sources: ["Target examples"],
      },
      {
        kind: "conflict",
        title: "Unsupported Claim",
        text: "The draft wants to say procurement buries interpretation, but no note yet gives a concrete agency example.",
        sources: ["VN-01"],
      },
    ],
    map: [
      ["Claim", "Algorithmic systems obscure where interpretive judgment happens."],
      ["Evidence", "State Farm frames review around relevant factors and reasoned explanation."],
      ["Objection", "The notes have not yet addressed why deference remains relevant."],
      ["Needed input", "A concrete agency example and a counterargument note."],
    ],
    next:
      "Record a two-minute note answering: What would someone who thinks Chevron/Loper Bright still controls the analysis say, and why is that insufficient?",
    followUp: {
      id: "VN-04",
      title: "Counterargument follow-up",
      time: "02:07",
      role: "Objection",
      text:
        "The best counterargument is that Loper Bright still matters because courts may frame the dispute as statutory interpretation first. My response is that the model changes what counts as the agency's stated reasoning.",
      corrections: ["looper bright → Loper Bright"],
    },
    resolvedScore: 78,
    resolvedSubtitle: "Counterargument added. A concrete agency example is still needed.",
    draft: [
      {
        text:
          "The chapter should treat algorithmic administrative action less as a renewed deference problem and more as a reason-giving problem. When an agency relies on a model, interpretive judgment may be displaced into design choices, vendor assumptions, or implementation details before the final decision is ever explained.",
        sources: ["VN-01", "Project context"],
      },
      {
        text:
          "That is why State Farm is a more productive frame than a generic appeal to Chevron. The relevant question becomes whether the agency considered the right factors and made the path from evidence to decision intelligible.",
        sources: ["VN-02", "Target examples"],
      },
      {
        text:
          "The draft should be careful not to equate technical explainability with legal justification. Interpretability may help reveal how the system works, but reasoned decision-making requires the agency to justify why those reasons matter under the governing standard.",
        sources: ["VN-03"],
      },
    ],
  },
  medical: {
    label: "Medical research",
    intent:
      "Write a research memo on whether adherence, not efficacy, is the limiting factor for long-term GLP-1 outcomes.",
    terms: ["GLP-1", "semaglutide", "tirzepatide", "adherence", "real-world evidence", "contraindication"],
    rule:
      "Upweight drug names, clinical terms, population qualifiers, and evidence-strength language. Flag medical claims that lack study context or safety caveats.",
    examples: [
      {
        title: "Clinical evidence memo",
        text: "Separates mechanism, trial evidence, real-world constraints, and limitations.",
      },
      {
        title: "Executive summary",
        text: "States the practical takeaway while qualifying population and evidence strength.",
      },
    ],
    notes: [
      {
        id: "VN-01",
        title: "Adherence thought",
        time: "02:28",
        role: "Claim",
        text:
          "The important question may not be whether GLP-1 drugs work in trial conditions. It is whether patients can stay on them over a long enough period in real-world settings.",
        corrections: ["geo pee one → GLP-1"],
      },
      {
        id: "VN-02",
        title: "Evidence caveat",
        time: "01:44",
        role: "Caveat",
        text:
          "I need to be careful about saying discontinuation causes regain. That may be true in some studies, but the memo needs population and follow-up details.",
        corrections: ["semi glue tide → semaglutide"],
      },
      {
        id: "VN-03",
        title: "Practical constraint",
        time: "02:11",
        role: "Evidence",
        text:
          "Cost, side effects, supply, and insurance friction could be as important as pharmacology when thinking about population-level impact.",
        corrections: ["tear zeppa tide → tirzepatide"],
      },
    ],
    thesis:
      "The memo can argue that long-term GLP-1 impact depends on adherence infrastructure as much as clinical efficacy.",
    readiness: 59,
    subtitle: "Strong framing, but evidence strength and safety caveats need work.",
    support: [
      {
        title: "Clear practical thesis",
        text: "Voice Notes 1 and 3 shift the memo from trial efficacy to real-world adherence constraints.",
        sources: ["VN-01", "VN-03"],
      },
      {
        title: "Appropriate caution",
        text: "Voice Note 2 prevents the memo from making an unqualified causal claim.",
        sources: ["VN-02"],
      },
    ],
    gaps: [
      {
        kind: "gap",
        title: "Missing Evidence Type",
        text: "The target examples require study context, but no note names a trial, cohort, or follow-up period.",
        sources: ["Target examples"],
      },
      {
        kind: "conflict",
        title: "Unsupported Claim",
        text: "The notes imply adherence is the limiting factor, but do not compare its effect size against efficacy or safety.",
        sources: ["VN-01", "VN-03"],
      },
    ],
    map: [
      ["Claim", "Long-term outcomes depend on continuation and access."],
      ["Evidence", "Cost, side effects, supply, and insurance all shape adherence."],
      ["Caveat", "Discontinuation and regain need population-specific support."],
      ["Needed input", "One note summarizing actual study evidence and limitations."],
    ],
    next:
      "Record a note naming the strongest study or dataset you want to rely on, including population, follow-up period, and what it does not prove.",
    followUp: {
      id: "VN-04",
      title: "Study context follow-up",
      time: "02:19",
      role: "Evidence",
      text:
        "The evidence section should separate trial extension data from real-world adherence studies. I should avoid implying every population has the same discontinuation pattern.",
      corrections: ["extension data → trial extension data"],
    },
    resolvedScore: 74,
    resolvedSubtitle: "Evidence context added. Remaining gap: quantify adherence impact.",
    draft: [
      {
        text:
          "The memo should not frame GLP-1 outcomes as a simple question of whether the drugs work. The more useful question is whether patients can remain on therapy long enough for trial efficacy to translate into durable real-world benefit.",
        sources: ["VN-01"],
      },
      {
        text:
          "That shifts attention from pharmacology alone to adherence infrastructure: cost, side effects, supply reliability, and insurance coverage. These constraints may determine population-level impact even when clinical efficacy is strong.",
        sources: ["VN-03"],
      },
      {
        text:
          "The evidence section needs careful qualification. Claims about discontinuation and weight regain should name the population, follow-up period, and study context rather than treating the pattern as universal.",
        sources: ["VN-02", "Target examples"],
      },
    ],
  },
  strategy: {
    label: "Strategy memo",
    intent:
      "Write an internal strategy memo about whether the company should build a project-based AI workflow instead of another generic chat assistant.",
    terms: ["workflow lock-in", "project memory", "source traceability", "activation", "retention", "wedge"],
    rule:
      "Upweight business terms, user-segment language, decision framing, and evidence from customer conversations. Flag claims that need examples or metric support.",
    examples: [
      {
        title: "Decision memo",
        text: "States context, decision, options considered, recommendation, risks, and next steps.",
      },
      {
        title: "Product strategy narrative",
        text: "Uses customer pain, market contrast, product bet, and execution tradeoffs.",
      },
    ],
    notes: [
      {
        id: "VN-01",
        title: "After customer call",
        time: "02:36",
        role: "Insight",
        text:
          "The customer did not want a better chatbot. They wanted the system to remember the project, the inputs, and the target output without rebuilding context every session.",
        corrections: ["project based → project-based"],
      },
      {
        id: "VN-02",
        title: "Positioning thought",
        time: "01:52",
        role: "Claim",
        text:
          "The wedge is probably not more capable generation. It is workflow-specific memory plus traceability, because that makes the output feel safer to use.",
        corrections: ["wedges → wedge"],
      },
      {
        id: "VN-03",
        title: "Risk note",
        time: "02:09",
        role: "Risk",
        text:
          "We need to avoid sounding like every other AI workspace. The memo should say what we are deliberately not building in the first version.",
        corrections: ["AI work space → AI workspace"],
      },
    ],
    thesis:
      "The memo can recommend a narrow project-based workflow because persistent context and traceability are more valuable than generic generation for serious work.",
    readiness: 71,
    subtitle: "Strong recommendation, but option comparison is thin.",
    support: [
      {
        title: "Customer-backed need",
        text: "Voice Note 1 gives a concrete reason generic chat is insufficient.",
        sources: ["VN-01"],
      },
      {
        title: "Clear strategic wedge",
        text: "Voice Note 2 connects product differentiation to trust and reuse.",
        sources: ["VN-02"],
      },
    ],
    gaps: [
      {
        kind: "gap",
        title: "Missing Alternative",
        text: "The target memo shape requires options considered, but the notes only argue for the preferred path.",
        sources: ["Target examples"],
      },
      {
        kind: "conflict",
        title: "Unsupported Claim",
        text: "The phrase 'safer to use' needs a customer example, metric, or concrete failure mode.",
        sources: ["VN-02"],
      },
    ],
    map: [
      ["Decision", "Build a specialized project workflow rather than a generic assistant."],
      ["Evidence", "Customers want persistent context, inputs, and target outputs."],
      ["Risk", "Positioning may sound generic unless cuts are explicit."],
      ["Needed input", "A note comparing alternatives and naming why they lose."],
    ],
    next:
      "Record a note comparing three alternatives: generic chat, transcript cleanup, and project-based workflow. Say why each one wins or loses.",
    followUp: {
      id: "VN-04",
      title: "Alternatives follow-up",
      time: "02:25",
      role: "Alternative",
      text:
        "Generic chat wins on flexibility but loses on repeated setup. Transcript cleanup wins on speed but stays too close to text. The project workflow wins when the output has to be trusted and reused.",
      corrections: ["set up → setup"],
    },
    resolvedScore: 83,
    resolvedSubtitle: "Alternatives added. Remaining gap: add one measurable customer signal.",
    draft: [
      {
        text:
          "The memo should recommend a project-based AI workflow rather than another generic assistant. The customer pain is not lack of generation capability; it is the repeated work of reconstructing context, inputs, and target output each time.",
        sources: ["VN-01"],
      },
      {
        text:
          "The strategic wedge is workflow-specific memory plus source traceability. Those two properties make generated work easier to trust, review, and reuse inside serious business processes.",
        sources: ["VN-02"],
      },
      {
        text:
          "The first version should be explicit about what it is not building. It should avoid generic workspace sprawl and focus on one document workflow where persistent context creates an obvious advantage.",
        sources: ["VN-03", "Target examples"],
      },
    ],
  },
};

const suggestedExampleDocs = [
  {
    id: "research-evidence-memo",
    type: "Research memo",
    title: "Evidence synthesis memo",
    fit: "Best for analytical research memos that compare claims across sources.",
    description:
      "Moves from question to answer, separates evidence from interpretation, and closes with what would change the conclusion.",
    sections: [
      {
        heading: "Question",
        body:
          "Should the project frame algorithmic agency action as a deference problem or as a reason-giving problem?",
      },
      {
        heading: "Short answer",
        body:
          "The stronger frame is reason-giving. Deference still matters at the statutory-interpretation layer, but the practical pressure point is whether the agency can explain the model-mediated path from evidence to decision.",
      },
      {
        heading: "Evidence pattern",
        body:
          "The memo groups evidence by function: doctrinal authority, operational mechanism, counterargument, and unresolved empirical question.",
      },
      {
        heading: "What would change my mind",
        body:
          "A concrete line of cases where courts continue to resolve model-mediated agency decisions primarily through statutory interpretation rather than arbitrary-and-capricious review.",
      },
    ],
  },
  {
    id: "thesis-lit-review",
    type: "Thesis section",
    title: "Focused literature review section",
    fit: "Best when the user needs to position a thesis argument inside an existing scholarly conversation.",
    description:
      "Shows how to organize prior work by tension, not chronology, and ends by naming the gap the thesis will fill.",
    sections: [
      {
        heading: "Field setup",
        body:
          "Existing scholarship treats the problem through three lenses: institutional competence, technical explainability, and procedural legitimacy.",
      },
      {
        heading: "Tension",
        body:
          "The literature is strongest when describing technical opacity, but weaker when explaining how that opacity should change the legal standard of review.",
      },
      {
        heading: "Gap",
        body:
          "The missing move is a bridge between model interpretability and legal reason-giving. The thesis section should not collapse those concepts, but should explain how they interact.",
      },
    ],
  },
  {
    id: "thesis-argument-chapter",
    type: "Thesis chapter",
    title: "Argument chapter with counterposition",
    fit: "Best for long-form thesis writing where the core claim needs to withstand objections.",
    description:
      "Builds a chapter around claim, mechanism, authority, counterargument, and narrowed implication.",
    sections: [
      {
        heading: "Central claim",
        body:
          "Algorithmic decision systems move key legal judgment upstream into design and procurement choices, making post-hoc agency explanation harder but more important.",
      },
      {
        heading: "Mechanism",
        body:
          "The agency may not explicitly interpret a statute in the final decision; instead, the interpretation can be embedded in features, thresholds, training data, or vendor specifications.",
      },
      {
        heading: "Counterposition",
        body:
          "A court could still frame the dispute as statutory interpretation after Loper Bright. The chapter should address that position before claiming reasoned decision-making is the better frame.",
      },
    ],
  },
  {
    id: "policy-brief",
    type: "Policy brief",
    title: "Policy brief with recommendation logic",
    fit: "Best for concise recommendations where evidence, tradeoffs, and implementation risk matter.",
    description:
      "Uses a tight problem, recommendation, rationale, risks, and next steps structure.",
    sections: [
      {
        heading: "Problem",
        body:
          "Agencies increasingly rely on technical systems whose decision logic is difficult for courts, affected parties, and sometimes the agencies themselves to inspect.",
      },
      {
        heading: "Recommendation",
        body:
          "Require agencies to document model-mediated reasoning in a form that connects inputs, relevant factors, decision thresholds, and statutory objectives.",
      },
      {
        heading: "Risk",
        body:
          "Overly broad explainability mandates can create compliance theater. The brief should distinguish useful legal justification from generic technical disclosure.",
      },
    ],
  },
  {
    id: "case-analysis-memo",
    type: "Case analysis memo",
    title: "Doctrinal case analysis memo",
    fit: "Best for legal or policy research that needs case law to discipline the argument.",
    description:
      "Starts with the rule, applies authorities narrowly, then states the unresolved implication instead of overclaiming.",
    sections: [
      {
        heading: "Rule frame",
        body:
          "After Loper Bright, courts no longer defer to agency interpretations merely because a statute is ambiguous. But arbitrary-and-capricious review still asks whether the agency considered relevant factors and explained its decision.",
      },
      {
        heading: "Application",
        body:
          "For algorithmic decisions, the question is not only what the agency said the statute means, but whether the agency can justify how the system's design choices serve the statutory purpose.",
      },
      {
        heading: "Unresolved implication",
        body:
          "The memo should identify where courts are likely to demand reasoned explanation without pretending that every technical design choice is itself a legal interpretation.",
      },
    ],
  },
];

let activeDomain = "legal";
let hasFollowUp = false;
let activeTab = "coach";
let activeView = "home";
let projectStarted = false;
let flowStep = 0;
let projectIntent = scenarios.legal.intent;
let projectOutputShape = "Research memo";
let isOtherOutputShape = false;
let contextInput = "";
let uploadedContextFiles = {
  csv: [],
  markdown: [],
};
let editedDraft = null;
let draftHasUnsavedChanges = false;
let uploadedVoiceNotes = [];
let followUpVoiceNotes = [];
let followUpMergeMessage = "";
let selectedVoiceNoteIds = new Set(scenarios.legal.notes.map((note) => note.id));
let playingVoiceNoteId = "";
let activeVoiceAudio = null;
let voicePreviewTimer = null;
let exampleLinksInput = "";
let uploadedExampleFiles = [];
let selectedSuggestedExampleIds = new Set(["research-evidence-memo", "thesis-argument-chapter"]);
let activeSuggestedExampleId = "research-evidence-memo";
let isExampleDrawerOpen = false;

const els = {
  appShell: document.querySelector("#appShell"),
  homeScreen: document.querySelector("#homeScreen"),
  homeStartButton: document.querySelector("#homeStartButton"),
  topbarStartButton: document.querySelector("#topbarStartButton"),
  flowScreen: document.querySelector("#flowScreen"),
  flowStepLabel: document.querySelector("#flowStepLabel"),
  flowProgressBar: document.querySelector("#flowProgressBar"),
  flowIntent: document.querySelector("#flowIntent"),
  flowOutputShape: document.querySelector("#flowOutputShape"),
  flowOtherOutputWrap: document.querySelector("#flowOtherOutputWrap"),
  flowOtherOutput: document.querySelector("#flowOtherOutput"),
  flowVoiceNotes: document.querySelector("#flowVoiceNotes"),
  flowVoiceUpload: document.querySelector("#flowVoiceUpload"),
  flowUploadVoiceButton: document.querySelector("#flowUploadVoiceButton"),
  flowUploadStatus: document.querySelector("#flowUploadStatus"),
  flowAddVoiceButton: document.querySelector("#flowAddVoiceButton"),
  flowExamples: document.querySelector("#flowExamples"),
  flowExampleLinks: document.querySelector("#flowExampleLinks"),
  flowExampleUpload: document.querySelector("#flowExampleUpload"),
  flowUploadExampleButton: document.querySelector("#flowUploadExampleButton"),
  flowExampleUploadStatus: document.querySelector("#flowExampleUploadStatus"),
  exampleDrawer: document.querySelector("#exampleDrawer"),
  closeExampleDrawer: document.querySelector("#closeExampleDrawer"),
  exampleDrawerContent: document.querySelector("#exampleDrawerContent"),
  flowDomainSelect: document.querySelector("#flowDomainSelect"),
  flowContextInput: document.querySelector("#flowContextInput"),
  flowCsvGlossaryUpload: document.querySelector("#flowCsvGlossaryUpload"),
  flowMarkdownContextUpload: document.querySelector("#flowMarkdownContextUpload"),
  flowContextImportStatus: document.querySelector("#flowContextImportStatus"),
  flowDraftBody: document.querySelector("#flowDraftBody"),
  flowDraftTitle: document.querySelector("#flowDraftTitle"),
  flowDraftFootnotes: document.querySelector("#flowDraftFootnotes"),
  flowSaveDraftButton: document.querySelector("#flowSaveDraftButton"),
  flowGoogleDocsButton: document.querySelector("#flowGoogleDocsButton"),
  flowDocxButton: document.querySelector("#flowDocxButton"),
  flowExportStatus: document.querySelector("#flowExportStatus"),
  flowGoogleDocsHandoff: document.querySelector("#flowGoogleDocsHandoff"),
  flowScoreValue: document.querySelector("#flowScoreValue"),
  flowThesisText: document.querySelector("#flowThesisText"),
  flowSupportList: document.querySelector("#flowSupportList"),
  flowGapList: document.querySelector("#flowGapList"),
  flowFollowUpVoiceUpload: document.querySelector("#flowFollowUpVoiceUpload"),
  flowFollowUpStatus: document.querySelector("#flowFollowUpStatus"),
  flowBackButton: document.querySelector("#flowBackButton"),
  flowNextButton: document.querySelector("#flowNextButton"),
  startScreen: document.querySelector("#startScreen"),
  workspace: document.querySelector("#workspace"),
  startDomainSelect: document.querySelector("#startDomainSelect"),
  startOutputShape: document.querySelector("#startOutputShape"),
  startIntent: document.querySelector("#startIntent"),
  startTermPreview: document.querySelector("#startTermPreview"),
  startInputSummary: document.querySelector("#startInputSummary"),
  startProjectButton: document.querySelector("#startProjectButton"),
  projectIntent: document.querySelector("#projectIntent"),
  domainSelect: document.querySelector("#domainSelect"),
  outputShape: document.querySelector("#outputShape"),
  primingTerms: document.querySelector("#primingTerms"),
  primingRule: document.querySelector("#primingRule"),
  exampleList: document.querySelector("#exampleList"),
  noteList: document.querySelector("#noteList"),
  scoreValue: document.querySelector("#scoreValue"),
  readinessSubtitle: document.querySelector("#readinessSubtitle"),
  thesisText: document.querySelector("#thesisText"),
  supportList: document.querySelector("#supportList"),
  gapList: document.querySelector("#gapList"),
  nextPrompt: document.querySelector("#nextPrompt"),
  argumentMap: document.querySelector("#argumentMap"),
  draftBody: document.querySelector("#draftBody"),
  resolveGapButton: document.querySelector("#resolveGapButton"),
  openDraftButton: document.querySelector("#openDraftButton"),
  addNoteButton: document.querySelector("#addNoteButton"),
  navStartOverButton: document.querySelector("#navStartOverButton"),
  resetButton: document.querySelector("#resetButton"),
};

function sourcePill(source) {
  return `<span class="source-pill">${source}</span>`;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return entities[character];
  });
}

function parseExampleLinks(input) {
  return input
    .split(/[\n,]/)
    .map((link) => link.trim())
    .filter(Boolean)
    .filter((link, index, links) => links.findIndex((item) => item.toLowerCase() === link.toLowerCase()) === index)
    .slice(0, 8);
}

function getSuggestedExample(id) {
  return suggestedExampleDocs.find((example) => example.id === id) || suggestedExampleDocs[0];
}

function renderSuggestedExamples() {
  const selectedCount = selectedSuggestedExampleIds.size;
  return `
    <div class="suggested-example-header">
      <span>${selectedCount} selected</span>
      <em>Templates suggested by AltDoc</em>
    </div>
    ${suggestedExampleDocs
      .map((example) => {
        const isSelected = selectedSuggestedExampleIds.has(example.id);
        const isOpen = activeSuggestedExampleId === example.id && isExampleDrawerOpen;
        return `
          <button
            class="example-item suggested-example ${isSelected ? "is-selected" : ""} ${isOpen ? "is-open" : ""}"
            type="button"
            data-example-id="${example.id}"
            aria-pressed="${isSelected}"
          >
            <span class="example-select-mark" aria-hidden="true">${isSelected ? "✓" : ""}</span>
            <span class="example-copy">
              <span class="example-type">${example.type}</span>
              <strong>${example.title}</strong>
              <p>${example.description}</p>
              <small>${example.fit}</small>
            </span>
            <span class="example-preview-label">${isOpen ? "Previewing" : "Preview"}</span>
          </button>
        `;
      })
      .join("")}
  `;
}

function renderExampleDrawer() {
  const example = getSuggestedExample(activeSuggestedExampleId);
  const shouldShow = Boolean(activeView === "flow" && flowStep === 2 && isExampleDrawerOpen && example);
  els.exampleDrawer.classList.toggle("is-open", shouldShow);
  els.exampleDrawer.setAttribute("aria-hidden", shouldShow ? "false" : "true");
  if (!shouldShow) return;

  const selected = selectedSuggestedExampleIds.has(example.id);
  els.exampleDrawerContent.innerHTML = `
    <div class="drawer-eyebrow">${example.type}</div>
    <h2>${example.title}</h2>
    <p class="drawer-summary">${example.description}</p>
    <button class="secondary-action drawer-select-action ${selected ? "is-selected" : ""}" type="button" data-drawer-select="${example.id}">
      ${selected ? "Selected as reference" : "Use as reference"}
    </button>
    <div class="drawer-doc">
      ${example.sections
        .map(
          (section) => `
            <section>
              <h3>${section.heading}</h3>
              <p>${section.body}</p>
            </section>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderDomainOptions() {
  const options = Object.entries(scenarios)
    .map(([key, scenario]) => `<option value="${key}">${scenario.label}</option>`)
    .join("");
  els.domainSelect.innerHTML = options;
  els.startDomainSelect.innerHTML = options;
  els.flowDomainSelect.innerHTML = options;
}

function getScenario() {
  return scenarios[activeDomain];
}

function getNotes() {
  const scenario = getScenario();
  return hasFollowUp ? [...scenario.notes, scenario.followUp] : scenario.notes;
}

function syncFlowOtherOutput() {
  if (!els.flowOutputShape || !els.flowOtherOutputWrap) return;
  const shouldShow = els.flowOutputShape.value === "Other";
  isOtherOutputShape = shouldShow;
  els.flowOtherOutputWrap.classList.toggle("is-visible", shouldShow);
}

function resetSelectedVoiceNotes() {
  selectedVoiceNoteIds = new Set(getScenario().notes.map((note) => note.id));
  playingVoiceNoteId = "";
}

function resetSuggestedExamples() {
  selectedSuggestedExampleIds = new Set(["research-evidence-memo", "thesis-argument-chapter"]);
  activeSuggestedExampleId = "research-evidence-memo";
  isExampleDrawerOpen = false;
}

function resetContextImports() {
  uploadedContextFiles = {
    csv: [],
    markdown: [],
  };
  if (els.flowCsvGlossaryUpload) {
    els.flowCsvGlossaryUpload.value = "";
  }
  if (els.flowMarkdownContextUpload) {
    els.flowMarkdownContextUpload.value = "";
  }
}

function resetDraftEdits() {
  editedDraft = null;
  draftHasUnsavedChanges = false;
  hideGoogleDocsHandoff();
}

function resetFollowUpVoiceNotes() {
  followUpVoiceNotes = [];
  followUpMergeMessage = "";
  if (els.flowFollowUpVoiceUpload) {
    els.flowFollowUpVoiceUpload.value = "";
  }
}

function stopVoicePreview() {
  if (voicePreviewTimer) {
    window.clearTimeout(voicePreviewTimer);
    voicePreviewTimer = null;
  }
  if (activeVoiceAudio) {
    activeVoiceAudio.pause();
    activeVoiceAudio = null;
  }
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }
  playingVoiceNoteId = "";
}

function playVoicePreview(note) {
  stopVoicePreview();
  playingVoiceNoteId = note.id;
  renderFlow();
  voicePreviewTimer = window.setTimeout(() => {
    if (playingVoiceNoteId === note.id) {
      playingVoiceNoteId = "";
      voicePreviewTimer = null;
      renderFlow();
    }
  }, note.url ? 30000 : 9000);

  if (note.url) {
    activeVoiceAudio = new Audio(note.url);
    activeVoiceAudio.addEventListener("ended", () => {
      if (playingVoiceNoteId === note.id) {
        if (voicePreviewTimer) {
          window.clearTimeout(voicePreviewTimer);
          voicePreviewTimer = null;
        }
        playingVoiceNoteId = "";
        renderFlow();
      }
    });
    activeVoiceAudio.play().catch(() => {
      playingVoiceNoteId = "";
      renderFlow();
    });
    return;
  }

  if ("speechSynthesis" in window) {
    const utterance = new SpeechSynthesisUtterance(note.text);
    utterance.rate = 0.95;
    utterance.onend = () => {
      if (playingVoiceNoteId === note.id) {
        if (voicePreviewTimer) {
          window.clearTimeout(voicePreviewTimer);
          voicePreviewTimer = null;
        }
        playingVoiceNoteId = "";
        renderFlow();
      }
    };
    utterance.onerror = () => {};
    window.speechSynthesis.speak(utterance);
  }
}

function renderVoiceNoteRow(note) {
  const isSelected = selectedVoiceNoteIds.has(note.id);
  const isPlaying = playingVoiceNoteId === note.id;
  const rowClasses = ["flow-file-row", note.uploaded ? "uploaded" : "", isSelected ? "" : "is-unselected"]
    .filter(Boolean)
    .join(" ");
  return `
    <div class="${rowClasses}" data-voice-id="${note.id}">
      <label class="voice-select" aria-label="Use ${escapeHtml(note.title)}">
        <input type="checkbox" data-voice-select="${note.id}" ${isSelected ? "checked" : ""} />
      </label>
      <button class="voice-play-button ${isPlaying ? "is-playing" : ""}" type="button" data-voice-play="${note.id}" aria-label="${isPlaying ? "Stop" : "Play"} ${escapeHtml(note.title)}">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          ${isPlaying ? '<path d="M8 6h3v12H8zM13 6h3v12h-3z" />' : '<path d="M8 5v14l11-7z" />'}
        </svg>
      </button>
      <span>${note.id}</span>
      <strong>${escapeHtml(note.title)}</strong>
      <em>${note.time}</em>
    </div>
  `;
}

function getDraftTitle() {
  const fallbackTitles = {
    legal: "Algorithmic Agency Action and the Shift Toward Reason-Giving",
    medical: "Adherence as the Constraint on Long-Term GLP-1 Outcomes",
    strategy: "Why Project-Based AI Workflows Beat Generic Chat",
  };
  const intent = projectIntent.toLowerCase();
  if (intent.includes("glp") || intent.includes("medical") || intent.includes("adherence")) {
    return fallbackTitles.medical;
  }
  if (intent.includes("strategy") || intent.includes("workflow") || intent.includes("chat assistant")) {
    return fallbackTitles.strategy;
  }
  if (intent.includes("algorithmic") || intent.includes("administrative") || intent.includes("law")) {
    return fallbackTitles.legal;
  }
  return fallbackTitles[activeDomain] || `${projectOutputShape || "Draft"} from Voice Notes`;
}

function getFlowDraftDocument() {
  if (editedDraft) {
    return {
      title: editedDraft.title,
      paragraphs: editedDraft.paragraphs.map((paragraph, index) => ({
        ...paragraph,
        footnote: index + 1,
      })),
    };
  }
  const scenario = getScenario();
  return {
    title: getDraftTitle(),
    paragraphs: scenario.draft.map((paragraph, index) => ({
      ...paragraph,
      footnote: index + 1,
    })),
  };
}

function followUpTranscriptText(file, index) {
  const cleanName = file.name.replace(/\.[^.]+$/, "").replace(/[-_]+/g, " ").trim();
  const sourceLabel = cleanName || `follow-up voice note ${index + 1}`;
  const domainDrafts = {
    legal:
      "The follow-up note adds the missing counterargument: a court could still treat the dispute as statutory interpretation after Loper Bright, but the better frame is whether the agency can explain how model-mediated design choices connect evidence to legal justification.",
    medical:
      "The follow-up note adds study-context detail: the memo should separate trial-extension evidence from real-world adherence data and avoid implying that every population has the same discontinuation pattern.",
    strategy:
      "The follow-up note adds a concrete customer example: the strongest case for a project-based workflow is that users do not want to rebuild context every session before the system can produce useful work.",
  };
  return `${domainDrafts[activeDomain] || domainDrafts.legal} Source note: ${sourceLabel}.`;
}

function mergeFollowUpVoiceNotes(files) {
  const imported = [...files].map((file, index) => ({
    id: `FN-${String(followUpVoiceNotes.length + index + 1).padStart(2, "0")}`,
    name: file.name,
    kind: file.type?.startsWith("audio/") ? "Audio file" : "Transcript file",
    transcription: followUpTranscriptText(file, index),
  }));
  if (!imported.length) return;

  followUpVoiceNotes = [...followUpVoiceNotes, ...imported];
  if (els.flowFollowUpVoiceUpload) {
    els.flowFollowUpVoiceUpload.value = "";
  }
  const baseDraft = getExportDraftDocument();
  editedDraft = {
    title: baseDraft.title,
    paragraphs: [
      ...baseDraft.paragraphs.map((paragraph) => ({
        text: paragraph.text,
        sources: paragraph.sources,
      })),
      ...imported.map((note) => ({
        text: note.transcription,
        sources: [note.id, "Stub transcription"],
      })),
    ],
  };
  draftHasUnsavedChanges = false;
  flowStep = 4;
  followUpMergeMessage = `${imported.length} new voice note${imported.length === 1 ? "" : "s"} transcribed and merged into the editable draft.`;
  render();
  els.flowExportStatus.textContent = followUpMergeMessage;
  els.flowScreen.scrollIntoView({ block: "start" });
}

function collectDraftFromEditor() {
  const renderedParagraphs = [...document.querySelectorAll("[data-draft-paragraph]")];
  const current = getFlowDraftDocument();
  return {
    title: els.flowDraftTitle?.textContent.trim() || getDraftTitle(),
    paragraphs: renderedParagraphs.map((node, index) => {
      const fallback = current.paragraphs[index] || { sources: [] };
      const editor = node.querySelector(".draft-editable");
      return {
        text: editor?.textContent.trim() || fallback.text || "",
        sources: fallback.sources || [],
        footnote: index + 1,
      };
    }),
  };
}

function markDraftDirty() {
  editedDraft = collectDraftFromEditor();
  draftHasUnsavedChanges = true;
  els.flowExportStatus.textContent = "Unsaved edits. Save draft or export now to use the latest on-screen version.";
  els.flowSaveDraftButton.classList.add("is-dirty");
  hideGoogleDocsHandoff();
}

function saveDraftEdits() {
  editedDraft = collectDraftFromEditor();
  draftHasUnsavedChanges = false;
  els.flowSaveDraftButton.classList.remove("is-dirty");
  els.flowExportStatus.textContent = "Draft saved. Exports will use the latest saved inline edits.";
  hideGoogleDocsHandoff();
}

function getExportDraftDocument() {
  const hasEditor = Boolean(els.flowDraftTitle && els.flowDraftBody?.querySelector("[data-draft-paragraph]"));
  if (hasEditor) {
    editedDraft = collectDraftFromEditor();
    return editedDraft;
  }
  return getFlowDraftDocument();
}

function hideGoogleDocsHandoff() {
  if (!els.flowGoogleDocsHandoff) return;
  els.flowGoogleDocsHandoff.classList.add("is-hidden");
  els.flowGoogleDocsHandoff.innerHTML = "";
}

function renderProject() {
  const scenario = getScenario();
  els.projectIntent.value = projectIntent;
  els.domainSelect.value = activeDomain;
  els.outputShape.value = projectOutputShape;
  els.primingTerms.innerHTML = scenario.terms.map((term) => `<span class="term">${term}</span>`).join("");
  els.primingRule.textContent = scenario.rule;
  els.exampleList.innerHTML = scenario.examples
    .map(
      (example) => `
        <div class="example-item">
          <strong>${example.title}</strong>
          <p>${example.text}</p>
        </div>
      `,
    )
    .join("");
}

function renderStart() {
  const scenario = getScenario();
  els.startDomainSelect.value = activeDomain;
  els.startOutputShape.value = projectOutputShape;
  if (document.activeElement !== els.startIntent) {
    els.startIntent.value = projectIntent;
  }
  els.startTermPreview.innerHTML = scenario.terms
    .slice(0, 5)
    .map((term) => `<span class="term">${term}</span>`)
    .join("");
  els.startInputSummary.textContent = `${scenario.notes.length} voice-note transcripts, ${scenario.examples.length} target examples, and ${scenario.terms.length} domain terms will be loaded into the readiness coach.`;
}

function renderFlow() {
  const scenario = getScenario();
  const flowSteps = document.querySelectorAll(".flow-step");
  flowSteps.forEach((step, index) => {
    step.classList.toggle("is-hidden", index !== flowStep);
  });

  els.flowStepLabel.textContent = `Step ${flowStep + 1} of ${flowSteps.length}`;
  els.flowProgressBar.style.width = `${((flowStep + 1) / flowSteps.length) * 100}%`;
  els.flowBackButton.disabled = flowStep === 0;
  els.flowNextButton.textContent = flowStep === flowSteps.length - 1 ? "Back to homepage" : "Continue";

  if (document.activeElement !== els.flowIntent) {
    els.flowIntent.value = projectIntent;
  }
  els.flowOutputShape.value = isOtherOutputShape ? "Other" : projectOutputShape;
  if (isOtherOutputShape && document.activeElement !== els.flowOtherOutput) {
    els.flowOtherOutput.value = projectOutputShape;
  }
  syncFlowOtherOutput();
  els.flowDomainSelect.value = activeDomain;
  if (document.activeElement !== els.flowContextInput) {
    els.flowContextInput.value = contextInput;
  }
  const contextFileCount = uploadedContextFiles.csv.length + uploadedContextFiles.markdown.length;
  const csvLabel = `${uploadedContextFiles.csv.length} CSV glossar${uploadedContextFiles.csv.length === 1 ? "y" : "ies"}`;
  const markdownLabel = `${uploadedContextFiles.markdown.length} Markdown file${uploadedContextFiles.markdown.length === 1 ? "" : "s"}`;
  els.flowContextImportStatus.textContent = contextFileCount
    ? `${csvLabel} and ${markdownLabel} selected. AltDoc will parse these as domain context before transcription.`
    : "No context files imported yet.";
  const sampleVoiceNotes = scenario.notes.map((note) => ({
    id: note.id,
    title: note.title,
    time: note.time,
    text: note.text,
    uploaded: false,
  }));
  const allVoiceNotes = [...sampleVoiceNotes, ...uploadedVoiceNotes];
  els.flowVoiceNotes.innerHTML = allVoiceNotes.map(renderVoiceNoteRow).join("");
  const selectedCount = allVoiceNotes.filter((note) => selectedVoiceNoteIds.has(note.id)).length;
  const playbackNote = playingVoiceNoteId ? " Playback preview is running." : "";
  els.flowUploadStatus.textContent = uploadedVoiceNotes.length
    ? `${selectedCount} of ${allVoiceNotes.length} voice note${allVoiceNotes.length === 1 ? "" : "s"} selected. Uploaded files are listed locally; transcription is stubbed.${playbackNote}`
    : `${selectedCount} of ${allVoiceNotes.length} sample voice note${allVoiceNotes.length === 1 ? "" : "s"} selected. Uncheck the samples if you only want to use your own uploaded notes.${playbackNote}`;
  if (document.activeElement !== els.flowExampleLinks) {
    els.flowExampleLinks.value = exampleLinksInput;
  }
  const exampleLinks = parseExampleLinks(exampleLinksInput);
  els.flowExamples.innerHTML = [
    renderSuggestedExamples(),
    ...exampleLinks.map(
      (link, index) => `
          <div class="example-item imported">
            <strong>Linked example ${index + 1}</strong>
            <p>${escapeHtml(link)}</p>
          </div>
        `,
    ),
    ...uploadedExampleFiles.map(
      (file, index) => `
          <div class="example-item imported">
            <strong>Uploaded example ${index + 1}</strong>
            <p>${escapeHtml(file.name)}</p>
          </div>
        `,
    ),
  ].join("");
  els.flowExampleUploadStatus.textContent = uploadedExampleFiles.length
    ? `${uploadedExampleFiles.length} uploaded example file${uploadedExampleFiles.length === 1 ? "" : "s"} added as local prototype inputs. Parsing is stubbed.`
    : "Prototype note: uploaded examples are listed locally; parsing is stubbed.";
  renderExampleDrawer();
  renderFlowDraft();
  renderFlowReadiness();
}

function renderFlowDraft() {
  const draft = getFlowDraftDocument();
  els.flowDraftTitle.textContent = draft.title;
  els.flowDraftTitle.setAttribute("contenteditable", "true");
  els.flowDraftTitle.setAttribute("spellcheck", "true");
  els.flowDraftTitle.setAttribute("aria-label", "Draft title");
  els.flowDraftBody.innerHTML = draft.paragraphs
    .map(
      (paragraph) => `
        <section class="draft-paragraph viewer-paragraph" data-draft-paragraph="${paragraph.footnote}" title="Sources: ${paragraph.sources.map(escapeHtml).join(", ")}">
          <p><span class="draft-editable" contenteditable="true" spellcheck="true" data-draft-editable="${paragraph.footnote}" aria-label="Draft paragraph ${paragraph.footnote}">${escapeHtml(paragraph.text)}</span><sup>${paragraph.footnote}</sup></p>
        </section>
      `,
    )
    .join("");
  els.flowDraftFootnotes.innerHTML = `
    <strong>Source traceability</strong>
    ${draft.paragraphs
      .map(
        (paragraph) => `
          <p><sup>${paragraph.footnote}</sup> ${paragraph.sources.map(escapeHtml).join("; ")}</p>
        `,
      )
      .join("")}
  `;
  els.flowSaveDraftButton.classList.toggle("is-dirty", draftHasUnsavedChanges);
  if (!draftHasUnsavedChanges && !els.flowExportStatus.textContent.includes("saved")) {
    els.flowExportStatus.textContent = "Edit inline, then save or export. Traceability appears as footnotes in this viewer and export.";
  }
}

function renderFlowReadiness() {
  const scenario = getScenario();
  els.flowScoreValue.textContent = scenario.readiness;
  els.flowThesisText.textContent = scenario.thesis;
  els.flowSupportList.innerHTML = scenario.support
    .map(
      (item) => `
        <article class="issue-card">
          <strong>${item.title}</strong>
          <p>${item.text}</p>
          <div class="source-row">${item.sources.map(sourcePill).join("")}</div>
        </article>
      `,
    )
    .join("");
  els.flowGapList.innerHTML = scenario.gaps
    .map(
      (item) => `
        <article class="issue-card" data-kind="${item.kind}">
          <strong>${item.title}</strong>
          <p>${item.text}</p>
          <div class="source-row">${item.sources.map(sourcePill).join("")}</div>
        </article>
      `,
    )
    .join("");
  els.flowFollowUpStatus.textContent = followUpVoiceNotes.length
    ? `${followUpVoiceNotes.length} follow-up voice note${followUpVoiceNotes.length === 1 ? "" : "s"} merged into the draft.`
    : "No new voice notes imported yet.";
}

function escapeXml(value) {
  return String(value).replace(/[<>&"']/g, (character) => {
    const entities = {
      "<": "&lt;",
      ">": "&gt;",
      "&": "&amp;",
      '"': "&quot;",
      "'": "&apos;",
    };
    return entities[character];
  });
}

function draftExportText() {
  const draft = getExportDraftDocument();
  const body = draft.paragraphs
    .map((paragraph) => `${paragraph.text} [${paragraph.footnote}]`)
    .join("\n\n");
  const footnotes = draft.paragraphs
    .map((paragraph) => `[${paragraph.footnote}] ${paragraph.sources.join("; ")}`)
    .join("\n");
  return `${draft.title}\n\n${body}\n\nSource traceability\n${footnotes}`;
}

function draftExportHtml() {
  const draft = getExportDraftDocument();
  const paragraphs = draft.paragraphs
    .map(
      (paragraph) => `
        <p>${escapeHtml(paragraph.text)} <sup>${paragraph.footnote}</sup></p>
      `,
    )
    .join("");
  const footnotes = draft.paragraphs
    .map(
      (paragraph) => `
        <p><sup>${paragraph.footnote}</sup> ${paragraph.sources.map(escapeHtml).join("; ")}</p>
      `,
    )
    .join("");
  return `
    <article>
      <h1>${escapeHtml(draft.title)}</h1>
      ${paragraphs}
      <h2>Source traceability</h2>
      ${footnotes}
    </article>
  `;
}

function legacyCopyText(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  textarea.style.top = "0";
  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();
  const didCopy = document.execCommand("copy");
  textarea.remove();
  return didCopy;
}

function legacyCopyDraftHtml(html, text) {
  const container = document.createElement("div");
  container.setAttribute("contenteditable", "true");
  container.style.position = "fixed";
  container.style.left = "-9999px";
  container.style.top = "0";
  container.innerHTML = html;
  document.body.appendChild(container);

  const selection = window.getSelection();
  const range = document.createRange();
  range.selectNodeContents(container);
  selection.removeAllRanges();
  selection.addRange(range);

  let didCopy = false;
  try {
    didCopy = document.execCommand("copy");
  } catch {
    didCopy = false;
  }
  selection.removeAllRanges();
  container.remove();

  return didCopy || legacyCopyText(text);
}

function copyDraftForGoogleDocs() {
  const html = draftExportHtml();
  const text = draftExportText();

  if (legacyCopyDraftHtml(html, text)) {
    return "rich";
  }

  if (navigator.clipboard?.write && window.ClipboardItem) {
    return navigator.clipboard.write([
      new ClipboardItem({
        "text/html": new Blob([html], { type: "text/html" }),
        "text/plain": new Blob([text], { type: "text/plain" }),
      }),
    ]).then(() => "rich");
  }

  if (navigator.clipboard?.writeText) {
    return navigator.clipboard.writeText(text).then(() => "plain");
  }

  throw new Error("Clipboard export is unavailable");
}

function paragraphXml(text, style = "") {
  const styleXml = style ? `<w:pPr><w:pStyle w:val="${style}"/></w:pPr>` : "";
  return `<w:p>${styleXml}<w:r><w:t xml:space="preserve">${escapeXml(text)}</w:t></w:r></w:p>`;
}

function draftDocxDocumentXml() {
  const draft = getExportDraftDocument();
  const paragraphs = draft.paragraphs
    .map((paragraph) => paragraphXml(`${paragraph.text} [${paragraph.footnote}]`))
    .join("");
  const footnotes = draft.paragraphs
    .map((paragraph) => paragraphXml(`[${paragraph.footnote}] ${paragraph.sources.join("; ")}`))
    .join("");
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
  <w:body>
    ${paragraphXml(draft.title, "Title")}
    ${paragraphs}
    ${paragraphXml("Source traceability", "Heading1")}
    ${footnotes}
    <w:sectPr>
      <w:pgSz w:w="12240" w:h="15840"/>
      <w:pgMar w:top="1440" w:right="1440" w:bottom="1440" w:left="1440"/>
    </w:sectPr>
  </w:body>
</w:document>`;
}

function draftDocxStylesXml() {
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
  <w:style w:type="paragraph" w:default="1" w:styleId="Normal">
    <w:name w:val="Normal"/>
    <w:rPr><w:rFonts w:ascii="Arial" w:hAnsi="Arial"/><w:sz w:val="22"/></w:rPr>
    <w:pPr><w:spacing w:after="160" w:line="276" w:lineRule="auto"/></w:pPr>
  </w:style>
  <w:style w:type="paragraph" w:styleId="Title">
    <w:name w:val="Title"/>
    <w:basedOn w:val="Normal"/>
    <w:rPr><w:rFonts w:ascii="Arial" w:hAnsi="Arial"/><w:sz w:val="36"/><w:b/></w:rPr>
    <w:pPr><w:spacing w:after="220"/></w:pPr>
  </w:style>
  <w:style w:type="paragraph" w:styleId="Heading1">
    <w:name w:val="heading 1"/>
    <w:basedOn w:val="Normal"/>
    <w:rPr><w:rFonts w:ascii="Arial" w:hAnsi="Arial"/><w:sz w:val="26"/><w:b/></w:rPr>
    <w:pPr><w:spacing w:before="260" w:after="120"/></w:pPr>
  </w:style>
</w:styles>`;
}

function makeCrcTable() {
  const table = [];
  for (let n = 0; n < 256; n += 1) {
    let c = n;
    for (let k = 0; k < 8; k += 1) {
      c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    }
    table[n] = c >>> 0;
  }
  return table;
}

const crcTable = makeCrcTable();

function crc32(bytes) {
  let crc = 0xffffffff;
  bytes.forEach((byte) => {
    crc = crcTable[(crc ^ byte) & 0xff] ^ (crc >>> 8);
  });
  return (crc ^ 0xffffffff) >>> 0;
}

function writeUint16(value) {
  const bytes = new Uint8Array(2);
  new DataView(bytes.buffer).setUint16(0, value, true);
  return bytes;
}

function writeUint32(value) {
  const bytes = new Uint8Array(4);
  new DataView(bytes.buffer).setUint32(0, value, true);
  return bytes;
}

function concatBytes(parts) {
  const length = parts.reduce((sum, part) => sum + part.length, 0);
  const output = new Uint8Array(length);
  let offset = 0;
  parts.forEach((part) => {
    output.set(part, offset);
    offset += part.length;
  });
  return output;
}

function makeZip(files) {
  const encoder = new TextEncoder();
  const localParts = [];
  const centralParts = [];
  let offset = 0;

  files.forEach((file) => {
    const nameBytes = encoder.encode(file.name);
    const dataBytes = encoder.encode(file.content);
    const crc = crc32(dataBytes);
    const localHeader = concatBytes([
      writeUint32(0x04034b50),
      writeUint16(20),
      writeUint16(0),
      writeUint16(0),
      writeUint16(0),
      writeUint16(0),
      writeUint32(crc),
      writeUint32(dataBytes.length),
      writeUint32(dataBytes.length),
      writeUint16(nameBytes.length),
      writeUint16(0),
      nameBytes,
    ]);
    localParts.push(localHeader, dataBytes);
    centralParts.push(
      concatBytes([
        writeUint32(0x02014b50),
        writeUint16(20),
        writeUint16(20),
        writeUint16(0),
        writeUint16(0),
        writeUint16(0),
        writeUint16(0),
        writeUint32(crc),
        writeUint32(dataBytes.length),
        writeUint32(dataBytes.length),
        writeUint16(nameBytes.length),
        writeUint16(0),
        writeUint16(0),
        writeUint16(0),
        writeUint16(0),
        writeUint32(0),
        writeUint32(offset),
        nameBytes,
      ]),
    );
    offset += localHeader.length + dataBytes.length;
  });

  const centralDirectory = concatBytes(centralParts);
  const end = concatBytes([
    writeUint32(0x06054b50),
    writeUint16(0),
    writeUint16(0),
    writeUint16(files.length),
    writeUint16(files.length),
    writeUint32(centralDirectory.length),
    writeUint32(offset),
    writeUint16(0),
  ]);

  return concatBytes([...localParts, centralDirectory, end]);
}

function createDocxBlob() {
  const files = [
    {
      name: "[Content_Types].xml",
      content: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>
  <Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/>
</Types>`,
    },
    {
      name: "_rels/.rels",
      content: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>
</Relationships>`,
    },
    {
      name: "word/_rels/document.xml.rels",
      content: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"/>`,
    },
    {
      name: "word/document.xml",
      content: draftDocxDocumentXml(),
    },
    {
      name: "word/styles.xml",
      content: draftDocxStylesXml(),
    },
  ];
  const zipBytes = makeZip(files);
  return new Blob([zipBytes], {
    type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  });
}

window.__AltDocDraftExports = {
  createDocxBlob,
  draftExportText,
  getDraftTitle,
};

function draftFileName() {
  const slug = getExportDraftDocument()
    .title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 80);
  return `${slug || "altdoc-draft"}.docx`;
}

function triggerDraftDocxDownload() {
  editedDraft = getExportDraftDocument();
  draftHasUnsavedChanges = false;
  const blob = createDocxBlob();
  const url = URL.createObjectURL(blob);
  const filename = draftFileName();
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  return filename;
}

function downloadDraftDocx() {
  triggerDraftDocxDownload();
  els.flowExportStatus.textContent = "Downloaded .docx with draft title, body, and source-traceability footnotes.";
  hideGoogleDocsHandoff();
  els.flowSaveDraftButton.classList.remove("is-dirty");
}

async function exportDraftToGoogleDocs() {
  editedDraft = getExportDraftDocument();
  draftHasUnsavedChanges = false;
  const filename = triggerDraftDocxDownload();

  try {
    const copyResult = copyDraftForGoogleDocs();
    const copyMode = typeof copyResult === "string" ? copyResult : await copyResult;
    const pasteShortcut = navigator.platform.toLowerCase().includes("mac") ? "Cmd+V" : "Ctrl+V";
    const formatLabel = copyMode === "rich" ? "with draft title, paragraphs, and traceability footnotes" : "as plain text";
    els.flowExportStatus.textContent = `Google Docs import file downloaded as ${filename}. Draft also copied ${formatLabel}.`;
    els.flowGoogleDocsHandoff.innerHTML = `
      <strong>Google Docs import ready</strong>
      <p>The latest on-screen draft was downloaded as <strong>${escapeHtml(filename)}</strong>. Open Google Docs, upload that .docx, and the document will contain the draft text plus source-traceability footnotes.</p>
      <p>For a blank Google Doc workflow, the same draft is copied ${formatLabel}; paste with ${pasteShortcut}.</p>
      <a class="secondary-action" href="https://docs.google.com/document/u/0/" target="_blank" rel="noopener noreferrer">Open Google Docs</a>
    `;
    els.flowGoogleDocsHandoff.classList.remove("is-hidden");
  } catch (error) {
    console.warn(error);
    els.flowExportStatus.textContent = `Google Docs import file downloaded as ${filename}. Clipboard copy was blocked, but the .docx includes the latest draft and traceability footnotes.`;
    els.flowGoogleDocsHandoff.innerHTML = `
      <strong>Google Docs import ready</strong>
      <p>The latest on-screen draft was downloaded as <strong>${escapeHtml(filename)}</strong>. Open Google Docs, upload that .docx, and the document will contain the draft text plus source-traceability footnotes.</p>
      <a class="secondary-action" href="https://docs.google.com/document/u/0/" target="_blank" rel="noopener noreferrer">Open Google Docs</a>
    `;
    els.flowGoogleDocsHandoff.classList.remove("is-hidden");
  }
  els.flowSaveDraftButton.classList.remove("is-dirty");
}

function renderNotes() {
  els.noteList.innerHTML = getNotes()
    .map(
      (note) => `
        <article class="note-card">
          <div class="note-topline">
            <div>
              <div class="note-title">${note.id} · ${note.title}</div>
              <div class="note-meta">
                <span class="source-pill">${note.time}</span>
                <span class="role-pill">${note.role}</span>
              </div>
            </div>
          </div>
          <p>${note.text}</p>
          <div class="corrections">
            ${note.corrections.map((item) => `<span class="correction-pill">${item}</span>`).join("")}
          </div>
        </article>
      `,
    )
    .join("");
}

function renderReadiness() {
  const scenario = getScenario();
  els.scoreValue.textContent = hasFollowUp ? scenario.resolvedScore : scenario.readiness;
  els.readinessSubtitle.textContent = hasFollowUp ? scenario.resolvedSubtitle : scenario.subtitle;
  els.thesisText.textContent = scenario.thesis;

  els.supportList.innerHTML = scenario.support
    .map(
      (item) => `
        <article class="issue-card">
          <strong>${item.title}</strong>
          <p>${item.text}</p>
          <div class="source-row">${item.sources.map(sourcePill).join("")}</div>
        </article>
      `,
    )
    .join("");

  const gaps = hasFollowUp ? scenario.gaps.slice(1) : scenario.gaps;
  els.gapList.innerHTML = gaps
    .map(
      (item) => `
        <article class="issue-card" data-kind="${item.kind}">
          <strong>${item.title}</strong>
          <p>${item.text}</p>
          <div class="source-row">${item.sources.map(sourcePill).join("")}</div>
        </article>
      `,
    )
    .join("");

  els.nextPrompt.textContent = hasFollowUp
    ? "Now record one concrete source or example that would let the draft support its most specific claim."
    : scenario.next;
  els.resolveGapButton.textContent = hasFollowUp ? "Follow-up note added" : "Simulate follow-up note";
  els.resolveGapButton.disabled = hasFollowUp;
  els.addNoteButton.disabled = hasFollowUp;
}

function renderMap() {
  const scenario = getScenario();
  const rows = hasFollowUp ? [...scenario.map, ["New note", scenario.followUp.text]] : scenario.map;
  els.argumentMap.innerHTML = rows
    .map(
      ([label, text]) => `
        <article class="map-card">
          <span>${label}</span>
          <p>${text}</p>
        </article>
      `,
    )
    .join("");
}

function renderDraft() {
  const scenario = getScenario();
  const draft = hasFollowUp
    ? [
        ...scenario.draft,
        {
          text: scenario.followUp.text,
          sources: [scenario.followUp.id, "AI inference"],
        },
      ]
    : scenario.draft;

  els.draftBody.innerHTML = draft
    .map(
      (paragraph) => `
        <section class="draft-paragraph">
          <p>${paragraph.text}</p>
          <div class="source-row">${paragraph.sources.map(sourcePill).join("")}</div>
        </section>
      `,
    )
    .join("");
}

function renderTabs() {
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.classList.toggle("is-active", tab.dataset.tab === activeTab);
  });
  document.querySelector("#coachTab").classList.toggle("is-hidden", activeTab !== "coach");
  document.querySelector("#mapTab").classList.toggle("is-hidden", activeTab !== "map");
  document.querySelector("#draftTab").classList.toggle("is-hidden", activeTab !== "draft");
}

function render() {
  els.appShell.classList.toggle("view-home", activeView === "home");
  els.appShell.classList.toggle("view-start", activeView === "start");
  els.appShell.classList.toggle("view-workspace", activeView === "workspace");
  els.appShell.classList.toggle("view-flow", activeView === "flow");
  els.homeScreen.classList.toggle("is-hidden", activeView !== "home");
  els.flowScreen.classList.toggle("is-hidden", activeView !== "flow");
  els.startScreen.classList.toggle("is-hidden", activeView !== "start");
  els.workspace.classList.toggle("is-hidden", activeView !== "workspace");
  renderFlow();
  renderStart();
  renderProject();
  renderNotes();
  renderReadiness();
  renderMap();
  renderDraft();
  renderTabs();
}

function selectDomain(domain) {
  stopVoicePreview();
  activeDomain = domain;
  hasFollowUp = false;
  activeTab = "coach";
  projectIntent = scenarios[domain].intent;
  isOtherOutputShape = false;
  resetDraftEdits();
  resetFollowUpVoiceNotes();
  resetSelectedVoiceNotes();
  render();
}

renderDomainOptions();
render();
setInterval(syncFlowOtherOutput, 150);

els.domainSelect.addEventListener("change", (event) => selectDomain(event.target.value));
els.startDomainSelect.addEventListener("change", (event) => selectDomain(event.target.value));
els.flowDomainSelect.addEventListener("change", (event) => selectDomain(event.target.value));
els.startOutputShape.addEventListener("change", (event) => {
  isOtherOutputShape = false;
  projectOutputShape = event.target.value;
  render();
});
els.flowOutputShape.addEventListener("change", (event) => {
  if (event.target.value === "Other") {
    isOtherOutputShape = true;
    projectOutputShape = els.flowOtherOutput.value.trim() || "";
    els.flowOtherOutput.focus();
  } else {
    isOtherOutputShape = false;
    projectOutputShape = event.target.value;
  }
  syncFlowOtherOutput();
  render();
});
els.flowOtherOutput.addEventListener("input", (event) => {
  isOtherOutputShape = true;
  projectOutputShape = event.target.value.trim();
  syncFlowOtherOutput();
});
els.startIntent.addEventListener("input", (event) => {
  projectIntent = event.target.value;
});
els.flowIntent.addEventListener("input", (event) => {
  projectIntent = event.target.value;
});
els.flowContextInput.addEventListener("input", (event) => {
  contextInput = event.target.value;
  renderFlow();
});
els.flowCsvGlossaryUpload.addEventListener("change", (event) => {
  uploadedContextFiles.csv = [...event.target.files].map((file) => ({
    name: file.name,
  }));
  renderFlow();
});
els.flowMarkdownContextUpload.addEventListener("change", (event) => {
  uploadedContextFiles.markdown = [...event.target.files].map((file) => ({
    name: file.name,
  }));
  renderFlow();
});
els.flowSaveDraftButton.addEventListener("click", saveDraftEdits);
els.flowDraftTitle.addEventListener("input", markDraftDirty);
els.flowDraftBody.addEventListener("input", (event) => {
  if (event.target.closest(".draft-editable")) {
    markDraftDirty();
  }
});
els.flowFollowUpVoiceUpload.addEventListener("change", (event) => {
  mergeFollowUpVoiceNotes(event.target.files);
});
els.flowDocxButton.addEventListener("click", downloadDraftDocx);
els.flowGoogleDocsButton.addEventListener("click", exportDraftToGoogleDocs);
els.flowUploadVoiceButton.addEventListener("click", () => {
  els.flowVoiceUpload.click();
});
els.flowVoiceNotes.addEventListener("change", (event) => {
  const checkbox = event.target.closest("[data-voice-select]");
  if (!checkbox) return;
  const voiceId = checkbox.dataset.voiceSelect;
  if (checkbox.checked) {
    selectedVoiceNoteIds.add(voiceId);
  } else {
    selectedVoiceNoteIds.delete(voiceId);
  }
  renderFlow();
});
els.flowVoiceNotes.addEventListener("click", (event) => {
  const playButton = event.target.closest("[data-voice-play]");
  if (!playButton) return;
  const voiceId = playButton.dataset.voicePlay;
  if (playingVoiceNoteId === voiceId) {
    stopVoicePreview();
    renderFlow();
    return;
  }
  const sampleNote = getScenario().notes.find((note) => note.id === voiceId);
  const uploadedNote = uploadedVoiceNotes.find((note) => note.id === voiceId);
  const note = sampleNote
    ? { id: sampleNote.id, title: sampleNote.title, text: sampleNote.text }
    : uploadedNote;
  if (note) {
    playVoicePreview(note);
  }
});
els.flowVoiceUpload.addEventListener("change", (event) => {
  stopVoicePreview();
  uploadedVoiceNotes.forEach((file) => {
    if (file.url) URL.revokeObjectURL(file.url);
  });
  uploadedVoiceNotes = [...event.target.files].map((file, index) => {
    const id = `UP-${String(index + 1).padStart(2, "0")}`;
    const isAudio = file.type?.startsWith("audio/");
    selectedVoiceNoteIds.add(id);
    return {
      id,
      title: file.name,
      time: isAudio ? "Audio file" : "Transcript file",
      text: `Uploaded file ${file.name} will be transcribed in the real product.`,
      url: isAudio ? URL.createObjectURL(file) : "",
      uploaded: true,
    };
  });
  renderFlow();
});
els.flowExampleLinks.addEventListener("input", (event) => {
  exampleLinksInput = event.target.value;
  renderFlow();
});
els.flowExampleUpload.addEventListener("change", (event) => {
  uploadedExampleFiles = [...event.target.files].map((file) => ({
    name: file.name,
  }));
  renderFlow();
});
els.flowExamples.addEventListener("click", (event) => {
  const exampleButton = event.target.closest("[data-example-id]");
  if (!exampleButton) return;
  const exampleId = exampleButton.dataset.exampleId;
  if (selectedSuggestedExampleIds.has(exampleId)) {
    selectedSuggestedExampleIds.delete(exampleId);
  } else {
    selectedSuggestedExampleIds.add(exampleId);
  }
  activeSuggestedExampleId = exampleId;
  isExampleDrawerOpen = true;
  renderFlow();
});
els.closeExampleDrawer.addEventListener("click", () => {
  isExampleDrawerOpen = false;
  renderExampleDrawer();
});
els.exampleDrawer.addEventListener("click", (event) => {
  if (event.target === els.exampleDrawer) {
    isExampleDrawerOpen = false;
    renderExampleDrawer();
  }
});
els.exampleDrawerContent.addEventListener("click", (event) => {
  const selectButton = event.target.closest("[data-drawer-select]");
  if (!selectButton) return;
  const exampleId = selectButton.dataset.drawerSelect;
  if (selectedSuggestedExampleIds.has(exampleId)) {
    selectedSuggestedExampleIds.delete(exampleId);
  } else {
    selectedSuggestedExampleIds.add(exampleId);
  }
  renderFlow();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && isExampleDrawerOpen) {
    isExampleDrawerOpen = false;
    renderExampleDrawer();
  }
});
els.projectIntent.addEventListener("input", (event) => {
  projectIntent = event.target.value;
});
els.outputShape.addEventListener("change", (event) => {
  isOtherOutputShape = false;
  projectOutputShape = event.target.value;
  els.startOutputShape.value = projectOutputShape;
});

els.startProjectButton.addEventListener("click", () => {
  projectStarted = true;
  activeView = "workspace";
  activeTab = "coach";
  hasFollowUp = false;
  render();
  els.workspace.scrollIntoView({ block: "start" });
});

function showStartProject() {
  stopVoicePreview();
  activeView = "flow";
  projectStarted = false;
  hasFollowUp = false;
  activeTab = "coach";
  flowStep = 0;
  contextInput = "";
  resetContextImports();
  resetDraftEdits();
  resetFollowUpVoiceNotes();
  uploadedVoiceNotes = [];
  exampleLinksInput = "";
  uploadedExampleFiles = [];
  resetSelectedVoiceNotes();
  resetSuggestedExamples();
  render();
  els.flowScreen.scrollIntoView({ block: "start" });
}

els.homeStartButton.addEventListener("click", showStartProject);
els.topbarStartButton.addEventListener("click", showStartProject);

els.flowBackButton.addEventListener("click", () => {
  flowStep = Math.max(0, flowStep - 1);
  if (flowStep !== 2) {
    isExampleDrawerOpen = false;
  }
  if (flowStep !== 1) {
    stopVoicePreview();
  }
  render();
});

els.flowNextButton.addEventListener("click", () => {
  const totalSteps = document.querySelectorAll(".flow-step").length;
  if (flowStep === totalSteps - 1) {
    activeView = "home";
    flowStep = 0;
  } else {
    flowStep += 1;
  }
  if (flowStep !== 2) {
    isExampleDrawerOpen = false;
  }
  if (flowStep !== 1) {
    stopVoicePreview();
  }
  render();
});

els.flowAddVoiceButton.addEventListener("click", () => {
  flowStep = 2;
  render();
});

els.resolveGapButton.addEventListener("click", () => {
  hasFollowUp = true;
  render();
});

els.addNoteButton.addEventListener("click", () => {
  hasFollowUp = true;
  render();
});

els.openDraftButton.addEventListener("click", () => {
  activeTab = "draft";
  renderTabs();
});

els.resetButton.addEventListener("click", () => {
  stopVoicePreview();
  activeView = "home";
  projectStarted = false;
  hasFollowUp = false;
  flowStep = 0;
  activeDomain = "legal";
  activeTab = "coach";
  projectIntent = scenarios.legal.intent;
  projectOutputShape = "Research memo";
  isOtherOutputShape = false;
  contextInput = "";
  resetContextImports();
  resetDraftEdits();
  resetFollowUpVoiceNotes();
  uploadedVoiceNotes = [];
  exampleLinksInput = "";
  uploadedExampleFiles = [];
  resetSelectedVoiceNotes();
  resetSuggestedExamples();
  render();
});

els.navStartOverButton.addEventListener("click", () => {
  stopVoicePreview();
  activeView = "flow";
  projectStarted = false;
  hasFollowUp = false;
  activeTab = "coach";
  flowStep = 0;
  isOtherOutputShape = false;
  contextInput = "";
  resetContextImports();
  resetDraftEdits();
  resetFollowUpVoiceNotes();
  uploadedVoiceNotes = [];
  exampleLinksInput = "";
  uploadedExampleFiles = [];
  resetSelectedVoiceNotes();
  resetSuggestedExamples();
  render();
  els.flowScreen.scrollIntoView({ block: "start" });
});

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    activeTab = tab.dataset.tab;
    renderTabs();
  });
});
