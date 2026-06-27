# DEV-003 - Coding Standards

Version: 1.0 Draft
Status: Planned
Owner: Engineering
Domain: Developer Handbook / Coding Standards
Related: docs/foundation/DOC-002-repository-constitution.md, architecture-freeze/AF-003-implementation-readiness-checklist.md

## Purpose

Define practical coding standards for MVP implementation.

## General Rules

- Keep controllers thin.
- Put business logic in services or actions.
- Use request validation for API inputs.
- Use resources or response builders for API outputs.
- Keep tests close to the behavior they verify.
- Prefer readable code over clever shortcuts.

## Data Rules

- Do not use real personal data in tests or examples.
- Use factories for test setup.
- Keep sensitive payloads minimal.
- Avoid storing data that is not needed for the MVP.

## API Rules

- Return JSON.
- Use consistent response shapes.
- Use consistent error codes.
- Do not expose internal exception details.

## Test Rules

- Add tests for models, services and endpoints.
- Use fake data only.
- Cover normal and fallback paths.

## Definition of Done

```text
coding standards documented
API rules documented
data rules documented
test rules documented
```
