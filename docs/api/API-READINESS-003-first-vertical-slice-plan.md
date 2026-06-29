# API-READINESS-003 - First Vertical Slice Plan

Version: 1.0
Status: Ready for implementation planning
Scope: MVP 0.1

## Purpose

This document defines the first working end-to-end slice of the ErstatningsHjælp platform.

The goal is not to build the full product first.

The goal is to prove that a user message can move through the system and create a structured lead with conversation state, extracted facts, missing information and a next question.

## Why This Slice Comes First

The core product is an AI-based screening and prioritisation engine. The business value starts with receiving a lead, understanding it, asking the next best question and preparing it for later screening and CRM handling.

This slice proves the foundation without depending on MitID, document upload, power of attorney signing or real AI provider integration.

## Slice Name

Conversation Intake Slice

## Included Flow

```text
User submits first message
↓
Lead is created
↓
Conversation is created
↓
User message is stored
↓
Fake AI service returns structured output
↓
Assistant message is stored
↓
Facts and missing information are persisted
↓
API returns next question
```

## Endpoints Included

### 1. POST /api/v1/conversations

Purpose:

Start a new lead and conversation.

Input:

```json
{
  "message": "My mother was diagnosed with cancer too late.",
  "source": "web",
  "locale": "da"
}
```

Expected output:

```json
{
  "lead_public_id": "uuid",
  "conversation_id": "uuid-or-public-id",
  "status": "screening",
  "assistant_message": "When did this happen?",
  "next_question": "When did this happen?",
  "missing_information": [
    {
      "key": "event_date",
      "priority": 100
    }
  ]
}
```

### 2. POST /api/v1/conversations/{conversation}/messages

Purpose:

Continue an existing conversation.

Input:

```json
{
  "message": "It happened in 2022 at Herlev Hospital."
}
```

Expected output:

```json
{
  "conversation_id": "uuid-or-public-id",
  "status": "screening",
  "assistant_message": "What consequences did this have for the patient?",
  "next_question": "What consequences did this have for the patient?",
  "known_facts": [],
  "missing_information": []
}
```

## Laravel Components

Controllers:

- ConversationController

Requests:

- StartConversationRequest
- StoreConversationMessageRequest

Resources:

- ConversationResource
- ConversationTurnResource

Services:

- ConversationSessionService
- FactMergeService
- MissingInformationService
- SmartSkipService

AI:

- AiScreeningServiceInterface
- FakeAiScreeningService

Models:

- Lead
- Conversation
- ConversationMessage
- LeadFact
- MissingInformation

## Database Tables Required

Minimum tables for this slice:

- leads
- conversations
- conversation_messages
- lead_facts
- missing_information_items
- ai_runs or ai_interactions if already included in migration plan

## Fake AI Response

The first slice must not depend on a real AI provider.

Use a deterministic fake service that returns a known response for test input.

Example fake output:

```json
{
  "summary": "Possible delayed diagnosis. Event date and provider are missing.",
  "facts": [
    {
      "key": "injury_type",
      "value": "diagnosis_delay",
      "confidence": 0.82,
      "confirmation_status": "unconfirmed"
    }
  ],
  "missing_information": [
    {
      "key": "event_date",
      "priority": 100,
      "question": "When did this happen?"
    }
  ],
  "next_question": "When did this happen?"
}
```

## Acceptance Criteria

The slice is done when:

- A user can create a conversation through the API.
- A Lead record is created.
- A Conversation record is created.
- The user message is stored.
- The fake AI output is processed.
- The assistant message is stored.
- Extracted facts are saved as unconfirmed by default.
- Missing information is saved with priority.
- The API returns a next question.
- A feature test proves the full flow.

## Business Test Case Reference

Primary testcase:

- TC-001 Basic Patient Injury Flow

Supporting testcases:

- TC-006 Missing Documents and Smart Skip
- TC-016 Repeated Question Prevention
- TC-061 Missing Date Smart Follow-up
- TC-066 One Question at a Time

## Out of Scope

Do not include in this slice:

- Real OpenAI integration
- MitID
- Power of attorney signing
- Document upload
- CRM board
- Human review UI
- Case creation

## Definition of Done

- Feature tests pass.
- API response shape matches CONTRACT-002 and CONTRACT-003 where relevant.
- Controllers contain no business logic.
- AI service can be swapped from fake to real implementation later.
- All state-changing events are ready to be audit-logged when audit service is enabled.

## Next Slice

After this is complete, build:

- Screening Calculation Slice
- Decision Result Slice
- CRM Lead Board Slice
