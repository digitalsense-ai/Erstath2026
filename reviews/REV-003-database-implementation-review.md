# REV-003 - Database Implementation Review

Version: 1.0 Draft
Status: Active
Owner: Product / Engineering / Delivery
Domain: Database Review
Related: docs/specifications/SPEC-006-database-overview.md, docs/specifications/SPEC-007-lead-core-schema.md, docs/specifications/SPEC-008-conversation-and-facts-schema.md, docs/specifications/SPEC-009-screening-decision-review-schema.md, docs/specifications/SPEC-010-audit-and-supporting-schema.md

## Purpose

Review the MVP database specification before Laravel migrations are implemented.

## Conclusion

The database specification is ready for implementation after the Laravel baseline is installed.

The remaining work is to convert the specifications into:

```text
migrations
Eloquent models
factories
relationship tests
```

## Recommended Migration Order

```text
001 leads
002 lead_conversations
003 lead_facts
004 lead_missing_information
005 ai_runs
006 lead_scores
007 lead_decisions
008 lead_reviews
009 lead_handover_snapshots
010 audit_logs
```

## Recommended Models

```text
Lead
LeadConversation
LeadFact
LeadMissingInformation
AiRun
LeadScore
LeadDecision
LeadReview
LeadHandoverSnapshot
AuditLog
```

## Lead Relationships

```text
Lead has many conversations
Lead has many facts
Lead has many missing information records
Lead has many AI runs
Lead has many scores
Lead has many decisions
Lead has many reviews
Lead has many handover snapshots
Lead has many audit logs
```

## Implementation Notes

```text
Lead is the root entity.
Use internal id plus public_id for external references.
AI-created facts are unconfirmed by default.
Scores are inputs, not final decisions.
Decisions must store reason codes.
Review status changes should be auditable.
Audit metadata should avoid unnecessary sensitive content.
```

## Index Guidance

```text
leads: public_id, status, conversation_state, priority, current_next_step
lead_conversations: lead_id, role, sequence, created_at
lead_facts: lead_id, fact_key, source, confirmation_state
lead_missing_information: lead_id, missing_key, status, priority
ai_runs: lead_id, prompt_name, prompt_version, status, validation_status
lead_scores: lead_id, ai_run_id, score_type, version
lead_decisions: lead_id, outcome, next_step, evaluator_version
lead_reviews: lead_id, status, reason, outcome
lead_handover_snapshots: lead_id, snapshot_version, created_at
audit_logs: lead_id, actor_type, action, subject_type, subject_id, created_at
```

## Open Decisions for SPRINT-001

```text
Use UUID or ULID for public_id?
Use soft deletes on leads?
Use cascade delete or retain child records?
Use database enums or application-level enums?
Add latest decision/review/handover references on leads in first migration or later?
```

Recommended default:

```text
Use public_id as UUID.
Use application-level enums first.
Avoid destructive cascade behavior until retention rules are confirmed.
Add latest references after related tables exist.
```

## Not MVP Scope

```text
case similarity
win probability
payment tables
advanced document analysis tables
external submission tables
```

## SPRINT-001 Definition of Done

```text
migrations exist
models exist
relationships exist
factories use fake data only
model relationship tests pass
health endpoint still passes
```

## Next Step

```text
Wait for ServerAdmin Laravel baseline.
Verify Laravel core files.
Then implement SPRINT-001 migrations in the order above.
```
