# SPEC-013 - Fact and Missing Information JSON Contracts

Version: 1.0 Draft
Status: Active
Owner: Product / Engineering
Domain: JSON Contracts / Facts and Missing Information
Related: SPEC-008-conversation-and-facts-schema.md, DEV-004-conversation-engine-guide.md, QA-001-business-test-case-implementation-guide.md

## Purpose

Define the JSON shape for structured facts, open items and Smart Skip behavior.

## Fact Object

```json
{
  "fact_key": "event_date",
  "fact_value": "2024-05-01",
  "source": "user|ai|staff|document",
  "confidence": 0.95,
  "confirmation_state": "unconfirmed|confirmed|corrected|rejected",
  "metadata": {}
}
```

## Open Item Object

```json
{
  "missing_key": "event_date",
  "status": "open|resolved|deferred|not_needed",
  "priority": 10,
  "reason": "Timing is needed to assess whether the case can continue.",
  "asked_before": false,
  "resolved_at": null,
  "metadata": {}
}
```

## Fact Extraction Result

```json
{
  "data": {
    "lead_id": "uuid",
    "facts": [],
    "open_items": [],
    "fact_changes": []
  },
  "meta": {
    "contract_version": "v1"
  },
  "errors": []
}
```

## Fact Change Object

```json
{
  "change_type": "created|updated|corrected|rejected|unchanged",
  "fact_key": "string",
  "previous_value": null,
  "new_value": null,
  "reason": "string|null"
}
```

## Smart Skip Decision Object

```json
{
  "question_key": "event_date",
  "should_ask": true,
  "skip_reason": null,
  "known_answer": null
}
```

## Rules

- AI-created facts must default to unconfirmed.
- Confirmed facts must not be silently overwritten.
- Unknown answers may be deferred.
- Declined answers may be deferred.
- Approximate answers should be stored with uncertainty metadata.
- Smart Skip must reuse prior answers when safe.

## Error Codes

```text
invalid_fact_key
invalid_confirmation_state
fact_conflict
missing_information_not_found
```

## Definition of Done

```text
fact object defined
open item object defined
fact extraction result defined
fact change object defined
Smart Skip object defined
rules documented
error codes listed
```
