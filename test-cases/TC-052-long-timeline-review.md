# TC-052 - Long Timeline Review

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system recommends human review when a fictional case has a long and complex timeline.

## Initial User Description

```text
This has been going on for a long time. There were many contacts and follow-ups, and I cannot easily put it in order.
```

## Expected Conversation Behavior

- ask for the first important event
- collect timeline step by step
- avoid forcing a single simple answer
- mark timeline complexity clearly
- recommend review if complexity remains high

## Expected Facts

```text
long_timeline = true
multiple_contacts = true
timeline_complex = true
```

## Expected Missing Information

```text
first_event
key_follow_ups
current_consequence
```

## Expected Next Step

```text
human_review
```

## Acceptance Checks

```text
timeline is handled step by step
complexity is captured
human review is recommended
```
