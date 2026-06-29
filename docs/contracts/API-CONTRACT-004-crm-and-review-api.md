# API-CONTRACT-004 - CRM and Review API

Version: 1.0 Draft
Status: Active
Owner: Product / Engineering
Domain: API Contracts / CRM and Review
Related: docs/specifications/SPEC-004-crm-and-review-api.md, docs/contracts/CONTRACT-006-crm-handover-contract.md, docs/contracts/CONTRACT-007-human-review-contract.md

## Purpose

Define internal API contracts for CRM board, lead detail, handover snapshots and human review.

## GET /api/v1/internal/crm/leads

Returns CRM lead board items.

### Response

```json
{
  "data": [
    {
      "lead_public_id": "uuid",
      "status": "ready_for_crm",
      "priority": "high",
      "latest_outcome": "crm_handover",
      "open_item_count": 2,
      "updated_at": "datetime"
    }
  ],
  "meta": {
    "page": 1
  },
  "errors": []
}
```

## GET /api/v1/internal/crm/leads/{lead_public_id}

Returns internal CRM lead detail.

### Response

```json
{
  "data": {
    "lead_public_id": "uuid",
    "status": "ready_for_crm",
    "conversation_summary": "string|null",
    "facts": [],
    "missing_information": [],
    "scores": [],
    "latest_decision": {},
    "latest_handover": {}
  },
  "meta": {},
  "errors": []
}
```

## POST /api/v1/internal/crm/leads/{lead_public_id}/handover

Creates a handover snapshot.

### Response

```json
{
  "data": {
    "lead_public_id": "uuid",
    "handover_id": "id",
    "snapshot_version": "v1",
    "summary": "string|null",
    "payload": {}
  },
  "meta": {},
  "errors": []
}
```

## GET /api/v1/internal/reviews

Returns open or filtered review queue items.

### Response

```json
{
  "data": [],
  "meta": {
    "page": 1
  },
  "errors": []
}
```

## GET /api/v1/internal/reviews/{review_id}

Returns review detail.

### Response

```json
{
  "data": {
    "lead_public_id": "uuid",
    "review_id": "id",
    "status": "open",
    "reason": "low_confidence",
    "context": {}
  },
  "meta": {},
  "errors": []
}
```

## PATCH /api/v1/internal/reviews/{review_id}/status

Updates review status.

### Request

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

## POST /api/v1/internal/reviews/{review_id}/outcome

Stores review outcome.

### Request

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

## Rules

```text
CRM and review endpoints are internal
review notes are internal
handover payload must separate confirmed and unconfirmed facts
review changes must create audit events
```

## Definition of Done

```text
CRM board endpoint defined
CRM detail endpoint defined
handover endpoint defined
review queue endpoint defined
review detail endpoint defined
review update endpoints defined
rules documented
```
