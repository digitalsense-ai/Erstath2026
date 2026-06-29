# PROMPT-001 - AI Prompt Pack Overview

Version: 1.0 Draft
Status: Active
Owner: Product / Engineering / AI
Domain: AI Prompts
Related: docs/contracts/CONTRACT-001-json-contracts-overview.md, docs/contracts/CONTRACT-003-fact-extraction-contract.md, docs/contracts/CONTRACT-004-screening-output-contract.md, docs/contracts/CONTRACT-005-decision-output-contract.md

## Purpose

Define the MVP AI prompt pack used by the application.

The prompts must support structured intake, fact extraction, screening, decision support, summaries and review handover without allowing the AI to make final legal conclusions.

## Prompt Principles

```text
AI must return valid JSON when used as a backend service.
AI must not promise compensation.
AI must not make final legal conclusions.
AI-created facts are unconfirmed by default.
AI should ask only one user-facing question at a time.
AI should preserve uncertainty instead of guessing.
AI output must match the relevant JSON contract.
```

## Prompt Documents

```text
PROMPT-002 Conversation Prompt
PROMPT-003 Fact Extraction Prompt
PROMPT-004 Screening Prompt
PROMPT-005 Decision Support Prompt
PROMPT-006 Summary and Handover Prompt
PROMPT-007 Review Support Prompt
```

## Standard Backend Instruction

All backend AI prompts should include:

```text
Return only valid JSON.
Do not include markdown.
Do not include explanatory text outside JSON.
Use null when information is unknown.
Use arrays for lists.
Do not invent missing facts.
```

## Safety Rule

The AI may help structure and qualify information.

The AI must not present itself as a lawyer, authority or final decision maker.

## Definition of Done

```text
prompt pack overview exists
prompt principles defined
prompt documents listed
standard backend instruction documented
safety rule documented
```
