# TC-069 - Deferred Answer Handling

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system can defer a missing answer and continue with other useful information.

## Initial User Description

```text
I do not know the exact date right now, but I can explain what happened and what changed afterwards.
```

## Expected Conversation Behavior

- accept that the date is unknown for now
- mark timing as deferred
- continue with event and consequence details
- avoid blocking the whole flow

## Expected Facts

```text
exact_date_unknown = true
date_deferred = true
user_can_continue_story = true
```

## Expected Missing Information

```text
event_date_deferred
```

## Expected Next Step

```text
continue_intake
```

## Acceptance Checks

```text
deferred answer is stored
conversation continues
same missing answer is not asked repeatedly
```
