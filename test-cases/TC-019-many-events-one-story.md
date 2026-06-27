# TC-019 - Many Events in One Story

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system can separate multiple events from one user story.

## Initial User Description

```text
There were several contacts and treatments over time. I am not sure which one caused the problem.
```

## Expected Conversation Behavior

- acknowledge that the timeline may be complex
- ask the user to describe events in order
- identify separate events where possible
- avoid forcing a single cause too early

## Expected Facts

```text
multiple_events = true
cause_unclear = true
timeline_needed = true
```

## Expected Missing Information

```text
event_sequence
possible_trigger_event
current_consequence
```

## Expected Next Step

```text
continue_intake or human_review
```

## Acceptance Checks

```text
multiple events are recognized
timeline is requested
uncertainty is preserved
```
