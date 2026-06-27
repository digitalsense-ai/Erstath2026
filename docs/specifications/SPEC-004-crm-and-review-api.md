# SPEC-004 - CRM and Review API

Version: 1.0 Draft
Status: Planned
Owner: Product / Engineering
Domain: API Specification / CRM and Review
Related: docs/05-crm-workflow.md, backlog/issues/ISSUE-057-create-crm-lead-board-endpoint.md, backlog/issues/ISSUE-068-create-human-review-queue-endpoint.md

## Purpose

Define the MVP API endpoints for CRM handover and human review.

## CRM Endpoints

```text
GET  /api/v1/crm/leads
GET  /api/v1/crm/leads/{lead_id}
POST /api/v1/crm/leads/{lead_id}/handover
```

## Review Endpoints

```text
GET  /api/v1/review/leads
GET  /api/v1/review/leads/{lead_id}
POST /api/v1/review/leads/{lead_id}/status
POST /api/v1/review/leads/{lead_id}/outcome
```

## CRM Lead Board

```text
GET /api/v1/crm/leads
```

Query parameters:

```text
status
priority
review_state
page
per_page
```

Response includes lead id, status, priority, latest decision, review state and latest activity.

## CRM Lead Detail

```text
GET /api/v1/crm/leads/{lead_id}
```

Response includes overview, facts, missing information, decision summary, handover snapshot and review state.

## Review Queue

```text
GET /api/v1/review/leads
```

Response includes lead id, review status, review reason, priority and latest activity.

## Review Detail

```text
GET /api/v1/review/leads/{lead_id}
```

Response includes lead overview, review reason, confirmed facts, missing information and decision context.

## Update Review Status

```text
POST /api/v1/review/leads/{lead_id}/status
```

Request:

```json
{
  "status": "in_review",
  "note": "string|null"
}
```

## Save Review Outcome

```text
POST /api/v1/review/leads/{lead_id}/outcome
```

Request:

```json
{
  "outcome": "string",
  "note": "string|null"
}
```

## Error Cases

- lead_not_found
- review_not_found
- invalid_status
- validation_error
- access_denied

## Definition of Done

```text
CRM endpoints listed
review endpoints listed
query parameters listed
request examples included
error cases listed
```
