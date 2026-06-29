# SPEC-015 - CRM Review Audit JSON Contracts

Version: 1.0 Draft
Status: Active
Owner: Product / Engineering
Domain: JSON Contracts / CRM Review Audit
Related: SPEC-004-crm-and-review-api.md, SPEC-005-audit-and-health-api.md, SPEC-010-audit-and-supporting-schema.md, DEV-007-crm-and-human-review-guide.md

## Purpose

Define JSON contracts for CRM board/detail, human review, handover snapshots and audit events.

## CRM Lead Board Item

```json
{
  "lead_id": "uuid",
  "status": "string",
  "priority": "string|null",
  "current_next_step": "string|null",
  "latest_decision": {
    "outcome": "string|null",
    "next_step": "string|null",
    "reason_codes": []
  },
  "review_state": "string|null",
  "latest_activity_at": "datetime|null"
}
```

## CRM Lead Detail

```json
{
  "data": {
    "lead_id": "uuid",
    "status": "string",
    "conversation_summary": "string|null",
    "facts": [],
    "open_items": [],
    "scores": [],
    "latest_decision": null,
    "latest_review": null,
    "handover_snapshot": null
  },
  "meta": {
    "contract_version": "v1"
  },
  "errors": []
}
```

## Handover Snapshot Object

```json
{
  "snapshot_version": "v1",
  "summary": "string|null",
  "payload": {
    "confirmed_facts": [],
    "unconfirmed_facts": [],
    "open_items": [],
    "scores": [],
    "decision": null,
    "review": null
  },
  "created_at": "datetime"
}
```

## Review Object

```json
{
  "review_id": "uuid|null",
  "lead_id": "uuid",
  "status": "open|in_review|completed|cancelled",
  "reason": "string|null",
  "outcome": "string|null",
  "note": "string|null",
  "started_at": "datetime|null",
  "completed_at": "datetime|null"
}
```

## Review Status Update Request

```json
{
  "status": "open|in_review|completed|cancelled",
  "note": "string|null"
}
```

## Audit Event Object

```json
{
  "event_id": "uuid|null",
  "lead_id": "uuid|null",
  "actor_type": "system|user|staff|null",
  "actor_id": "string|null",
  "action": "string",
  "subject_type": "string|null",
  "subject_id": "string|null",
  "metadata": {},
  "created_at": "datetime"
}
```

## Audit Rules

- Important status changes should create audit events.
- Review outcomes should create audit events.
- AI fallback and invalid-output events should be auditable.
- Audit metadata should avoid unnecessary sensitive content.
- Audit events should be append-only in normal use.

## Error Codes

```text
lead_not_found
review_not_found
invalid_review_status
audit_event_not_found
access_denied
```

## Definition of Done

```text
CRM board item defined
CRM detail contract defined
handover snapshot defined
review object defined
review status request defined
audit event object defined
audit rules documented
error codes listed
```
