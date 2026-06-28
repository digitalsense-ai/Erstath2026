# TC-067 - Prior Answer Reuse

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system reuses information the fictional user already provided.

## Initial User Description

```text
This happened at a hospital in 2021. I do not remember the exact month.
```

## Expected Conversation Behavior

- store hospital as provider context
- store 2021 as approximate timing
- avoid asking again whether it happened at a hospital
- ask only for narrower timing if needed

## Expected Facts

```text
provider_type = hospital
approximate_event_year = 2021
exact_month_unknown = true
```

## Expected Missing Information

```text
approximate_month_if_needed
current_consequence
```

## Expected Next Step

```text
continue_intake
```

## Acceptance Checks

```text
provided information is reused
same provider question is not repeated
same year question is not repeated
follow-up question is narrowed
```
