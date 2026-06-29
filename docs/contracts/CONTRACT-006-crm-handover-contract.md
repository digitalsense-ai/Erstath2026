# CONTRACT-006 - CRM Handover Contract

Version: 1.0 Draft
Status: Active
Owner: Product / Engineering
Domain: JSON Contracts / CRM Handover
Related: docs/specifications/SPEC-004-crm-and-review-api.md, docs/specifications/SPEC-010-audit-and-supporting-schema.md, docs/developer-handbook/DEV-007-crm-and-human-review-guide.md

## Purpose

Define the JSON shape for a CRM handover snapshot.

## Handover Input

```json
{
  "lead_id": "uuid",
  "facts": [],
  "missing_information": [],
  "latest_scores": [],
  "latest_decision": {},
  "conversation_summary": "string"
}
```

## Handover Snapshot Output

```json
{
  "lead_id": "uuid",
  "snapshot_version": "v1",
  "summary": "string",
  "payload": {
    "confirmed_facts": [],
    "unconfirmed_facts": [],
    "open_items": [],
    "scores": [],
    "decision": {},
    "recommended_next_step": "string"
  }
}
```

## CRM Board Item Shape

```json
{
  "lead_id": "uuid",
  "status": "ready_for_crm",
  "priority": "high",
  "latest_outcome": "crm_handover",
  "open_item_count": 2,
  "updated_at": "datetime"
}
```

## Validation Rules

```text
lead_id is required
snapshot_version is required
payload is required
summary should not include unnecessary sensitive detail
confirmed and unconfirmed facts must be separated
```

## Definition of Done

```text
handover input defined
handover snapshot output defined
CRM board item shape defined
validation rules documented
```
