# TC-084 - Safe Handling of Empty Message

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system handles an empty or unusable message safely.

## Initial User Description

```text

```

## Expected Conversation Behavior

- do not create misleading facts
- ask the user to describe what happened
- keep the response friendly and short
- avoid running scoring on empty content

## Expected Facts

```text
empty_message = true
facts_created = false
scoring_not_ready = true
```

## Expected Missing Information

```text
initial_event_description
```

## Expected Next Step

```text
ask_initial_context
```

## Acceptance Checks

```text
empty message is handled safely
no false facts are created
user is asked for initial context
system does not crash
```
