# TC-061 - Missing Event Date Smart Skip

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system asks for timing when missing and does not repeat the same date question after the user gives an approximate answer.

## Initial User Description

```text
Something happened during treatment, but I do not remember the exact date. I think it was in 2021.
```

## Expected Conversation Behavior

- accept approximate timing
- store the year as known information
- ask for more detail only if needed
- avoid asking the same date question again
- explain why timing matters

## Expected Facts

```text
exact_event_date_missing = true
approximate_event_year = 2021
timing_partly_known = true
```

## Expected Missing Information

```text
month_or_more_precise_date_if_needed
awareness_date_if_needed
```

## Expected Next Step

```text
continue_intake
```

## Acceptance Checks

```text
approximate date is stored
same date question is not repeated
missing information is narrowed
conversation continues
```
