# ISSUE-011 - Create Lead Facts Migration and Model

Version: 1.0 Draft
Status: Planned
Epic: EPIC-B Data Model and Migrations
Sprint: SPRINT-001 Data Model
Priority: High
Owner: Engineering
Domain: Data / Facts
Related: docs/12-data-dictionary.md, PAT-001 Speak Human Store Structured, PAT-003 Confirm Before Classify, POL-003 Confidence Policy, backlog/epics/EPIC-B-data-model-and-migrations.md, sprints/SPRINT-001-data-model.md

## Purpose

Create the `lead_facts` table and Laravel model.

This table stores structured facts extracted from conversation or later sources, while preserving source, confidence and confirmation state.

## Scope

- create `lead_facts` migration
- create `LeadFact` model
- relate facts to `Lead`
- support fact key and value storage
- support source metadata
- support confidence value
- support confirmation state
- support user correction state if confirmed by ISSUE-008
- add fake-only factory if needed

## Out of Scope

- AI fact extraction logic
- conversation confirmation flow
- final scoring or routing logic
- CRM presentation UI

## Data Impact

Creates:

```text
lead_facts
LeadFact model
Lead -> lead_facts relationship
```

## Acceptance Criteria

- migration exists
- model exists
- relationship to Lead works
- fact key and value can be stored
- source metadata can be stored
- confidence can be stored
- confirmation state can be stored
- no AI-inferred fact is treated as confirmed by default

## Test Requirements

- migration runs
- a lead can have facts
- fact confidence can be stored
- confirmation state can be stored
- fake test data is used only

## Security and Privacy

Facts may contain sensitive information. Test data must be fake and source metadata must be clear.

## Definition of Done

```text
lead_facts table exists
LeadFact model exists
Lead relationship works
confidence and confirmation state are supported
basic model test passes
no real data introduced
```
