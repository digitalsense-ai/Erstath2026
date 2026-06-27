# TC-039 - User Only Wants Status

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system distinguishes new intake from a user asking for status or process information.

## Initial User Description

```text
I only want to know where I am in the process. I am not trying to start a new case.
```

## Expected Conversation Behavior

- clarify that the user is not starting a new intake
- avoid unnecessary case questions
- guide to the correct status or support path
- avoid creating a new lead if not needed

## Expected Facts

```text
status_request = true
new_intake_requested = false
```

## Expected Missing Information

```text
case_reference_if_status_lookup_exists
```

## Expected Next Step

```text
guide_elsewhere or support_path
```

## Acceptance Checks

```text
new intake is not forced
status intent is recognized
support path can be suggested
```
