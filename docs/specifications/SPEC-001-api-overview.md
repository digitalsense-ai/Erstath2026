# SPEC-001 - API Overview

Version: 1.0 Draft
Status: Planned
Owner: Product / Engineering
Domain: API Specification
Related: docs/04-conversation-engine.md, docs/05-crm-workflow.md, docs/31-acceptance-and-routing-architecture.md, backlog/BACKLOG-000-traceable-backlog-index.md

## Purpose

Define the MVP API structure before implementation starts.

The API specification should make backend implementation predictable and reduce ambiguity for controllers, services and tests.

## API Groups

The MVP API is grouped into:

- Conversation API
- Screening API
- Decision API
- CRM API
- Review API
- Audit API
- Health API

## General Rules

- APIs return JSON.
- Errors use a consistent error shape.
- Responses must not expose internal stack traces.
- Test examples must use fake data only.
- Internal identifiers should be stable and non-sensitive.

## Base Path

```text
/api/v1
```

## Standard Response Shape

```json
{
  "data": {},
  "meta": {},
  "errors": []
}
```

## Standard Error Shape

```json
{
  "code": "string",
  "message": "string",
  "field": "string|null"
}
```

## Next Documents

- SPEC-002 Conversation API
- SPEC-003 Screening and Decision API
- SPEC-004 CRM and Review API
- SPEC-005 Audit and Health API

## Definition of Done

```text
API groups defined
base response shape defined
error shape defined
next API spec documents identified
```
