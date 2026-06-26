# SPRINT-000 - Foundation

Version: 1.0 Draft
Status: Planned
Owner: Product / Delivery / Engineering
Sprint Type: Foundation
Related Epics: EPIC-A Laravel Foundation
Related: BACKLOG-000 Traceable Backlog Index, DOC-002 Repository Constitution, DOC-003 Architecture Index, ADR-000 Enterprise Architecture Principles, AF-003 Implementation Readiness Checklist, backlog/epics/EPIC-A-laravel-foundation.md

## Purpose

This sprint establishes the technical Laravel foundation required before business features are implemented.

The sprint should make the repository installable, understandable and safe for future development work.

SPRINT-000 must not implement the business workflow itself. It prepares the baseline for later data model, conversation, AI, decision, CRM and review work.

---

## Sprint Goal

```text
Create a clean Laravel foundation with safe environment configuration, local setup documentation, baseline testing and repository guardrails.
```

---

## Business Value

This sprint should create value by:

- reducing implementation uncertainty
- allowing ServerAdmin and developers to start from a documented baseline
- preventing secrets or real data from entering the repository
- enabling repeatable local setup
- enabling future CI and test automation
- keeping business logic out until the foundation is ready

---

## Scope

This sprint includes:

- Laravel version and foundation constraint confirmation
- Laravel application baseline
- safe `.env.example`
- `.gitignore` and generated file rules
- local development setup documentation
- basic test runner validation
- baseline CI workflow if appropriate
- repository implementation guardrails

---

## Out of Scope

This sprint does not include:

- database business migrations
- conversation flow
- AI provider integration
- scoring or routing logic
- CRM UI
- human review queue
- document upload
- MitID or identity integration
- consent signing
- production deployment

---

## Related Architecture

```text
DOC-002 - Repository Constitution
DOC-003 - Architecture Index
ADR-000 - Enterprise Architecture Principles
AF-003 - Implementation Readiness Checklist
```

---

## Related Patterns

```text
None required for Sprint 000
```

---

## Related Decisions

```text
None required for Sprint 000
```

---

## Related Policies

```text
POL-008 - AI Usage Policy
```

POL-008 is referenced to ensure that no uncontrolled AI implementation is introduced during the foundation sprint.

---

## Included Epics

```text
EPIC-A - Laravel Foundation
```

---

## Included Issues

```text
ISSUE-001 - Confirm Laravel version and foundation constraints
ISSUE-002 - Create Laravel application baseline
ISSUE-003 - Add environment example and ignore rules
ISSUE-004 - Add local development setup documentation
ISSUE-005 - Add basic test runner validation
ISSUE-006 - Add baseline CI workflow
ISSUE-007 - Add repository implementation guardrails
```

---

## Data Impact

This sprint should not create final business data tables.

It may include framework-level files and configuration such as:

```text
composer.json
.env.example
.gitignore
phpunit.xml or pest configuration
.github/workflows/*
README setup sections
```

Business data migrations belong to SPRINT-001.

---

## Implementation Sequence

Recommended sequence:

```text
1. Confirm Laravel version and technical constraints
2. Create or verify Laravel application baseline
3. Add safe environment example and ignore rules
4. Add local setup documentation
5. Validate test runner
6. Add baseline CI workflow if appropriate
7. Document repository guardrails
```

---

## Dependencies

This sprint depends on:

- architecture baseline
- backlog index
- EPIC-A Laravel Foundation
- repository access

This sprint enables:

- SPRINT-001 Data Model
- SPRINT-002 Conversation
- future implementation issues

---

## Acceptance Criteria

This sprint is complete when:

- Laravel version and foundation constraints are confirmed
- Laravel application baseline exists
- local setup can be followed from documentation
- `.env.example` exists and contains no secrets
- `.gitignore` protects generated and sensitive files
- basic tests can run
- baseline CI is added or explicitly deferred
- no business workflow has been implemented accidentally

---

## Test Requirements

Tests should verify:

- application can bootstrap
- test runner executes successfully
- baseline environment assumptions are documented
- no real data is introduced in test fixtures
- CI can run the baseline checks if CI is implemented

---

## Security and Privacy Considerations

SPRINT-000 must ensure:

- no secrets are committed
- no real personal data is committed
- `.env` remains ignored
- local configuration uses placeholders only
- real AI, identity, document or CRM integrations are not introduced
- test data is fake only

---

## Risks

| Risk | Mitigation |
|---|---|
| Business logic starts before foundation is stable | Keep sprint scope limited to EPIC-A |
| Secrets are committed accidentally | Use `.gitignore` and safe `.env.example` |
| Local setup is unclear | Add explicit setup documentation |
| CI is added too late | Add basic CI now or explicitly defer with reason |
| Framework choices block later work | Confirm Laravel version and test runner early |

---

## Open Questions

- Which Laravel version is the final MVP target?
- Should PHPUnit or Pest be the official test runner?
- Should Docker be required or optional for local development?
- Should baseline CI be included immediately or in a later stabilization step?

---

## Review Checklist

Before closing this sprint, confirm:

```text
Architecture references are still valid
Policies are followed
Tests pass
No real data is introduced
No out-of-scope implementation was added
Documentation was updated if needed
ServerAdmin handoff impact was considered
```

---

## Definition of Done

```text
Sprint goal achieved
Included issues completed or explicitly deferred
Acceptance criteria met
Tests added or updated
Security and privacy considerations handled
Documentation updated if needed
Next sprint dependencies are clear
```
