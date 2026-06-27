# TC-027 - Information Request Only

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system can handle a fictional user who only asks for general information and has not described a case.

## Initial User Description

```text
I am not sure if I have a case. I only want to know what kind of information is normally needed.
```

## Expected Conversation Behavior

- answer at a general level
- explain what information is usually relevant
- invite the user to describe what happened if they want to continue
- do not create a strong case classification from no case story

## Expected Facts

```text
information_request_only = true
case_story_not_provided = true
```

## Expected Missing Information

```text
case_story
event_date
provider_type
current_consequence
```

## Expected Next Step

```text
ask_initial_context
```

## Acceptance Checks

```text
general guidance is provided
case classification is not forced
missing information is listed if intake continues
```
