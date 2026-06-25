# EPIC-TEMPLATE - Epic Title

Version: 1.0 Draft
Status: Planned
Owner: Product / Delivery / Engineering
Domain: Domain / Area
Sprint Alignment: SPRINT-XXX
Related: BACKLOG-000 Traceable Backlog Index, DOC-003 Architecture Index, POL-000 Policy Catalog

## Purpose

Describe what this epic exists to accomplish.

The purpose should explain the user, business or platform capability this epic enables.

---

## Business Objectives

This epic should enable the platform to:

- objective 1
- objective 2
- objective 3

---

## Success Metrics

This epic is successful when:

- measurable outcome 1
- measurable outcome 2
- measurable outcome 3

---

## Bounded Context

```text
Context Name
```

Describe the bounded context this epic belongs to.

---

## Domain Responsibilities

### Owns

```text
responsibility 1
responsibility 2
responsibility 3
```

### Must never own

```text
out-of-bound responsibility 1
out-of-bound responsibility 2
```

### Inbound Events

```text
EventReceived
AnotherEventReceived
```

### Outbound Events

```text
EventEmitted
AnotherEventEmitted
```

### Public Contracts

```text
PublicServiceContract
PublicApplicationService
```

### Internal Contracts

```text
InternalEvaluator
InternalResolver
InternalRecorder
```

---

## Domain Model

### Entities

```text
EntityName
```

### Value Objects

```text
ValueObjectName
```

### Domain Services

```text
DomainServiceName
```

### Application Services

```text
ApplicationServiceName
```

### Events

```text
DomainEventName
```

---

## Architecture Decision Mapping

| Architecture Artifact | Implementation Meaning |
|---|---|
| DOC-XXX | Describe relevance |
| ADR-XXX | Describe relevance |
| PAT-XXX | Describe relevance |
| DEC-XXX | Describe relevance |
| POL-XXX | Describe relevance |

---

## Proposed Implementation Components

Potential Laravel components:

```text
ControllerName
ServiceName
RepositoryName
PolicyName
EventName
JobName
```

These names are suggestions and may be refined during implementation.

---

## Scope

This epic includes:

- item 1
- item 2
- item 3

---

## Out of Scope

This epic does not include:

- item 1
- item 2
- item 3

---

## Data Impact

This epic affects:

```text
table_name
another_table_name
```

Describe whether this epic creates, reads, updates or audits data.

---

## API Boundaries

Describe internal and external API boundaries.

Public APIs must not expose internal decision, policy or AI implementation details unless explicitly intended for authorized internal users.

---

## Queue and Event Considerations

Describe whether this epic should run synchronously or asynchronously.

MVP should avoid queue complexity unless it is necessary.

---

## Cache Strategy

Describe whether caching is needed.

If caching is not required, state that MVP should avoid caching here.

---

## Non-Functional Requirements

This epic should be:

- auditable
- testable
- secure
- maintainable
- policy-compliant

Add any specific requirements.

---

## Security and Privacy Considerations

Describe security, privacy, access control, data minimization and audit implications.

---

## Acceptance Criteria

This epic is complete when:

- criterion 1
- criterion 2
- criterion 3

---

## Test Strategy

Minimum tests should cover:

- test area 1
- test area 2
- test area 3

---

## Risks

| Risk | Mitigation |
|---|---|
| Risk 1 | Mitigation 1 |
| Risk 2 | Mitigation 2 |

---

## Open Questions

- Question 1?
- Question 2?
- Question 3?

---

## Proposed Issues

Initial issue candidates:

```text
ISSUE-XXX - Issue title
ISSUE-XXX - Issue title
ISSUE-XXX - Issue title
```

---

## Dependencies

This epic depends on:

- dependency 1
- dependency 2

This epic enables:

- future epic or capability 1
- future epic or capability 2

---

## Implementation Sequence

Recommended sequence:

```text
1. Step one
2. Step two
3. Step three
```

---

## Future Extensions

Future versions may add:

- extension 1
- extension 2
- extension 3

---

## Definition of Done

```text
Core capability implemented
Architecture references are traceable
Data impact is implemented
Security considerations are addressed
Core tests pass
Out-of-scope items are not implemented accidentally
```
