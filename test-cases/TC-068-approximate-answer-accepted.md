# TC-068 - Approximate Answer Accepted

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system accepts approximate answers instead of blocking the conversation.

## Initial User Description

```text
I do not remember the exact date, but I think it was sometime in spring 2020.
```

## Expected Conversation Behavior

- accept approximate timing
- store it as approximate
- avoid demanding exact date immediately
- continue with the next most important missing fact

## Expected Facts

```text
exact_date_unknown = true
approximate_timing = spring_2020
approximate_answer_accepted = true
```

## Expected Missing Information

```text
exact_date_if_later_available
provider_or_location
current_consequence
```

## Expected Next Step

```text
continue_intake
```

## Acceptance Checks

```text
approximate answer is accepted
conversation does not block
missing information is narrowed
next question is relevant
```
