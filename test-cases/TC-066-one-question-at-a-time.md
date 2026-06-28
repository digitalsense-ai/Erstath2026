# TC-066 - One Question at a Time

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system asks only one important follow-up question at a time.

## Initial User Description

```text
I had treatment, something changed afterwards, and I may have documents somewhere.
```

## Expected Conversation Behavior

- detect several missing facts
- choose the most important next question
- avoid asking a long list of questions
- continue step by step

## Expected Facts

```text
multiple_missing_facts = true
one_question_rule_needed = true
```

## Expected Missing Information

```text
event_date
provider_or_location
current_consequence
document_status
```

## Expected Next Step

```text
continue_intake
```

## Acceptance Checks

```text
only one question is asked
question priority is clear
missing facts remain tracked
conversation continues step by step
```
