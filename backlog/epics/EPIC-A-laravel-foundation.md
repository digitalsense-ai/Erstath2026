# EPIC-A - Laravel Foundation

Version: 1.0 Draft
Status: Planned
Owner: Delivery / Engineering
Domain: Foundation / Backend / Repository
Sprint Alignment: SPRINT-000 Foundation
Related: BACKLOG-000 Traceable Backlog Index, DOC-002 Repository Constitution, DOC-003 Architecture Index, ADR-000 Enterprise Architecture Principles, AF-003 Implementation Readiness Checklist

## Purpose

This epic establishes the Laravel foundation for ErstatningsHjaelp.

The goal is to create a clean, secure and maintainable application baseline that future implementation work can build on without guessing project structure, environment rules or development conventions.

This epic does not implement the business flow itself.

It prepares the technical foundation required for later epics.

---

## Business Objectives

This epic enables the platform to:

- establish a predictable Laravel project baseline
- reduce implementation risk before business logic begins
- create a safe local development setup
- enforce repository and environment conventions
- enable future database, conversation, AI and CRM implementation
- support repeatable testing and CI setup

---

## Success Metrics

This epic is successful when:

- the Laravel application can be installed locally
- the application can bootstrap without business logic
- `.env.example` exists with safe placeholders only
- dependencies can be installed predictably
- basic tests can run
- generated and sensitive files are ignored correctly
- developers can follow setup documentation without guessing

---

## Bounded Context

```text
Application Foundation Context
```

The Application Foundation Context owns framework setup, development conventions and baseline repository readiness.

It does not own product workflow, AI behavior, routing, CRM, documents, identity or consent.

---

## Domain Responsibilities

### Owns

```text
framework baseline
local environment setup
repository implementation guardrails
dependency management
basic test runner setup
baseline CI structure
safe dummy data rules
```

### Must never own

```text
business decision logic
AI prompt execution
CRM workflow
identity verification
document collection
human review outcomes
```

### Inbound Events

```text
ArchitectureBaselineAccepted
BacklogEpicCreated
SprintFoundationStarted
```

### Outbound Events

```text
ApplicationBaselineCreated
EnvironmentConfigured
TestRunnerValidated
CiBaselineCreated
```

### Public Contracts

```text
DeveloperSetupGuide
EnvironmentConfigurationContract
RepositoryGuardrailRules
```

### Internal Contracts

```text
ApplicationBootstrapCheck
EnvironmentSanityCheck
TestRunnerValidation
```

---

## Domain Model

### Entities

```text
None for MVP foundation
```

### Value Objects

```text
EnvironmentName
ApplicationVersion
DependencyVersion
ConfigurationKey
```

### Domain Services

```text
None required for MVP foundation
```

### Application Services

```text
ApplicationBootstrapValidation
EnvironmentConfigurationValidation
```

### Events

```text
ApplicationBootstrapped
EnvironmentExampleCreated
TestsValidated
```

These are conceptual events for planning and do not need to be implemented as Laravel events unless useful.

---

## Architecture Decision Mapping

| Architecture Artifact | Implementation Meaning |
|---|---|
| DOC-002 Repository Constitution | Defines repository structure and documentation authority |
| DOC-003 Architecture Index | Defines current architecture entry point |
| ADR-000 Enterprise Architecture Principles | Defines architecture and implementation principles |
| AF-003 Implementation Readiness Checklist | Defines when coding may begin safely |
| POL-008 AI Usage Policy | Prevents uncontrolled AI implementation before the AI layer exists |

---

## Proposed Implementation Components

Potential Laravel or repository components:

```text
Laravel application baseline
.env.example
.gitignore
composer.json
phpunit.xml or pest configuration
README setup section
GitHub Actions workflow
local development notes
```

These names are suggestions and may be refined during implementation.

---

## Scope

This epic includes:

- Laravel project baseline
- repository structure alignment
- environment configuration
- local development setup
- coding standards
- dependency management
- basic CI foundation
- safe dummy data rules
- initial developer documentation

---

## Out of Scope

This epic does not include:

- production deployment
- real AI provider integration
- real MitID integration
- document upload
- CRM business workflow
- scoring logic
- routing logic
- human review queue
- real personal data handling

---

## Data Impact

This epic should not introduce final business tables.

Database work belongs primarily to:

```text
EPIC-B - Data Model and Migrations
```

EPIC-A may include only framework-level migrations if Laravel requires them.

---

## API Boundaries

This epic should not expose product APIs.

If health-check or local bootstrap endpoints are added, they must not expose secrets, environment details or internal configuration values.

---

## Queue and Event Considerations

No queues are required in EPIC-A.

MVP should avoid queue setup unless needed by framework installation or later epics.

---

## Cache Strategy

No business caching should be introduced in EPIC-A.

Only default Laravel cache configuration may exist.

---

## Non-Functional Requirements

This epic should be:

- minimal
- secure by default
- maintainable
- easy to install locally
- compatible with future CI
- free from real personal data
- aligned with repository governance

---

## Security and Privacy Considerations

EPIC-A must ensure:

- no real personal data is committed
- no `.env` secrets are committed
- `.env.example` contains only safe placeholders
- local dummy data is clearly marked as fake
- storage paths and cache folders are ignored appropriately
- dependencies are installed through normal package management
- no real AI, identity or document integrations are introduced accidentally

---

## Acceptance Criteria

EPIC-A is complete when:

- Laravel foundation exists in the repository
- local setup instructions exist
- `.env.example` exists and contains no secrets
- dependencies can be installed predictably
- basic application bootstraps locally
- basic tests can run
- repository ignores generated files correctly
- implementation does not include out-of-scope business logic
- ServerAdmin can start Sprint 000 work from documented instructions

---

## Test Strategy

Minimum tests should cover:

- application boot test
- basic test runner validation
- environment configuration sanity check
- no real data fixture check if applicable
- CI workflow can execute baseline checks

---

## Risks

| Risk | Mitigation |
|---|---|
| Project starts coding business logic too early | Keep EPIC-A limited to foundation |
| Secrets are committed accidentally | Use `.env.example` and `.gitignore` rules |
| Framework setup diverges from architecture | Reference DOC-002 and ADR-000 in issues |
| AI integration is added too early | Block real AI work until EPIC-D and POL-008 mapping |
| Local setup becomes unclear | Maintain developer setup instructions |

---

## Open Questions

- Which Laravel version should be the official implementation target?
- Should the project use PHPUnit or Pest as the preferred test runner?
- Should baseline static analysis be introduced immediately or after Sprint 000?
- Should Docker be part of MVP local setup or optional later setup?

---

## Proposed Issues

Initial issue candidates:

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

## Dependencies

This epic depends on:

- Architecture baseline completed
- Policy Pack draft completed
- Traceable backlog index created

This epic enables:

- EPIC-B Data Model and Migrations
- EPIC-C Digital First Conversation
- EPIC-H Security, Audit and Testing

---

## Implementation Sequence

Recommended sequence:

```text
1. Confirm framework version and constraints
2. Create Laravel application baseline
3. Add environment and ignore rules
4. Add setup documentation
5. Add basic test runner
6. Add baseline CI
7. Add implementation guardrails
```

---

## Future Extensions

Future versions may add:

- Docker-based local development
- advanced static analysis
- code style automation
- deployment pipeline
- observability baseline
- environment-specific configuration validation

---

## Definition of Done

```text
Foundation can be installed locally
Foundation can run tests
Environment rules are documented
No real data is present
No secrets are committed
Out-of-scope business logic is absent
Sprint 000 can reference this epic
```
