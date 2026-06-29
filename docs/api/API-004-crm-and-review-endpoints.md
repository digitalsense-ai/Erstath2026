# API-004 - CRM and Review Endpoints

Version: 1.0 Draft
Status: Active
Owner: Product / Engineering
Domain: API Implementation Readiness / CRM and Review
Related: docs/contracts/CONTRACT-006-crm-handover-contract.md, docs/contracts/CONTRACT-007-human-review-contract.md, docs/prompts/PROMPT-006-summary-and-handover-prompt.md, docs/prompts/PROMPT-007-human-review-support-prompt.md

## Purpose

Define implementation-ready API endpoints for CRM handover and human review workflows.

---

## CRM Handover Endpoints

```text
POST /api/leads/{lead_public_id}/handover-snapshots
GET  /api/leads/{lead_public_id}/handover-snapshots/latest
GET  /api/crm/leads
```

---

## Human Review Endpoints

```text
GET   /api/reviews
GET   /api/reviews/{review_id}
PATCH /api/reviews/{review_id}/status
POST  /api/reviews/{review_id}/outcome
```

---

## POST /api/leads/{lead_public_id}/handover-snapshots

Purpose:

```text
Create a structured snapshot for CRM or staff review.
```

Controller:

```text
Api/HandoverSnapshotController@store
```

Service:

```text
HandoverSnapshotService::createForLead
```

Request DTO:

```text
CreateHandoverSnapshotData
```

Response follows CONTRACT-006.

Implementation rules:

```text
Separate confirmed and unconfirmed facts.
Include open items.
Include latest scores and latest decision.
Avoid unnecessary sensitive details.
Create audit event crm.handover_created.
```

---

## GET /api/crm/leads

Purpose:

```text
Return CRM board items for leads ready for follow-up.
```

Controller:

```text
Api/CrmLeadController@index
```

Response uses CRM board item shape from CONTRACT-006.

---

## GET /api/reviews

Purpose:

```text
Return human review queue items.
```

Controller:

```text
Api/HumanReviewController@index
```

Response uses review queue item shape from CONTRACT-007.

---

## GET /api/reviews/{review_id}

Purpose:

```text
Return full review context for staff.
```

Controller:

```text
Api/HumanReviewController@show
```

Response uses review detail shape from CONTRACT-007.

---

## PATCH /api/reviews/{review_id}/status

Purpose:

```text
Update review status.
```

Controller:

```text
Api/HumanReviewStatusController@update
```

Request DTO:

```text
UpdateReviewStatusData
```

Implementation rules:

```text
status must be allowed value
notes are internal
create audit event review.status_updated
```

---

## POST /api/reviews/{review_id}/outcome

Purpose:

```text
Save staff review outcome.
```

Controller:

```text
Api/HumanReviewOutcomeController@store
```

Request DTO:

```text
SaveReviewOutcomeData
```

Implementation rules:

```text
outcome must be allowed value
review outcome must not be overwritten silently
create audit event review.outcome_saved
update lead next step where appropriate
```

---

## Definition of Done

```text
CRM handover endpoints listed
human review endpoints listed
controllers identified
services identified
DTOs identified
audit event rules documented
```
