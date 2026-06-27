# TC-017 - User Corrects System Understanding

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system can accept a correction before facts are used later.

## Initial User Description

```text
It was not after the operation. It happened before the operation, during the first examination.
```

## Expected Conversation Behavior

- acknowledge the correction
- update the understood timeline
- mark earlier interpretation as corrected
- confirm the updated understanding
- avoid using the old fact as confirmed

## Expected Facts

```text
user_correction_received = true
timeline_corrected = true
```

## Expected Missing Information

```text
corrected_event_timing
examination_details
current_consequence
```

## Expected Next Step

```text
continue_intake
```

## Acceptance Checks

```text
old fact is not treated as confirmed
corrected fact is stored
confirmation is requested
```
