# TC-058 - Review for High Priority Case

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system can recommend human review when a fictional case appears high priority based on impact and uncertainty.

## Initial User Description

```text
This has changed my daily life a lot, and I am worried that waiting too long will make it harder to handle.
```

## Expected Conversation Behavior

- acknowledge the impact
- ask what has changed in daily life
- ask about timing
- ask whether documents are available
- mark priority if impact appears high

## Expected Facts

```text
high_impact_possible = true
priority_review_possible = true
timing_relevant = true
```

## Expected Missing Information

```text
daily_life_impact
event_date
documentation_available
```

## Expected Next Step

```text
human_review
```

## Acceptance Checks

```text
impact is captured
priority can be assigned
human review is recommended
```
