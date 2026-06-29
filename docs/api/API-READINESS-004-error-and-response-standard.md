# API-READINESS-004 - Error and Response Standard

Version: 1.0
Status: Ready for implementation planning
Scope: MVP 0.1

## Purpose

This document defines the standard JSON response and error format for the MVP API.

The goal is to make frontend, backend, QA and future integrations work with predictable API output.

## Global Response Principle

All API responses must be JSON.

All API routes must use:

```text
/api/v1
```

No endpoint should return HTML, markdown or framework default error pages.

## Successful Response Shape

For simple successful responses:

```json
{
  "data": {},
  "meta": {}
}
```

For collection responses:

```json
{
  "data": [],
  "meta": {
    "pagination": {
      "current_page": 1,
      "per_page": 25,
      "total": 100
    }
  }
}
```

## Error Response Shape

All errors should follow this structure:

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "The request data is invalid.",
    "details": {},
    "request_id": "optional-request-id"
  }
}
```

## Standard Error Codes

Use these MVP error codes:

- VALIDATION_ERROR
- NOT_FOUND
- UNAUTHENTICATED
- FORBIDDEN
- CONFLICT
- RATE_LIMITED
- AI_PROVIDER_UNAVAILABLE
- AI_OUTPUT_INVALID
- DECISION_NOT_READY
- REVIEW_REQUIRED
- INTERNAL_ERROR

## Validation Error Example

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "The request data is invalid.",
    "details": {
      "message": [
        "The message field is required."
      ]
    },
    "request_id": "req_123"
  }
}
```

## Not Found Example

```json
{
  "error": {
    "code": "NOT_FOUND",
    "message": "The requested resource was not found.",
    "details": {},
    "request_id": "req_123"
  }
}
```

## AI Provider Unavailable Example

```json
{
  "error": {
    "code": "AI_PROVIDER_UNAVAILABLE",
    "message": "The screening service is temporarily unavailable.",
    "details": {
      "fallback": "manual_review"
    },
    "request_id": "req_123"
  }
}
```

## Invalid AI Output Example

```json
{
  "error": {
    "code": "AI_OUTPUT_INVALID",
    "message": "The AI response could not be validated.",
    "details": {
      "fallback": "manual_review"
    },
    "request_id": "req_123"
  }
}
```

## HTTP Status Mapping

Recommended mapping:

- 200 OK: successful read or action
- 201 Created: resource created
- 400 Bad Request: malformed input
- 401 Unauthorized: unauthenticated
- 403 Forbidden: authenticated but not allowed
- 404 Not Found: resource not found
- 409 Conflict: invalid state transition
- 422 Unprocessable Entity: validation error
- 429 Too Many Requests: rate limit
- 500 Internal Server Error: unexpected failure
- 503 Service Unavailable: AI provider or dependency unavailable

## State Conflict Rules

Return CONFLICT when:

- a decision is requested before screening exists
- a review outcome is submitted for a lead that is not reviewable
- a lead is already closed
- a state transition is not allowed

## Security Rules

Error responses must not expose:

- stack traces
- SQL errors
- raw AI prompts
- provider responses containing internal data
- secrets
- internal file paths

## Request ID

When middleware is added, each response should include or reference a request_id.

This can be used to correlate:

- API logs
- audit logs
- AI runs
- support requests

## Laravel Implementation Notes

Recommended components:

- ApiExceptionHandler or custom render logic in Laravel exception handler
- ApiErrorResponse helper
- Validation exception formatter
- request_id middleware later if needed

## Test Requirements

Feature tests should assert:

- validation error shape
- not found error shape
- AI fallback error shape
- conflict error shape
- no HTML error pages for API routes

## References

- SPEC-001 API Overview
- CONTRACT-001 JSON Contracts Overview
- TC-088 AI Service Unavailable Fallback
- TC-089 Invalid AI Output Fallback
- TC-095 Audit Trail Integrity
