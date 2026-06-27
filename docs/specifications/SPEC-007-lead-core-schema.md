# SPEC-007 - Lead Core Schema

Version: 1.0 Draft
Status: Planned
Owner: Product / Engineering
Domain: Database Specification / Lead Core
Related: docs/12-data-dictionary.md, backlog/issues/ISSUE-009-create-leads-migration-and-model.md

## Purpose

Define the MVP schema for the lead root entity.

## Table: leads

Purpose: stores the root lead record for intake, conversation, screening, decision, CRM and review flows.

## Suggested Columns

```text
id                      bigint or uuid primary key
public_id               uuid unique nullable if id is numeric
status                  string indexed
conversation_state      string nullable indexed
priority                string nullable indexed
current_next_step       string nullable indexed
latest_decision_id      nullable foreign key
latest_review_id        nullable foreign key
latest_handover_id      nullable foreign key
source                  string nullable
created_at              timestamp
updated_at              timestamp
deleted_at              timestamp nullable if soft deletes are used
```

## Status Values

Initial MVP values may include:

```text
new
in_conversation
awaiting_confirmation
ready_for_screening
screened
decision_ready
ready_for_crm
in_review
closed
```

## Relationships

Lead has many:

- LeadConversation
- LeadFact
- LeadMissingInformation
- LeadScore
- LeadDecision
- LeadReview
- LeadHandoverSnapshot
- AiRun
- AuditLog

Lead may belong to latest decision, review and handover snapshot references if these are used for fast reads.

## Indexes

Recommended indexes:

```text
status
conversation_state
priority
current_next_step
created_at
updated_at
```

## Notes

Do not store unnecessary personal details directly on the lead table unless required by the MVP.

Details that come from conversation should be stored as facts when possible.

## Definition of Done

```text
lead table purpose defined
suggested columns listed
status values listed
relationships listed
indexes listed
```
