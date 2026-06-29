# SPEC-012 - Conversation JSON Contracts

Version: 1.0 Draft
Status: Active
Owner: Product / Engineering
Domain: JSON Contracts / Conversation
Related: SPEC-002-conversation-api.md, SPEC-008-conversation-and-facts-schema.md, DEV-004-conversation-engine-guide.md

## Purpose

Define the JSON contracts for conversation start, user messages and conversation state responses.

## Start Conversation Response

```json
{
  "data": {
    "lead_id": "uuid",
    "conversation_state": "started",
    "next_action": "ask_initial_context",
    "system_message": "Tell us briefly what happened."
  },
  "meta": {
    "contract_version": "v1"
  },
  "errors": []
}
```

## User Message Request

```json
{
  "message": "string"
}
```

## User Message Response

```json
{
  "data": {
    "lead_id": "uuid",
    "conversation_state": "in_conversation",
    "message_saved": true,
    "system_message": "string",
    "next_question": {
      "question_key": "event_date",
      "question_text": "When did it happen?",
      "reason": "Timing is needed before screening can continue."
    },
    "open_items": []
  },
  "meta": {
    "contract_version": "v1"
  },
  "errors": []
}
```

## Conversation State Response

```json
{
  "data": {
    "lead_id": "uuid",
    "conversation_state": "string",
    "messages": [],
    "facts": [],
    "open_items": [],
    "latest_next_question": null
  },
  "meta": {
    "contract_version": "v1"
  },
  "errors": []
}
```

## Message Object

```json
{
  "role": "user|system|staff",
  "message": "string",
  "sequence": 1,
  "created_at": "datetime"
}
```

## Conversation Rules

- Empty messages should not create facts.
- Very short messages should ask for initial context.
- The system should ask one question at a time.
- The system should not repeat questions already answered unless clarification is needed.
- Open items should remain machine-readable.

## Error Codes

```text
lead_not_found
message_empty
invalid_state
validation_error
```

## Definition of Done

```text
start response contract defined
message request contract defined
message response contract defined
conversation state contract defined
message object defined
error codes listed
```
