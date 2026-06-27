# SPEC-010 - Audit and Supporting Schema

Version: 1.0 Draft
Status: Planned
Owner: Product / Engineering
Domain: Database Specification / Audit and Supporting Tables
Related: docs/12-data-dictionary.md, backlog/issues/ISSUE-016-create-lead-handover-snapshots-migration-and-model.md, backlog/issues/ISSUE-018-create-audit-logs-migration-and-model.md, backlog/issues/ISSUE-081-add-audit-log-coverage-review.md

## Purpose

Define the MVP schema for handover snapshots, audit logs and supporting records.

## Table: lead_handover_snapshots

Purpose: stores structured lead state for CRM handover and review.

Suggested columns:

```text
id                  bigint or uuid primary key
lead_id             foreign key indexed
snapshot_version    string nullable indexed
summary             text nullable
payload             json
created_by_type     string nullable
created_at          timestamp
updated_at          timestamp
```

## Table: audit_logs

Purpose: stores important system and internal actions.

Suggested columns:

```text
id                  bigint or uuid primary key
lead_id             foreign key nullable indexed
actor_type          string indexed
actor_id            string nullable indexed
action              string indexed
subject_type        string nullable indexed
subject_id          string nullable indexed
metadata            json nullable
created_at          timestamp
updated_at          timestamp
```

## Suggested Audit Actions

```text
lead.created
conversation.started
conversation.message_saved
facts.updated
screening.run_created
screening.result_mapped
decision.created
crm.handover_created
review.status_updated
review.outcome_saved
```

## Supporting Tables

Additional tables may be added later for:

- users
- roles
- permissions
- settings
- prompt versions
- system configuration

These should only be introduced when implementation needs them.

## Relationship Rules

- Handover snapshots belong to Lead.
- Audit logs may belong to Lead.
- Audit logs should avoid storing unnecessary sensitive payloads.
- Handover snapshots may contain sensitive summarized context and must use fake data in tests.

## Indexes

Recommended indexes:

```text
lead_handover_snapshots: lead_id, snapshot_version, created_at
audit_logs: lead_id, actor_type, action, subject_type, subject_id, created_at
```

## Definition of Done

```text
handover snapshot schema defined
audit log schema defined
audit actions listed
supporting table guidance documented
indexes listed
```
