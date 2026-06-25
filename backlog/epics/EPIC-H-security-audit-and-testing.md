# EPIC-H - Security, Audit and Testing

Version: 1.0 Draft
Status: Planned
Owner: Security / Delivery / Engineering
Domain: Security / Audit / Quality Assurance
Sprint Alignment: SPRINT-005 Stabilization
Related: BACKLOG-000 Traceable Backlog Index, DOC-002 Repository Constitution, ADR-000 Enterprise Architecture Principles, AF-003 Implementation Readiness Checklist, POL-000 Policy Catalog, POL-004 Identity and Consent Policy, POL-008 AI Usage Policy

## Purpose

This epic defines the security, audit and testing baseline for ErstatningsHjaelp MVP 0.1.

The goal is to ensure that the platform can be implemented, tested and operated safely without exposing sensitive information, bypassing policy constraints or relying on unverified AI behavior.

Security, audit and testing are not optional final steps. They are platform capabilities that must be present before the MVP can be trusted.

---

## Business Objectives

This epic enables the platform to:

- protect sensitive lead and conversation data
- enforce internal access control
- make important system actions auditable
- prevent accidental use of real data in tests
- validate AI, decision and CRM behavior through tests
- reduce operational and compliance risk
- give ServerAdmin and future developers clear implementation guardrails
- prepare the platform for later identity, consent and document modules

---

## Success Metrics

This epic is successful when:

- internal routes require authentication and authorization
- audit logs record important business and internal actions
- AI output validation is tested
- decision routing behavior is tested
- CRM access behavior is tested
- human review blocking behavior is tested
- no real personal data exists in seeders or test fixtures
- security-sensitive configuration is documented
- MVP has a repeatable test baseline

---

## Bounded Context

```text
Security and Quality Context
```

The Security and Quality Context owns cross-cutting controls that protect the platform and validate behavior across all other contexts.

It does not own the business meaning of conversation, AI screening, routing, CRM or human review, but it ensures those contexts are safe, auditable and testable.

---

## Domain Responsibilities

### Owns

```text
access control baseline
audit logging baseline
test strategy baseline
fake data guardrails
security configuration expectations
AI validation test coverage
decision behavior test coverage
CRM and review access test coverage
```

### Must never own

```text
business routing policy definition
AI prompt behavior ownership
CRM presentation ownership
final legal assessment
identity provider implementation
document processing implementation
```

### Inbound Events

```text
LeadCreated
ConversationStepCompleted
AiRunCompleted
AiOutputValidationFailed
DecisionRecorded
RoutingRecommendationCreated
HumanReviewStarted
HumanReviewCompleted
CrmLeadDetailViewed
InternalStatusChanged
```

### Outbound Events

```text
AuditLogRecorded
SecurityCheckFailed
UnauthorizedAccessBlocked
TestBaselineValidated
FakeDataViolationDetected
```

### Public Contracts

```text
AuditLogger
AccessPolicyContract
SecurityConfigurationGuide
TestBaselineContract
FakeDataGuardrailContract
```

### Internal Contracts

```text
AuditEventNormalizer
SensitiveDataGuardrail
InternalRouteAccessChecker
AiOutputSecurityValidator
PolicyComplianceTestSuite
```

---

## Domain Model

### Entities

```text
AuditLog
AiRun
LeadDecision
LeadReview
User
```

### Value Objects

```text
AuditAction
AuditActorType
AuditSubjectType
SecurityEventType
AccessDecision
TestFixtureClassification
```

### Domain Services

```text
AuditLogService
AccessControlService
SensitiveDataGuardrailService
SecurityTestSupportService
PolicyComplianceTestService
```

### Application Services

```text
RecordAuditEvent
ValidateInternalAccess
RunFakeDataGuardrail
ValidatePolicyCompliance
RunMvpRegressionSuite
```

### Events

```text
AuditEventRecorded
AccessDenied
SensitiveDataGuardrailFailed
PolicyComplianceViolationDetected
TestBaselinePassed
```

These names are planning suggestions and may be refined during implementation.

---

## Architecture Decision Mapping

| Architecture Artifact | Implementation Meaning |
|---|---|
| DOC-002 Repository Constitution | Defines repository and implementation governance |
| ADR-000 Enterprise Architecture Principles | Requires auditable and maintainable implementation |
| AF-003 Implementation Readiness Checklist | Defines readiness before implementation and release |
| POL-001 Acceptance Policy | Requires tests around acceptance outcomes |
| POL-002 Routing Policy | Requires tests around routing priority |
| POL-003 Confidence Policy | Requires tests around confidence and confirmation |
| POL-004 Identity and Consent Policy | Requires gates to avoid premature identity or consent steps |
| POL-005 Human Review Policy | Requires tests around review triggers and blocking |
| POL-006 Document Collection Policy | Requires document collection not to be triggered prematurely |
| POL-007 Communication Policy | Requires tests for user-facing messages and internal labels |
| POL-008 AI Usage Policy | Requires AI output validation, logging and safe fallback behavior |

---

## Proposed Implementation Components

Potential Laravel components:

