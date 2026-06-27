# SPEC-002 - Conversation API

Version: 1.0 Draft
Status: Planned
Owner: Product / Engineering
Domain: API Specification / Conversation
Related: docs/04-conversation-engine.md, docs/experience/DOC-021-digital-first-conversation-flow.md, backlog/issues/ISSUE-021-create-conversation-entry-endpoint.md, backlog/issues/ISSUE-023-implement-conversation-session-controller.md

## Purpose

Define the MVP API endpoints for the digital-first conversation flow.

## Endpoints

```text
POST /api/v1/conversation/start
POST /api/v1/conversation/{lead_id}/message
GET  /api/v1/conversation/{lead_id}
POST /api/v1/conversation/{lead_id}/confirm-understanding
```

## Start Conversation

```text
POST /api/v1/conversation/start
```

Request:

```json
{
  "source": "web"
}
```

Response:

```json
{
  "data": {
    "lead_id": "uuid",
    "state": "started",
    "next_action": "ask_initial_context"
  },
  "meta": {},
  "errors": []
}
```

## Send Message

```text
POST /api/v1/conversation/{lead_id}/message
```

Request:

```json
{
  "message": "string"
}
```

Response:

```json
{
  "data": {
    "lead_id": "uuid",
    "state": "string",
    "system_message": "string",
    "missing_information": [],
    "understood_facts": []
  },
  "meta": {},
  "errors": []
}
```

## Get Conversation

```text
GET /api/v1/conversation/{lead_id}
```

Response includes current state, messages, understood facts and open missing information.

## Confirm Understanding

```text
POST /api/v1/conversation/{lead_id}/confirm-understanding
```

Request:

```json
{
  "accepted": true,
  "corrections": []
}
```

## Error Cases

- lead_not_found
- invalid_state
- validation_error
- message_empty

## Definition of Done

```text
conversation endpoints listed
request examples included
response examples included
error cases listed
```
