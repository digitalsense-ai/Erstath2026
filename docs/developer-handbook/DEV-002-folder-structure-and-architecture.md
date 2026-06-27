# DEV-002 - Folder Structure and Architecture

Version: 1.0 Draft
Status: Planned
Owner: Engineering
Domain: Developer Handbook / Architecture
Related: docs/foundation/DOC-001-architecture-overview.md, docs/foundation/DOC-002-repository-constitution.md, docs/foundation/DOC-003-architecture-index.md

## Purpose

Explain how the project should be organized during implementation.

## Architecture Rule

Implementation should follow the repository architecture and backlog structure.

Developers should not create new modules or flows that bypass the documented epics, sprints and issues.

## Suggested Laravel Areas

```text
app/Models
app/Http/Controllers
app/Http/Requests
app/Services
app/Actions
app/Support
app/Policies
database/migrations
database/factories
tests/Feature
tests/Unit
```

## Service Boundaries

Suggested service areas:

```text
Conversation
Screening
Decision
Crm
Review
Audit
```

## Documentation Rule

If implementation changes an assumption in architecture, API or database specs, update the relevant document.

## Definition of Done

```text
folder structure guidance documented
service boundaries documented
documentation rule documented
```
