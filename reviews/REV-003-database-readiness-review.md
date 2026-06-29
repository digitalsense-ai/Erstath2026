# REV-003 - Database Readiness Review

Version: 1.0 Draft
Status: Active
Owner: Product / Engineering / Data
Domain: Review / Database Readiness
Related: docs/specifications/SPEC-006-database-overview.md, docs/specifications/SPEC-007-lead-core-schema.md, docs/specifications/SPEC-008-conversation-and-facts-schema.md, docs/specifications/SPEC-009-screening-decision-review-schema.md, docs/specifications/SPEC-010-audit-and-supporting-schema.md

## Purpose

Review the existing MVP database specifications before Laravel migrations are implemented.

The goal is to confirm what is ready, what should be adjusted, and which decisions must be made before coding Sprint 001.

---

## Executive Summary

The database design is strong enough to start migration planning.

The current model already has the correct MVP backbone:

```text
Lead
Conversation messages
Facts
Missing information
AI runs
Scores
Decisions
Reviews
Handover snapshots
Audit logs
```

The design should not be replaced.

The main remaining work is to make a few implementation decisions explicit before Laravel migrations are created.

---

## Existing Strengths

### Lead is correctly defined as the root entity

The database overview states that Lead is the root entity and that most MVP business records belong to Lead.

This is the correct architecture for the MVP because all intake, screening, decision, review and CRM handover can be traced back to one lead.

### AI-created facts are handled safely

The specifications state that AI-created facts are unconfirmed by default and that confirmed facts should not be overwritten without correction handling.

This is important and should be preserved in implementation.

### Decisions are separated from scores

The specifications correctly separate scores from final decisions.

Scores are inputs.

Decisions are stored outputs with outcome, next step and reason codes.

### Audit is included early

Audit logs are included as a first-class supporting table.

This is important for status changes, review outcomes, screening events and later privacy-related events.

---

## Recommended MVP Tables

The following tables should be implemented in Sprint 001 unless a concrete blocker is found:

```text
leads
lead_conversations
lead_facts
lead_missing_information
ai_runs
lead_scores
lead_decisions
lead_reviews
lead_handover_snapshots
audit_logs
```

These match the existing SPEC-006 to SPEC-010 database structure.

---

## Implementation Decisions Required

### Decision 1 - Primary key strategy

Current specs allow either bigint or uuid primary keys.

Recommendation:

```text
Use bigint primary keys internally.
Use public_id UUID on leads for public/API references.
```

Reason:

```text
Laravel defaults stay simple.
Public URLs and API references avoid exposing sequential ids.
```

### Decision 2 - Lead status enum strategy

Current specs define initial status values but not whether they are DB enums or strings.

Recommendation:

```text
Use string columns in database.
Use PHP enum classes in Laravel.
```

Reason:

```text
Easier MVP iteration.
Database migrations are less fragile.
Code still gets typed constants.
```

### Decision 3 - Score storage model

Current specs define lead_scores as one row per score type.

Recommendation for MVP:

```text
Keep one row per score type.
score_type = case_strength | information_quality | commercial_value | lead_score
```

Reason:

```text
Flexible and audit-friendly.
Allows score versions and metadata per score.
```

### Decision 4 - Conversation table naming

Current spec uses lead_conversations for messages.

Recommendation:

```text
Keep table name lead_conversations for MVP.
Model name may be LeadConversation.
```

Alternative later:

```text
Rename to lead_messages only if implementation proves the current name confusing.
```

### Decision 5 - JSON column support

Recommendation:

```text
Use json columns where specs say metadata, payload, reason_codes or input_snapshot.
For SQLite tests, Laravel will handle JSON as text-compatible storage.
```

### Decision 6 - Soft deletes

Recommendation:

```text
Use soft deletes on leads only in MVP if needed.
Do not add soft deletes everywhere by default.
```

Reason:

```text
Audit logs should preserve history.
Overusing soft deletes makes early implementation heavier.
```

---

## Recommended Indexes

### leads

```text
public_id unique
status
conversation_state
priority
current_next_step
created_at
updated_at
```

### lead_conversations

```text
lead_id
lead_id + sequence
lead_id + created_at
role
```

