# API-002 - Lead and Conversation Endpoints

Version: 1.0 Draft
Status: Active
Owner: Product / Engineering
Domain: API Implementation Readiness / Lead and Conversation
Related: docs/contracts/CONTRACT-002-conversation-message-contract.md, docs/specifications/SPEC-002-conversation-api.md

## Purpose

Define the first MVP endpoints for creating leads and handling conversation messages.

## Endpoint Summary

```text
POST /api/leads
GET /api/leads/{lead_public_id}
POST /api/leads/{lead_public_id}/messages
GET /api/leads/{lead_public_id}/conversation
```

## POST /api/leads

Purpose:

```text
Create a new lead and start the intake flow.
```

Controller:

```text
LeadController@store
```

Request:

```json
{
  "data": {
    "source": "web",
    "locale": "da"
  },
  "meta": {},
  "errors": []
}
```

Response:

```json
{
  "data": {
    "lead_public_id": "uuid",
    "status": "new",
    "conversation_state": "started",
    "next_action": "ask_initial_context"
  },
  "meta": {},
  "errors": []
}
```

## GET /api/leads/{lead_public_id}

Purpose:

```text
Return the current lead state for frontend or internal use.
```

Controller:

```text
LeadController@show
```

Response should include:

```text
lead_public_id
status
conversation_state
priority
current_next_step
latest_decision
open_item_count
updated_at
```

## POST /api/leads/{lead_public_id}/messages

Purpose:

```text
Store a user message, run conversation handling and return the next assistant message or next action.
```

Controller:

```text
ConversationMessageController@store
```

Request:

```json
{
  "data": {
    "message": "Jeg fik en skade efter behandling.",
    "source": "web",
    "locale": "da"
  },
  "meta": {},
  "errors": []
}
```

Response follows CONTRACT-002.

## GET /api/leads/{lead_public_id}/conversation

Purpose:

```text
Return stored conversation messages for a lead.
```

Controller:

```text
ConversationController@index
```

Response should include ordered messages:

```text
role
message
sequence
created_at
metadata
```

## Required Services

```text
LeadService
ConversationService
ConversationStateService
OpenItemService
FactExtractionOrchestrator
AuditLogger
```

## Feature Tests

Initial tests should cover:

```text
lead can be created
lead public id is returned
message can be stored
conversation response uses standard envelope
one-question-at-a-time behavior is preserved
open items are returned when relevant
```

## Definition of Done

```text
lead endpoints listed
conversation endpoints listed
controllers mapped
request and response shapes documented
required services listed
initial feature tests listed
```
