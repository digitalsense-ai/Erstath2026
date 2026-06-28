# TC-051 - Long Timeline Review

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that a long or unclear timeline can trigger human review.

## Initial User Description

```text
This happened over a long period with several contacts. I cannot remember the exact order, but the problem became clear later.
```

## Expected Conversation Behavior

- acknowledge that the timeline may be difficult
- ask for approximate order of events
- ask when the problem became clear
- avoid forcing exact dates too early
- recommend review if timing remains important and unclear

## Expected Facts

```text
long_timeline = true
event_order_unclear = true
awareness_date_needed = true
```

## Expected Missing Information

```text
approximate_event_order
first_contact_period
awareness_date
current_consequence
```

## Expected Next Step

```text
human_review
```

## Acceptance Checks

```text
approximate timeline is accepted
awareness timing is requested
human review can be recommended
no final conclusion is claimed
```
