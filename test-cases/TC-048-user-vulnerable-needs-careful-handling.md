# TC-048 - User Vulnerable Needs Careful Handling

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system slows down and routes carefully when a fictional user seems overwhelmed or vulnerable.

## Initial User Description

```text
I find this very hard to explain and I feel overwhelmed. I am not sure I can answer everything right now.
```

## Expected Conversation Behavior

- use calm and simple language
- ask only one question at a time
- allow the user to pause
- avoid pressure
- recommend review or internal follow-up if needed

## Expected Facts

```text
user_overwhelmed = true
limited_response_capacity = true
careful_handling_needed = true
```

## Expected Missing Information

```text
event_description
current_consequence
support_preference
```

## Expected Next Step

```text
human_review or pause_or_continue_intake
```

## Acceptance Checks

```text
one-question-at-a-time behavior is used
user boundary is respected
review can be recommended
no pressure is applied
```
