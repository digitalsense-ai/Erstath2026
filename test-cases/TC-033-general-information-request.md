# TC-033 - General Information Request

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system can guide a fictional user who asks for general information instead of describing a concrete event.

## Initial User Description

```text
I just want to understand how this works. I do not have a specific event to describe right now.
```

## Expected Conversation Behavior

- clarify whether the user wants to start an intake
- explain that intake needs a specific event story
- avoid presenting a final conclusion
- guide to general information if no case exists

## Expected Facts

```text
general_information_request = true
specific_event_described = false
case_intake_not_ready = true
```

## Expected Missing Information

```text
specific_event_description_if_user_wants_intake
```

## Expected Next Step

```text
guide_elsewhere
```

## Acceptance Checks

```text
system distinguishes information request from intake
no final conclusion is claimed
guide-away is respectful
```
