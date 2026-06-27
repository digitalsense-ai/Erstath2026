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

## Start Here

The main entry point for implementation is:

```text
docs/IMPLEMENTATION-MASTER-INDEX.md
```

Developers and ServerAdmin should read this file first. It links the architecture, specifications, developer handbook, backlog, epics, sprints and issue files into one practical implementation map.

---

## Current Project Status

```text
Current phase: Implementation Preparation
Current priority: Design Freeze v1.0, handoff and Sprint 000 implementation readiness
Implementation status: Backlog and specifications completed; coding not started
ServerAdmin status: Ready for implementation handoff using the Implementation Master Index
```

The repository has moved from early MVP documentation into a structured implementation-ready architecture.

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
- Implementation Master Index

---

## Single Source of Truth

GitHub is the official project memory.

Chat discussions may be used for exploration and drafting, but only committed repository files define the official architecture, backlog, policies and implementation guidance.

Primary start point:

```text
docs/IMPLEMENTATION-MASTER-INDEX.md
```

Architecture index:

```text
docs/foundation/DOC-003-architecture-index.md
```

---

## Implementation Order

Implementation should follow the sprint order:

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

## Technical Specifications

API specifications:

```text
docs/specifications/SPEC-001-api-overview.md
docs/specifications/SPEC-002-conversation-api.md
docs/specifications/SPEC-003-screening-and-decision-api.md
docs/specifications/SPEC-004-crm-and-review-api.md
docs/specifications/SPEC-005-audit-and-health-api.md
```

Database specifications:

```text
docs/specifications/SPEC-006-database-overview.md
docs/specifications/SPEC-007-lead-core-schema.md
docs/specifications/SPEC-008-conversation-and-facts-schema.md
docs/specifications/SPEC-009-screening-decision-review-schema.md
docs/specifications/SPEC-010-audit-and-supporting-schema.md
```

---

## Developer Handbook

```text
docs/developer-handbook/DEV-001-project-setup-and-local-development.md
docs/developer-handbook/DEV-002-folder-structure-and-architecture.md
docs/developer-handbook/DEV-003-coding-standards.md
docs/developer-handbook/DEV-004-conversation-engine-guide.md
docs/developer-handbook/DEV-005-ai-integration-guide.md
docs/developer-handbook/DEV-006-decision-engine-guide.md
docs/developer-handbook/DEV-007-crm-and-human-review-guide.md
docs/developer-handbook/DEV-008-testing-standards.md
docs/developer-handbook/DEV-009-deployment-guide.md
docs/developer-handbook/DEV-010-sprint-by-sprint-implementation-guide.md
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

### Governance Packs

```text
patterns/
decisions/
policies/
architecture-freeze/
```

---

## Data and Privacy Rule

All tests, factories, seeders and examples must use fake data only.

Do not commit real names, real emails, real case details, production identifiers, copied real user messages, secrets or credentials.

---

## First Developer Action

Recommended first steps:

```text
1. Read docs/IMPLEMENTATION-MASTER-INDEX.md
2. Read DEV-001, DEV-002 and DEV-010
3. Read SPEC-006 and SPEC-007
4. Start with SPRINT-000 / ISSUE-001
5. Implement sprint by sprint
```
