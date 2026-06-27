# TC-016 - Repeated Question Prevention

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system does not ask the same question again after the fictional user has already answered.

## Initial User Description

```text
The treatment happened in 2022 at a hospital. I already know the year but not the exact date.
```

## Expected Conversation Behavior

- store the year as approximate timing
- ask only if more timing detail is needed
- do not ask again whether the user knows when it happened
- explain why more timing detail may help

## Expected Facts

```text
approximate_event_year = 2022
exact_date_unknown = true
provider_type = hospital
```

## Expected Missing Information

```text
exact_or_month_level_date
```

## Expected Next Step

```text
continue_intake
```

## Acceptance Checks

```text
known timing is reused
same question is not repeated
missing information is narrowed
conversation continues
```
