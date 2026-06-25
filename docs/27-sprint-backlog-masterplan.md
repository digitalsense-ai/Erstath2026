# 27 - Sprint Backlog Masterplan v2.0

Status: Updated for Enterprise Architecture Baseline
Domain: Backlog / Sprints / Governance
Related: README.md, docs/serveradmin-handoff-plan.md, reviews/REV-001-repository-consistency-review.md, DOC-003 Architecture Index, ADR-000 Enterprise Architecture Principles, DEC-000 Decision Catalog

## Purpose

This document defines the sprint and backlog strategy for ErstatningsHjaelp after the Enterprise Architecture Baseline.

The previous version focused mainly on MVP 0.1 implementation issues and future candidate sprints.

This version introduces a required consolidation phase before implementation:

```text
Architecture Baseline
↓
Repository Consistency Updates
↓
Policy Pack
↓
Traceable Implementation Backlog
↓
MVP 0.1 Implementation
```

The goal is to ensure that ServerAdmin and future developers implement from a consistent and traceable repository.

---

## Current Status

```text
Current phase: Repository Consistency and Architecture Freeze preparation
Implementation status: Not started
Ready for PR-001: Not yet
Ready for repository consistency work: yes
```

MVP 0.1 remains the active implementation target, but the old PR plan must not be used alone.

Implementation must reference the new architecture baseline.

---

## Backlog Strategy

The project should now be managed as:

```text
Product Constitution
↓
Architecture Pack
↓
Pattern / Decision / Policy
↓
Epic
↓
Issue
↓
PR
↓
Test
↓
Release
```

Every implementation issue should reference relevant architecture artifacts where possible.

---

## Architecture Baseline References

Implementation backlog must reference these packs:

### Foundation

```text
docs/foundation/DOC-000-product-constitution.md
docs/foundation/DOC-001-architecture-overview.md
docs/foundation/DOC-002-repository-constitution.md
docs/foundation/DOC-003-architecture-index.md
adr/ADR-000-enterprise-architecture-principles.md
```

### Experience

```text
docs/experience/DOC-020-experience-architecture.md
docs/experience/DOC-021-digital-first-conversation-flow.md
docs/experience/DOC-022-conversation-patterns.md
docs/experience/DOC-023-tone-of-voice-guide.md
patterns/PAT-001 through PAT-009
```

### Decision

```text
decisions/DEC-000-decision-catalog.md
decisions/DEC-001-start-conversation.md
decisions/DEC-002-empathy-reflection.md
decisions/DEC-003-confirm-understanding.md
decisions/DEC-004-smart-skip-decision.md
decisions/DEC-005-routing-recommendation.md
decisions/DEC-006-human-review.md
decisions/DEC-007-information-quality.md
decisions/DEC-008-acceptance-policy.md
decisions/DEC-009-identity-gate.md
decisions/DEC-010-consent-gate.md
decisions/DEC-011-document-readiness.md
decisions/DEC-012-guide-elsewhere.md
decisions/DEC-013-crm-assignment.md
```

---

## Phase AF-001 - Repository Consistency

### Goal

Update the old MVP documents so they do not conflict with the new architecture baseline.

### Status

In progress.

### Completed updates

```text
README.md
docs/serveradmin-handoff-plan.md
docs/03-scoring-engine.md
docs/04-conversation-engine.md
docs/05-crm-workflow.md
docs/12-data-dictionary.md
docs/31-acceptance-and-routing-architecture.md
```

### Remaining consistency tasks

```text
review docs/02-ai-engine.md
review docs/08-api-specification.md
review docs/09-security-gdpr.md
review docs/10-testing-strategy.md
review docs/18-architecture-governance.md
review github/Epic-*.md
review github/PR-*.md
```

### Definition of Done

```text
Architecture Index is current
README points to new baseline
ServerAdmin handoff points to new baseline
critical old docs are updated
legacy docs are classified as current, under review, superseded or archived
implementation warning is removed only when backlog is updated
```

---

## Phase AF-002 - Policy Pack

### Goal

Create formal policy documents that implementation can reference.

### Planned policy documents

```text
POL-001 Acceptance Policy
POL-002 Routing Policy
POL-003 Confidence Policy
POL-004 Identity and Consent Policy
POL-005 Human Review Policy
POL-006 Document Collection Policy
POL-007 Communication Policy
POL-008 AI Usage Policy
```

### Definition of Done

```text
policies exist in /policies
policies reference DEC and PAT documents
routing and acceptance rules are explicit
human review triggers are documented
identity, consent and document rules are separated
```

---

## Phase AF-003 - Traceable MVP Backlog

### Goal

Rebuild MVP 0.1 implementation work into traceable epics and issues.

The old GitHub PR plans may be reused, but they must be updated to reference:

```text
DOC IDs
ADR IDs
PAT IDs
DEC IDs
POL IDs
Data Dictionary v2
```

### Target backlog structure

```text
/backlog
  /epics
  /issues
/sprints
```

The old `/github` planning folder should be migrated gradually.

### Required epic areas

```text
Epic A - Laravel Foundation
Epic B - Data Model and Migrations
Epic C - Digital First Conversation
Epic D - AI Screening Service
Epic E - Decision and Routing Engine
Epic F - CRM Lead Board and Detail
Epic G - Human Review Queue
Epic H - Security, Audit and Testing
```

