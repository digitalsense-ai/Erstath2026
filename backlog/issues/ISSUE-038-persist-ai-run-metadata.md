# ISSUE-038 - Persist AI Run Metadata

Version: 1.0 Draft
Status: Planned
Epic: EPIC-D AI Screening Service
Sprint: SPRINT-002 Conversation
Priority: High
Owner: Engineering
Domain: AI Screening / Logging
Related: docs/03-scoring-engine.md, backlog/epics/EPIC-D-ai-screening-service.md, sprints/SPRINT-002-conversation.md

## Purpose

Persist metadata for each AI screening run.

## Scope

- create logging step for AI screening runs
- store provider, model and prompt version
- store validation result
- store success or failure state
- relate run to Lead where relevant

## Out of Scope

- full audit UI
- provider integration setup
- prompt tuning

## Acceptance Criteria

- AI run metadata is saved
- success state can be saved
- failure state can be saved
- validation status can be saved
- tests use fake data only

## Test Requirements

- successful run metadata test
- failed run metadata test

## Definition of Done

```text
AI run metadata persists
success and failure states supported
validation status stored
tests pass
```
