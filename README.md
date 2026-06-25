# ErstatningsHjaelp

ErstatningsHjaelp is an AI-assisted intake, screening, routing and CRM platform for structured case handling.

The goal is not for AI to make final legal or business decisions.

The goal is to use AI responsibly to:

- receive and understand user descriptions
- reflect the user's situation in human language
- ask only relevant follow-up questions
- extract structured facts
- support internal scoring and routing
- identify missing information
- prepare CRM handover
- support human review where needed

---

## Current Project Status

```text
Current phase: Enterprise Architecture Baseline
Current priority: Repository consistency and Architecture Freeze preparation
Implementation status: Not started
ServerAdmin status: Awaiting updated handover after repository consistency review
```

The repository has moved from an early MVP documentation structure into a domain-based enterprise architecture structure.

The new architecture baseline is now defined by:

- Foundation Pack
- Experience Pack
- Pattern Library
- Decision Pack
- Repository Consistency Review

---

## Single Source of Truth

GitHub is the official project memory.

Chat discussions may be used for exploration and drafting, but only committed repository files define the official architecture, backlog, policies and implementation guidance.

Start here:

```text
docs/foundation/DOC-003-architecture-index.md
```

---

## Architecture Baseline

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

### Repository Review

```text
reviews/REV-001-repository-consistency-review.md
```

---

## Important Status Note

The repository still contains older flat documents under `docs/01-...` to `docs/32-...`.

These documents are not deleted because they still contain useful historical and implementation detail.

However, they are now under repository consistency review and must be reconciled with the new architecture baseline before implementation begins.

Use this review as the migration guide:

```text
reviews/REV-001-repository-consistency-review.md
```

---

## Target Repository Structure

```text
/docs
  /foundation
  /experience
  /decision
  /trust
  /ai
  /case
  /identity
  /document
  /communication
  /security
  /governance
  /platform

/adr
/policies
/patterns
/decisions
/backlog
  /epics
  /issues
/sprints
/reviews
/handover
/prompts
/github
```

The old `github/` folder currently contains early epics and PR planning files. These should later be migrated into `backlog/epics`, `backlog/issues` and `sprints`.

---

## Product North Star

Every user should leave ErstatningsHjaelp with more clarity, more trust and a clearer understanding of the next step than when they began.

This also applies when the platform cannot continue with a case.

---

## Core Product Flow

```text
Landing page
↓
Digital first conversation
↓
Empathy reflection
↓
Confirmation or correction
↓
Guided screening with Smart Skip
↓
Information quality check
↓
Routing recommendation
↓
Human review when needed
↓
Identity, consent or documents only when relevant
↓
CRM handover
```

---

## Core Decision Model

Important decisions follow this model:

```text
Input information
↓
Interpretation
↓
Confidence assessment
↓
Policy check
↓
Decision or recommendation
↓
User-facing explanation
↓
Next action
↓
Audit record
```

---

## AI Responsibility Model

AI may:

- summarize
- extract facts
- infer possible meaning
- suggest next questions
- support scoring
- recommend routing
- identify missing information
- prepare handover summaries

AI must not:

- promise outcomes
- make final legal decisions
- expose raw scores or internal labels to users
- override policy-required human review
- replace human review in sensitive or uncertain situations

---

## MVP 0.1 Scope

MVP 0.1 remains focused on proving the core screening and CRM workflow.

MVP 0.1 should include:

- Laravel foundation
- core database migrations
- core models
- prompt repository
- AI screening service
- AI JSON validation
- scoring support
- screening start endpoint
- continue screening endpoint
- internal authentication
- lead list and detail APIs
- CRM lead board
- lead status updates
- testing and security foundation

MVP 0.1 should not include:

- advanced identity integrations
- authorization signing flows
- active file upload implementation
- advanced document analysis
- complaint generator
- automated final decision
- automated compensation calculation
- automated external submission
- production deployment

---

## Current Implementation Warning

Do not start implementation from the old PR plan alone.

Before implementation begins, update these files according to `REV-001`:

```text
docs/serveradmin-handoff-plan.md
docs/27-sprint-backlog-masterplan.md
docs/03-scoring-engine.md
docs/04-conversation-engine.md
docs/05-crm-workflow.md
docs/12-data-dictionary.md
docs/31-acceptance-and-routing-architecture.md
```

---

## Security and Data Rules

From the beginning:

- no real CPR numbers in code, tests or seed data
- no real case material in the repository
- no API keys in GitHub
- no real local environment files committed
- use dummy data in development
- document and upload storage must not be public
- public endpoints must not expose raw AI/debug payloads
- sensitive steps require clear purpose and explanation

---

## Next Steps

1. Finish repository consistency updates.
2. Update ServerAdmin handover.
3. Update data dictionary and core MVP docs.
4. Create Policy Pack.
5. Create implementation backlog from the architecture baseline.
6. Prepare Architecture Freeze v1.0.

---

## Project Principle

Build small, but build consistently.

The first goal is not to build the full case platform.

The first goal is to prove that the platform can receive a user description, understand it respectfully, structure it internally, support responsible routing and prepare a useful CRM handover.
