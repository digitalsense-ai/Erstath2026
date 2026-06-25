# EPIC-B - Data Model and Migrations

Version: 1.0 Draft
Status: Planned
Owner: Delivery / Engineering / Architecture
Domain: Data / Database / Backend
Sprint Alignment: SPRINT-001 Data Model
Related: BACKLOG-000 Traceable Backlog Index, docs/12-data-dictionary.md, DOC-001 Architecture Overview, DOC-002 Repository Constitution, ADR-000 Enterprise Architecture Principles, DEC-000 Decision Catalog, POL-000 Policy Catalog

## Purpose

This epic defines the core data model and database migrations required for MVP 0.1.

The goal is to create a structured data foundation for digital-first intake, conversation history, extracted facts, scoring, decisions, human review, CRM handover, AI run logging and audit.

This epic translates the architecture baseline into implementable Laravel migrations and Eloquent models.

---

## Business Objectives

EPIC-B enables the platform to:

- store leads safely and consistently
- preserve the conversation history
- distinguish confirmed facts from inferred facts
- store scores as decision inputs
- store auditable decision outcomes
- support human review workflows
- support CRM handover views
- log AI runs and validation results
- create a reliable base for later API and UI work

---

## Success Metrics

This epic is successful when:

- core MVP tables exist through migrations
- model relationships are clear and testable
- database structure matches Data Dictionary v2.0
- decision and policy data can be stored without ad-hoc fields
- facts can include source, confidence and confirmation state
- CRM handover can be generated from stored data
- audit events can be recorded consistently

---

## Scope

EPIC-B includes data structures for:

- leads
- lead conversations
- lead facts or compatible lead entities
- missing information
- lead scores
- lead decisions
- lead reviews
- lead handover snapshots
- AI runs
- audit logs

---

## Out of Scope

EPIC-B does not include:

- full CRM UI
- AI provider integration
- scoring algorithms
- routing algorithms
- document upload flow
- MitID integration
- consent signing flow
- active case lifecycle
- production data migration from legacy systems

---

## Architecture Traceability

### Primary Architecture

```text
docs/12-data-dictionary.md
docs/03-scoring-engine.md
docs/04-conversation-engine.md
docs/05-crm-workflow.md
docs/31-acceptance-and-routing-architecture.md
```

### Decisions

```text
decisions/DEC-000-decision-catalog.md
decisions/DEC-003-confirm-understanding.md
decisions/DEC-004-smart-skip-decision.md
decisions/DEC-005-routing-recommendation.md
decisions/DEC-006-human-review.md
decisions/DEC-007-information-quality.md
decisions/DEC-008-acceptance-policy.md
decisions/DEC-013-crm-assignment.md
```

### Policies

```text
policies/POL-001-acceptance-policy.md
policies/POL-002-routing-policy.md
policies/POL-003-confidence-policy.md
policies/POL-005-human-review-policy.md
policies/POL-007-communication-policy.md
policies/POL-008-ai-usage-policy.md
```

---

## Data Model Requirements

The MVP data model should support these minimum tables:

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

If implementation needs a simpler path, `lead_entities` may temporarily be used, but it must support confirmation state and confidence.

---

## Key Data Principles

### 1. Store facts with reliability metadata

The system must distinguish between:

```text
ai_inferred
confirmation_pending
user_confirmed
user_corrected
document_supported
human_reviewed
unresolved
```

### 2. Store decisions as records

Important decisions must be stored in `lead_decisions`, not only inferred from current lead status.

### 3. Scores are inputs, not outcomes

Scores must be stored as signals and must not directly replace routing or policy decisions.

### 4. CRM needs structured handover

CRM views should not reconstruct the case from raw conversation text alone.

### 5. Audit is a first-class concern

Important events must be auditable from the beginning.

---

## Non-Functional Requirements

The data model should be:

- explicit
- migration-safe
- testable
- auditable
- extensible
- compatible with future policy versioning
- compatible with future document and consent modules

---

## Security Considerations

This epic must ensure:

- no real data is added as seed data
- test fixtures use fake examples only
- sensitive text fields are clearly identified
- AI run logging avoids unnecessary sensitive data
- audit logs do not expose data publicly
- storage of user-facing messages is intentional and traceable

---

## Acceptance Criteria

EPIC-B is complete when:

- required migrations exist
- required Eloquent models exist
- relationships are defined
- enum-like values are documented in code or configuration
- basic model tests pass
- fake-only seed data rules are respected
- Data Dictionary v2.0 is traceable from implementation
- no out-of-scope business logic is implemented

---

## Test Strategy

Minimum tests should cover:

- migrations run successfully
- models can be created with valid fake data
- lead relationships work
- facts can store confidence and confirmation state
- decisions can store decision id, outcome and policy refs
- reviews can store review reason and outcome
- handover snapshots can be created
- audit logs can be recorded

---

## Risks

| Risk | Mitigation |
|---|---|
| Data model becomes too broad too early | Implement MVP tables first and mark future fields clearly |
| Legacy fields conflict with new decision model | Use Data Dictionary v2.0 as source of truth |
| AI output is stored without validation context | Include validation and AI run metadata |
| CRM cannot explain routing later | Store decisions, reasons and handover snapshots |
| Sensitive data is over-logged | Apply data minimization from POL-008 |

---

## Open Questions

- Should `lead_facts.fact_value` be text, JSON or split by value type?
- Should decision policy references be stored as JSON arrays or separate relation records?
- Should audit logging be generic from day one or gradually expanded?
- Should model enums be implemented with PHP enums or config arrays in MVP?

These questions should be resolved in implementation issues before coding begins.

---

## Proposed Issues

Initial issue candidates:

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

## Dependencies

EPIC-B depends on:

- EPIC-A Laravel Foundation
- Data Dictionary v2.0
- Policy Pack v1.0 Draft

EPIC-B enables:

- EPIC-C Digital First Conversation
- EPIC-D AI Screening Service
- EPIC-E Decision and Routing Engine
- EPIC-F CRM Lead Board and Detail
- EPIC-G Human Review Queue
- EPIC-H Security, Audit and Testing

---

## Implementation Sequence

Recommended sequence:

```text
1. Confirm data model approach
2. Implement leads
3. Implement conversation storage
4. Implement facts and missing information
5. Implement scores and decisions
6. Implement reviews and handover snapshots
7. Implement AI run logging
8. Implement audit logs
9. Add relationship and migration tests
```

---

## Future Extensions

Future versions may add:

- document metadata and secure upload tables
- consent and authorization records
- active case lifecycle tables
- policy version tables
- prompt version tables
- communication event tables
- reporting views

---

## Definition of Done

```text
Core MVP migrations exist
Core Eloquent models exist
Relationships are implemented
Model tests pass
Data Dictionary v2.0 is traceable
No real data is included
No future-scope flows are accidentally implemented
```
