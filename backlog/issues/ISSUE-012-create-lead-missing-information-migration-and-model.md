# ISSUE-012 - Create Lead Missing Information Migration and Model

Version: 1.0 Draft
Status: Planned
Epic: EPIC-B Data Model and Migrations
Sprint: SPRINT-001 Data Model
Priority: High
Owner: Engineering
Domain: Data / Missing Information
Related: docs/12-data-dictionary.md, DEC-007 Information Quality, backlog/epics/EPIC-B-data-model-and-migrations.md, sprints/SPRINT-001-data-model.md

## Purpose

Create the `lead_missing_information` table and Laravel model.

This table stores information the system still needs before screening, routing or review can proceed safely.

## Scope

- create `lead_missing_information` migration
- create `LeadMissingInformation` model
- relate missing information to `Lead`
- store missing information key/type
- store reason or importance
- store status such as open, resolved or deferred
- add fake-only factory if needed

## Out of Scope

- Smart Skip logic
- conversation question selection
- routing decisions
- CRM UI

## Data Impact

Creates:

```text
lead_missing_information
LeadMissingInformation model
Lead -> lead_missing_information relationship
```

## Acceptance Criteria

- migration exists
- model exists
- relationship to Lead works
- missing information status can be stored
- missing information can be resolved or marked no longer needed
- no real personal data is included

## Test Requirements

- migration runs
- a lead can have missing information records
- status can be stored and updated

## Security and Privacy

Missing information may reveal sensitive context. Use fake-only examples in tests and factories.

## Definition of Done

```text
lead_missing_information table exists
LeadMissingInformation model exists
Lead relationship works
status tracking is supported
basic model test passes
no real data introduced
```
