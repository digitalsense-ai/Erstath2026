# TC-063 - Missing Consequence Smart Question

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system asks about consequence when the event is described but the impact is missing.

## Initial User Description

```text
I had treatment at a clinic last year. I think something was not right, but I have not explained what happened afterwards.
```

## Expected Conversation Behavior

- identify that consequence is missing
- ask one question about current impact
- avoid assuming severity
- continue based on the answer

## Expected Facts

```text
treatment_context = clinic
event_timing_present = true
consequence_missing = true
```

## Expected Missing Information

```text
current_consequence
follow_up_needed
```

## Expected Next Step

```text
continue_intake or guide_elsewhere
```

## Acceptance Checks

```text
consequence is requested
severity is not assumed
answer updates missing information
next step changes based on consequence
```
