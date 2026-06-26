# SPRINT-001 - Data Model

Version: 1.0 Draft
Status: Planned
Owner: Product / Delivery / Engineering
Sprint Type: Foundation / Feature
Related Epics: EPIC-B Data Model and Migrations
Related: BACKLOG-000 Traceable Backlog Index, DOC-001 Architecture Overview, DOC-002 Repository Constitution, DOC-003 Architecture Index, docs/12-data-dictionary.md, ADR-000 Enterprise Architecture Principles, backlog/epics/EPIC-B-data-model-and-migrations.md

## Purpose

This sprint creates the core MVP data model and database migration foundation for ErstatningsHjaelp.

The sprint should make it possible to persist leads, conversations, facts, missing information, scores, decisions, reviews, CRM handover snapshots, AI runs and audit logs in a structured and traceable way.

SPRINT-001 turns the architecture and data dictionary into implementable Laravel migrations, models and relationship tests.

---

## Sprint Goal

```text
Create the core MVP database structures and Eloquent models required for conversation, AI screening, decisions, CRM handover, human review and audit.
```

---

## Business Value

This sprint should create value by:

- creating a reliable data foundation for all later product features
- avoiding ad-hoc fields and unclear data ownership
- enabling facts to be stored with confidence and confirmation state
- enabling decisions and reviews to be auditable
- enabling CRM handover views from structured data
- enabling deterministic tests around core persistence

---

## Scope

This sprint includes:

- MVP data model implementation approach
- leads table and model
- lead conversations table and model
- lead facts table and model
- lead missing information table and model
- lead scores table and model
- lead decisions table and model
- lead reviews table and model
- lead handover snapshots table and model
- AI runs table and model
- audit logs table and model
- model relationships
- fake-only factories and seed guardrails

---

## Out of Scope

This sprint does not include:

- conversation flow implementation
- AI provider calls
- scoring algorithms
- routing algorithms
- CRM board UI
- human review UI
- document upload
- identity or consent integration
- production data migration from legacy systems

---

## Related Architecture

```text
DOC-001 - Architecture Overview
DOC-002 - Repository Constitution
DOC-003 - Architecture Index
docs/12-data-dictionary.md - Data Dictionary
ADR-000 - Enterprise Architecture Principles
```

---

## Related Patterns

```text
PAT-001 - Speak Human Store Structured
PAT-003 - Confirm Before Classify
PAT-004 - Never Ask Twice
```

---

## Related Decisions

```text
DEC-003 - Confirm Understanding
DEC-005 - Routing Recommendation
DEC-006 - Human Review
DEC-007 - Information Quality
DEC-013 - CRM Assignment
```

---

## Related Policies

```text
POL-003 - Confidence Policy
POL-005 - Human Review Policy
POL-008 - AI Usage Policy
```

---

## Included Epics

```text
EPIC-B - Data Model and Migrations
```

---

## Included Issues

```text
ISSUE-008 - Define MVP data model implementation approach
ISSUE-009 - Create leads migration and model
ISSUE-010 - Create lead_conversations migration and model
ISSUE-011 - Create lead_facts migration and model
ISSUE-012 - Create lead_missing_information migration and model
ISSUE-013 - Create lead_scores migration and model
ISSUE-014 - Create lead_decisions migration and model
ISSUE-015 - Create lead_reviews migration and model
ISSUE-016 - Create lead_handover_snapshots migration and model
ISSUE-017 - Create ai_runs migration and model
ISSUE-018 - Create audit_logs migration and model
ISSUE-019 - Add model relationship tests
ISSUE-020 - Add fake-only seed data guardrails
```

---

## Data Impact

This sprint creates the core MVP persistence structures:

```text
leads
lead_conversations
lead_facts
lead_missing_information
lead_scores
lead_decisions
lead_reviews
lead_handover_snapshots
ai_runs
audit_logs
```

No real personal data may be added through seeders, factories or test fixtures.

---

## Implementation Sequence

Recommended sequence:

```text
1. Confirm data model implementation approach
2. Create leads migration and model
3. Create conversation storage
4. Create facts and missing information storage
5. Create scores, decisions and reviews storage
6. Create handover snapshots
7. Create AI run logging
8. Create audit logging
9. Add model relationships
10. Add migration and relationship tests
11. Add fake-only data guardrails
```

---

## Dependencies

This sprint depends on:

- SPRINT-000 Foundation
- EPIC-B Data Model and Migrations
- Data Dictionary v2.0
- Policy Pack v1.0 Draft

This sprint enables:

- SPRINT-002 Conversation
- SPRINT-003 Decision Engine
- SPRINT-004 CRM Handover
- SPRINT-005 Security, Audit and Testing

---

## Acceptance Criteria

This sprint is complete when:

- required migrations exist
- required Eloquent models exist
- model relationships are implemented
- facts can store confidence and confirmation state
- decisions can store outcome, reason and policy references
- reviews can store review reason and outcome
- AI runs can store validation/logging metadata
- audit logs can record important events
- fake-only factory and seeder rules are documented or tested
- no out-of-scope business logic is implemented

---

## Test Requirements

Tests should verify:

- migrations run successfully
- models can be created with valid fake data
- lead relationships work
- facts can store source, confidence and confirmation state
- missing information can be stored
- decisions can store decision and policy references
- reviews can store review state
- handover snapshots can be created
- AI runs can be logged
- audit logs can be recorded

---

## Security and Privacy Considerations

SPRINT-001 must ensure:

- no real personal data is used in tests or seeders
- sensitive text fields are intentional
- audit fields do not expose sensitive data publicly
- AI run logging follows data minimization principles
- user-provided facts and AI-inferred facts are distinguishable
- confirmation state is stored explicitly

---

## Risks

| Risk | Mitigation |
|---|---|
| Data model becomes too broad too early | Implement MVP tables first |
| Important fact metadata is missing | Require source, confidence and confirmation state |
| Decisions become hidden score thresholds | Store decisions separately from scores |
| Tests contain real or realistic personal data | Add fake-only guardrails |
| Later CRM cannot explain routing | Store decisions, reasons and handover snapshots |

---

## Open Questions

- Should `lead_facts.fact_value` be JSON, text or typed columns?
- Should enum values use PHP enums or config arrays in MVP?
- Should audit logs be immutable from day one?
- Should policy references be stored as JSON arrays or relational records?
- Should repositories be added immediately or deferred until query complexity requires them?

---

## Review Checklist

Before closing this sprint, confirm:

```text
Architecture references are still valid
Data Dictionary is traceable from migrations
Policies are followed
Tests pass
No real data is introduced
No out-of-scope implementation was added
Documentation was updated if needed
ServerAdmin handoff impact was considered
```

---

## Definition of Done

```text
Sprint goal achieved
Included issues completed or explicitly deferred
Core migrations exist
Core models exist
Relationships are tested
Fake-only data guardrails are respected
Security and privacy considerations handled
Next sprint dependencies are clear
```
