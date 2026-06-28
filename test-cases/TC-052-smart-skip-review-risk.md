# TC-052 - Smart Skip Review Risk

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that Smart Skip reuses known information but still keeps important uncertainty visible.

## Initial User Description

```text
I do not know the exact date, but I know it happened before a later appointment.
```

## Expected Conversation Behavior

- reuse that the exact date is unknown
- ask only for useful approximate timing
- preserve timing uncertainty
- avoid repeating the same question

## Expected Facts

```text
exact_date_unknown = true
relative_timing_known = true
smart_skip_needed = true
```

## Expected Missing Information

```text
approximate_event_date
later_appointment_date
```

## Expected Next Step

```text
continue_intake or human_review
```

## Acceptance Checks

```text
same question is not repeated
relative timing is captured
uncertainty remains visible
human review can be recommended
```
