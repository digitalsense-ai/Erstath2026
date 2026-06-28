# TC-059 - Review After Handover Uncertainty

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that a case can be routed to review when the handover summary contains important uncertainty.

## Initial User Description

```text
Most of the story is clear, but there are a few important things I cannot confirm. I would like someone to look at it before anything is decided.
```

## Expected Conversation Behavior

- capture the clear parts of the story
- identify the important uncertain parts
- build a handover summary with uncertainty visible
- avoid hiding uncertainty in the summary
- recommend review before final routing

## Expected Facts

```text
handover_possible = true
important_uncertainty = true
review_before_final_routing = true
```

## Expected Missing Information

```text
uncertain_facts
confirmation_needed
current_consequence
```

## Expected Next Step

```text
human_review
```

## Acceptance Checks

```text
uncertainty appears in handover context
review is recommended before final routing
summary does not overstate certainty
reason code can be stored
```
