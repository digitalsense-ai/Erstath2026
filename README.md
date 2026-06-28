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

---

## Current Project Status

```text
Current phase: Implementation Preparation
Implementation status: Backlog, specifications and business test cases completed; coding not started
ServerAdmin status: Ready for implementation handoff using the Implementation Master Index
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
- Developer Handbook from DEV-001 to DEV-010
- Business Test Case Library from TC-000 to TC-100
- Implementation Master Index

---

## Technical Entry Points

```text
docs/IMPLEMENTATION-MASTER-INDEX.md
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
2. Read DEV-001, DEV-002 and DEV-010
3. Read SPEC-006 and SPEC-007
4. Read test-cases/TC-000-test-case-catalog.md
5. Start with SPRINT-000 / ISSUE-001
6. Implement sprint by sprint
```
