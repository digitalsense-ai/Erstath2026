# API-CONTRACT-001 - Endpoint Map

Version: 1.0 Draft
Status: Active
Owner: Product / Engineering
Domain: API Contracts
Related: docs/specifications/SPEC-001-api-overview.md, docs/contracts/CONTRACT-001-json-contracts-overview.md

## Purpose

Define the MVP endpoint map before Laravel controllers are implemented.

This document turns the API specifications and JSON contracts into a practical route map for implementation.

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

## Public Intake Endpoints

```text
POST /api/v1/conversations/start
POST /api/v1/conversations/{lead_public_id}/messages
GET  /api/v1/conversations/{lead_public_id}
```

## Internal Screening and Decision Endpoints

```text
POST /api/v1/internal/leads/{lead_public_id}/extract-facts
POST /api/v1/internal/leads/{lead_public_id}/screen
POST /api/v1/internal/leads/{lead_public_id}/decide
```

## CRM Endpoints

```text
GET  /api/v1/internal/crm/leads
GET  /api/v1/internal/crm/leads/{lead_public_id}
POST /api/v1/internal/crm/leads/{lead_public_id}/handover
```

## Human Review Endpoints

```text
GET   /api/v1/internal/reviews
GET   /api/v1/internal/reviews/{review_id}
PATCH /api/v1/internal/reviews/{review_id}/status
POST  /api/v1/internal/reviews/{review_id}/outcome
```

## Audit and Health Endpoints

```text
GET /api/v1/internal/leads/{lead_public_id}/audit
GET /api/v1/health
```

## Implementation Notes

```text
public endpoints use lead_public_id, not internal id
internal endpoints may require staff authentication later
all endpoints return the standard response shape
errors must use the standard error object
```

## Definition of Done

```text
base path defined
public endpoints listed
internal endpoints listed
CRM endpoints listed
review endpoints listed
audit and health endpoints listed
implementation notes documented
```
