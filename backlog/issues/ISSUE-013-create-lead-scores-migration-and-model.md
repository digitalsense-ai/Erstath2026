# ISSUE-013 - Create Lead Scores Migration and Model

Version: 1.0 Draft
Status: Planned
Epic: EPIC-B Data Model and Migrations
Sprint: SPRINT-001 Data Model
Priority: High
Owner: Engineering
Domain: Data / Scoring
Related: docs/12-data-dictionary.md, docs/03-scoring-engine.md, backlog/epics/EPIC-B-data-model-and-migrations.md, sprints/SPRINT-001-data-model.md

## Purpose

Create the `lead_scores` table and Laravel model.

Scores are inputs to later decisions. They must not become final outcomes by themselves.

## Scope

- create `lead_scores` migration
- create `LeadScore` model
- relate scores to `Lead`
- store score type or version
- store score value and confidence if relevant
- store input references or snapshot reference if confirmed
- add fake-only factory if needed

## Out of Scope

- scoring algorithm implementation
- routing decisions
- CRM UI
- AI provider integration

## Data Impact

Creates:

```text
lead_scores
LeadScore model
Lead -> lead_scores relationship
```

## Acceptance Criteria

- migration exists
- model exists
- relationship to Lead works
- score value can be stored
- score version or type can be stored
- score is clearly stored as decision input, not final outcome

## Test Requirements

- migration runs
- a lead can have scores
- score type/version and value can be stored

## Security and Privacy

Score inputs may depend on sensitive facts. Use fake-only data in tests.

## Definition of Done

```text
lead_scores table exists
LeadScore model exists
Lead relationship works
score value and type/version are supported
basic model test passes
no real data introduced
```
