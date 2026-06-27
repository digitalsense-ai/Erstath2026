# TC-014 - User Cannot Remember Date

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system can continue when the fictional user cannot remember the exact date.

## Initial User Description

```text
I do not remember the exact date. It was probably a few years ago, but I am not sure.
```

## Expected Conversation Behavior

- accept approximate timing
- ask for month or year if possible
- ask when the user became aware of the issue
- explain why timing matters
- continue without blocking immediately

## Expected Facts

```text
exact_date_unknown = true
approximate_timing_possible = true
```

## Expected Missing Information

```text
approximate_event_date
awareness_date
```

## Expected Next Step

```text
continue_intake
```

## Acceptance Checks

```text
system accepts uncertainty
timing reason is explained
conversation continues
```
