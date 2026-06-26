# SPRINT-005 - Security, Audit and Testing

Version: 1.0 Draft
Status: Planned
Owner: Security / Delivery / Engineering
Sprint Type: Stabilization
Related Epics: EPIC-H Security Audit and Testing
Related: BACKLOG-000 Traceable Backlog Index, DOC-002 Repository Constitution, DOC-003 Architecture Index, ADR-000 Enterprise Architecture Principles, AF-003 Implementation Readiness Checklist, POL-000 Policy Catalog, backlog/epics/EPIC-H-security-audit-and-testing.md

## Purpose

This sprint establishes the MVP security, audit and testing baseline for ErstatningsHjaelp.

The sprint should ensure that the MVP can be tested, reviewed and operated safely before it is considered implementation-ready.

Security, audit and testing are treated as required platform capabilities, not as optional final polish.

---

## Sprint Goal

```text
Create the MVP security baseline, audit logging baseline, fake data guardrails and regression test coverage needed to stabilize the platform before release or wider handoff.
```

---

## Business Value

This sprint should create value by:

- reducing security and privacy risk
- preventing accidental exposure of sensitive lead data
- ensuring internal routes are protected
- ensuring important actions are auditable
- validating AI, decision, CRM and review behavior through tests
- preventing real personal data from entering test fixtures
- making MVP behavior safer and more predictable

---

## Scope

This sprint includes:

- MVP security and access control baseline
- internal route authentication baseline
- CRM and review access policies
- audit logging service
- audit event catalog for MVP
- fake data guardrail rules
- AI output validation tests
- decision and routing regression tests
- CRM and human review access tests
- human review blocking tests
- user-facing message safety tests
- MVP regression test suite
- security configuration and testing documentation

---

## Out of Scope

This sprint does not include:

- full compliance certification
- external penetration testing
- MitID provider implementation
- production identity lifecycle
- advanced SIEM integration
- legal compliance sign-off
- production incident response tooling
- automated vulnerability management platform

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
PAT-003 - Confirm Before Classify
PAT-005 - Explain Why
PAT-008 - Respectful Guide Away
PAT-009 - Human Review Bridge
```

---

## Related Decisions

```text
DEC-006 - Human Review
DEC-008 - Acceptance Policy
DEC-009 - Identity Gate
DEC-010 - Consent Gate
DEC-011 - Document Readiness
DEC-012 - Guide Elsewhere
DEC-013 - CRM Assignment
```

---

## Related Policies

```text
POL-001 - Acceptance Policy
POL-002 - Routing Policy
POL-003 - Confidence Policy
POL-004 - Identity and Consent Policy
POL-005 - Human Review Policy
POL-006 - Document Collection Policy
POL-007 - Communication Policy
POL-008 - AI Usage Policy
```

---

## Included Epics

```text
EPIC-H - Security, Audit and Testing
```

---

## Included Issues

```text
ISSUE-078 - Define MVP security and access control baseline
ISSUE-079 - Implement internal route authentication baseline
ISSUE-080 - Implement CRM and review access policies
ISSUE-081 - Implement audit logging service
ISSUE-082 - Define audit event catalog for MVP
ISSUE-083 - Add fake data guardrail rules
ISSUE-084 - Add AI output validation tests
ISSUE-085 - Add decision and routing regression tests
ISSUE-086 - Add CRM and human review access tests
ISSUE-087 - Add human review blocking tests
ISSUE-088 - Add user-facing message safety tests
ISSUE-089 - Add MVP regression test suite
ISSUE-090 - Document security configuration and testing rules
```

---

## Data Impact

This sprint reads and verifies behavior across:

```text
leads
lead_conversations
lead_facts
lead_missing_information
lead_scores
lead_decisions
lead_reviews
lead_handover_snapshots
ai_runs
audit_logs
users
```

This sprint may update or create:

```text
audit_logs
users or internal_users for MVP access control
security-related config files
test fixtures
fake seeders
```

No real personal data may be introduced.

---

## Implementation Sequence

Recommended sequence:

```text
1. Define MVP security baseline
2. Implement internal access protection
3. Implement CRM and review access policies
4. Implement audit logging baseline
5. Define audit event catalog
6. Add fake data guardrails
7. Add AI validation tests
8. Add decision and routing tests
9. Add CRM and review access tests
10. Add human review blocking tests
11. Add user-facing message safety tests
12. Add MVP regression suite
13. Document security and testing rules
```

---

## Dependencies

This sprint depends on:

- SPRINT-000 Foundation
- SPRINT-001 Data Model
- SPRINT-002 Conversation
- SPRINT-003 Decision Engine
- SPRINT-004 CRM Handover
- EPIC-H Security, Audit and Testing
- Policy Pack

This sprint enables:

- MVP stabilization
- safer ServerAdmin handoff
- future identity and consent implementation
- future compliance and audit work

---

## Acceptance Criteria

This sprint is complete when:

- internal access control baseline exists
- CRM and review routes are protected
- audit logging baseline exists
- important actions can be audited
- fake data guardrails are documented or tested
- AI validation tests exist
- decision and routing regression tests exist
- CRM and human review access tests exist
- human review blocking tests exist
- user-facing message safety tests exist
- no real data is included in fixtures or seeders
- MVP regression test suite can run reliably

---

## Test Requirements

Tests should verify:

- unauthenticated users cannot access internal CRM or review routes
- unauthorized users cannot view sensitive lead data
- audit logs are created for important actions
- fake data factories do not contain real personal data
- AI output validation rejects malformed or unsafe output
- routing policy does not bypass human review triggers
- identity, consent and document steps are not triggered prematurely
- user-facing messages do not expose internal labels
- core MVP flow can run through a happy path and a review path

---

## Security and Privacy Considerations

SPRINT-005 must ensure:

- no secrets are committed
- no real personal data is used in tests, factories or seeders
- internal routes require authentication
- access policies are tested
- sensitive audit details are not exposed publicly
- AI output is validated before use
- user-facing messages do not expose internal labels
- logs follow data minimization principles
- future identity and consent modules are not simulated with unsafe shortcuts

---

## Risks

| Risk | Mitigation |
|---|---|
| Security is added too late | Treat this sprint as required before MVP stabilization |
| Audit logs become noisy or useless | Define important audit actions explicitly |
| Tests depend on real AI | Use fake providers and deterministic fixtures |
| Real data leaks into tests | Add fake data guardrails and review seeders |
| Internal data is exposed publicly | Test route authorization and response contents |
| Policy behavior drifts over time | Add regression tests tied to POL references |

---

## Open Questions

- Should MVP use Laravel's default authentication or a minimal internal-only guard?
- Which user roles are required for MVP 0.1?
- Should audit logs be immutable from the beginning?
- Should fake data guardrails be implemented as tests, static checks or review checklist first?
- Which test runner should be standardized across the repository?

---

## Review Checklist

Before closing this sprint, confirm:

```text
Architecture references are still valid
Policies are followed
Access controls are tested
Audit actions are defined
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
Internal access control baseline exists
Audit logging baseline exists
Important actions are auditable
Fake data guardrails are in place
AI validation tests exist
Decision and routing tests exist
CRM and human review access tests exist
Review blocking behavior is tested
MVP regression suite can run
Next implementation phase is clear
```
