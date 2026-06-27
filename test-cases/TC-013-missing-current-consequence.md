# TC-013 - Missing Current Consequence

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system asks about current consequence when the user describes an event but not the effect today.

## Scenario

A fictional user describes something that happened during treatment but does not explain whether there is any current problem.

## Initial User Description

```text
Something happened during my treatment and I think it may have been wrong, but I have not explained what problems I have now.
```

## Expected Conversation Behavior

- acknowledge the concern
- ask what happened during treatment
- ask what consequence the user has today
- explain why current consequence matters
- avoid screening too early

## Expected Facts

```text
treatment_concern = true
current_consequence_missing = true
```

## Expected Missing Information

```text
event_details
current_consequence
follow_up_treatment
```

## Expected Next Step

```text
continue_intake
```

## Acceptance Checks

```text
current consequence is requested
reason for asking is explained
case is not screened too early
missing information is tracked
```
