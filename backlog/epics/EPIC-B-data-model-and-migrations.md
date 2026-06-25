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

This epic enables the platform to:

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

## Bounded Context

```text
Data Foundation Context
```

The Data Foundation Context owns the persistence model for the MVP platform.

It provides the database structures that conversation, AI screening, decision routing, CRM and audit layers depend on.

---

## Domain Responsibilities

### Owns

```text
core lead data persistence
conversation message persistence
fact and confirmation-state persistence
missing information persistence
score persistence
decision persistence
review requirement persistence
CRM handover snapshot persistence
AI run logging persistence
audit log persistence
```

### Must never own

```text
conversation flow behavior
AI prompt execution
scoring algorithm behavior
routing policy evaluation
CRM presentation UI
human reviewer judgment
```

### Inbound Events

```text
LeadCreated
ConversationMessageStored
FactCandidateExtracted
ScoreCalculated
DecisionRecorded
HumanReviewRequired
AiRunCompleted
AuditEventRequested
```

### Outbound Events

```text
CoreDataModelCreated
LeadPersistenceReady
DecisionPersistenceReady
AuditPersistenceReady
```

### Public Contracts

```text
LeadRepository
ConversationMessageRepository
LeadFactRepository
LeadDecisionRepository
LeadReviewRepository
AuditLogRepository
```

### Internal Contracts

```text
MigrationDefinition
ModelRelationshipDefinition
EnumValueDefinition
FakeDataGuardrail
```

---

## Domain Model

### Entities

```text
Lead
LeadConversation
LeadFact
LeadMissingInformation
LeadScore
LeadDecision
LeadReview
LeadHandoverSnapshot
AiRun
AuditLog
```

### Value Objects

```text
LeadStatus
FactKey
FactSourceType
ConfirmationState
ConfidenceValue
DecisionId
PolicyId
RoutingOutcome
ReviewReason
AuditAction
```

### Domain Services

```text
DataModelConsistencyService
FakeDataGuardrailService
```

### Application Services

```text
CreateLeadRecord
StoreConversationMessage
StoreLeadFact
RecordLeadDecision
RecordAuditEvent
```

### Events

```text
LeadRecordCreated
ConversationMessagePersisted
LeadFactPersisted
LeadDecisionPersisted
AuditLogRecorded
```

These names are planning suggestions and may be refined during implementation.

---

## Architecture Decision Mapping

| Architecture Artifact | Implementation Meaning |
|---|---|
| docs/12-data-dictionary.md | Primary source for MVP tables, fields and states |
| docs/03-scoring-engine.md | Defines score persistence as decision input |
| docs/04-conversation-engine.md | Defines conversation and message storage needs |
| docs/05-crm-workflow.md | Defines CRM handover data needs |
| DEC-003 Confirm Understanding | Requires confirmation state on facts |
| DEC-005 Routing Recommendation | Requires routing outcome persistence |
| DEC-006 Human Review | Requires review reason persistence |
| DEC-007 Information Quality | Requires missing information persistence |
| DEC-013 CRM Assignment | Requires CRM handover data |
| POL-003 Confidence Policy | Requires confidence values and bands |
| POL-008 AI Usage Policy | Requires AI run validation and logging |

---

## Proposed Implementation Components

Potential Laravel components:

```text
Lead model and migration
LeadConversation model and migration
LeadFact model and migration
LeadMissingInformation model and migration
LeadScore model and migration
LeadDecision model and migration
LeadReview model and migration
LeadHandoverSnapshot model and migration
AiRun model and migration
AuditLog model and migration
Model factories with fake-only data
Repository classes or query services where useful
```

These names are suggestions and may be refined during implementation.

---

## Scope

This epic includes data structures for:

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

This epic does not include:

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

## Data Impact

This epic creates the core MVP database structures.

Minimum tables:

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

## API Boundaries

EPIC-B should not expose public APIs directly.

It should provide Eloquent models, migrations and possibly repository/query boundaries that later API layers can use.

Public API behavior belongs to later epics.

---

## Queue and Event Considerations

No queue processing is required for core migrations.

Future events may be emitted when records are created or updated, but MVP should keep persistence simple unless later epics require events.

---

## Cache Strategy

No business caching should be introduced in EPIC-B.

Database structures should remain the source of truth.

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

## Security and Privacy Considerations

This epic must ensure:

- no real data is added as seed data
- test fixtures use fake examples only
- sensitive text fields are clearly identified
- AI run logging avoids unnecessary sensitive data
- audit logs do not expose data publicly
- storage of user-facing messages is intentional and traceable
- factories and seeders do not contain real names, CPR numbers, emails or case details

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
- Should repositories be introduced immediately or only when query complexity requires them?

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

This epic depends on:

- EPIC-A Laravel Foundation
- Data Dictionary v2.0
- Policy Pack v1.0 Draft

This epic enables:

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
