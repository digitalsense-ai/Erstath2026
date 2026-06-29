# API-002 - Conversation Endpoints

Version: 1.0 Draft
Status: Active
Owner: Product / Engineering
Domain: API Implementation Readiness / Conversation
Related: docs/contracts/CONTRACT-002-conversation-message-contract.md, docs/prompts/PROMPT-002-conversation-prompt.md, docs/prompts/PROMPT-003-fact-extraction-prompt.md

## Purpose

Define the first implementation-ready API endpoints for conversation intake.

---

## Endpoints

```text
POST /api/leads
GET  /api/leads/{lead_public_id}
POST /api/leads/{lead_public_id}/messages
GET  /api/leads/{lead_public_id}/conversation
```

---

## POST /api/leads

Purpose:

```text
Create a new lead and initialize intake state.
```

Controller:

```text
Api/LeadController@store
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

---

## POST /api/leads/{lead_public_id}/messages

Purpose:

```text
Store user message, update conversation state and trigger fact extraction boundary.
```

Controller:

```text
Api/ConversationMessageController@store
```

Request DTO:

```text
SubmitConversationMessageData
```

Request:

```json
{
  "data": {
    "message": "Jeg blev behandlet og fik problemer bagefter.",
    "source": "web",
    "locale": "da"
  },
  "meta": {},
  "errors": []
}
```

Response should follow CONTRACT-002.

---

## GET /api/leads/{lead_public_id}/conversation

Purpose:

```text
Return conversation messages, known facts and open items for the lead.
```

Controller:

```text
Api/ConversationController@show
```

Response:

```json
{
  "data": {
    "lead_public_id": "uuid",
    "messages": [],
    "known_facts": [],
    "open_items": []
  },
  "meta": {},
  "errors": []
}
```

---

## Implementation Notes

```text
Store message before running AI extraction.
AI extraction failure must not delete the user message.
AI-created facts are unconfirmed by default.
Smart Skip should use open_items and known_facts before asking another question.
```

---

## Definition of Done

```text
conversation endpoints listed
controllers identified
request DTO named
response shape documented
failure-safe rule documented
```
