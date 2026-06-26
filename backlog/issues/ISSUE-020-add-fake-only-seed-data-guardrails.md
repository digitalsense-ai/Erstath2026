# ISSUE-020 - Add Fake-Only Seed Data Guardrails

Version: 1.0 Draft
Status: Planned
Epic: EPIC-B Data Model and Migrations
Sprint: SPRINT-001 Data Model
Priority: High
Owner: Engineering / Security
Domain: Data / Privacy / Testing
Related: docs/12-data-dictionary.md, POL-008 AI Usage Policy, backlog/epics/EPIC-B-data-model-and-migrations.md, sprints/SPRINT-001-data-model.md

## Purpose

Add guardrails that ensure seeders, factories and tests use fake data only.

The goal is to prevent real personal data or realistic case details from entering the repository.

## Scope

- document fake-data rules
- review factories and seeders
- add test or checklist for fake-only data where practical
- ensure examples avoid CPR numbers, real names, real emails and real case details

## Out of Scope

- production data migration
- anonymization of real datasets
- external compliance review

## Data Impact

No business schema changes expected.

This issue affects test fixtures, seeders and developer examples.

## Acceptance Criteria

- fake-data rule is documented
- factories use fake examples only
- seeders use fake examples only
- no real personal data is introduced
- review checklist or automated guardrail exists where practical

## Test Requirements

Add automated checks if practical. Otherwise document the manual review rule clearly.

## Security and Privacy

This issue is a privacy guardrail. It must prevent real sensitive data from being committed.

## Definition of Done

```text
fake-data rules documented
factories reviewed
seeders reviewed
no real data introduced
guardrail or checklist exists
```
