# TC-091 - Duplicate Submission Detection

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system can detect a possible duplicate intake without creating confusion.

## Initial User Description

```text
I may already have submitted something like this before, but I am not sure.
```

## Expected System Behavior

- check for possible duplicate context where available
- avoid creating duplicate work if a match is found
- ask a simple clarification question if needed
- keep the user-facing response clear

## Expected Facts

```text
possible_duplicate = true
clarification_needed = true
```

## Expected Missing Information

```text
previous_submission_reference_if_available
```

## Expected Next Step

```text
clarify_or_link_existing_record
```

## Acceptance Checks

```text
possible duplicate is recognized
user is not blamed
system avoids duplicate processing where possible
safe clarification is requested
```