```text
AuditLogService
AuditLogger
AuditLog model and migration if not already implemented
InternalAccessMiddleware
CrmAccessPolicy
HumanReviewAccessPolicy
SensitiveDataGuardrailService
FakeDataSeederGuardrail
PolicyComplianceTestSuite
SecurityRegressionTestSuite
```

Potential test suites:

```text
ConversationFlowTest
AiScreeningValidationTest
DecisionRoutingTest
CrmAccessTest
HumanReviewWorkflowTest
AuditLogTest
FakeDataGuardrailTest
SecurityConfigurationTest
```

These names are suggestions and may be refined during implementation.

---

## Scope

This epic includes:

- internal access control baseline
- audit logging baseline
- fake data guardrails
- sensitive data test fixture rules
- security-focused test coverage
- AI output validation tests
- decision and routing tests
- CRM access tests
- human review tests
- basic regression test strategy
- security documentation for MVP

---

## Out of Scope

This epic does not include:

- full compliance certification
- penetration testing by external vendor
- MitID provider implementation
- production identity lifecycle
- document storage encryption design beyond MVP notes
- advanced SIEM integration
- automated vulnerability management platform
- legal compliance sign-off

---

## Data Impact

This epic reads and verifies behavior across:

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

This epic may update or create:

```text
audit_logs
users or internal_users for MVP access control
security-related config files
test fixtures
fake seeders
```

No real personal data may be introduced.

---

## API Boundaries

Security and audit behavior should be enforced across internal and public APIs.

Public APIs must not expose:

```text
internal review labels
policy internals
raw AI output
internal notes
audit log internals
sensitive configuration
```

Internal APIs must require authentication and appropriate access policies.

---

## Queue and Event Considerations

MVP audit logging can be synchronous to keep behavior simple and reliable.

Future versions may queue lower-priority audit or analytics events, but security-critical events should not be lost silently.

Potential future jobs:

```text
ExportAuditTrail
RunScheduledSecurityChecks
RunPolicyRegressionSuite
DetectFakeDataViolations
```

---

## Cache Strategy

Security, access and audit decisions should not rely on stale cache in MVP.

If authorization or read models are cached later, invalidation must be explicit and tested.

---

## Non-Functional Requirements

This epic should be:

- security-focused
- auditable
- testable
- repeatable
- maintainable
- privacy-aware
- compatible with future compliance work

---

## Security and Privacy Considerations

Implementation must ensure:

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

## Acceptance Criteria

EPIC-H is complete when:

- internal access control baseline exists
- audit logging baseline exists
- important actions can be audited
- fake data guardrails are documented and tested
- AI validation tests exist
- decision routing tests exist
- CRM access tests exist
- human review blocking tests exist
- no real data is included in fixtures or seeders
- MVP regression test suite can run reliably

---

## Test Strategy

Minimum tests should cover:

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

## Risks

| Risk | Mitigation |
|---|---|
| Security is added too late | Treat this epic as required before MVP stabilization |
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

## Proposed Issues

Initial issue candidates:

```text
ISSUE-076 - Define MVP security and access control baseline
ISSUE-077 - Implement internal route authentication baseline
ISSUE-078 - Implement CRM and review access policies
ISSUE-079 - Implement audit logging service
ISSUE-080 - Define audit event catalog for MVP
ISSUE-081 - Add fake data guardrail rules
ISSUE-082 - Add AI output validation tests
ISSUE-083 - Add decision and routing regression tests
ISSUE-084 - Add CRM and human review access tests
ISSUE-085 - Add human review blocking tests
ISSUE-086 - Add user-facing message safety tests
ISSUE-087 - Add MVP regression test suite
ISSUE-088 - Document security configuration and testing rules
```

---

## Dependencies

This epic depends on:

- EPIC-A Laravel Foundation
- EPIC-B Data Model and Migrations
- EPIC-C Digital First Conversation
- EPIC-D AI Screening Service
- EPIC-E Decision and Routing Engine
- EPIC-F CRM Lead Board and Detail
- EPIC-G Human Review Queue
- Policy Pack v1.0 Draft

This epic enables:

- MVP stabilization
- safer ServerAdmin handoff
- future identity and consent implementation
- future compliance and audit work

---

## Implementation Sequence

Recommended sequence:

```text
1. Define MVP security baseline
2. Implement internal access protection
3. Implement audit logging baseline
4. Define audit event catalog
5. Add fake data guardrails
6. Add AI validation tests
7. Add decision and routing tests
8. Add CRM and review access tests
9. Add human review blocking tests
10. Add MVP regression suite
11. Document security and testing rules
```

---

## Future Extensions

Future versions may add:

- role-based access control
- audit export
- immutable audit storage
- external penetration testing
- static analysis baseline
- dependency vulnerability scanning
- policy compliance dashboard
- SIEM integration
- retention and deletion workflows

---

## Definition of Done

```text
Internal access control baseline exists
Audit logging baseline exists
Important actions are auditable
Fake data guardrails are in place
AI validation tests exist
Decision and routing tests exist
CRM and human review access tests exist
Review blocking behavior is tested
No real data is used
MVP regression suite can run
```
