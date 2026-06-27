# TC-015 - User Corrects Understanding

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system can handle user corrections before facts are used downstream.

## Scenario

A fictional user corrects the system's summary of what happened.

## Initial User Description

```text
No, that is not quite right. The operation was not on my knee, it was on my ankle. The pain started after that operation.
```

## Expected Conversation Behavior

- acknowledge the correction
- update the relevant fact
- mark the previous fact as corrected or rejected
- avoid using the wrong fact downstream
- confirm the corrected understanding

## Expected Facts

```text
incorrect_fact = knee_operation
corrected_fact = ankle_operation
symptom_after_operation = pain
```

## Expected Missing Information

```text
operation_date
current_consequence
documentation_available
```

## Expected Next Step

```text
confirm_understanding
```

## Acceptance Checks

```text
correction is stored
wrong fact is not treated as confirmed
corrected understanding is shown to the user
```
