# ISSUE-018 - Create Audit Logs Migration and Model

Version: 1.0 Draft
Status: Planned
Epic: EPIC-B Data Model and Migrations
Sprint: SPRINT-001 Data Model
Priority: High
Owner: Engineering
Domain: Data / Audit
Related: docs/12-data-dictionary.md, POL-008 AI Usage Policy, backlog/epics/EPIC-B-data-model-and-migrations.md, sprints/SPRINT-001-data-model.md

## Purpose

Create the `audit_logs` table and Laravel model.

Audit logs record important system and internal actions so the MVP can be reviewed and explained later.

## Scope

- create `audit_logs` migration
- create `AuditLog` model
- support actor, action, subject and metadata fields
- support lead relation where relevant
- keep payloads minimal

## Out of Scope

- full audit UI
- external audit export
- immutable storage design

## Data Impact

Creates `audit_logs`, `AuditLog` model and optional Lead relationship.

## Acceptance Criteria

- migration exists
- model exists
- audit action can be stored
- actor and subject can be stored
- metadata can be stored safely

## Test Requirements

- migration runs
- audit log can be created with fake data
- audit log can relate to a lead when relevant

## Security and Privacy

Audit logs must not expose sensitive details publicly.

## Definition of Done

```text
audit_logs table exists
AuditLog model exists
audit action and metadata are supported
basic model test passes
no real data introduced
```
