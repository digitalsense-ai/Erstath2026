# API-READINESS-001 - Endpoint Implementation Map

Version: 1.0
Status: Ready for implementation planning
Scope: MVP 0.1

## Purpose

This document translates the API specification pack into a concrete Laravel implementation map.

It should be used after the Laravel baseline has been added by ServerAdmin.

## Implementation Principle

Build APIs in this order:

1. Health and foundation endpoints
2. Conversation endpoints
3. Screening endpoints
4. Decision endpoints
5. CRM endpoints
6. Human review endpoints
7. Audit and support endpoints

Do not implement MitID, power of attorney signing or full document analysis in MVP 0.1 unless explicitly moved into scope by a new decision record.

## API Groups

### 1. Foundation

Endpoints:

- GET /api/v1/health

Laravel components:

- HealthController
- HealthResource or simple JSON response
- Feature test

Purpose:

Confirm that the API runtime, routing and test runner work.

### 2. Conversation

Endpoints:

- POST /api/v1/conversations
- POST /api/v1/conversations/{conversation}/messages
- GET /api/v1/conversations/{conversation}

Laravel components:

- ConversationController
- StartConversationRequest
- StoreConversationMessageRequest
- ConversationResource
- ConversationMessageResource
- ConversationSessionService

Purpose:

Start a lead conversation, persist messages and return the next assistant step.

### 3. Screening

Endpoints:

- POST /api/v1/leads/{lead}/screening
- GET /api/v1/leads/{lead}/screening

Laravel components:

- ScreeningController
- RunScreeningRequest
- ScreeningResource
- AiScreeningServiceInterface
- FakeAiScreeningService
- ScreeningResultValidator

Purpose:

Run AI-supported screening and persist facts, missing information and scores.

### 4. Decision

Endpoints:

- POST /api/v1/leads/{lead}/decision
- GET /api/v1/leads/{lead}/decision

Laravel components:

- DecisionController
- RunDecisionRequest
- DecisionResource
- DecisionEngine
- DecisionInputBuilder
- ReasonCodeCatalog

Purpose:

Turn screening output into a structured next-step recommendation.

### 5. CRM

Endpoints:

- GET /api/v1/crm/leads
- GET /api/v1/crm/leads/{lead}

Laravel components:

- CrmLeadController
- CrmLeadListResource
- CrmLeadDetailResource
- CrmLeadQuery
- HandoverSnapshotBuilder

Purpose:

Give internal staff a qualified lead board and detailed lead view.

### 6. Human Review

Endpoints:

- GET /api/v1/reviews
- GET /api/v1/reviews/{lead}
- POST /api/v1/reviews/{lead}/outcome

Laravel components:

- HumanReviewController
- StoreReviewOutcomeRequest
- HumanReviewListResource
- HumanReviewDetailResource
- ReviewOutcomeService

Purpose:

Allow staff to review uncertain or high-impact leads without losing auditability.

### 7. Audit

Endpoints:

- GET /api/v1/audit/leads/{lead}

Laravel components:

- AuditController
- AuditLogResource
- AuditLogger

Purpose:

Expose internal audit history for lead status changes, decision changes and review outcomes.

## Cross-Cutting Requirements

All endpoints must:

- Return JSON only.
- Use API version prefix /api/v1.
- Validate request payloads through FormRequest classes.
- Avoid exposing internal database IDs in public responses when public_id is available.
- Keep AI-derived facts marked as unconfirmed until confirmed by the user or staff.
- Log important state changes to audit_logs.

## First Implementation Slice

The first vertical slice should be:

1. POST /api/v1/conversations
2. POST /api/v1/conversations/{conversation}/messages
3. Fake AI response
4. Persist lead, messages, facts and missing information
5. Return next question
6. Feature test based on TC-001

This creates the first working end-to-end flow without relying on a real AI provider.

## References

- SPEC-001 API Overview
- SPEC-002 Conversation API
- SPEC-003 Screening and Decision API
- SPEC-004 CRM and Review API
- SPEC-005 Audit and Health API
- CONTRACT-001 to CONTRACT-007
- PROMPT-001 to PROMPT-007
- TC-001 to TC-100
