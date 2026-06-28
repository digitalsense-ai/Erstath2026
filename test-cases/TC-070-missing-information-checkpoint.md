# TC-070 - Missing Information Checkpoint

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case Checkpoint
Related: TC-000-test-case-catalog.md

## Purpose

Create a checkpoint for the first part of the missing information and Smart Skip group.

## Covered Range

```text
TC-061 to TC-070
```

## Group Purpose

This group validates that the system identifies missing information, asks one question at a time and avoids repeated questions.

## Expected Coverage

The group covers:

- missing date
- missing provider
- missing consequence
- document status
- prior complaint status
- one-question-at-a-time behavior
- skipping known date
- skipping known provider
- skipping known document status

## Group Acceptance Checks

```text
missing information is tracked
one question is asked at a time
known answers are reused
repeated questions are avoided
conversation continues without form-like behavior
```

## Definition of Done

```text
TC-061 to TC-070 exist
missing information checkpoint is complete
Smart Skip behavior is testable
```
