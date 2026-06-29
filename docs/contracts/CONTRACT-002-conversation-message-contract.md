# CONTRACT-002 - Conversation Message Contract

Version: 1.0 Draft
Status: Active
Owner: Product / Engineering
Domain: JSON Contracts / Conversation
Related: docs/specifications/SPEC-002-conversation-api.md, docs/developer-handbook/DEV-004-conversation-engine-guide.md, test-cases/TC-066-one-question-at-a-time.md

## Purpose

Define the JSON contract for submitting and returning conversation messages.

## Incoming User Message

```json
{
  "data": {
    "lead_public_id": "uuid|null",
    "message": "I had treatment and later experienced problems.",
    "source": "web",
    "locale": "en",
    "context": {
      "session_id": "uuid|null"
    }
  },
  "meta": {},
  "errors": []
}
```

## Required Fields

```text
message
source
```

## Optional Fields

```text
lead_public_id
locale
context.session_id
```

## Conversation Response

```json
{
  "data": {
    "lead_public_id": "uuid",
    "conversation_state": "in_conversation",
    "assistant_message": "When did this happen, approximately?",
    "next_question": {
      "question_key": "event_date_or_approximate_timing",
      "text": "When did this happen, approximately?",
      "priority": 10
    },
    "open_items": [
      {
        "key": "event_date_or_approximate_timing",
        "status": "open",
        "priority": 10
      }
    ]
  },
  "meta": {
    "contract": "CONTRACT-002",
    "version": "1.0"
  },
  "errors": []
}
```

## One Question Rule

The response should contain at most one `next_question`.

Open items may contain several missing fields, but the user-facing follow-up should stay focused.

## Empty Message Handling

If the message is empty or unusable:

```json
{
  "data": {
    "lead_public_id": "uuid|null",
    "conversation_state": "needs_initial_context",
    "assistant_message": "Please briefly describe what happened.",
    "next_question": {
      "question_key": "initial_event_description",
      "text": "Please briefly describe what happened.",
      "priority": 10
    },
    "open_items": [
      {
        "key": "initial_event_description",
        "status": "open",
        "priority": 10
      }
    ]
  },
  "meta": {
    "contract": "CONTRACT-002",
    "version": "1.0"
  },
  "errors": []
}
```

## Error Codes

```text
message_empty
lead_not_found
invalid_state
validation_error
```

## Definition of Done

```text
incoming message contract defined
conversation response contract defined
one-question rule documented
empty message behavior documented
error codes listed
```
