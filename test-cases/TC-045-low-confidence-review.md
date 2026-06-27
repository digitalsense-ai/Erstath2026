# TC-045 - Low Confidence Review

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that low confidence in the available information can trigger human review.

## Initial User Description

```text
I am not sure how to describe it. There was treatment and then later some problems, but I cannot tell what is connected.
```

## Expected Conversation Behavior

- ask simple clarifying questions
- collect what the user knows
- mark uncertainty clearly
- avoid confident classification if facts are weak

## Expected Facts

```text
low_detail_level = true
connection_unclear = true
confidence_low = true
```

## Expected Missing Information

```text
event_description
treatment_context
problem_description
current_consequence
```

## Expected Next Step

```text
human_review
```

## Acceptance Checks

```text
low confidence is handled safely
system does not over-classify
human review is recommended
reason code can be stored
```
