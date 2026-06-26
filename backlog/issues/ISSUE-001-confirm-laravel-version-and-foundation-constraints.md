# ISSUE-001 - Confirm Laravel Version and Foundation Constraints

Version: 1.0 Draft
Status: Planned
Epic: EPIC-A Laravel Foundation
Sprint: SPRINT-000 Foundation
Priority: High
Owner: Product / Engineering
Domain: Foundation / Backend / Repository
Related: DOC-002 Repository Constitution, DOC-003 Architecture Index, ADR-000 Enterprise Architecture Principles, AF-003 Implementation Readiness Checklist, backlog/epics/EPIC-A-laravel-foundation.md, sprints/SPRINT-000-foundation.md

## Purpose

Confirm the Laravel version, technical foundation constraints and implementation boundaries before creating or modifying the application baseline.

This issue prevents the project from starting implementation with unclear framework assumptions, test runner choices or local setup expectations.

---

## Background

SPRINT-000 establishes the technical foundation for the MVP.

Before creating the Laravel baseline, the team must agree on the implementation target and constraints so later issues do not make conflicting assumptions.

This issue should be resolved before ISSUE-002 begins.

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
None required for this issue
```

---

## Related Decisions

```text
None required for this issue
```

---

## Related Policies

```text
POL-008 - AI Usage Policy
```

POL-008 is relevant only to prevent uncontrolled AI functionality from being introduced during the foundation sprint.

---

## Scope

This issue includes:

- confirm Laravel version
- confirm PHP version requirement
- confirm package manager expectations
- confirm test runner preference
- confirm whether Docker is required or optional
- confirm baseline CI expectation
- confirm that no business logic is implemented in SPRINT-000
- document foundation constraints for later issues

---

## Out of Scope

This issue does not include:

- creating the Laravel application baseline
- adding migrations
- implementing conversation flow
- implementing AI provider integration
- implementing CRM or review workflow
- production deployment setup

---

## Data Impact

This issue has no direct database impact.

It may produce or update documentation only.

---

## Proposed Implementation

Potential implementation components:

```text
README setup notes
SPRINT-000 implementation notes
foundation constraints section
```

This issue may be completed by documenting the confirmed decisions in an existing or new foundation note.

---

## Acceptance Criteria

This issue is complete when:

- Laravel target version is confirmed
- PHP target version is confirmed
- test runner preference is confirmed
- Docker requirement is confirmed as required, optional or deferred
- baseline CI expectation is confirmed
- out-of-scope business logic constraints are confirmed
- the decision is documented in the repository

---

## Test Requirements

No automated tests are required for this issue.

The output should be reviewed for consistency with SPRINT-000 and EPIC-A.

---

## Security and Privacy Considerations

This issue must ensure:

- no secrets are documented
- no real personal data is introduced
- no real AI, identity, CRM or document integration is introduced
- local development guidance uses safe placeholders only

---

## Failure and Edge Cases

Consider:

- Laravel version conflicts with hosting constraints
- selected PHP version conflicts with dependencies
- Docker requirement slows MVP implementation
- test runner choice conflicts with developer preference
- CI is added before the application baseline is stable

---

## Developer Notes

This issue should be resolved before creating the Laravel baseline.

Do not start business-domain implementation in this issue.

---

## Definition of Done

```text
Implementation constraints confirmed
Foundation assumptions documented
No code-heavy implementation added
No business logic introduced
SPRINT-000 can proceed to ISSUE-002
```
