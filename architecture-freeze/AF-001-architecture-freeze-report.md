# AF-001 - Architecture Freeze Report

Version: 1.0 Draft
Status: Draft
Owner: Enterprise Architecture / Product
Domain: Architecture Freeze / Governance
Related: README.md, DOC-003 Architecture Index, REV-001 Repository Consistency Review, ADR-000 Enterprise Architecture Principles

## Purpose

This report documents the first formal Architecture Freeze for ErstatningsHjaelp.

The purpose is to declare the current architecture baseline and define what is stable enough to build from, what remains under review, and what must happen before implementation begins.

---

## Architecture Freeze Scope

This freeze covers the current non-code architecture baseline for:

- product constitution
- repository structure
- experience architecture
- conversation flow
- pattern library
- decision architecture
- scoring model
- CRM workflow
- data dictionary
- routing architecture
- sprint and backlog strategy
- serveradmin handoff

This freeze does not mean the product is feature-complete.

It means the current architecture direction is stable enough to become the basis for policies and implementation backlog.

---

## Baseline Documents

### Foundation Pack

```text
docs/foundation/DOC-000-product-constitution.md
docs/foundation/DOC-001-architecture-overview.md
docs/foundation/DOC-002-repository-constitution.md
docs/foundation/DOC-003-architecture-index.md
adr/ADR-000-enterprise-architecture-principles.md
```

### Experience Pack

```text
docs/experience/DOC-020-experience-architecture.md
docs/experience/DOC-021-digital-first-conversation-flow.md
docs/experience/DOC-022-conversation-patterns.md
docs/experience/DOC-023-tone-of-voice-guide.md
```

### Pattern Library

```text
patterns/PAT-001-speak-human-store-structured.md
patterns/PAT-002-understanding-before-questioning.md
patterns/PAT-003-confirm-before-classify.md
patterns/PAT-004-never-ask-twice.md
patterns/PAT-005-explain-why.md
patterns/PAT-006-smart-skip.md
patterns/PAT-007-one-thought-per-screen.md
patterns/PAT-008-respectful-guide-away.md
patterns/PAT-009-human-review-bridge.md
```

### Decision Pack

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

### Updated Core Documents

```text
README.md
docs/serveradmin-handoff-plan.md
docs/03-scoring-engine.md
docs/04-conversation-engine.md
docs/05-crm-workflow.md
docs/12-data-dictionary.md
docs/27-sprint-backlog-masterplan.md
docs/31-acceptance-and-routing-architecture.md
reviews/REV-001-repository-consistency-review.md
```

---

## Freeze Decision

The current architecture direction is accepted as the working baseline for the next phase.

The baseline is:

```text
Digital-first intake
Human language first
Structured data internally
Scores as decision input
Decisions as auditable records
Policies before implementation logic
Human review when uncertainty or sensitivity requires it
CRM as decision handover surface
GitHub as single source of truth
```

---

## Important Architectural Decisions

### 1. AI assists, humans decide where required

AI may assist with understanding, structuring, summarizing, scoring and recommending.

AI must not make final legal decisions or override policy-required human review.

### 2. Scores do not directly decide outcomes

Scores are internal signals.

Routing must also consider confidence, information quality, policy and review triggers.

### 3. MitID is not the default next step

Identity verification must only occur when a clear next process step requires it.

### 4. Documents are not forced too early

Document readiness is tracked, but active document upload and analysis are not MVP 0.1 defaults.

### 5. CRM must explain why

CRM must show routing reason, review reason, confirmed facts, inferred facts, missing information and suggested next action.

### 6. Respectful guide-away is required

Users must not see raw rejection labels or internal scoring outcomes.

---

## Current Implementation Status

```text
Implementation started: no
Ready for implementation: not yet
Ready for Policy Pack: yes
Ready for traceable backlog: after Policy Pack
Ready for ServerAdmin coding: no
```

Implementation should not start from old PR plans alone.

---

## Remaining Work Before Implementation

Before MVP 0.1 implementation begins, the project needs:

1. Policy Pack v1.0
2. Repository Migration Map
3. Implementation Readiness Checklist
4. Updated traceable backlog under /backlog
5. Updated sprint structure under /sprints
6. ServerAdmin handoff updated to Ready for implementation = yes

---

## Documents Still Under Review

The following older documents may still contain useful details but are not the highest source of truth until reviewed:

```text
docs/02-ai-engine.md
docs/08-api-specification.md
docs/09-security-gdpr.md
docs/10-testing-strategy.md
docs/18-architecture-governance.md
github/Epic-*.md
github/PR-*.md
```

---

## Governance Rule

Any new implementation issue must reference relevant architecture artifacts.

Preferred traceability chain:

```text
DOC / ADR
↓
PAT / DEC / POL
↓
Epic
↓
Issue
↓
PR
↓
Test
```

---

## Freeze Outcome

Architecture Freeze v1.0 is conditionally accepted as the working baseline.

Conditionally accepted means:

- core architecture direction is stable
- critical contradictions have been reduced
- implementation must still wait for Policy Pack and traceable backlog
- old documents must not be treated as current if they conflict with this baseline

---

## Next Step

Create:

```text
AF-002 Repository Migration Map
AF-003 Implementation Readiness Checklist
```

Then create Policy Pack v1.0.
