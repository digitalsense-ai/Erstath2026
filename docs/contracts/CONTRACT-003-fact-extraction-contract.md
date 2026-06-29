# CONTRACT-003 - Fact Extraction Contract

Version: 1.0 Draft
Status: Active
Owner: Product / Engineering / AI
Domain: JSON Contracts / Fact Extraction
Related: docs/specifications/SPEC-008-conversation-and-facts-schema.md, docs/developer-handbook/DEV-005-ai-integration-guide.md

## Purpose

Define the JSON shape for facts extracted from conversation or other sources.

## Fact Extraction Input

```json
{
  "lead_id": "uuid",
  "message": "string",
  "existing_facts": [],
  "open_items": []
}
```

## Fact Extraction Output

```json
{
  "summary": "string",
  "facts": [],
  "missing_information": [],
  "confidence": 0.0
}
```

## Fact Shape

```json
{
  "key": "event_date",
  "value": "2021",
  "value_type": "string",
  "source": "ai_extraction",
  "confidence": 0.75,
  "confirmation_state": "unconfirmed",
  "evidence": "User said it happened in 2021."
}
```

## Missing Information Shape

```json
{
  "key": "current_consequence",
  "reason": "Needed to understand impact.",
  "priority": 9,
  "status": "open"
}
```

## Allowed Confirmation States

```text
unconfirmed
confirmed
corrected
rejected
```

## Validation Rules

```text
facts must be array
fact key is required
fact source is required
AI-created facts must be unconfirmed by default
missing information key is required
confidence must be between 0 and 1
```

## Definition of Done

```text
fact extraction input defined
fact extraction output defined
fact shape defined
missing information shape defined
validation rules documented
```
