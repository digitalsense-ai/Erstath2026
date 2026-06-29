# API-002 - Conversation API Contract

Version: 1.0 Draft
Status: Active
Owner: Product / Engineering
Domain: API Contracts / Conversation
Related: docs/specifications/SPEC-002-conversation-api.md, docs/contracts/CONTRACT-002-conversation-message-contract.md, docs/prompts/PROMPT-002-conversation-prompt.md

## Purpose

Define MVP conversation endpoints for starting intake and submitting messages.

## Endpoints

```text
POST /api/v1/conversations
POST /api/v1/conversations/{lead_public_id}/messages
GET  /api/v1/conversations/{lead_public_id}
```

## POST /api/v1/conversations

Purpose: create a new lead and start the intake conversation.

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
    "conversation_state": "started",
    "system_message": "string",
    "next_action": "ask_initial_context"
  },
  "meta": {},
  "errors": []
}
```

## POST /api/v1/conversations/{lead_public_id}/messages

Purpose: save a user message and return the next safe conversation step.

Request:

```json
{
  "data": {
    "message": "string"
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
    "conversation_state": "in_conversation",
    "message_saved": true,
    "system_message": "string",
    "next_action": "continue_intake",
    "open_items": [],
    "known_facts": []
  },
  "meta": {},
  "errors": []
}
```

## GET /api/v1/conversations/{lead_public_id}

Purpose: return current conversation state for resume and support.

Response:

```json
{
  "data": {
    "lead_public_id": "uuid",
    "conversation_state": "string",
    "messages": [],
    "open_items": [],
    "known_facts": []
  },
  "meta": {},
  "errors": []
}
```

## Validation Rules

```text
source is optional but should default to web
locale is optional but should default to da
message is required for message submission
message must be string
lead_public_id must exist
```

## Feature Test Priorities

```text
start conversation returns standard response shape
message submission stores message
message submission returns one next question
unknown lead_public_id returns not found error shape
```

## Definition of Done

```text
conversation endpoints listed
request and response shapes defined
validation rules documented
feature test priorities documented
```
