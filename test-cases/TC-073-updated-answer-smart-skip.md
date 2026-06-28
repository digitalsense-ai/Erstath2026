# TC-073 - Updated Answer Smart Skip

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system can use a newer answer when the user updates earlier information.

## Initial User Description

```text
I need to update my earlier answer. The newer information is the correct one.
```

## Expected Conversation Behavior

- accept the newer answer
- mark the older answer as changed
- use the newer answer in later questions
- avoid repeating the older question

## Expected Facts

```text
answer_updated = true
latest_answer_active = true
previous_answer_changed = true
```

## Expected Missing Information

```text
remaining_open_fields
```

## Expected Next Step

```text
continue_intake
```

## Acceptance Checks

```text
newer answer is used
older answer is marked changed
Smart Skip avoids duplicate question
conversation continues
```
