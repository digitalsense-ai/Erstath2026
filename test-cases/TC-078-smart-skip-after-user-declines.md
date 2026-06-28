# TC-078 - Smart Skip After User Declines

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system respects when a user declines to answer a specific question.

## Initial User Description

```text
I do not want to answer that specific question right now.
```

## Expected Conversation Behavior

- respect the declined answer
- mark the field as deferred
- avoid asking the same question again immediately
- continue with another relevant question if possible

## Expected Facts

```text
answer_declined = true
field_deferred = true
```

## Expected Missing Information

```text
deferred_field
next_relevant_field
```

## Expected Next Step

```text
continue_intake_or_pause
```

## Acceptance Checks

```text
user boundary is respected
question is not repeated immediately
deferred field is tracked
conversation continues safely
```
