# Implementation Master Index

Version: 1.5 Draft
Status: Active
Owner: Product / Engineering / Delivery
Domain: Implementation Handoff

## Purpose

This document is the main entry point for implementing the MVP.

It links the architecture, specifications, developer handbook, business test cases, backlog, epics, sprints, issue files, JSON contracts, AI prompts, AI Case Brain, Rulebook, UX Pack, API readiness packs, MVP start packs, ServerAdmin handoff notes and readiness reviews into one practical implementation map.

## Implementation Rule

Implementation should start from the backlog and follow the sprint order.

Developers should not implement later sprint functionality before the required foundation, data model, services, UX states and tests exist.

## Core Reading Order

New developers should read these documents first:

```text
README.md
docs/IMPLEMENTATION-MASTER-INDEX.md
handoff/HANDOFF-000-index.md
docs/foundation/DOC-000-product-constitution.md
docs/foundation/DOC-001-architecture-overview.md
docs/foundation/DOC-002-repository-constitution.md
docs/foundation/DOC-003-architecture-index.md
architecture-freeze/AF-003-implementation-readiness-checklist.md
```

## Handoff Pack

This pack provides the shortest path from planning to implementation.

```text
handoff/HANDOFF-000-index.md
handoff/SERVERADMIN-HANDOFF-001-laravel-to-first-slice.md
handoff/SERVERADMIN-HANDOFF-002-ai-case-brain-first-slice.md
```

Implementation rule:

```text
Use the handoff pack before ServerAdmin starts the Laravel baseline or first vertical slice implementation.
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

## AI Case Brain Pack

This pack defines the structured rule and decision intelligence layer behind intake, screening, smart questions, routing, confidence, human review and explanation.

```text
docs/ai-case-brain/BRAIN-000-ai-case-brain-index.md
docs/ai-case-brain/BRAIN-001-ai-case-brain-overview.md
docs/ai-case-brain/BRAIN-018-brain-output-model.md
docs/ai-case-brain/BRAIN-019-rule-evaluation-order.md
docs/ai-case-brain/BRAIN-020-first-50-mvp-rules-catalog.md
docs/ai-case-brain/BRAIN-022-mapping-brain-rules-to-laravel-services.md
docs/ai-case-brain/BRAIN-023-implementation-checklist.md
docs/ai-case-brain/BRAIN-024-fake-ai-brain-scenarios.md
docs/ai-case-brain/BRAIN-025-qa-and-test-matrix.md
```

Implementation rule:

```text
Use AI Case Brain before implementing conversation reasoning, screening scores, smart questions, routing, human review escalation or decision support.
Start with BRAIN-020 first 50 MVP rules rather than the full future rule library.
```

## Rulebook Pack

This pack defines the expanded long-term AI Case Brain rule library and maps rule groups to Laravel services.

```text
docs/rulebook/RULEBOOK-000-index.md
docs/rulebook/RULEBOOK-001-rulebook-principles.md
docs/rulebook/RULEBOOK-003-rule-authoring-template.md
docs/rulebook/RULEBOOK-010-domain-rules.md
docs/rulebook/RULEBOOK-090-smart-question-rules.md
docs/rulebook/RULEBOOK-100-routing-rules.md
docs/rulebook/RULEBOOK-110-human-review-rules.md
docs/rulebook/RULEBOOK-150-rule-to-code-mapping.md
```

Implementation rule:

```text
Use the Rulebook for controlled expansion after the first vertical slice works.
Do not implement the full long-term rule library before MVP rule behavior is tested.
```

## UX Pack

This pack defines the customer intake UX, screen-by-screen behavior, component library, design system, mobile rules, accessibility, microcopy, CRM UX, human review workspace, prototype flow, usability testing and frontend handoff.

```text
docs/ux/UX-000-ux-index.md
docs/ux/UX-001-user-journey-overview.md
docs/ux/UX-002-conversation-flow.md
docs/ux/UX-003-screen-by-screen-specification.md
docs/ux/UX-004-component-library.md
docs/ux/UX-005-design-system.md
docs/ux/UX-007-loading-empty-error-states.md
docs/ux/UX-009-microcopy-and-tone-of-voice.md
docs/ux/UX-010-caseworker-crm-ux.md
docs/ux/UX-011-human-review-workspace.md
docs/ux/UX-015-handoff-to-frontend.md
```

Implementation rule:

```text
Use the UX Pack before building intake frontend, CRM screens, human review workspace or prototype UI.
Frontend must not expose internal scores, commercial value, raw reason codes or review priority to customers.
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
7. Read AI Case Brain when implementing reasoning, screening, smart questions, routing or review.
8. Read the Rulebook when expanding rule behavior beyond first MVP rules.
9. Read the UX Pack when implementing intake frontend, CRM, review workspace or prototype.
10. Read the API readiness pack when API endpoints are implemented.
11. Read the MVP start pack when starting Sprint 000 or the first vertical slice.
12. Read the handoff pack when ServerAdmin or a new developer takes over implementation.
13. Read the relevant developer handbook guide.
14. Read the relevant business test cases.
15. Implement issues in order.
16. Add or update tests.
17. Update documentation if assumptions change.
18. Run the test suite.
19. Complete the sprint closeout issue.
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
- Use AI Case Brain rules for reasoning instead of putting decision logic directly in prompts or controllers.
- Use the UX Pack for intake, CRM and review UI behavior.
- Do not expose internal commercial value, raw reason codes, internal confidence score or review priority to customers.
- Do not build MitID, power of attorney signing or document analysis before the foundation and first screening slice work.

## Implementation Start Point

The implementation should start with:

```text
handoff/HANDOFF-000-index.md
docs/mvp-start/MVP-START-001-laravel-baseline-handoff-checklist.md
docs/mvp-start/MVP-START-002-sprint-000-implementation-order.md
sprints/SPRINT-000-foundation.md
backlog/issues/ISSUE-001-confirm-laravel-version-and-foundation-constraints.md
```

## First Vertical Slice Start Point

After Sprint 000 is stable, start with:

```text
handoff/SERVERADMIN-HANDOFF-002-ai-case-brain-first-slice.md
docs/api/API-READINESS-003-first-vertical-slice-plan.md
docs/ai-case-brain/BRAIN-000-ai-case-brain-index.md
docs/ai-case-brain/BRAIN-023-implementation-checklist.md
docs/ai-case-brain/BRAIN-024-fake-ai-brain-scenarios.md
docs/ai-case-brain/BRAIN-025-qa-and-test-matrix.md
docs/ux/UX-000-ux-index.md
docs/ux/UX-015-handoff-to-frontend.md
docs/mvp-start/MVP-START-003-first-feature-test-plan.md
docs/mvp-start/MVP-START-004-fake-ai-provider-implementation-plan.md
```

## Definition of Done

```text
master index exists
handoff pack linked
specification packs linked
readiness reviews linked
JSON contracts linked
AI prompt pack linked
AI Case Brain linked
Rulebook linked
UX Pack linked
API readiness pack linked
MVP start pack linked
developer handbook linked
business test cases linked
backlog and sprint order linked
implementation rules documented
```
