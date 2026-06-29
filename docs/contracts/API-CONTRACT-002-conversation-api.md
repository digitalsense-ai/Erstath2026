# API-CONTRACT-002 - Conversation API

Version: 1.0 Draft
Status: Active
Owner: Product / Engineering
Domain: API Contracts / Conversation
Related: docs/specifications/SPEC-002-conversation-api.md, docs/contracts/CONTRACT-002-conversation-message-contract.md

## Purpose

Define request and response expectations for the public conversation intake API.

## POST /api/v1/conversations/start

Starts a new lead and conversation.

### Request

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

### Response

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

Stores a user message and returns the next conversation step.

### Request

```json
{
  "data": {
    "message": "string",
    "source": "web",
    "locale": "da"
  },
  "meta": {},
  "errors": []
}
```

### Response

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
  "meta": {
    "question_count": 1
  },
  "errors": []
}
```

## GET /api/v1/conversations/{lead_public_id}

Returns current conversation state.

### Response

```json
{
  "data": {
    "lead_public_id": "uuid",
    "status": "in_conversation",
    "conversation_state": "in_conversation",
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
lead_public_id must reference an existing lead
message is required for message endpoint
empty messages should return validation error
known_facts must not be treated as confirmed unless confirmation_state is confirmed
```

## Definition of Done

```text
start endpoint defined
message endpoint defined
state endpoint defined
request shapes defined
response shapes defined
validation rules documented
```
