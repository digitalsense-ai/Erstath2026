# CONTRACT-007 - Human Review Contract

Version: 1.0 Draft
Status: Active
Owner: Product / Engineering
Domain: JSON Contracts / Human Review
Related: docs/specifications/SPEC-004-crm-and-review-api.md, docs/specifications/SPEC-009-screening-decision-review-schema.md, docs/developer-handbook/DEV-007-crm-and-human-review-guide.md

## Purpose

Define the JSON shape for human review queue, detail, status updates and outcomes.

## Review Queue Item Shape

```json
{
  "lead_id": "uuid",
  "review_id": "uuid",
  "status": "open",
  "reason": "low_confidence",
  "priority": "medium",
  "created_at": "datetime"
}
```

## Review Detail Shape

```json
{
  "lead_id": "uuid",
  "review_id": "uuid",
  "status": "open",
  "reason": "string",
  "context": {
    "summary": "string",
    "facts": [],
    "missing_information": [],
    "scores": [],
    "decision": {}
  }
}
```

## Review Status Update Request

```json
{
  "status": "in_review",
  "note": "string|null"
}
```

## Review Outcome Request

```json
{
  "outcome": "approve_for_crm",
  "note": "string|null"
}
```

## Allowed Review Status Values

```text
open
in_review
completed
cancelled
```

## Allowed Review Outcomes

```text
approve_for_crm
request_more_information
guide_elsewhere
close_no_action
```

## Validation Rules

```text
review_id is required for updates
status must be allowed value
outcome must be allowed value
notes are internal
review updates must be auditable
```

## Definition of Done

```text
review queue item shape defined
review detail shape defined
status update request defined
outcome request defined
allowed values listed
validation rules documented
```
