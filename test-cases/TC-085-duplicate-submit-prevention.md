# TC-085 - Duplicate Submit Prevention

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that repeated submission does not create duplicate records.

## Initial User Description

```text
I clicked the submit button twice because I was not sure whether the first click worked.
```

## Expected System Behavior

- process the first valid submission
- detect repeated submission
- avoid creating duplicate leads or messages
- show a clear status to the user
- record relevant audit information

## Expected Facts

```text
duplicate_submit_possible = true
deduplication_required = true
```

## Expected Audit Events

```text
submission.received
duplicate_submission_detected
```

## Expected Next Step

```text
show_existing_status_or_continue
```

## Acceptance Checks

```text
only one lead is created
only one message is stored if content is identical
user receives clear feedback
duplicate attempt is traceable
```
