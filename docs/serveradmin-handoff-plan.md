# ServerAdmin Handoff Plan v4.0

## Purpose

This document is the primary handoff guide for ServerAdmin or any developer who will implement ErstatningsHjaelp.

It has been updated after the creation of the Enterprise Architecture Baseline.

The goal is that implementation can begin from the current GitHub architecture, not from outdated chat history or older MVP-only documents.

---

## 1. Current Status

```text
Project: ErstatningsHjaelp
Current phase: Enterprise Architecture Baseline / Repository Consistency Review
Implementation status: Not started
ServerAdmin status: Awaiting updated implementation backlog
Ready for PR-001: Not yet - repository consistency updates must be completed first
```

The repository has moved from an early MVP planning structure into a domain-based architecture structure.

Implementation should not begin from the old PR plan alone.

---

## 2. Start Here

Start with the architecture index:

```text
docs/foundation/DOC-003-architecture-index.md
```

Then read:

```text
README.md
reviews/REV-001-repository-consistency-review.md
docs/foundation/DOC-000-product-constitution.md
docs/foundation/DOC-001-architecture-overview.md
docs/foundation/DOC-002-repository-constitution.md
adr/ADR-000-enterprise-architecture-principles.md
```

---

## 3. Important Warning

The repository still contains older flat documents under `docs/01-...` to `docs/32-...`.

These documents may contain useful implementation detail, but some of them are now partially superseded by the new architecture baseline.

Do not treat old documents as final implementation truth until they have been updated according to:

```text
reviews/REV-001-repository-consistency-review.md
```

---

## 4. Architecture Baseline

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

---

## 5. Current Product Flow

The current target product flow is:

```text
Landing page
↓
Digital first conversation
↓
Empathy reflection
↓
Confirm or correct understanding
↓
Guided screening with Smart Skip
↓
Information quality decision
↓
Routing recommendation
↓
Human review when required
↓
Identity / consent / documents only when relevant
↓
CRM assignment and handover
```

---

## 6. AI Responsibility Model

AI may:

- summarize user descriptions
- extract facts
- infer possible meaning
- detect missing information
- suggest next questions
- support internal scores
- recommend routing
- prepare CRM handover summaries

AI must not:

- promise outcomes
- make final legal decisions
- expose raw scores or internal labels to users
- override policy-required human review
- replace human review in sensitive or uncertain situations

---

## 7. MVP 0.1 Scope Still Applies

MVP 0.1 remains focused on proving the core screening and CRM workflow.

MVP 0.1 should include:

```text
Laravel foundation
Core database migrations
Core Eloquent models
Prompt Repository
AI screening service
AI JSON validation
Scoring support
Screening start endpoint
Continue screening endpoint
Internal authentication
Lead list API
Lead detail API
CRM lead board
Lead status updates
Testing foundation
Security/compliance foundation
```

MVP 0.1 should not include:

```text
Advanced identity integrations
Authorization signing flows
Active file upload implementation
Advanced document analysis
Automated final decision
Automated external submission
Production deployment
```

---

## 8. Existing PR Plans

The old PR plans still exist under:

```text
github/PR-001-Laravel-Foundation.md
github/PR-002-Core-Database-Migrations.md
github/PR-003-Core-Eloquent-Models.md
github/PR-004-Prompt-Repository.md
github/PR-005-AiScreeningService.md
github/PR-006-AI-JSON-Validator.md
github/PR-007-LeadScoringService.md
github/PR-008-Screening-Start-Endpoint.md
github/PR-009-Continue-Screening-Endpoint.md
```

These should be treated as early implementation plans, not final current sprint instructions.

Before ServerAdmin starts PR-001, the implementation backlog should be updated to reference:

- DOC IDs
- DEC IDs
- PAT IDs
- future POL IDs
- updated data dictionary
- updated CRM workflow

---

## 9. Files That Must Be Updated Before Implementation

The following files are high priority for consistency updates:

```text
docs/27-sprint-backlog-masterplan.md
docs/03-scoring-engine.md
docs/04-conversation-engine.md
docs/05-crm-workflow.md
docs/12-data-dictionary.md
docs/31-acceptance-and-routing-architecture.md
```

Optional but recommended:

```text
docs/02-ai-engine.md
docs/08-api-specification.md
docs/09-security-gdpr.md
docs/10-testing-strategy.md
docs/18-architecture-governance.md
```

---

## 10. Lead Status Model

The old MVP statuses may still be used as a starting point:

```text
NEW
SCREENING
AWAITING_INFO
QUALIFIED
REVIEW
REJECTED
CLOSED
```

However, CRM implementation must now also support decision handover fields such as:

- routing recommendation
- routing reason
- information quality state
- human review reason
- identity gate outcome
- consent gate outcome
- document readiness state
- confirmed facts
- inferred facts
- unresolved facts
- user-facing message shown

These fields must be reconciled in the data dictionary before implementation.

---

## 11. Scoring and Routing Status

The three-score model remains relevant:

```text
case_strength
information_quality
commercial_value
```

But scoring must now be treated as one input into the Decision Pack, not as the sole routing authority.

Routing should follow:

```text
Information
↓
Confidence
↓
Policy
↓
Decision
↓
Explanation
↓
Action
↓
Audit
```

See:

```text
decisions/DEC-005-routing-recommendation.md
decisions/DEC-007-information-quality.md
decisions/DEC-008-acceptance-policy.md
```

---

## 12. Security Rules

From the beginning:

```text
Do not commit secrets
Do not commit real personal data
Do not commit real case material
Use dummy fixtures only
Protect all internal CRM routes
Keep public endpoints minimal
Validate AI output before storing official assessment data
Avoid unnecessary raw content in logs
Do not expose raw AI/debug payloads publicly
```

Sensitive process steps must also follow:

```text
PAT-005 Explain Why
DEC-009 Identity Gate
DEC-010 Consent Gate
```

---

## 13. What ServerAdmin Should Do First

Do not start by blindly following the old PR plan.

First complete the repository consistency updates listed in section 9.

After that, create an updated implementation backlog that maps:

```text
Architecture -> Decision -> Policy -> Epic -> Issue -> Code -> Test
```

Only then start Laravel foundation implementation.

---

## 14. Definition of Ready for Implementation

```text
README updated = yes
Architecture Index exists = yes
Foundation Pack exists = yes
Experience Pack exists = yes
Pattern Library exists = yes
Decision Pack exists = yes
Repository Consistency Review exists = yes
Critical old docs updated = in progress
Policy Pack exists = no
Updated implementation backlog exists = no
```

Current status:

```text
Ready for implementation = not yet
Ready for repository consistency work = yes
```

---

## 15. Final Handoff Note

The project is not blocked by missing ideas.

The project is now in consolidation mode.

The next correct step is to reconcile the old MVP planning documents with the new enterprise architecture baseline, then produce an updated implementation backlog.

Final instruction:

```text
Do not expand scope.
Do not implement from outdated documents.
Follow the Architecture Index.
Update the critical old documents.
Create an implementation backlog with traceability.
Then begin implementation.
```
