# ISSUE-017 - Create AI Runs Migration and Model

Version: 1.0 Draft
Status: Planned
Epic: EPIC-B Data Model and Migrations
Sprint: SPRINT-001 Data Model
Priority: High
Owner: Engineering
Domain: Data / AI Logging
Related: docs/12-data-dictionary.md, POL-008 AI Usage Policy, backlog/epics/EPIC-B-data-model-and-migrations.md, sprints/SPRINT-001-data-model.md

## Purpose

Create the `ai_runs` table and Laravel model.

AI run records store metadata about AI usage, validation and failures so AI behavior remains auditable.

## Scope

- create `ai_runs` migration
- create `AiRun` model
- relate AI runs to Lead where relevant
- store provider, model, prompt name and prompt version
- store validation status and errors
- store success or failure state

## Out of Scope

- real AI provider integration
- prompt execution logic
- AI output validation implementation

## Data Impact

Creates `ai_runs`, `AiRun` model and optional Lead relationship.

## Acceptance Criteria

- migration exists
- model exists
- AI run metadata can be stored
- validation status can be stored
- failure state can be stored

## Test Requirements

- migration runs
- AI run can be created with fake metadata
- success and failure states can be represented

## Security and Privacy

AI logs must avoid unnecessary sensitive personal data.

## Definition of Done

```text
ai_runs table exists
AiRun model exists
AI metadata is supported
validation state is supported
basic model test passes
no real data introduced
```
