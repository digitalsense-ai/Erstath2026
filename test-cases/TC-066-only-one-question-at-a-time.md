# TC-066 - Only One Question at a Time

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system asks only one important follow-up question at a time.

## Initial User Description

```text
I had treatment and later had problems, but I have not explained when it happened, where it happened or what the consequence was.
```

## Expected Conversation Behavior

- detect several missing facts
- choose the highest priority missing fact first
- ask only one question
- avoid creating a form-like experience

## Expected Facts

```text
multiple_missing_facts = true
question_priority_needed = true
```

## Expected Missing Information

```text
event_date
provider_or_location
current_consequence
```

## Expected Next Step

```text
continue_intake
```

## Acceptance Checks

```text
only one question is asked
question priority is applied
missing facts remain tracked
conversation does not feel like a long form
```
