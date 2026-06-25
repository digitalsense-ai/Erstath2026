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

## Business Value

A strong foundation reduces implementation risk and makes later work easier to review, test and maintain.

This epic enables:

- consistent local development
- predictable project structure
- safe configuration management
- baseline CI and quality checks
- future API and CRM work
- controlled implementation of AI, decisions and policies

---

## Scope

EPIC-A includes:

- Laravel project baseline
- repository structure alignment
- environment configuration
- local development setup
- coding standards
- dependency management
- basic CI foundation
- safe dummy data rules
- initial documentation for developers

---

## Out of Scope

EPIC-A does not include:

- production deployment
- real AI provider integration
- real MitID integration
- document upload
- CRM business workflow
- scoring logic
- routing logic
- human review queue
- real personal data handling

These areas are handled by later epics.

---

## Architecture Traceability

### Foundation

```text
docs/foundation/DOC-001-architecture-overview.md
docs/foundation/DOC-002-repository-constitution.md
docs/foundation/DOC-003-architecture-index.md
adr/ADR-000-enterprise-architecture-principles.md
```

### Architecture Freeze

```text
architecture-freeze/AF-001-architecture-freeze-report.md
architecture-freeze/AF-003-implementation-readiness-checklist.md
```

### Policy

```text
policies/POL-008-ai-usage-policy.md
```

POL-008 is relevant because this epic must prevent uncontrolled AI implementation before the policy-backed AI layer exists.

---

## Technical Requirements

The foundation should support:

- PHP and Laravel baseline
- Composer dependency management
- environment variables through `.env.example`
- no secrets committed to repository
- local development documentation
- structured folder conventions
- basic test runner setup
- basic static quality tooling if selected
- CI placeholder or baseline workflow

Exact Laravel version and package choices should be confirmed in the first implementation issue.

---

## Repository Requirements

The repository should remain aligned with the architecture structure.

Implementation code should not replace or contradict architecture documents.

Developer documentation should explain:

```text
how to install
how to configure environment
how to run tests
how to start local development
how to avoid real data
```

---

## Security Requirements

EPIC-A must ensure:

- no real personal data is committed
- no `.env` secrets are committed
- `.env.example` contains only safe placeholders
- local dummy data is clearly marked as fake
- storage paths and cache folders are ignored appropriately
- dependencies are installed through normal package management

---

## Data Impact

EPIC-A should not introduce final business tables unless explicitly required by an issue.

Database work belongs primarily to:

```text
EPIC-B - Data Model and Migrations
```

EPIC-A may include only framework-level migrations if Laravel requires them.

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
- ServerAdmin can start Sprint 0 work from documented instructions

---

## Test Strategy

Minimum test expectations:

- application boot test
- basic test runner validation
- environment configuration sanity check
- no real data fixture check if applicable

Future test coverage expands in EPIC-H.

---

## Risks

| Risk | Mitigation |
|---|---|
| Project starts coding business logic too early | Keep EPIC-A limited to foundation |
| Secrets are committed accidentally | Use `.env.example` and `.gitignore` rules |
| Framework setup diverges from architecture | Reference DOC-002 and ADR-000 in issues |
| AI integration is added too early | Block real AI work until EPIC-D and POL-008 mapping |

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

These issues should be created under:

```text
backlog/issues/
```

---

## Dependencies

EPIC-A depends on:

- Architecture baseline completed
- Policy Pack draft completed
- Traceable backlog index created

EPIC-A enables:

- EPIC-B Data Model and Migrations
- EPIC-C Digital First Conversation
- EPIC-H Security, Audit and Testing

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

---

## Implementation Note

This epic should be implemented cautiously.

The purpose is to create a stable base, not to accelerate into business logic.

Every implementation issue should remain traceable to the architecture and policy baseline.
