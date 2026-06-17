# AltDoc

A lightweight prototype for a take-home assignment: a domain-primed, voice-first writing workspace for serious long-form documents.

The prototype focuses on one core product idea: an **Argument Readiness Coach**. It does not try to be a recorder, transcription engine, full document editor, or publishing tool.

## What is real

- SaaS-style homepage explaining what the app does, who it is for, and a 3-step workflow with product screenshot-style previews.
- Typeform-style flow with one page per step: document intent, voice notes, good-output examples, optional domain/context priming, traceable draft, and readiness inspection.
- Domain switching across legal, medical, and strategy scenarios.
- Stubbed voice-note transcript cards with domain correction highlights.
- Readiness report with thesis, support, gaps, contradictions, and next-note prompts.
- Traceable draft preview with paragraph-level source tags.
- Local UI state for moving through the full flow.

## What is faked

- Audio recording and upload.
- Speech-to-text transcription.
- AI extraction, readiness scoring, contradiction detection, and draft generation.
- External lookup, citations, integrations, exports, and publishing.

These are intentionally stubbed because the prototype is meant to demonstrate product judgment around domain priming, readiness, and traceability.

## Run

Open `index.html` directly in a browser.

No build step or dependencies are required.
