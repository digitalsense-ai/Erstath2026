# ISSUE-016 - Create Lead Handover Snapshots Migration and Model

Version: 1.0 Draft
Status: Planned
Epic: EPIC-B Data Model and Migrations
Sprint: SPRINT-001 Data Model
Priority: Medium
Owner: Engineering
Domain: Data / CRM Handover
Related: docs/12-data-dictionary.md, DEC-013 CRM Assignment, backlog/epics/EPIC-B-data-model-and-migrations.md, sprints/SPRINT-001-data-model.md

## Purpose

Create the `lead_handover_snapshots` table and Laravel model.

Handover snapshots store the structured state that CRM and human review can use without reconstructing every detail from raw conversation data.

## Scope

- create `lead_handover_snapshots` migration
- create `LeadHandoverSnapshot` model
- relate snapshots to `Lead`
- store summary, facts, missing information and decision context as approved by ISSUE-008
- support snapshot versioning if needed

## Out of Scope

- CRM UI
- handover generation logic
- review workflow logic

## Data Impact

Creates `lead_handover_snapshots`, model and Lead relationship.

## Acceptance Criteria

- migration exists
- model exists
- relationship to Lead works
- snapshot content can be stored
- snapshot can support CRM handover needs

## Test Requirements

- migration runs
- a lead can have handover snapshots
- snapshot payload can be stored and read

## Security and Privacy

Snapshots may contain sensitive lead context. Use fake-only data in tests.

## Definition of Done

```text
lead_handover_snapshots table exists
LeadHandoverSnapshot model exists
Lead relationship works
basic model test passes
no real data introduced
```
