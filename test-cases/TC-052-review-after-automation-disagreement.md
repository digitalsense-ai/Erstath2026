# TC-052 - Review After Automation Disagreement

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that human review is used when automated signals point in different directions.

## Initial User Description

```text
Some parts of my story sound simple, but other parts are unclear and important. I am not sure what the system should do with it.
```

## Expected Conversation Behavior

- collect the simple facts
- mark unclear parts separately
- avoid hiding uncertainty
- recommend review if routing signals conflict

## Expected Facts

```text
mixed_signals = true
uncertainty_important = true
review_needed_possible = true
```

## Expected Missing Information

```text
unclear_parts
current_consequence
routing_clarification
```

## Expected Next Step

```text
human_review
```

## Acceptance Checks

```text
mixed signals are captured
uncertainty is preserved
human review is recommended
reason code can be stored
```