### lead_facts

```text
lead_id
lead_id + fact_key
lead_id + confirmation_state
source
```

### lead_missing_information

```text
lead_id
lead_id + missing_key
lead_id + status
priority
```

### ai_runs

```text
lead_id
status
validation_status
prompt_name + prompt_version
error_code
```

### lead_scores

```text
lead_id
lead_id + score_type
ai_run_id
version
```

### lead_decisions

```text
lead_id
outcome
next_step
evaluator_version
created_at
```

### lead_reviews

```text
lead_id
status
reason
outcome
created_at
completed_at
```

### lead_handover_snapshots

```text
lead_id
snapshot_version
created_at
```

### audit_logs

```text
lead_id
action
actor_type
subject_type + subject_id
created_at
```

---

## Foreign Key Rules

Recommended MVP foreign keys:

```text
lead_conversations.lead_id -> leads.id cascade delete only if lead is hard deleted
lead_facts.lead_id -> leads.id
lead_missing_information.lead_id -> leads.id
ai_runs.lead_id -> leads.id nullable
lead_scores.lead_id -> leads.id
lead_scores.ai_run_id -> ai_runs.id nullable
lead_decisions.lead_id -> leads.id
lead_reviews.lead_id -> leads.id
lead_handover_snapshots.lead_id -> leads.id
audit_logs.lead_id -> leads.id nullable
```

Recommendation:

```text
Avoid destructive cascade behavior for business records unless intentionally required.
Prefer restricted or null-on-delete behavior where historical trace matters.
```

---

## Migration Order

Recommended Laravel migration order:

```text
1. leads
2. lead_conversations
3. lead_facts
4. lead_missing_information
5. ai_runs
6. lead_scores
7. lead_decisions
8. lead_reviews
9. lead_handover_snapshots
10. audit_logs
11. optional latest_* foreign keys on leads after dependent tables exist
```

Because leads references latest_decision_id, latest_review_id and latest_handover_id, those references may be added after the target tables exist.

---

## Model Relationship Plan

### Lead

```text
hasMany LeadConversation
hasMany LeadFact
hasMany LeadMissingInformation
hasMany AiRun
hasMany LeadScore
hasMany LeadDecision
hasMany LeadReview
hasMany LeadHandoverSnapshot
hasMany AuditLog
belongsTo latestDecision
belongsTo latestReview
belongsTo latestHandoverSnapshot
```

### AiRun

```text
belongsTo Lead nullable
hasMany LeadScore
```

### LeadDecision

```text
belongsTo Lead
```

### LeadReview

```text
belongsTo Lead
```

### AuditLog

```text
belongsTo Lead nullable
```

---

## Open Risks

### Risk 1 - Personal data placement

The lead table currently avoids unnecessary personal data.

This is good.

Risk:

```text
MitID and customer identity fields may be added too early to leads.
```

Recommendation:

```text
Keep identity/onboarding fields out of Sprint 001 unless required.
Add a later onboarding table when MitID flow begins.
```

### Risk 2 - Entity versus fact naming

Older planning material may mention lead_entities.

Current implementation specs use lead_facts.

Recommendation:

```text
Use lead_facts for MVP.
Do not add lead_entities unless a later document explicitly replaces lead_facts.
```

### Risk 3 - Case table timing

Older ideas mention converting qualified leads into cases.

Current MVP specs focus on lead intake, screening, CRM handover and review.

Recommendation:

```text
Do not add cases table in Sprint 001 unless the MVP scope explicitly requires active case management.
```

### Risk 4 - Scores as columns versus rows

Older planning material may show scores as columns on one row.

Current SPEC-009 uses one row per score type.

Recommendation:

```text
Use one row per score type for MVP because it supports versioning and audit better.
```

---

## Sprint 001 Readiness

Status:

```text
Ready with decisions noted.
```

Before migrations are created, engineering should confirm:

```text
primary key strategy
status enum strategy
score storage model
soft delete policy
whether cases table is out of Sprint 001
```

---

## Definition of Done

```text
database readiness reviewed
recommended MVP tables listed
implementation decisions identified
indexes recommended
migration order defined
model relationships outlined
older-plan overlap risks identified
```
