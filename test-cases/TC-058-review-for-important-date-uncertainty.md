# TC-058 - Review for Important Date Uncertainty

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that human review is recommended when date uncertainty is important for routing.

## Initial User Description

```text
I know the problem became clear later, but I cannot remember exactly when the treatment happened or when I first understood the issue.
```

## Expected Conversation Behavior

- ask for approximate timing
- ask when the user became aware of the issue
- explain why timing matters
- avoid automatic rejection based on incomplete timing
- recommend review if timing remains important and unclear

## Expected Facts

```text
event_date_unclear = true
awareness_date_unclear = true
timing_important = true
```

## Expected Missing Information

```text
approximate_event_date
awareness_date
current_consequence
```

## Expected Next Step

```text
human_review
```

## Acceptance Checks

```text
timing uncertainty is captured
awareness date is requested
system avoids premature rejection
human review is recommended
```
