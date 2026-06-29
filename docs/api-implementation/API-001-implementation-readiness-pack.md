# API-001 - API Implementation Readiness Pack

Version: 1.0 Draft
Status: Active
Owner: Product / Engineering / Delivery
Domain: API Implementation Readiness
Related: docs/specifications/SPEC-001-api-overview.md, docs/specifications/SPEC-002-conversation-api.md, docs/specifications/SPEC-003-screening-and-decision-api.md, docs/specifications/SPEC-004-crm-and-review-api.md, docs/contracts/CONTRACT-001-json-contracts-overview.md, reviews/REV-003-database-readiness-review.md

## Purpose

Translate the existing API specifications and JSON contracts into a practical implementation sequence for Laravel.

This document should be used by engineering after the Laravel baseline has been added by ServerAdmin.

---

## Implementation Principle

Do not implement endpoints as isolated controllers.

Each endpoint should route through:

```text
Request Validator
Controller
Service
DTO / Contract Mapper
Model / Repository
Resource Response
Audit Event where relevant
Feature Test
```

---

## Existing API Scope

The MVP API is grouped into:

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

---

## Phase 1 - Foundation API

### Health

```text
GET /api/v1/health
```

Purpose:

```text
Confirm application is alive and API response shape is stable.
```

Implementation items:

```text
HealthController
HealthResource
HealthEndpointTest
```

---

## Phase 2 - Conversation API

### Endpoints

```text
POST /api/v1/conversation/start
POST /api/v1/conversation/{lead_id}/message
GET  /api/v1/conversation/{lead_id}
POST /api/v1/conversation/{lead_id}/confirm-understanding
```

### Required Laravel Components

```text
StartConversationRequest
SendConversationMessageRequest
ConfirmUnderstandingRequest
ConversationController
ConversationService
ConversationStateService
FactExtractionService interface
LeadResource
ConversationResource
ConversationMessageResource
```

### Required Tests

```text
conversation can start
message can be saved
empty message is rejected
facts are extracted as unconfirmed
open items are returned
understanding can be confirmed
```

### Primary Contracts

```text
CONTRACT-002 Conversation Message Contract
CONTRACT-003 Fact Extraction Contract
```

---

## Phase 3 - Screening API

### Endpoints

```text
POST /api/v1/leads/{lead_id}/screening/run
GET  /api/v1/leads/{lead_id}/screening/latest
```

### Required Laravel Components

```text
RunScreeningRequest
ScreeningController
ScreeningService
AiScreeningService interface
AiOutputValidator
ScoreMapper
ScreeningResource
ScoreResource
AiRunResource
```

### Required Tests

```text
screening run can be created
invalid AI output is rejected
scores are persisted by score type
AI run metadata is stored
latest screening can be fetched
```

### Primary Contracts

```text
CONTRACT-004 Screening Output Contract
PROMPT-004 Screening Prompt
```

---

## Phase 4 - Decision API

### Endpoints

```text
POST /api/v1/leads/{lead_id}/decision/run
GET  /api/v1/leads/{lead_id}/decision/latest
```

### Required Laravel Components

```text
RunDecisionRequest
DecisionController
DecisionEngine
DecisionPolicyEvaluator
DecisionReasonCodeMapper
DecisionResource
```

### Required Tests

```text
decision can be created from scores and facts
reason codes are stored
missing information can route to continue intake
low confidence can route to human review
qualified lead can route to CRM handover
latest decision can be fetched
```

### Primary Contracts

```text
CONTRACT-005 Decision Output Contract
PROMPT-005 Decision Support Prompt
```

---

## Phase 5 - CRM API

### Endpoints

```text
GET  /api/v1/crm/leads
GET  /api/v1/crm/leads/{lead_id}
POST /api/v1/crm/leads/{lead_id}/handover
```

### Required Laravel Components

```text
CrmLeadController
CreateHandoverRequest
HandoverService
HandoverSnapshotBuilder
CrmLeadBoardResource
CrmLeadDetailResource
HandoverSnapshotResource
```

### Required Tests

```text
CRM board returns qualified leads
CRM board can filter by status and priority
lead detail includes facts, open items and latest decision
handover snapshot can be created
confirmed and unconfirmed facts remain separated
```

### Primary Contracts

```text
CONTRACT-006 CRM Handover Contract
PROMPT-006 Summary and Handover Prompt
```

---

## Phase 6 - Human Review API

### Endpoints

```text
GET  /api/v1/review/leads
GET  /api/v1/review/leads/{lead_id}
POST /api/v1/review/leads/{lead_id}/status
POST /api/v1/review/leads/{lead_id}/outcome
```

### Required Laravel Components

```text
ReviewController
UpdateReviewStatusRequest
SaveReviewOutcomeRequest
ReviewQueueService
ReviewOutcomeService
ReviewQueueResource
ReviewDetailResource
```

### Required Tests

```text
review queue returns open reviews
review detail returns context
status can move from open to in_review
outcome can be saved
review updates create audit events
AI review support cannot override staff outcome
```

### Primary Contracts

```text
CONTRACT-007 Human Review Contract
PROMPT-007 Human Review Support Prompt
```

---

## Phase 7 - Audit API

### Endpoints

Initial MVP may keep audit internal only.

Optional endpoint:

```text
GET /api/v1/leads/{lead_id}/audit
```

### Required Laravel Components

```text
AuditLogService
AuditLogResource
LeadAuditController optional
```

### Required Tests

```text
important lead actions create audit logs
conversation message saved event is audited
screening run event is audited
decision created event is audited
review outcome event is audited
```

---

## Endpoint Build Order

Recommended implementation order:

```text
1. GET /api/v1/health
2. POST /api/v1/conversation/start
3. POST /api/v1/conversation/{lead_id}/message
4. GET /api/v1/conversation/{lead_id}
5. POST /api/v1/conversation/{lead_id}/confirm-understanding
6. POST /api/v1/leads/{lead_id}/screening/run
7. GET /api/v1/leads/{lead_id}/screening/latest
8. POST /api/v1/leads/{lead_id}/decision/run
9. GET /api/v1/leads/{lead_id}/decision/latest
10. POST /api/v1/crm/leads/{lead_id}/handover
11. GET /api/v1/crm/leads
12. GET /api/v1/crm/leads/{lead_id}
13. GET /api/v1/review/leads
14. GET /api/v1/review/leads/{lead_id}
15. POST /api/v1/review/leads/{lead_id}/status
16. POST /api/v1/review/leads/{lead_id}/outcome
```

---

## ServerAdmin Handoff Notes

Before implementation starts, ServerAdmin should confirm:

```text
Laravel 12 baseline is complete
routes/api.php supports /api/v1 grouping
tests run locally
sqlite testing database works
.env.example is aligned with AI_FAKE_MODE=true
Pint and PHPUnit scripts work
```

---

## Definition of Done

```text
API implementation phases defined
Laravel components listed per phase
required tests listed per phase
endpoint build order defined
ServerAdmin handoff notes included
```