---

## Updated MVP 0.1 Sprint Plan

### Sprint 0 - Laravel and Repository Foundation

Goal:

```text
Install Laravel foundation and establish repository development baseline.
```

Must reference:

```text
DOC-002 Repository Constitution
ADR-000 Enterprise Architecture Principles
```

Candidate work:

```text
Laravel installation
.env.example
basic project structure
basic CI
coding standards
safe dummy data rules
```

---

### Sprint 1 - Data Model Foundation

Goal:

```text
Implement core data structures needed for digital conversation, scoring, decisions and CRM handover.
```

Must reference:

```text
docs/12-data-dictionary.md
DEC-000 Decision Catalog
DEC-013 CRM Assignment
```

Candidate work:

```text
leads
lead_conversations
lead_facts or compatible lead_entities
lead_missing_information
lead_scores
lead_decisions
lead_reviews
lead_handover_snapshots
ai_runs
audit_logs
```

---

### Sprint 2 - Digital First Conversation

Goal:

```text
Implement first conversation flow with free text, empathy reflection, confirmation and guided screening.
```

Must reference:

```text
DOC-020 Experience Architecture
DOC-021 Digital First Conversation Flow
DOC-022 Conversation Patterns
DOC-023 Tone of Voice Guide
PAT-001 through PAT-007
DEC-001 through DEC-004
```

Candidate work:

```text
screening start endpoint
conversation state
free text input
AI interpretation
empathy reflection
confirmation/correction state
Smart Skip question selection
message persistence
```

---

### Sprint 3 - Scoring and Decision Engine

Goal:

```text
Implement internal scores as decision inputs and create routing recommendations.
```

Must reference:

```text
docs/03-scoring-engine.md
DEC-005 Routing Recommendation
DEC-006 Human Review
DEC-007 Information Quality
DEC-008 Acceptance Policy Decision
```

Candidate work:

```text
LeadScoringService
confidence handling
information quality decision
routing decision records
human review triggers
lead_decisions persistence
```

---

### Sprint 4 - CRM Lead Board and Handover

Goal:

```text
Build internal CRM views based on structured handover, not only raw scores.
```

Must reference:

```text
docs/05-crm-workflow.md
docs/12-data-dictionary.md
DEC-013 CRM Assignment
PAT-009 Human Review Bridge
```

Candidate work:

```text
internal authentication
lead list API
lead detail API
CRM lead board
CRM lead detail page
review reason display
confirmed/inferred facts display
missing information display
routing recommendation display
```

---

### Sprint 5 - Security, Audit and Testing Foundation

Goal:

```text
Ensure the MVP has safe data handling, auditability and core test coverage.
```

Must reference:

```text
ADR-000 Enterprise Architecture Principles
docs/09-security-gdpr.md
docs/10-testing-strategy.md
docs/12-data-dictionary.md
```

Candidate work:

```text
AI output validation tests
conversation flow tests
decision engine tests
CRM access tests
audit log foundation
safe dummy fixtures
no real data checks
```

---

## Future Sprint Ladder

Future sprint candidates remain useful, but should be revalidated after MVP 0.1.

### MVP 0.2 candidates

```text
Assignment and internal notes
Readiness and authorization tracking
Document readiness
Advanced CRM and reporting
```

### MVP 0.3 candidates

```text
Case lifecycle foundation
Identity readiness
Case intelligence preparation
Expanded audit and governance controls
Notifications and operational alerts
Admin and operations console
```

### MVP 1.0 candidates

```text
Full stabilization
Launch readiness
Policy versioning
Advanced analytics
Document architecture
Trust architecture expansion
```

---

## Activation Rules

Do not activate implementation from old PR plans until:

```text
Repository consistency phase is complete
Policy Pack exists or MVP policies are explicitly accepted as temporary
Data Dictionary v2 is accepted as implementation source
Updated epics and issues exist under /backlog
ServerAdmin handoff says Ready for implementation = yes
```

Do not activate identity, consent, document upload or active case lifecycle before their decision gates and policies are implemented.

---

## Issue Standard

Every implementation issue should include:

```text
Purpose
Related architecture
Related decisions
Related patterns
Related policies
Data impact
Acceptance criteria
Test requirements
Out of scope
```

---

## PR Standard

Every PR should state:

```text
What changed
Why it changed
Related issue
Related architecture or policy
Tests performed
Security/data considerations
```

---

## Definition of Ready for Implementation

Current status:

```text
Ready for repository consistency work = yes
Ready for implementation = not yet
```

Ready for implementation requires:

```text
critical old docs updated
Policy Pack created
updated backlog/epics created
updated backlog/issues created
Sprint 0-5 defined with architecture references
ServerAdmin handoff updated to Ready for implementation = yes
```

---

## Governance Rule

The backlog must not become disconnected from the architecture.

If an issue cannot reference an architecture document, decision card, pattern or policy, it should be reviewed before implementation.

---

## Product Conclusion

The project has enough product architecture to move toward implementation, but the repository must first be made internally consistent.

The next correct step is not more feature ideation.

The next correct step is:

```text
finish consistency updates
create Policy Pack
create traceable implementation backlog
then begin MVP 0.1 implementation
```
