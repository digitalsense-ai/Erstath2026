# API-001 - Endpoint Implementation Matrix

Version: 1.0 Draft
Status: Active
Owner: Engineering / API
Domain: API Implementation
Related: reviews/REV-004-api-implementation-readiness-review.md, docs/contracts/CONTRACT-001-json-contracts-overview.md

## Purpose

Map first MVP API endpoints to Laravel controllers, form requests, services and response resources.

---

## Standard API Prefix

```text
/api/v1
```

---

## Endpoint Matrix

| Endpoint | Controller | Request | Service | Resource |
|---|---|---|---|---|
| GET /health | HealthController | none | none | standard envelope |
| POST /conversations/start | ConversationController@start | StartConversationRequest | ConversationService | ConversationStateResource |
| POST /conversations/{lead_public_id}/messages | ConversationController@storeMessage | StoreConversationMessageRequest | ConversationService | ConversationStateResource |
| GET /conversations/{lead_public_id} | ConversationController@show | none | ConversationService | ConversationStateResource |
| POST /leads/{lead_public_id}/screening-runs | ScreeningController@store | CreateScreeningRunRequest | ScreeningService | ScreeningRunResource |
| GET /leads/{lead_public_id}/scores | ScreeningController@scores | none | ScreeningService | ScoreResource collection |
| POST /leads/{lead_public_id}/decisions | DecisionController@store | CreateDecisionRequest | DecisionEngine | DecisionResource |
| GET /leads/{lead_public_id}/decisions/latest | DecisionController@latest | none | DecisionEngine | DecisionResource |
| POST /leads/{lead_public_id}/handover-snapshots | HandoverSnapshotController@store | CreateHandoverSnapshotRequest | HandoverSnapshotService | HandoverSnapshotResource |
| GET /crm/leads | CrmLeadController@index | none | CrmLeadQueryService | CrmLeadResource collection |
| GET /crm/leads/{lead_public_id} | CrmLeadController@show | none | CrmLeadQueryService | CrmLeadDetailResource |
| GET /reviews | ReviewController@index | none | ReviewService | ReviewResource collection |
| GET /reviews/{review_id} | ReviewController@show | none | ReviewService | ReviewResource |
| PATCH /reviews/{review_id}/status | ReviewController@updateStatus | UpdateReviewStatusRequest | ReviewService | ReviewResource |
| POST /reviews/{review_id}/outcome | ReviewController@storeOutcome | StoreReviewOutcomeRequest | ReviewService | ReviewResource |
| GET /leads/{lead_public_id}/audit-logs | AuditLogController@index | none | AuditLogQueryService | AuditLogResource collection |

---

## Controller Rules

Controllers should be thin.

They should:

```text
accept validated request
resolve lead by public id where needed
call service
return resource or standard envelope
```

Controllers should not:

```text
call AI provider directly
contain decision rules
map AI JSON directly to database
format complex business objects manually
```

---

## Request Validation Rules

Form requests should validate incoming user/API input only.

AI output should be validated separately through DTO validators or contract validators before persistence.

---

## Response Resource Rules

Resources should return stable JSON matching the contract files.

They should not leak:

```text
internal numeric ids
unnecessary personal data
raw AI provider payloads
stack traces
```

---

## First Implementation Slice

The first implementation slice should be:

```text
GET /api/v1/health
POST /api/v1/conversations/start
POST /api/v1/conversations/{lead_public_id}/messages
GET /api/v1/conversations/{lead_public_id}
```

This creates a usable intake loop before screening and CRM are added.

---

## Definition of Done

```text
endpoint matrix created
controllers mapped
requests mapped
services mapped
resources mapped
first implementation slice identified
controller and resource rules documented
```
