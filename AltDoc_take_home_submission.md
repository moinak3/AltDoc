# AltDoc Take-Home Submission

## Prototype Link

Local prototype: http://192.168.4.95:4173

Source files: `/Users/moinakbandyopadhyay/Documents/ListenLabs`

Note: the local prototype URL works only on the same network while the local server is running. For the final interview submission, I would replace this with a deployed URL or GitHub repository link.

## Prototype Summary

AltDoc is a domain-primed, voice-first writing workspace for people working on serious long-form documents. The prototype focuses on one core loop: start a project with context, import voice notes, define what a strong document should look like, optionally add domain context, then review a traceable draft and an argument-readiness report.

The product thesis is that long-form writing from voice notes is not mainly a transcription problem. It is a context, structure, and readiness problem. People often speak their best early thoughts before the argument is ready to be written. AltDoc helps them understand what their notes support, what is still missing, and what they should think through next.

What is real in the prototype: the end-to-end product flow, project setup, local file pickers, multiple example links, domain-context input, traceable draft UI, readiness UI, and the interaction model.

What is stubbed: speech-to-text, domain-biased transcription, parsing uploaded files, AI-generated readiness analysis, contradiction detection, and draft generation. The prototype uses sample notes and prewritten outputs to demonstrate the intended product behavior.

## Who Are You Building For?

I am building AltDoc for people who produce serious long-form writing and use voice notes as a way to think out loud over time. The initial audience is graduate researchers, policy analysts, research analysts, consultants, and operators or founders writing strategy memos. These users create thesis sections, policy briefs, research memos, analytical essays, client reports, and internal strategy narratives where accuracy, coherence, and support matter.

This is not built for people using voice as simple dictation. The target user is not saying a finished paragraph into a microphone. They are walking through half-formed ideas, reacting to readings, capturing objections after a meeting, talking through a structure, or recording a thought before it disappears. Their notes are nonlinear and domain-specific. They include shorthand, names, concepts, contradictions, repeated points, and references that only make sense inside the broader project.

I would start with one high-value segment: graduate researchers and analytical knowledge workers producing argument-heavy documents. They have a painful gap between raw notes and finished writing, and they care about whether claims are supported. They also need trust: when the system turns spoken thinking into draft prose, they need to know which source note supported each claim and where the system is inferring beyond the user’s material.

## What's The Most Important Thing To Get Right?

The most important thing to get right is not polished prose. It is argument readiness with trust. AI writing tools can make weak thinking sound complete. For this use case, that is dangerous because the user is trying to produce a document that can withstand scrutiny. AltDoc should help the user see whether their current notes actually support a strong argument before it drafts too much.

The most important product moment is: "Your notes support this emerging thesis, but the counterargument section is underdeveloped. Record one more note answering this specific question before generating a full draft." That is the difference between a generic writing assistant and a serious long-form writing workspace. The tool should identify supported claims, unsupported leaps, contradictions, missing evidence, unclear terms, and useful follow-up prompts.

Domain priming is the surface where this should feel magical. If the user is working on administrative law, the system should upweight terms like "Loper Bright," "Chevron deference," "arbitrary and capricious," and "reasoned decision-making." If the user is working on medicine, it should recognize relevant drug names, conditions, trial terminology, and abbreviations. This context should improve transcription, interpretation, and readiness analysis.

Traceability is the trust layer. Every draft paragraph, claim, objection, and recommendation should link back to the source voice note, project context, target example, or explicit AI inference that produced it. The user should never have to wonder whether a strong-sounding point came from their own notes or from the model filling a gap.

## What Would This Look Like With 5 Engineers And 3 Months?

With five engineers and three months, I would build a real project-based writing workspace around the readiness loop, not a broad writing suite. The goal would be to make one workflow work extremely well: create a writing project, add domain context and examples, capture or upload voice notes, see the evolving argument map, record targeted follow-up notes, and generate a traceable draft once the material is ready.

The first workstream would be real capture and transcription. Users could record in-browser or upload audio files. The transcription system would use project intent, domain selection, glossary terms, and user corrections to bias recognition toward the right vocabulary. Corrections would become part of the project memory, so the system gets better at the user’s domain over time.

The second workstream would be project intelligence. Each note would be parsed into claims, evidence, examples, objections, open questions, and unresolved contradictions. The product would maintain an evolving argument map across notes rather than treating each note as a separate prompt. This is where the Argument Readiness Coach would live: it would show what is well supported, what is missing, what conflicts, and what the user should record next.

The third workstream would be target-example learning and traceable drafting. Users could upload or link two or three examples of strong writing. The system would infer structure, tone, section patterns, evidence style, and paragraph roles from those examples. Drafts would then be generated with source links attached to each paragraph and clear labels for unsupported claims, inferred transitions, and citation-needed areas.

By the end of three months, I would want a private beta for one or two initial domains, likely legal/policy writing and strategy/research memos. I would not try to support every writing format or every domain. The product would be judged by whether users trust the readiness report, whether follow-up prompts improve the final document, and whether traceability makes AI-generated writing feel inspectable rather than opaque.

## What I Cut And Why

I cut real speech-to-text from the prototype because the assignment is about product judgment, not proving that an audio API can be wired up. The important question is whether domain-primed transcription and readiness analysis create a differentiated workflow.

I cut a full document editor because it would pull the prototype toward generic writing-tool territory. The core insight lives before the editor: helping the user understand whether their notes are ready to become a strong document.

I cut Google Docs, Notion, PDF, and publishing integrations from the prototype. Those are useful workflow endpoints, but they are not the wedge. Export is only valuable after the readiness loop and traceable draft are worth exporting.

I cut voice cloning and listen mode because they are interesting but secondary. They could be valuable later for author-style playback or publishing, but they do not help the user solve the hardest problem: turning scattered spoken thinking into a coherent, supported argument.

I cut broad domain support. The prototype demonstrates the pattern with a legal/policy example because domain specificity is the point. A better next step is to make one or two domains feel deeply correct before claiming the product works everywhere.
