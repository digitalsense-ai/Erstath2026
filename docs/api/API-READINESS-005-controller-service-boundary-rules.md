# API-READINESS-005 - Controller Service Boundary Rules

Version: 1.0
Status: Ready for implementation planning
Scope: MVP 0.1

## Purpose

This document defines where logic belongs in the Laravel application.

The goal is to keep controllers thin, services testable and domain behavior consistent across the API.

## Core Rule

Controllers coordinate HTTP.

Services execute business behavior.

Models represent persistence and relationships.

Resources shape API output.

Requests validate input.

## Controller Responsibilities

Controllers may:

- receive validated requests
- resolve route models
- create DTOs from validated input
- call application services
- return API resources
- return standard error responses when needed

Controllers must not:

- calculate scores
- choose next questions
- merge facts
- evaluate decisions
- call AI providers directly
- perform complex status transitions directly
- contain long conditional business rules

## FormRequest Responsibilities

FormRequest classes must:

- validate input shape
- validate required fields
- validate basic enum values
- normalize simple input if needed

FormRequest classes must not:

- create models
- call services
- run AI logic
- calculate scores
- decide lead status

## Service Responsibilities

Services should contain the business process.

Examples:

- ConversationSessionService
- FactMergeService
- MissingInformationService
- SmartSkipService
- AiScreeningServiceInterface
- DecisionEngine
- HandoverSnapshotBuilder
- ReviewOutcomeService
- AuditLogger

Services may:

- coordinate multiple models
- call AI provider abstractions
- validate AI output through validators
- update lead status
- persist facts and scores
- trigger audit events
- return domain results or DTOs

## DTO Responsibilities

DTOs should carry structured data between layers.

Examples:

- StartConversationData
- StoreConversationMessageData
- ScreeningInputData
- DecisionInputData
- ReviewOutcomeData

DTOs should be simple and predictable.

They should not contain database queries or API response formatting.

## Resource Responsibilities

API Resources should shape output only.

Resources may:

- expose public IDs
- expose safe score data
- expose confirmation state
- expose reason codes
- expose review status

Resources must not:

- run queries that change state
- call AI providers
- calculate decisions
- expose raw prompts
- expose secrets
- expose stack traces

## Model Responsibilities

Eloquent models should contain:

- relationships
- casts
- fillable or guarded definitions
- simple helper methods
- enum casts where useful

Models should not become large business service objects.

If a method coordinates several aggregates or external services, it belongs in a service.

## Recommended Namespace Structure

```text
app/
  Data/
    Conversation/
    Screening/
    Decision/
    Review/
  Services/
    Conversation/
    Screening/
    Decision/
    Crm/
    Review/
    Audit/
  Http/
    Controllers/
      Api/V1/
    Requests/
      Conversation/
      Screening/
      Decision/
      Review/
    Resources/
      Conversation/
      Screening/
      Decision/
      Crm/
      Review/
      Audit/
```

## First Slice Example

ConversationController should:

1. Accept StartConversationRequest.
2. Create StartConversationData.
3. Call ConversationSessionService::start().
4. Return ConversationTurnResource.

ConversationController should not:

- call OpenAI directly
- manually insert all related rows
- decide next question directly
- calculate scores directly

## Testing Strategy

Use feature tests for controllers.

Use unit tests for services.

Examples:

Feature tests:

- POST /api/v1/conversations creates lead and returns next question.
- POST /api/v1/conversations/{conversation}/messages stores message and returns assistant response.

Unit tests:

- FactMergeService merges unconfirmed facts.
- MissingInformationService prioritises missing fields.
- SmartSkipService avoids repeated questions.
- DecisionEngine maps scores to next steps.

## Anti-Patterns

Avoid:

- fat controllers
- direct AI calls in controllers
- returning raw model arrays from API endpoints
- duplicating scoring logic across services
- mixing human review outcome logic with CRM list queries
- exposing internal IDs unnecessarily

## Acceptance Criteria

This boundary standard is met when:

- all MVP controllers are thin
- all request validation is in FormRequest classes
- all API responses are returned through Resources or a standard response helper
- service classes contain business workflow logic
- AI provider calls are abstracted behind interfaces
- tests can cover services without HTTP where appropriate

## References

- API-READINESS-001 Endpoint Implementation Map
- API-READINESS-002 Request Resource DTO Map
- API-READINESS-003 First Vertical Slice Plan
- API-READINESS-004 Error and Response Standard
- DEV-002 Folder Structure and Architecture
- DEV-003 Coding Standards
