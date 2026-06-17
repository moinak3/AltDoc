# Written Answers

## Who are you building for?

I am building for people working on serious long-form documents whose thinking develops through spoken notes over time. The initial audience is graduate researchers, research analysts, policy analysts, consultants, and operators writing argument-heavy documents like thesis sections, research memos, policy briefs, strategy narratives, or analytical essays.

These users are not using voice as pure dictation. They are thinking out loud: reacting to readings, talking through an argument after a meeting, capturing a connection while walking, or recording an unresolved question before they lose it. Their voice notes are valuable but messy. They contain shorthand, repeated ideas, contradictions, domain-specific terms, and references that only make sense inside the broader project.

The unmet need is that existing tools either transcribe speech, clean up phrasing, or generate prose from a prompt. They do not act like a persistent writing workspace with a specific outcome in mind. This tool is for someone who knows what they are trying to write, has examples of what good looks like, and needs help turning scattered spoken thinking into a coherent, traceable, long-form draft.

## What's the most important thing to get right?

The most important thing to get right is argument readiness. The tool should not jump straight from messy voice notes to polished prose, because polished prose can hide weak thinking. For long-form writing, the valuable step is diagnosing the state of the argument before drafting.

Domain priming is the first place this needs to feel magical. If the user is working on a legal, medical, technical, or policy document, the system should use the project context and glossary to bias transcription and interpretation toward the right terms and concepts. It should understand that "low per bright" probably means "Loper Bright" in an administrative-law project, or that "geo pee one" probably means "GLP-1" in a medical research memo.

Traceability is the trust layer. If the tool generates a recommendation or draft paragraph, the user should be able to see which voice note supported it. The product should make clear what came from the user, what was inferred, what was shaped by target examples, and what still needs more input.

## What would this look like if you had a team of 5 engineers and 3 months?

With five engineers and three months, I would build a real project-based writing workspace around the readiness loop. Users would create a writing project by defining the intent, audience, domain, target output, and project glossary. They could add examples of strong writing so the system understands the desired structure, tone, evidence style, and paragraph roles.

The product would support real audio recording and upload, then use the project glossary and domain context to improve transcription. The system would extract claims, concepts, evidence, objections, open questions, and contradictions from each note, then maintain an evolving argument map across the project.

The main product surface would be an Argument Readiness dashboard. It would show which parts of the document are well supported, which claims are weak, where notes contradict each other, and what follow-up voice notes the user should record next. Once the material is ready, the tool would generate a traceable draft where each paragraph links back to the source notes that support it.

I would add Google Docs, Markdown, PDF, and Notion export after the core readiness loop works, but I would not make integrations the center. The product first needs to prove that it can help someone move from scattered spoken thinking to a complete, defensible long-form document.
