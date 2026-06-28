# TC-070 - Missing Information Group Checkpoint

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

This group validates that the system asks for the most important missing information without repeating questions.

## Expected Coverage

The group covers:

- missing date
- missing provider
- missing consequence
- document status
- prior complaint status
- one question at a time
- reuse of known answers
- approximate answers
- unknown answers

## Group Acceptance Checks

```text
system asks one question at a time
system tracks missing information
system reuses known answers
system accepts approximate answers
system does not repeat unknown-answer questions
Smart Skip behavior is testable
```

## Definition of Done

```text
TC-061 to TC-070 exist
missing information checkpoint is complete
Smart Skip behavior is testable
```
