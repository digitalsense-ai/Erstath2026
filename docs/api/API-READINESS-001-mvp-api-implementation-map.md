# API-READINESS-001 - MVP API Implementation Map

Version: 1.0 Draft
Status: Active
Owner: Product / Engineering
Domain: API Implementation Readiness
Related: docs/specifications/SPEC-001-api-overview.md, docs/specifications/SPEC-002-conversation-api.md, docs/specifications/SPEC-003-screening-and-decision-api.md, docs/specifications/SPEC-004-crm-and-review-api.md, docs/specifications/SPEC-005-audit-and-health-api.md, docs/contracts/CONTRACT-001-json-contracts-overview.md

## Purpose

Translate the API specifications into an implementation-ready Laravel map.

This document should help engineering build controllers, request validators, services, resources and tests in the correct order after the Laravel baseline is installed.

---

## API Baseline

Base path:

```text
/api/v1
```

Standard response shape:

```json
{
  "data": {},
  "meta": {},
  "errors": []
}
```

Standard error shape:

```json
{
  "code": "string",
  "message": "string",
  "field": "string|null"
}
```

---

## Implementation Order

Recommended order:

```text
1. Health API
2. Conversation API
3. Screening API
4. Decision API
5. CRM API
6. Review API
7. Audit API
```

Reason:

```text
Health proves routing and deployment.
Conversation creates leads and facts.
Screening and decision need leads and facts.
CRM and review need decision outputs.
Audit should be added across the flow as behavior stabilizes.
```

---

## Controllers

Recommended controller structure:

```text
app/Http/Controllers/Api/V1/HealthController.php
app/Http/Controllers/Api/V1/ConversationController.php
app/Http/Controllers/Api/V1/ScreeningController.php
app/Http/Controllers/Api/V1/DecisionController.php
app/Http/Controllers/Api/V1/CrmLeadController.php
app/Http/Controllers/Api/V1/ReviewController.php
app/Http/Controllers/Api/V1/AuditController.php
```

---

## Request Validators

Recommended request classes:

```text
app/Http/Requests/Api/V1/Conversation/StartConversationRequest.php
app/Http/Requests/Api/V1/Conversation/StoreConversationMessageRequest.php
app/Http/Requests/Api/V1/Conversation/ConfirmUnderstandingRequest.php
app/Http/Requests/Api/V1/Screening/RunScreeningRequest.php
app/Http/Requests/Api/V1/Decision/RunDecisionRequest.php
app/Http/Requests/Api/V1/Review/UpdateReviewStatusRequest.php
app/Http/Requests/Api/V1/Review/StoreReviewOutcomeRequest.php
```

Do not add request classes for simple GET endpoints unless filtering or authorization requires them.

---

## API Resources

Recommended resource classes:

```text
app/Http/Resources/Api/V1/LeadResource.php
app/Http/Resources/Api/V1/ConversationResource.php
app/Http/Resources/Api/V1/ConversationMessageResource.php
app/Http/Resources/Api/V1/FactResource.php
app/Http/Resources/Api/V1/MissingInformationResource.php
app/Http/Resources/Api/V1/ScreeningResource.php
app/Http/Resources/Api/V1/DecisionResource.php
app/Http/Resources/Api/V1/CrmLeadResource.php
app/Http/Resources/Api/V1/ReviewResource.php
app/Http/Resources/Api/V1/AuditLogResource.php
```

All resources should return the standard envelope through a shared response helper or base response class.

---

## Services

Recommended service layer:

```text
app/Services/Conversation/ConversationService.php
app/Services/Conversation/FactExtractionService.php
app/Services/Screening/ScreeningService.php
app/Services/Decision/DecisionEngine.php
app/Services/Crm/HandoverService.php
app/Services/Review/ReviewService.php
app/Services/Audit/AuditService.php
```

Controllers should remain thin.

Business behavior belongs in services.

---

## Endpoints

### Health

```text
GET /api/v1/health
GET /api/v1/health/dependencies
```

Controller:

```text
HealthController
```

Initial tests:

```text
health endpoint returns standard response shape
health endpoint returns status ok
```

