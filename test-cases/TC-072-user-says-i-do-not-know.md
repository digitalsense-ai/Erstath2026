# TC-072 - User Says I Do Not Know

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system handles unknown answers without blocking the conversation.

## Initial User Description

```text
I do not know the answer to that question, but I still want to continue.
```

## Expected Conversation Behavior

- accept that the user does not know
- mark the field as unknown
- avoid repeating the same question immediately
- continue with the next useful question

## Expected Facts

```text
user_does_not_know = true
field_unknown = true
continue_requested = true
```

## Expected Missing Information

```text
unknown_field_deferred
next_relevant_missing_fact
```

## Expected Next Step

```text
continue_intake
```

## Acceptance Checks

```text
unknown answer is accepted
same question is not repeated immediately
missing information is deferred
conversation continues
```
