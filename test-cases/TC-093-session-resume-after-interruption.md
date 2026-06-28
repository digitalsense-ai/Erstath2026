# TC-093 - Session Resume After Interruption

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that a conversation can resume after interruption without losing known facts.

## Initial User Description

```text
The user returns after leaving the intake flow before all questions were answered.
```

## Expected System Behavior

- load existing lead context
- reuse known facts
- show or ask the next relevant open item
- avoid restarting the whole flow unnecessarily

## Expected Facts

```text
session_resumed = true
existing_context_available = true
open_items_exist = true
```

## Expected Missing Information

```text
next_open_item
```

## Expected Next Step

```text
continue_intake
```

## Acceptance Checks

```text
known facts are reused
open items remain visible
conversation does not restart unnecessarily
next question is relevant
```
