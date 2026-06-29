# Implementation Master Index

Version: 1.2 Draft
Status: Active
Owner: Product / Engineering / Delivery
Domain: Implementation Handoff

## Purpose

This document is the main entry point for implementing the MVP.

It links the architecture, specifications, developer handbook, business test cases, backlog, epics, sprints, issue files, JSON contracts, AI prompts, API readiness packs, MVP start packs and readiness reviews into one practical implementation map.

## Implementation Rule

Implementation should start from the backlog and follow the sprint order.

Developers should not implement later sprint functionality before the required foundation, data model, services and tests exist.

## Core Reading Order

New developers should read these documents first:

```text
README.md
docs/IMPLEMENTATION-MASTER-INDEX.md
docs/foundation/DOC-000-product-constitution.md
docs/foundation/DOC-001-architecture-overview.md
docs/foundation/DOC-002-repository-constitution.md
docs/foundation/DOC-003-architecture-index.md
architecture-freeze/AF-003-implementation-readiness-checklist.md
```

## Specification Packs

### API Specification

```text
docs/specifications/SPEC-001-api-overview.md
docs/specifications/SPEC-002-conversation-api.md
docs/specifications/SPEC-003-screening-and-decision-api.md
docs/specifications/SPEC-004-crm-and-review-api.md
docs/specifications/SPEC-005-audit-and-health-api.md
```

### Database Specification

```text
docs/specifications/SPEC-006-database-overview.md
docs/specifications/SPEC-007-lead-core-schema.md
docs/specifications/SPEC-008-conversation-and-facts-schema.md
docs/specifications/SPEC-009-screening-decision-review-schema.md
docs/specifications/SPEC-010-audit-and-supporting-schema.md
```

## Implementation Readiness Reviews

```text
reviews/REV-002-implementation-readiness-and-duplication-audit.md
reviews/REV-003-database-readiness-review.md
```

Implementation rule:

```text
Use REV-002 before creating new planning documents.
Use REV-003 before implementing Sprint 001 database migrations.
```

## JSON Contracts

```text
docs/contracts/CONTRACT-001-json-contracts-overview.md
docs/contracts/CONTRACT-002-conversation-message-contract.md
docs/contracts/CONTRACT-003-fact-extraction-contract.md
docs/contracts/CONTRACT-004-screening-output-contract.md
docs/contracts/CONTRACT-005-decision-output-contract.md
docs/contracts/CONTRACT-006-crm-handover-contract.md
docs/contracts/CONTRACT-007-human-review-contract.md
```

Implementation rule:

```text
Use these contracts for Laravel DTOs, validators, resources, AI output validation and feature test expectations.
```

## AI Prompt Pack

```text
docs/prompts/PROMPT-001-ai-prompt-pack-overview.md
docs/prompts/PROMPT-002-conversation-prompt.md
docs/prompts/PROMPT-003-fact-extraction-prompt.md
docs/prompts/PROMPT-004-screening-prompt.md
docs/prompts/PROMPT-005-decision-support-prompt.md
docs/prompts/PROMPT-006-summary-and-handover-prompt.md
docs/prompts/PROMPT-007-human-review-support-prompt.md
```

Implementation rule:

```text
Backend-facing AI prompts must return valid JSON matching the relevant JSON contract.
AI output must be validated before it is mapped to database records or decisions.
```

## API Implementation Readiness Pack

This pack translates the API specifications, JSON contracts and prompt pack into concrete Laravel implementation guidance.

```text
docs/api/API-READINESS-001-endpoint-implementation-map.md
docs/api/API-READINESS-002-request-resource-dto-map.md
docs/api/API-READINESS-003-first-vertical-slice-plan.md
docs/api/API-READINESS-004-error-and-response-standard.md
docs/api/API-READINESS-005-controller-service-boundary-rules.md
```

Implementation rule:

```text
Use API-READINESS-001 to API-READINESS-005 before building the first conversation, screening, decision, CRM or review endpoint.
```

## MVP Implementation Start Pack

This pack should be used immediately after ServerAdmin has added or verified the Laravel 12 baseline.

```text
docs/mvp-start/MVP-START-001-laravel-baseline-handoff-checklist.md
docs/mvp-start/MVP-START-002-sprint-000-implementation-order.md
docs/mvp-start/MVP-START-003-first-feature-test-plan.md
docs/mvp-start/MVP-START-004-fake-ai-provider-implementation-plan.md
```

Implementation rule:

```text
Use MVP-START-001 before domain coding begins.
Use MVP-START-002 for Sprint 000 execution order.
Use MVP-START-003 and MVP-START-004 for the first tested vertical slice.
```

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