### Conversation

```text
POST /api/v1/conversation/start
POST /api/v1/conversation/{lead_id}/message
GET  /api/v1/conversation/{lead_id}
POST /api/v1/conversation/{lead_id}/confirm-understanding
```

Controller:

```text
ConversationController
```

Primary services:

```text
ConversationService
FactExtractionService
```

Primary tests:

```text
conversation can start
message can be stored
empty message is rejected
facts are stored as unconfirmed
open items are returned
confirm understanding can confirm or correct facts
```

### Screening

```text
POST /api/v1/leads/{lead_id}/screening/run
GET  /api/v1/leads/{lead_id}/screening/latest
```

Controller:

```text
ScreeningController
```

Primary service:

```text
ScreeningService
```

Primary tests:

```text
screening can run for existing lead
screening rejects missing lead
invalid AI output is not persisted
scores are stored as decision inputs
```

### Decision

```text
POST /api/v1/leads/{lead_id}/decision/run
GET  /api/v1/leads/{lead_id}/decision/latest
```

Controller:

```text
DecisionController
```

Primary service:

```text
DecisionEngine
```

Primary tests:

```text
decision can run after screening
decision stores outcome
reason codes are stored
missing information leads to safe next step
human review can be selected
```

### CRM

```text
GET  /api/v1/crm/leads
GET  /api/v1/crm/leads/{lead_id}
POST /api/v1/crm/leads/{lead_id}/handover
```

Controller:

```text
CrmLeadController
```

Primary service:

```text
HandoverService
```

Primary tests:

```text
CRM board lists handover-ready leads
CRM detail shows facts and decision summary
handover snapshot can be created
confirmed and unconfirmed facts stay separated
```

### Review

```text
GET  /api/v1/review/leads
GET  /api/v1/review/leads/{lead_id}
POST /api/v1/review/leads/{lead_id}/status
POST /api/v1/review/leads/{lead_id}/outcome
```

Controller:

```text
ReviewController
```

Primary service:

```text
ReviewService
```

Primary tests:

```text
review queue lists open reviews
review detail returns context
review status can be updated
review outcome can be saved
review actions create audit events
```

### Audit

```text
GET /api/v1/audit/leads/{lead_id}
```

Controller:

```text
AuditController
```

Primary service:

```text
AuditService
```

Primary tests:

```text
audit trail returns events for lead
audit trail rejects missing lead
audit trail does not expose stack traces or unnecessary sensitive payloads
```

---

## DTO Layer

Recommended DTO groups:

```text
app/Data/Conversation/ConversationMessageData.php
app/Data/Conversation/ExtractedFactData.php
app/Data/Conversation/MissingInformationData.php
app/Data/Screening/ScreeningOutputData.php
app/Data/Screening/ScoreData.php
app/Data/Decision/DecisionOutputData.php
app/Data/Crm/HandoverSnapshotData.php
app/Data/Review/ReviewContextData.php
```

DTOs should align with CONTRACT-002 to CONTRACT-007.

---

## Error Codes

Initial error codes:

```text
validation_error
lead_not_found
invalid_state
message_empty
insufficient_information
screening_unavailable
decision_not_available
review_not_found
invalid_status
access_denied
dependency_unavailable
```

---

## First Feature Test Set

Minimum first API test files:

```text
tests/Feature/Api/V1/HealthApiTest.php
tests/Feature/Api/V1/ConversationApiTest.php
tests/Feature/Api/V1/ScreeningApiTest.php
tests/Feature/Api/V1/DecisionApiTest.php
tests/Feature/Api/V1/CrmApiTest.php
tests/Feature/Api/V1/ReviewApiTest.php
tests/Feature/Api/V1/AuditApiTest.php
```

---

## Out of Scope for First API Build

```text
MitID identity flow
payment handling
full external CRM integration
document OCR
case management after CRM handover
public user account portal
```

---

## Definition of Done

```text
endpoint map created
controllers listed
request validators listed
resources listed
services listed
DTO groups listed
error codes listed
first feature tests listed
out of scope items documented
```
