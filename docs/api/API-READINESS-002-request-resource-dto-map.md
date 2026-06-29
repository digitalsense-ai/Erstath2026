# API-READINESS-002 - Request, Resource and DTO Map

Version: 1.0
Status: Ready for implementation planning
Scope: MVP 0.1

## Purpose

This document maps each MVP API endpoint to Laravel request validators, API resources and internal DTOs.

The goal is to keep controllers thin and ensure that validation, response formatting and service inputs are explicit.

## Principles

Controllers should not contain domain logic.

Use this structure:

Request -> Controller -> DTO -> Service -> Model/Repository -> Resource

## Conversation API

### POST /api/v1/conversations

FormRequest:

- StartConversationRequest

DTO:

- StartConversationData

Resource:

- ConversationResource

Required input:

- message
- source optional
- locale optional

Output should include:

- lead_public_id
- conversation_id
- status
- assistant_message
- next_question
- missing_information

### POST /api/v1/conversations/{conversation}/messages

FormRequest:

- StoreConversationMessageRequest

DTO:

- StoreConversationMessageData

Resource:

- ConversationTurnResource

Required input:

- message

Output should include:

- conversation_id
- saved_message
- assistant_message
- extracted_facts
- missing_information
- next_question
- current_status

### GET /api/v1/conversations/{conversation}

FormRequest:

- none unless filters are added

Resource:

- ConversationResource

Output should include:

- conversation metadata
- message list
- known facts
- open missing information

## Screening API

### POST /api/v1/leads/{lead}/screening

FormRequest:

- RunScreeningRequest

DTO:

- ScreeningInputData

Resource:

- ScreeningResultResource

Output should include:

- summary
- facts
- missing_information
- scores
- confidence
- validation_status

### GET /api/v1/leads/{lead}/screening

Resource:

- ScreeningResultResource

Output should return the latest stored screening result.

## Decision API

### POST /api/v1/leads/{lead}/decision

FormRequest:

- RunDecisionRequest

DTO:

- DecisionInputData

Resource:

- DecisionResource

Output should include:

- decision_type
- next_step
- reason_codes
- human_review_required
- explanation

### GET /api/v1/leads/{lead}/decision

Resource:

- DecisionResource

Output should return the latest stored decision.

## CRM API

### GET /api/v1/crm/leads

FormRequest:

- CrmLeadIndexRequest

Resource:

- CrmLeadListResource

Query filters:

- status
- category
- review_required
- missing_information
- priority

Output should include list rows only, not full lead details.

### GET /api/v1/crm/leads/{lead}

Resource:

- CrmLeadDetailResource

Output should include:

- lead identity summary
- conversation summary
- confirmed facts
- unconfirmed facts
- missing information
- scores
- latest decision
- audit summary
- review status

## Human Review API

### GET /api/v1/reviews

FormRequest:

- HumanReviewIndexRequest

Resource:

- HumanReviewListResource

### GET /api/v1/reviews/{lead}

Resource:

- HumanReviewDetailResource

### POST /api/v1/reviews/{lead}/outcome

FormRequest:

- StoreReviewOutcomeRequest

DTO:

- ReviewOutcomeData

Resource:

- HumanReviewDetailResource

Required input:

- outcome
- note optional
- reason_codes optional

## Audit API

### GET /api/v1/audit/leads/{lead}

FormRequest:

- AuditLogIndexRequest

Resource:

- AuditLogResource

Query filters:

- event_type
- actor_type
- date_from
- date_to

## DTO Naming Rules

DTOs should be immutable value objects where practical.

Recommended namespace:

- App\Data\Conversation
- App\Data\Screening
- App\Data\Decision
- App\Data\Review

## Resource Rules

Resources must not expose:

- internal database IDs where public IDs exist
- raw AI prompts
- provider credentials
- internal stack traces

Resources may expose:

- public IDs
- scores
- reason codes
- confirmation state
- review state
- audit-safe metadata

## First DTOs to Build

1. StartConversationData
2. StoreConversationMessageData
3. ScreeningInputData
4. DecisionInputData
5. ReviewOutcomeData

## References

- API-READINESS-001
- CONTRACT-001 to CONTRACT-007
- SPEC-001 to SPEC-005
