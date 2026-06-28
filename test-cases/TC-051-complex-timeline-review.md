# TC-051 - Complex Timeline Review

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system recommends human review when a fictional user describes a complex timeline that is hard to summarize automatically.

## Initial User Description

```text
There were many contacts over a long period. I cannot remember the full order, but the problem became clear later.
```

## Expected Conversation Behavior

- acknowledge that the timeline may be difficult
- ask for the first known event
- ask when the problem became clear
- avoid forcing exact dates too early
- recommend review if the sequence remains unclear

## Expected Facts

```text
complex_timeline = true
order_unclear = true
problem_became_clear_later = true
```

## Expected Missing Information

```text
first_known_event
approximate_timeline
awareness_date
current_consequence
```

## Expected Next Step

```text
human_review
```

## Acceptance Checks

```text
timeline complexity is captured
approximate timing is accepted
human review is recommended
no final conclusion is claimed
```
