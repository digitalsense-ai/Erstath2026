# ISSUE-014 - Create Lead Decisions Migration and Model

Version: 1.0 Draft
Status: Planned
Epic: EPIC-B Data Model and Migrations
Sprint: SPRINT-001 Data Model
Priority: High
Owner: Engineering
Domain: Data / Decisions
Related: docs/12-data-dictionary.md, DEC-005 Routing Recommendation, DEC-008 Acceptance Policy, backlog/epics/EPIC-B-data-model-and-migrations.md, sprints/SPRINT-001-data-model.md

## Purpose

Create the `lead_decisions` table and Laravel model.

Decision records store auditable outcomes from later decision and routing evaluation.

## Scope

- create `lead_decisions` migration
- create `LeadDecision` model
- relate decisions to `Lead`
- store decision id, outcome, reason and version
- store policy references
- store input snapshot or snapshot reference if confirmed

## Out of Scope

- decision engine logic
- policy evaluation logic
- CRM presentation

## Data Impact

Creates `lead_decisions`, `LeadDecision` model and Lead relationship.

## Acceptance Criteria

- migration exists
- model exists
- relationship to Lead works
- outcome and reason can be stored
- policy references can be stored
- decisions are separate from scores

## Test Requirements

- migration runs
- a lead can have decisions
- decision metadata can be stored

## Security and Privacy

Decision context may be sensitive. Use fake-only data in tests.

## Definition of Done

```text
lead_decisions table exists
LeadDecision model exists
Lead relationship works
decision metadata is supported
basic model test passes
```
