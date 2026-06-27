# TC-044 - Multiple Events in One Story

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system routes to human review when a fictional user describes several connected events that are difficult to separate.

## Initial User Description

```text
There were several appointments and follow-ups. I am not sure which part caused the problem, but the whole course felt wrong.
```

## Expected Conversation Behavior

- acknowledge that the timeline may be complex
- ask for the first important event
- separate events step by step
- avoid forcing one simple cause too early
- recommend review if the timeline remains complex

## Expected Facts

```text
multiple_events = true
timeline_complex = true
cause_unclear = true
```

## Expected Missing Information

```text
event_sequence
first_event_date
follow_up_events
current_consequence
```

## Expected Next Step

```text
continue_intake or human_review
```

## Acceptance Checks

```text
multiple events are captured
timeline is requested step by step
system avoids oversimplification
human review can be recommended
```