## Business Test Case Library

The business test case library is the QA baseline for validating MVP behavior during implementation.

```text
test-cases/TC-000-test-case-catalog.md
test-cases/TC-100-business-test-library-complete.md
```

Completed groups:

```text
TC-001 to TC-020   Basic intake flows
TC-021 to TC-040   Guide-away and weak-case flows
TC-041 to TC-060   Human review and uncertainty flows
TC-061 to TC-080   Missing information and Smart Skip flows
TC-081 to TC-100   Edge, privacy, audit and fallback flows
```

Implementation rule:

```text
For each feature or sprint, read the relevant business test cases before writing or updating automated tests.
```

## Backlog Index

```text
backlog/BACKLOG-000-traceable-backlog-index.md
backlog/issues/ISSUE-000-issue-catalog.md
```

## Sprint Order

```text
SPRINT-000 Foundation                 ISSUE-001 to ISSUE-007
SPRINT-001 Data Model                 ISSUE-008 to ISSUE-020
SPRINT-002 Conversation + Screening   ISSUE-021 to ISSUE-044
SPRINT-003 Decision Engine            ISSUE-045 to ISSUE-056
SPRINT-004 CRM + Human Review         ISSUE-057 to ISSUE-077
SPRINT-005 Security + Testing         ISSUE-078 to ISSUE-090
```

Sprint documents:

```text
sprints/SPRINT-000-foundation.md
sprints/SPRINT-001-data-model.md
sprints/SPRINT-002-conversation.md
sprints/SPRINT-003-decision-engine.md
sprints/SPRINT-004-crm-handover.md
sprints/SPRINT-005-security-audit-testing.md
```

## Epic Map

```text
backlog/epics/EPIC-A-laravel-foundation.md
backlog/epics/EPIC-B-data-model-and-migrations.md
backlog/epics/EPIC-C-digital-first-conversation.md
backlog/epics/EPIC-D-ai-screening-service.md
backlog/epics/EPIC-E-decision-and-routing-engine.md
backlog/epics/EPIC-F-crm-lead-board-and-detail.md
backlog/epics/EPIC-G-human-review-queue.md
backlog/epics/EPIC-H-security-audit-and-testing.md
```

## Policy, Pattern and Decision References

Developers should use these folders when implementation choices are unclear:

```text
policies/
patterns/
decisions/
adr/
reviews/
architecture-freeze/
```

## Per-Sprint Working Pattern

For each sprint:

```text
1. Read the sprint document.
2. Read the related epic.
3. Read all issue files in that sprint.
4. Read the related API and database specifications.
5. Read the relevant JSON contracts.
6. Read the relevant AI prompts when AI behavior is implemented.
7. Read the API readiness pack when API endpoints are implemented.
8. Read the MVP start pack when starting Sprint 000 or the first vertical slice.
9. Read the relevant developer handbook guide.
10. Read the relevant business test cases.
11. Implement issues in order.
12. Add or update tests.
13. Update documentation if assumptions change.
14. Run the test suite.
15. Complete the sprint closeout issue.
```

## Non-Negotiable Rules

- Use fake data only in tests, factories, seeders and examples.
- Do not commit real secrets.
- Keep controllers thin.
- Put business behavior in services.
- Keep AI output validated before use.
- Keep AI-created facts unconfirmed by default.
- Store decisions separately from scores.
- Preserve auditability for important internal actions.
- Use business test cases as the expected behavior baseline.
- Start with Fake AI for the first vertical slice.
- Do not build MitID, power of attorney signing or document analysis before the foundation and first screening slice work.

## Implementation Start Point

The implementation should start with:

```text
docs/mvp-start/MVP-START-001-laravel-baseline-handoff-checklist.md
docs/mvp-start/MVP-START-002-sprint-000-implementation-order.md
sprints/SPRINT-000-foundation.md
backlog/issues/ISSUE-001-confirm-laravel-version-and-foundation-constraints.md
```

## First Vertical Slice Start Point

After Sprint 000 is stable, start with:

```text
docs/api/API-READINESS-003-first-vertical-slice-plan.md
docs/mvp-start/MVP-START-003-first-feature-test-plan.md
docs/mvp-start/MVP-START-004-fake-ai-provider-implementation-plan.md
```

## Definition of Done

```text
master index exists
specification packs linked
readiness reviews linked
JSON contracts linked
AI prompt pack linked
API readiness pack linked
MVP start pack linked
developer handbook linked
business test cases linked
backlog and sprint order linked
implementation rules documented
```
