# TC-062 - Missing Location Smart Question

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system asks for treatment location when location is the most important missing information.

## Initial User Description

```text
The treatment happened some time ago, and I still have problems, but I have not said where it happened.
```

## Expected Conversation Behavior

- identify that provider or location is missing
- ask one location question
- explain why location matters if useful
- avoid asking again once answered

## Expected Facts

```text
event_timing_present = true
current_problem_reported = true
location_missing = true
```

## Expected Missing Information

```text
treatment_location
provider_type
```

## Expected Next Step

```text
continue_intake
```

## Acceptance Checks

```text
location is prioritized
one question is asked
answer is stored
same location question is not repeated
```
