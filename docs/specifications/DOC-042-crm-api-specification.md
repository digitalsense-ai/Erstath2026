# DOC-042 - CRM API Specification

Version: 1.0 Draft
Status: Draft
Owner: Engineering
Domain: CRM API
Related: DOC-040 API Specification Index, docs/05-crm-workflow.md, backlog/issues/ISSUE-057-create-crm-lead-board-endpoint.md, backlog/issues/ISSUE-058-create-crm-lead-detail-endpoint.md

## Purpose

Define the MVP API contract for CRM lead board and lead detail views.

## Endpoint: List CRM Leads

```http
GET /api/v1/crm/leads
```

### Query Parameters

```text
status optional
priority optional
review_state optional
page optional
per_page optional
```

### Response

```json
{
  "data": [
    {
      "lead_id": "fake-lead-uuid",
      "status": "ready_for_handover",
      "priority": "medium",
      "latest_decision": "continue_to_crm",
      "latest_activity_at": "2026-01-01T10:00:00Z"
    }
  ],
  "meta": {
    "page": 1,
    "per_page": 25,
    "total": 1
  }
}
```

## Endpoint: Get CRM Lead Detail

```http
GET /api/v1/crm/leads/{lead_id}
```

### Response

```json
{
  "data": {
    "lead_id": "fake-lead-uuid",
    "overview": {
      "status": "ready_for_handover",
      "priority": "medium"
    },
    "facts": [
      {
        "key": "incident_type",
        "value": "fake example",
        "confirmed": true
      }
    ],
    "missing_information": [],
    "latest_decision": {
      "outcome": "continue_to_crm",
      "reason_codes": ["example.reason"]
    },
    "handover_snapshot": {
      "version": "v1",
      "summary": "Fake summary for testing."
    }
  },
  "meta": {
    "version": "v1"
  }
}
```

## Endpoint: Create Handover Snapshot

```http
POST /api/v1/crm/leads/{lead_id}/handover-snapshot
```

### Response

```json
{
  "data": {
    "lead_id": "fake-lead-uuid",
    "snapshot_id": "fake-snapshot-uuid",
    "status": "ready_for_handover"
  },
  "meta": {
    "version": "v1"
  }
}
```

## Error Codes

```text
crm.lead_not_found
crm.invalid_filter
crm.snapshot_not_ready
crm.validation_failed
```

## Notes

- CRM endpoints require access protection.
- CRM responses must avoid unnecessary raw conversation text.
- Handover snapshots should use structured, reviewable data.

## Definition of Done

```text
CRM endpoints defined
query parameters documented
response shapes documented
error codes listed
```
