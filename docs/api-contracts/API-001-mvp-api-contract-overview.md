# API-001 - MVP API Contract Overview

Version: 1.0 Draft
Status: Active
Owner: Product / Engineering
Domain: API Contracts
Related: docs/specifications/SPEC-001-api-overview.md, docs/contracts/CONTRACT-001-json-contracts-overview.md, docs/IMPLEMENTATION-MASTER-INDEX.md

## Purpose

Define the implementation-level API contract pack for the MVP.

The API contracts translate the API specifications and JSON contracts into endpoint-level implementation guidance for Laravel controllers, request validation, resources and feature tests.

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

## API Contract Documents

```text
API-002 Conversation API Contract
API-003 Screening and Decision API Contract
API-004 CRM and Review API Contract
API-005 Audit and Health API Contract
```

## Implementation Rules

```text
controllers should stay thin
requests should validate input
services should contain business logic
resources should format output
AI output must be validated before mapping
feature tests should assert response shape and key flows
```

## Identifier Rule

Public API routes should prefer `lead_public_id` instead of internal numeric ids.

Internal ids may be used inside the application layer.

## Definition of Done

```text
base path defined
response shape defined
error shape defined
contract documents listed
implementation rules documented
identifier rule documented
```
