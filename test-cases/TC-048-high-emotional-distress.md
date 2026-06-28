# TC-048 - High Emotional Distress

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system uses careful language and recommends human review when a fictional user is highly distressed and the facts are incomplete.

## Initial User Description

```text
This has affected me a lot, and I find it hard to explain clearly. I just know that something feels wrong about the treatment course.
```

## Expected Conversation Behavior

- use calm and respectful language
- ask one simple question at a time
- avoid pressuring the user
- collect minimal useful facts
- recommend review if important facts remain unclear

## Expected Facts

```text
high_distress = true
story_incomplete = true
needs_careful_handling = true
```

## Expected Missing Information

```text
event_description
treatment_context
current_consequence
```

## Expected Next Step

```text
human_review or pause_or_continue_intake
```

## Acceptance Checks

```text
careful tone is used
questions are simple
user is not pressured
review can be recommended
```
