# DOC-041 - Conversation API Specification

Version: 1.0 Draft
Status: Draft
Owner: Engineering
Domain: Conversation API
Related: DOC-040 API Specification Index, docs/04-conversation-engine.md, docs/experience/DOC-021-digital-first-conversation-flow.md, backlog/issues/ISSUE-021-create-conversation-entry-endpoint.md, backlog/issues/ISSUE-023-implement-conversation-session-controller.md

## Purpose

Define the MVP API contract for the digital-first conversation flow.

## Endpoint: Start Conversation

```http
POST /api/v1/conversation/start
```

### Request

```json
{
  "source": "web",
  "locale": "da-DK"
}
```

### Response

```json
{
  "data": {
    "lead_id": "fake-lead-uuid",
    "conversation_id": "fake-conversation-uuid",
    "state": "started",
    "message": {
      "role": "system",
      "text": "Velkommen. Fortæl kort hvad der er sket."
    }
  },
  "meta": {
    "version": "v1"
  }
}
```

## Endpoint: Send Conversation Message

```http
POST /api/v1/conversation/{lead_id}/message
```

### Request

```json
{
  "message": "Jeg blev opereret sidste år og har haft problemer siden.",
  "client_timestamp": "2026-01-01T10:00:00Z"
}
```

### Response

```json
{
  "data": {
    "lead_id": "fake-lead-uuid",
    "state": "collecting_information",
    "messages": [
      {
        "role": "system",
        "text": "Tak. Jeg vil gerne forstå hændelsen lidt bedre."
      }
    ],
    "missing_information": [
      {
        "key": "incident_date",
        "label": "Hvornår skete hændelsen?"
      }
    ]
  },
  "meta": {
    "version": "v1"
  }
}
```

## Endpoint: Confirm Understanding

```http
POST /api/v1/conversation/{lead_id}/confirm-understanding
```

### Request

```json
{
  "accepted": true,
  "corrections": []
}
```

### Response

```json
{
  "data": {
    "lead_id": "fake-lead-uuid",
    "state": "understanding_confirmed",
    "confirmed_fact_count": 3
  },
  "meta": {
    "version": "v1"
  }
}
```

## Error Codes

```text
conversation.not_found
conversation.invalid_state
conversation.validation_failed
conversation.message_empty
```

## Notes

- Conversation messages must be persisted.
- Facts created from interpretation are unconfirmed until accepted.
- No real personal data may be used in examples, tests or seeders.

## Definition of Done

```text
conversation endpoints defined
request and response shapes documented
error codes listed
fake-data examples used
```
