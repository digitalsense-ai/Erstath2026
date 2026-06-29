# REV-004 - API Implementation Readiness Review

Version: 1.0 Draft
Status: Active
Owner: Product / Engineering / Delivery
Domain: Review / API Implementation Readiness
Related: docs/specifications/SPEC-001-api-overview.md, docs/specifications/SPEC-002-conversation-api.md, docs/specifications/SPEC-003-screening-and-decision-api.md, docs/specifications/SPEC-004-crm-and-review-api.md, docs/contracts/CONTRACT-001-json-contracts-overview.md

## Purpose

Translate the existing API specifications and JSON contracts into a practical Laravel implementation plan.

This review should help ServerAdmin and engineering know which controllers, requests, resources, DTOs and services to build first after the Laravel baseline is restored.

---

## Executive Summary

The API design is ready for implementation planning.

The existing API specs already define:

```text
API groups
base path
standard response shape
standard error shape
conversation endpoints
screening endpoints
decision endpoints
CRM endpoints
review endpoints
```

The next work is not to create a second API design.

The next work is to implement the existing design in Laravel using controllers, form requests, resources, DTOs and services.

---

## API Base Rules

The API should use:

```text
/api/v1
```

All responses should use:

```json
{
  "data": {},
  "meta": {},
  "errors": []
}
```

All errors should use:

```json
{
  "code": "string",
  "message": "string",
  "field": "string|null"
}
```

---

## First Implementation Order

### Phase 1 - Health and API envelope

```text
GET /api/health
GET /api/v1/health
```

Build:

```text
ApiResponse helper
ApiError helper
HealthController
HealthEndpointTest
```

### Phase 2 - Conversation API

```text
POST /api/v1/conversation/start
POST /api/v1/conversation/{lead_id}/message
GET  /api/v1/conversation/{lead_id}
POST /api/v1/conversation/{lead_id}/confirm-understanding
```

Build:

```text
ConversationController
StartConversationRequest
SendConversationMessageRequest
ConfirmUnderstandingRequest
ConversationResource
ConversationMessageResource
ConversationService
FactExtractionService interface
```

### Phase 3 - Screening and decision API

```text
POST /api/v1/leads/{lead_id}/screening/run
GET  /api/v1/leads/{lead_id}/screening/latest
POST /api/v1/leads/{lead_id}/decision/run
GET  /api/v1/leads/{lead_id}/decision/latest
```

Build:

```text
ScreeningController
DecisionController
RunScreeningRequest
RunDecisionRequest
ScreeningResource
DecisionResource
ScreeningService
DecisionEngine
AiOutputValidator
```

### Phase 4 - CRM and review API

```text
GET  /api/v1/crm/leads
GET  /api/v1/crm/leads/{lead_id}
POST /api/v1/crm/leads/{lead_id}/handover
GET  /api/v1/review/leads
GET  /api/v1/review/leads/{lead_id}
POST /api/v1/review/leads/{lead_id}/status
POST /api/v1/review/leads/{lead_id}/outcome
```

Build:

```text
CrmLeadController
ReviewController
CreateHandoverRequest
UpdateReviewStatusRequest
SaveReviewOutcomeRequest
CrmLeadBoardResource
CrmLeadDetailResource
ReviewQueueResource
ReviewDetailResource
HandoverService
HumanReviewService
```

---

## Controller Plan

Recommended controllers:

```text
App\Http\Controllers\Api\V1\HealthController
App\Http\Controllers\Api\V1\ConversationController
App\Http\Controllers\Api\V1\ScreeningController
App\Http\Controllers\Api\V1\DecisionController
App\Http\Controllers\Api\V1\CrmLeadController
App\Http\Controllers\Api\V1\ReviewController
```

Controller rule:

```text
Controllers should stay thin.
Business logic belongs in services.
Response shaping belongs in resources or response helpers.
Validation belongs in form requests.
```

---

## Request Validator Plan

Recommended form requests:

```text
StartConversationRequest
SendConversationMessageRequest
ConfirmUnderstandingRequest
RunScreeningRequest
RunDecisionRequest
CreateHandoverRequest
UpdateReviewStatusRequest
SaveReviewOutcomeRequest
```

Validation rule:

```text
Requests validate shape and simple allowed values.
Services validate business state.
AI output validators validate AI-generated JSON.
```

---

## Resource Plan

Recommended resources:

```text
ConversationResource
ConversationMessageResource
FactResource
MissingInformationResource
ScreeningResource
DecisionResource
CrmLeadBoardResource
CrmLeadDetailResource
ReviewQueueResource
ReviewDetailResource
AuditLogResource
```

Resource rule:

```text
Resources must return public_id values for external references.
Resources must not expose internal stack traces or sensitive implementation details.
```

---

## DTO Plan

Recommended DTOs:

```text
ConversationMessageData
ExtractedFactData
MissingInformationData
ScreeningOutputData
ScoreData
DecisionOutputData
ReasonCodeData
HandoverSnapshotData
ReviewOutcomeData
ApiErrorData
```

DTO rule:

```text
DTOs should mirror JSON contracts where practical.
DTOs should make service boundaries explicit.
```

---

## Service Boundary Plan

Recommended services:

```text
ConversationService
FactExtractionService
ScreeningService
DecisionEngine
HandoverService
HumanReviewService
AuditService
AiOutputValidator
```

Service rule:

```text
Services should be testable without controllers.
AI-facing services must validate JSON before persistence.
DecisionEngine should produce deterministic outcomes from structured inputs.
```

---

## Route File Plan

Use Laravel route grouping:

```php
Route::prefix('v1')->group(function () {
    Route::get('/health', HealthController::class);

    Route::prefix('conversation')->group(function () {
        Route::post('/start', [ConversationController::class, 'start']);
        Route::post('/{lead:public_id}/message', [ConversationController::class, 'message']);
        Route::get('/{lead:public_id}', [ConversationController::class, 'show']);
        Route::post('/{lead:public_id}/confirm-understanding', [ConversationController::class, 'confirmUnderstanding']);
    });
});
```

Recommendation:

```text
Use lead public_id binding for public/API routes.
Keep internal numeric ids private.
```

---

## First API Feature Tests

Recommended first tests:

```text
health endpoint returns standard envelope
conversation start creates lead
conversation message saves message
conversation message returns one next question
fact extraction failure does not persist invalid facts
screening run validates AI output before persistence
decision run stores reason codes
review status update creates audit log
CRM handover separates confirmed and unconfirmed facts
```

---

## Open Implementation Decisions

Before coding API controllers, confirm:

```text
whether /api/health remains alongside /api/v1/health
whether public route binding uses lead public_id from day one
whether authentication is disabled for early local MVP endpoints
whether CRM and review endpoints are internal-only in MVP
whether API resources should include timestamps in ISO 8601 format
```

---

## Do Not Do

```text
Do not create another API spec set.
Do not expose numeric lead ids in public API responses.
Do not allow AI output to bypass validation.
Do not put business logic directly in controllers.
Do not return raw exception traces in API responses.
```

---

## Sprint Mapping

```text
SPRINT-000: health endpoint, response envelope, test runner
SPRINT-001: models and database backing for API resources
SPRINT-002: conversation API and fact extraction service
SPRINT-003: screening and decision API
SPRINT-004: CRM and review API
SPRINT-005: audit coverage, access control and regression tests
```

---

## Definition of Done

```text
API implementation order defined
controllers listed
request validators listed
resources listed
DTOs listed
services listed
first API tests listed
open implementation decisions identified
```
