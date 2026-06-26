# ISSUE-019 - Add Model Relationship Tests

Version: 1.0 Draft
Status: Planned
Epic: EPIC-B Data Model and Migrations
Sprint: SPRINT-001 Data Model
Priority: High
Owner: Engineering
Domain: Data / Testing
Related: docs/12-data-dictionary.md, backlog/epics/EPIC-B-data-model-and-migrations.md, sprints/SPRINT-001-data-model.md

## Purpose

Add tests for the core MVP model relationships.

The goal is to confirm that the data model can support later conversation, AI screening, decision, CRM and review work.

## Scope

- test Lead relationships
- test conversation messages relationship
- test facts relationship
- test missing information relationship
- test scores relationship
- test decisions relationship
- test reviews relationship
- test handover snapshots relationship
- test AI runs and audit logs where relevant

## Out of Scope

- business workflow tests
- AI provider tests
- CRM UI tests
- decision engine tests

## Data Impact

No schema changes expected. Tests use fake-only model data.

## Acceptance Criteria

- relationship tests exist
- core Lead relationships are covered
- tests use fake data only
- tests run with the selected test runner

## Test Requirements

The issue itself is fulfilled by the relationship tests.

## Security and Privacy

No real personal data may be used in tests, factories or examples.

## Definition of Done

```text
relationship tests exist
core model relationships pass
fake-only data is used
no real data introduced
```
