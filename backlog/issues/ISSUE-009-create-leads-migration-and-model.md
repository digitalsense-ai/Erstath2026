# ISSUE-009 - Create Leads Migration and Model

Version: 1.0 Draft
Status: Planned
Epic: EPIC-B Data Model and Migrations
Sprint: SPRINT-001 Data Model
Priority: High
Owner: Engineering
Domain: Data / Leads
Related: docs/12-data-dictionary.md, backlog/epics/EPIC-B-data-model-and-migrations.md, sprints/SPRINT-001-data-model.md

## Purpose

Create the `leads` database table and Laravel model.

The lead record is the root entity for the MVP intake, conversation, decision, CRM and review flows.

## Scope

- create `leads` migration
- create `Lead` model
- include MVP status fields
- include current routing/review fields if confirmed by ISSUE-008
- add fillable/casts where appropriate
- add basic factory with fake-only data

## Out of Scope

- CRM UI
- conversation logic
- decision evaluation logic
- real personal data seeders

## Data Impact

Creates:

```text
leads
Lead model
Lead factory if used
```

## Acceptance Criteria

- `leads` migration exists
- `Lead` model exists
- model can be created with fake test data
- no real personal data is included
- migration follows Data Dictionary decisions

## Test Requirements

- migration runs
- lead can be created in a test
- required fields are validated at model/database level where appropriate

## Security and Privacy

Lead data may become sensitive. Test data must be fake only.

## Definition of Done

```text
leads table exists
Lead model exists
fake factory exists if needed
basic model test passes
no real data introduced
```
