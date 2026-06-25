# POL-000 - Policy Catalog

Version: 1.0 Draft
Status: Draft
Owner: Product / Governance
Domain: Policy / Catalog
Related: AF-003 Implementation Readiness Checklist, DEC-000 Decision Catalog, DOC-003 Architecture Index, ADR-000 Enterprise Architecture Principles

## Purpose

This catalog is the entry point for the ErstatningsHjaelp Policy Pack.

The Policy Pack defines the rules that sit between architecture, decisions and implementation.

Policies answer:

```text
What must the platform do or not do when a decision affects users, data, routing, trust or operations?
```

---

## Policy Pack v1.0

| Policy | Title | Purpose | Status |
|---|---|---|---|
| POL-001 | Acceptance Policy | Defines when a lead may continue, needs more information, requires review or should be respectfully guided elsewhere | Draft |
| POL-002 | Routing Policy | Defines how screening, acceptance, confidence and review signals become responsible next routes | Draft |
| POL-003 | Confidence Policy | Defines how confidence affects clarification, confirmation, routing and review | Draft |
| POL-004 | Identity and Consent Policy | Defines when identity verification, consent or authorization may be requested | Draft |
| POL-005 | Human Review Policy | Defines when human review is required and how review outcomes are handled | Draft |
| POL-006 | Document Collection Policy | Defines when documents may be discussed, requested, collected or analyzed | Draft |
| POL-007 | Communication Policy | Defines user-facing language rules and prevents exposure of internal labels | Draft |
| POL-008 | AI Usage Policy | Defines permitted and prohibited AI uses, validation, logging and governance | Draft |

---

## Policy Layer Position

The policy layer sits here:

```text
Product Constitution
↓
Architecture
↓
Experience
↓
Patterns
↓
Decisions
↓
Policies
↓
Backlog
↓
Implementation
↓
Tests
```

Policies do not replace decisions.

Policies constrain and operationalize decisions.

---

## Relationship to Decision Pack

Decision cards describe decision points.

Policies describe the rules and constraints that apply to those decisions.

Example:

```text
DEC-005 Routing Recommendation
↓
POL-002 Routing Policy
↓
Implementation issue
↓
Tests
```

---

## Relationship to Pattern Library

Patterns describe reusable experience and interaction principles.

Policies make some of those principles mandatory in specific contexts.

Example:

```text
PAT-008 Respectful Guide-Away
↓
POL-001 Acceptance Policy
POL-007 Communication Policy
↓
Guide-away implementation
```

---

## Relationship to Implementation

Implementation issues should reference relevant policies.

Every issue that affects routing, user-facing language, AI behavior, identity, consent, documents, human review or acceptance should include at least one POL reference.

---

## Required Policy References by Area

| Area | Required policies |
|---|---|
| Acceptance and guide-away | POL-001, POL-003, POL-007 |
| Routing | POL-001, POL-002, POL-003, POL-005 |
| Human review | POL-003, POL-005, POL-007 |
| Identity and consent | POL-004, POL-007 |
| Documents | POL-006, POL-004, POL-007 |
| AI output and prompts | POL-003, POL-007, POL-008 |
| CRM handover | POL-001, POL-002, POL-005, POL-008 |
| Audit and logging | POL-002, POL-003, POL-004, POL-005, POL-006, POL-008 |

---

## Policy Status Meaning

### Draft

The policy is written but not yet reviewed for production use.

### Accepted

The policy has been reviewed and may guide implementation.

### Superseded

The policy has been replaced by a newer version.

### Deprecated

The policy should no longer be used for new implementation.

---

## Current Policy Pack Decision

```text
Policy Pack v1.0 Draft: complete
Production policy approval: not complete
Implementation may reference policies as draft constraints
ServerAdmin coding should wait until backlog maps policies into issues
```

---

## Next Step

After this catalog, the repository should move to traceable backlog creation:

```text
/backlog/epics
/backlog/issues
/sprints
```

Each backlog item should reference relevant DOC, ADR, PAT, DEC and POL documents.
