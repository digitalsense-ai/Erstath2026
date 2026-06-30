# ErstatningsHjaelp

ErstatningsHjaelp is an AI-assisted intake, screening, routing and CRM platform for structured case handling.

AI supports intake, structured fact extraction, scoring, routing, CRM handover and human review. AI does not make final legal or business decisions.

---

## Start Here

The main entry point for implementation is:

```text
docs/IMPLEMENTATION-MASTER-INDEX.md
```

Developers and ServerAdmin should read this file first.

For the short ServerAdmin handoff, start here:

```text
handoff/SERVERADMIN-HANDOFF-001-laravel-to-first-slice.md
```

For AI reasoning and decision intelligence, start here:

```text
docs/ai-case-brain/BRAIN-000-ai-case-brain-index.md
```

---

## Current Project Status

```text
Current phase: Implementation Preparation
Implementation status: Backlog, specifications, contracts, prompts, AI Case Brain, readiness packs and business test cases completed; Laravel baseline handoff pending
ServerAdmin status: Ready for Laravel baseline handoff and Sprint 000 foundation
```

The current implementation baseline includes:

- Foundation and Architecture documents
- Experience and Conversation design
- Pattern Library
- Decision Pack
- Policy Pack
- Architecture Freeze documents
- Traceable backlog from ISSUE-001 to ISSUE-090
- API specifications from SPEC-001 to SPEC-005
- Database specifications from SPEC-006 to SPEC-010
- JSON Contracts from CONTRACT-001 to CONTRACT-007
- AI Prompt Pack from PROMPT-001 to PROMPT-007
- AI Case Brain from BRAIN-000 to BRAIN-025
- API Implementation Readiness Pack from API-READINESS-001 to API-READINESS-005
- MVP Implementation Start Pack from MVP-START-001 to MVP-START-004
- Developer Handbook from DEV-001 to DEV-010
- Business Test Case Library from TC-000 to TC-100
- ServerAdmin Handoff note
- Implementation Master Index

---

## Technical Entry Points

```text
docs/IMPLEMENTATION-MASTER-INDEX.md
handoff/SERVERADMIN-HANDOFF-001-laravel-to-first-slice.md
docs/ai-case-brain/BRAIN-000-ai-case-brain-index.md
docs/ai-case-brain/BRAIN-023-implementation-checklist.md
docs/ai-case-brain/BRAIN-024-fake-ai-brain-scenarios.md
docs/ai-case-brain/BRAIN-025-qa-and-test-matrix.md
docs/mvp-start/MVP-START-001-laravel-baseline-handoff-checklist.md
docs/mvp-start/MVP-START-002-sprint-000-implementation-order.md
docs/api/API-READINESS-003-first-vertical-slice-plan.md
docs/foundation/DOC-003-architecture-index.md
backlog/BACKLOG-000-traceable-backlog-index.md
backlog/issues/ISSUE-000-issue-catalog.md
test-cases/TC-000-test-case-catalog.md
test-cases/TC-100-business-test-library-complete.md
```

---

## Implementation Order

```text
SPRINT-000 Foundation                         ISSUE-001 to ISSUE-007
SPRINT-001 Data Model                         ISSUE-008 to ISSUE-020
SPRINT-002 Conversation and AI Screening       ISSUE-021 to ISSUE-044
SPRINT-003 Decision Engine                     ISSUE-045 to ISSUE-056
SPRINT-004 CRM Handover and Human Review       ISSUE-057 to ISSUE-077
SPRINT-005 Security, Audit and Testing         ISSUE-078 to ISSUE-090
```

Do not implement later sprint behavior before the earlier supporting data model, services and tests exist.

---

## First Implementation Flow

```text
Laravel 12 baseline
↓
Sprint 000 Foundation
↓
First vertical slice
↓
POST /api/v1/conversations
↓
Fake AI provider
↓
AI Case Brain
↓
Feature tests
```

Use these documents for the first implementation flow:

```text
handoff/SERVERADMIN-HANDOFF-001-laravel-to-first-slice.md
docs/mvp-start/MVP-START-001-laravel-baseline-handoff-checklist.md
docs/mvp-start/MVP-START-002-sprint-000-implementation-order.md
docs/api/API-READINESS-003-first-vertical-slice-plan.md
docs/ai-case-brain/BRAIN-000-ai-case-brain-index.md
docs/ai-case-brain/BRAIN-023-implementation-checklist.md
docs/ai-case-brain/BRAIN-024-fake-ai-brain-scenarios.md
docs/ai-case-brain/BRAIN-025-qa-and-test-matrix.md
docs/mvp-start/MVP-START-003-first-feature-test-plan.md
docs/mvp-start/MVP-START-004-fake-ai-provider-implementation-plan.md
```

---

## AI Case Brain

AI Case Brain is the structured reasoning layer behind:

- domain classification
- case type classification
- missing information prioritisation
- smart question selection
- preliminary scoring
- routing
- human review escalation
- guide-away handling
- confidence and reason codes

Start here:

```text
docs/ai-case-brain/BRAIN-000-ai-case-brain-index.md
```

---

## Business Test Case Library

```text
TC-001 to TC-020   Basic intake flows
TC-021 to TC-040   Guide-away and weak-case flows
TC-041 to TC-060   Human review and uncertainty flows
TC-061 to TC-080   Missing information and Smart Skip flows
TC-081 to TC-100   Edge, privacy, audit and fallback flows
```

Use the business test cases as the expected behavior baseline when implementing features and automated tests.

---

## Data Rule

All tests, factories, seeders and examples must use fake data only.

---

## First Developer Action

```text
1. Read docs/IMPLEMENTATION-MASTER-INDEX.md
2. Read handoff/SERVERADMIN-HANDOFF-001-laravel-to-first-slice.md
3. Read MVP-START-001 and MVP-START-002
4. Confirm Laravel baseline and Sprint 000 foundation
5. Read API-READINESS-003
6. Read BRAIN-000, BRAIN-023, BRAIN-024 and BRAIN-025
7. Read MVP-START-003 and MVP-START-004
8. Build the first conversation vertical slice with Fake AI and AI Case Brain
9. Implement sprint by sprint
```
