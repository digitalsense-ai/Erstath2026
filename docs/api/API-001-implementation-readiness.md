# API-001 - Implementation Readiness Pack

Version: 1.0 Draft
Status: Active
Owner: Product / Engineering / API
Domain: API Implementation Readiness
Related: docs/specifications/SPEC-001-api-overview.md, docs/specifications/SPEC-002-conversation-api.md, docs/specifications/SPEC-003-screening-and-decision-api.md, docs/specifications/SPEC-004-crm-and-review-api.md, docs/contracts/CONTRACT-001-json-contracts-overview.md

## Purpose

Translate the existing API specifications and JSON contracts into an implementation-ready Laravel API plan.

This document should guide controllers, request validators, response resources, DTOs, services and feature tests.

---

## Existing API Foundation

The existing API specification defines these MVP API groups:

```text
Conversation API
Screening API
Decision API
CRM API
Review API
Audit API
Health API
```

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

## Implementation Principle

Controllers should stay thin.

Recommended flow:

```text
Route
↓
Controller
↓
Form Request validation
↓
Service
↓
DTO / Contract validation
↓
Model persistence
↓
Resource response
↓
Audit event where relevant
```

---

## Controller Plan

### ConversationController

Endpoints:

```text
POST /api/v1/conversation/start
POST /api/v1/conversation/{lead}/message
GET  /api/v1/conversation/{lead}
POST /api/v1/conversation/{lead}/confirm-understanding
```

Responsibilities:

```text
start lead intake
store user message
return current conversation state
confirm or correct understood facts
```

Primary services:

```text
ConversationService
FactExtractionService
OpenItemService
AuditLogger
```

Primary contracts:

```text
CONTRACT-002 Conversation Message Contract
CONTRACT-003 Fact Extraction Contract
```

---

### ScreeningController

Endpoints:

```text
POST /api/v1/leads/{lead}/screening/run
GET  /api/v1/leads/{lead}/screening/latest
```

Responsibilities:

```text
run AI screening
validate AI screening output
persist AI run metadata
persist score rows
return latest screening state
```

Primary services:

```text
ScreeningService
AiRunService
ScoreService
AuditLogger
```

Primary contracts:

```text
CONTRACT-004 Screening Output Contract
```

---

### DecisionController

Endpoints:

```text
POST /api/v1/leads/{lead}/decision/run
GET  /api/v1/leads/{lead}/decision/latest
```

Responsibilities:

```text
run deterministic decision evaluation
optionally use AI decision-support input
persist decision outcome
update lead next step
return latest decision state
```

Primary services:

```text
DecisionEngine
RoutingService
AuditLogger
```

Primary contracts:

```text
CONTRACT-005 Decision Output Contract
```

---

### CrmController

Endpoints:

```text
GET  /api/v1/crm/leads
GET  /api/v1/crm/leads/{lead}
POST /api/v1/crm/leads/{lead}/handover
```

Responsibilities:

```text
list CRM-ready leads
show CRM lead detail
create handover snapshot
return board-friendly lead data
```

Primary services:

```text
CrmLeadService
HandoverSnapshotService
AuditLogger
```

Primary contracts:

```text
CONTRACT-006 CRM Handover Contract
```

---

### ReviewController

Endpoints:

```text
GET  /api/v1/review/leads
GET  /api/v1/review/leads/{lead}
POST /api/v1/review/leads/{lead}/status
POST /api/v1/review/leads/{lead}/outcome
```

Responsibilities:

```text
list review queue
show review detail
update review status
save review outcome
create audit events
```

Primary services:

```text
ReviewQueueService
ReviewService
AuditLogger
```

Primary contracts:

```text
CONTRACT-007 Human Review Contract
```

---

### HealthController

Endpoints:

```text
GET /api/v1/health
```

Responsibilities:

```text
return service health
support deployment smoke tests
support CI/API readiness checks
```

---

## Request Validator Plan

Recommended Laravel Form Requests:

```text
StartConversationRequest
StoreConversationMessageRequest
ConfirmUnderstandingRequest
RunScreeningRequest
RunDecisionRequest
CrmLeadIndexRequest
CreateHandoverRequest
ReviewLeadIndexRequest
UpdateReviewStatusRequest
SaveReviewOutcomeRequest
```

Validation should reject invalid input before service execution.

---

## Response Resource Plan

Recommended Laravel API Resources:

```text
ConversationResource
ConversationMessageResource
FactResource
MissingInformationResource
ScreeningResource
ScoreResource
DecisionResource
CrmLeadResource
CrmLeadDetailResource
HandoverSnapshotResource
ReviewQueueItemResource
ReviewDetailResource
AuditLogResource
```

All resources should return the standard API envelope.

---

## DTO Plan

Recommended DTOs:

```text
ConversationMessageData
ExtractedFactData
MissingInformationData
ScreeningResultData
ScoreData
DecisionResultData
ReasonCodeData
HandoverSnapshotData
ReviewContextData
ApiErrorData
```

DTOs should be used between services and persistence layers where JSON contracts are involved.

---

## Service Implementation Order

Recommended order after Laravel baseline is complete:

```text
1. ApiResponseFactory
2. AuditLogger
3. LeadService
4. ConversationService
5. FactExtractionService fake implementation
6. OpenItemService
7. ScreeningService fake implementation
8. DecisionEngine deterministic implementation
9. HandoverSnapshotService
10. ReviewService
11. CRM board service
```

Use fake AI mode first.

Real AI integration should be added only after request/response validation and persistence are stable.

---

## Feature Test Order

First API tests:

```text
GET /api/v1/health returns standard envelope
POST /api/v1/conversation/start creates lead
POST /api/v1/conversation/{lead}/message stores message
fact extraction fake output creates unconfirmed facts
open missing information is tracked
screening fake output creates score records
decision run creates decision with reason codes
CRM handover creates snapshot
review status update creates audit log
invalid requests return standard error shape
```

---

## Security and Privacy Notes

```text
Do not expose internal numeric ids where public_id can be used.
Do not expose stack traces.
Do not store unnecessary sensitive data in API logs.
Do not treat AI-created facts as confirmed.
Do not allow review notes to be shown as user-facing advice.
```

---

## Ready for ServerAdmin

When Laravel baseline is installed, ServerAdmin can start with:

```text
routes/api.php
app/Http/Controllers/Api/V1
app/Http/Requests
app/Http/Resources
app/Services
app/Data or app/DTO
app/Enums
tests/Feature/Api
```

---

## Definition of Done

```text
controller plan defined
request validators listed
response resources listed
DTOs listed
service order defined
feature test order defined
security notes included
ServerAdmin start paths listed
```
