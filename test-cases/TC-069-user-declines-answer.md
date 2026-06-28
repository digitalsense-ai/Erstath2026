# TC-069 - User Declines Answer

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system handles a fictional user who declines to answer a question.

## Initial User Description

```text
I do not want to answer that question right now.
```

## Expected Conversation Behavior

- respect the user's choice
- mark the information as unavailable or deferred
- explain that the information may be needed later
- continue with another safe and relevant question if possible

## Expected Facts

```text
user_declined_answer = true
missing_information_deferred = true
```

## Expected Missing Information

```text
declined_field = deferred
```

## Expected Next Step

```text
continue_intake_or_pause
```

## Acceptance Checks

```text
user boundary is respected
missing information is deferred
system does not pressure the user
conversation can continue safely
```
