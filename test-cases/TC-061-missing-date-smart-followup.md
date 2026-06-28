# TC-061 - Missing Date Smart Follow-up

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system asks for timing when the fictional user describes an event without a date.

## Initial User Description

```text
I had treatment and afterwards I experienced problems, but I have not said when it happened.
```

## Expected Conversation Behavior

- identify that timing is missing
- explain briefly why timing matters
- ask for approximate timing if exact date is unknown
- avoid asking for unrelated details first

## Expected Facts

```text
event_described = true
event_date_missing = true
approximate_date_allowed = true
```

## Expected Missing Information

```text
event_date_or_approximate_timing
```

## Expected Next Step

```text
continue_intake
```

## Acceptance Checks

```text
date gap is detected
one clear date question is asked
approximate timing is accepted
missing information is tracked
```
