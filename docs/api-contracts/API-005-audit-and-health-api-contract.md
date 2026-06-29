# API-005 - Audit and Health API Contract

Version: 1.0 Draft
Status: Active
Owner: Product / Engineering
Domain: API Contracts / Audit and Health
Related: docs/specifications/SPEC-005-audit-and-health-api.md, docs/specifications/SPEC-010-audit-and-supporting-schema.md

## Purpose

Define MVP endpoints for health checks and audit visibility.

Audit write behavior should normally be handled internally by services, observers or domain events rather than public API writes.

## Endpoints

```text
GET /api/v1/health
GET /api/v1/leads/{lead_public_id}/audit-logs
```

## GET /api/v1/health

Purpose: return basic API health.

Response:

```json
{
  "data": {
    "status": "ok",
    "service": "erstatningshjaelp-api",
    "version": "v1"
  },
  "meta": {},
  "errors": []
}
```

## GET /api/v1/leads/{lead_public_id}/audit-logs

Purpose: return audit events for internal staff visibility.

Response:

```json
{
  "data": [
    {
      "action": "conversation.message_saved",
      "actor_type": "system",
      "subject_type": "lead_conversation",
      "subject_id": "id|null",
      "metadata": {},
      "created_at": "datetime"
    }
  ],
  "meta": {
    "pagination": {}
  },
  "errors": []
}
```

## Audit Write Rule

Important actions should create audit logs internally:

```text
lead.created
conversation.started
conversation.message_saved
facts.updated
screening.run_created
screening.result_mapped
decision.created
crm.handover_created
review.status_updated
review.outcome_saved
```

## Validation Rules

```text
health endpoint must not expose secrets
audit endpoint requires internal access control before production
audit logs must avoid unnecessary sensitive payloads
lead_public_id must exist
```

## Feature Test Priorities

```text
health endpoint returns standard response shape
audit log is created when conversation starts
audit log is created when message is saved
audit log is created when decision is created
audit endpoint returns events for a lead
```

## Definition of Done

```text
health endpoint defined
audit endpoint defined
audit write rules documented
validation rules documented
feature test priorities documented
```
