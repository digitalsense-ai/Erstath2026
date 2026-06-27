# DOC-043 - Human Review API Specification

Version: 1.0 Draft
Status: Draft
Owner: Engineering
Domain: Human Review API
Related: DOC-040 API Specification Index, backlog/issues/ISSUE-068-create-human-review-queue-endpoint.md, backlog/issues/ISSUE-069-create-human-review-detail-endpoint.md, backlog/issues/ISSUE-071-add-human-review-status-update.md

## Purpose

Define the MVP API contract for human review queue and review detail behavior.

## Endpoint: List Review Items

```http
GET /api/v1/review/items
```

### Query Parameters

```text
status optional
type optional
page optional
per_page optional
```

### Response

```json
{
  "data": [
    {
      "review_id": "fake-review-uuid",
      "lead_id": "fake-lead-uuid",
      "status": "open",
      "reason": "low_confidence",
      "created_at": "2026-01-01T10:00:00Z"
    }
  ],
  "meta": {
    "page": 1,
    "per_page": 25,
    "total": 1
  }
}
```

## Endpoint: Get Review Detail

```http
GET /api/v1/review/items/{review_id}
```

### Response

```json
{
  "data": {
    "review_id": "fake-review-uuid",
    "lead_id": "fake-lead-uuid",
    "status": "open",
    "reason": "low_confidence",
    "lead_summary": {
      "status": "needs_review",
      "summary": "Fake summary for review."
    },
    "facts": [],
    "missing_information": [],
    "latest_decision": {}
  },
  "meta": {
    "version": "v1"
  }
}
```

## Endpoint: Update Review Status

```http
PATCH /api/v1/review/items/{review_id}/status
```

### Request

```json
{
  "status": "in_progress",
  "note": "Fake internal note."
}
```

### Response

```json
{
  "data": {
    "review_id": "fake-review-uuid",
    "status": "in_progress"
  },
  "meta": {
    "version": "v1"
  }
}
```

## Endpoint: Save Review Outcome

```http
POST /api/v1/review/items/{review_id}/outcome
```

### Request

```json
{
  "outcome": "continue_to_crm",
  "note": "Fake outcome note."
}
```

### Response

```json
{
  "data": {
    "review_id": "fake-review-uuid",
    "status": "completed",
    "outcome": "continue_to_crm"
  },
  "meta": {
    "version": "v1"
  }
}
```

## Error Codes

```text
review.item_not_found
review.invalid_status
review.invalid_outcome
review.validation_failed
```

## Notes

- Review endpoints require access protection.
- Review notes are internal and must not be exposed publicly.
- Examples must use fake data only.

## Definition of Done

```text
review endpoints defined
request and response shapes documented
error codes listed
access protection noted
```
