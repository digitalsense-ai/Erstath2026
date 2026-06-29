# API-004 - CRM and Review API Contract

Version: 1.0 Draft
Status: Active
Owner: Product / Engineering
Domain: API Contracts / CRM and Review
Related: docs/specifications/SPEC-004-crm-and-review-api.md, docs/contracts/CONTRACT-006-crm-handover-contract.md, docs/contracts/CONTRACT-007-human-review-contract.md

## Purpose

Define MVP endpoints for CRM handover, lead board and human review.

## Endpoints

```text
POST /api/v1/leads/{lead_public_id}/handover-snapshots
GET  /api/v1/crm/leads
GET  /api/v1/crm/leads/{lead_public_id}
GET  /api/v1/reviews
GET  /api/v1/reviews/{review_id}
PATCH /api/v1/reviews/{review_id}
POST /api/v1/reviews/{review_id}/outcomes
```

## POST /api/v1/leads/{lead_public_id}/handover-snapshots

Purpose: create a structured CRM handover snapshot.

Response:

```json
{
  "data": {
    "lead_public_id": "uuid",
    "snapshot_id": "id",
    "snapshot_version": "v1",
    "summary": "string|null"
  },
  "meta": {},
  "errors": []
}
```

## GET /api/v1/crm/leads

Purpose: return CRM board items.

Response:

```json
{
  "data": [
    {
      "lead_public_id": "uuid",
      "status": "ready_for_crm",
      "priority": "high",
      "latest_outcome": "crm_handover",
      "open_item_count": 0,
      "updated_at": "datetime"
    }
  ],
  "meta": {
    "pagination": {}
  },
  "errors": []
}
```

## GET /api/v1/crm/leads/{lead_public_id}

Purpose: return lead detail for CRM staff.

Response:

```json
{
  "data": {
    "lead_public_id": "uuid",
    "status": "string",
    "facts": [],
    "open_items": [],
    "latest_scores": [],
    "latest_decision": {},
    "latest_handover": {},
    "timeline": []
  },
  "meta": {},
  "errors": []
}
```

## Review Endpoints

Review queue and detail endpoints should follow CONTRACT-007 Human Review Contract.

Status update request:

```json
{
  "data": {
    "status": "in_review",
    "note": "string|null"
  },
  "meta": {},
  "errors": []
}
```

Outcome request:

```json
{
  "data": {
    "outcome": "approve_for_crm",
    "note": "string|null"
  },
  "meta": {},
  "errors": []
}
```

## Validation Rules

```text
lead_public_id must exist
review_id must exist
review status must be allowed
review outcome must be allowed
review updates must create audit logs
handover summaries must separate confirmed and unconfirmed facts
```

## Feature Test Priorities

```text
handover snapshot can be created
CRM board returns standard item shape
CRM lead detail includes timeline
review status can be updated
review outcome can be saved
audit log is created for review changes
```

## Definition of Done

```text
CRM endpoints listed
review endpoints listed
request and response shapes defined
validation rules documented
feature test priorities documented
```
