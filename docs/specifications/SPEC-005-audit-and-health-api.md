# SPEC-005 - Audit and Health API

Version: 1.0 Draft
Status: Planned
Owner: Product / Engineering
Domain: API Specification / Audit and Health
Related: backlog/issues/ISSUE-018-create-audit-logs-migration-and-model.md, backlog/issues/ISSUE-081-add-audit-log-coverage-review.md, backlog/issues/ISSUE-084-add-security-test-plan.md

## Purpose

Define MVP endpoints for audit visibility and basic system health.

Some audit endpoints may be internal-only in the first MVP version.

## Endpoints

```text
GET /api/v1/audit/leads/{lead_id}
GET /api/v1/health
GET /api/v1/health/dependencies
```

## Lead Audit Trail

```text
GET /api/v1/audit/leads/{lead_id}
```

Response:

```json
{
  "data": {
    "lead_id": "uuid",
    "events": []
  },
  "meta": {},
  "errors": []
}
```

Event shape:

```json
{
  "event_id": "uuid",
  "action": "string",
  "actor_type": "system|user|staff",
  "subject_type": "string",
  "subject_id": "uuid|null",
  "created_at": "datetime"
}
```

## Health

```text
GET /api/v1/health
```

Response:

```json
{
  "data": {
    "status": "ok",
    "version": "string|null"
  },
  "meta": {},
  "errors": []
}
```

## Dependencies

```text
GET /api/v1/health/dependencies
```

Response includes database status and configured dependency checks where available.

## Error Cases

- lead_not_found
- access_denied
- dependency_unavailable

## Definition of Done

```text
audit endpoint listed
health endpoints listed
event shape defined
error cases listed
```
