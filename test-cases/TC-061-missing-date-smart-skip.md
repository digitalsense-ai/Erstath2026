# TC-061 - Missing Date Smart Skip

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system asks for timing once, stores the answer, and does not repeat the same date question unnecessarily.

## Initial User Description

```text
I do not remember the exact date, but I think it happened around spring 2021.
```

## Expected Conversation Behavior

- accept approximate timing
- store spring 2021 as approximate date information
- ask only for more detail if needed
- do not ask again as if no timing was provided
- explain why timing matters if asking for more detail

## Expected Facts

```text
exact_date_unknown = true
approximate_timing = spring_2021
timing_information_available = true
```

## Expected Missing Information

```text
exact_event_date_optional
awareness_date_if_relevant
```

## Expected Next Step

```text
continue_intake
```

## Acceptance Checks

```text
approximate date is stored
Smart Skip prevents duplicate timing question
missing information is narrowed
conversation continues
```
