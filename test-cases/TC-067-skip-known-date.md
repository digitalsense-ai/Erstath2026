# TC-067 - Skip Known Date

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system does not ask for timing when the fictional user has already provided it.

## Initial User Description

```text
The treatment happened in March 2023. I had problems afterwards and I am unsure what to do next.
```

## Expected Conversation Behavior

- store March 2023 as approximate timing
- do not ask again when it happened
- ask for the next most important missing fact
- use the known date in later screening

## Expected Facts

```text
approximate_event_date = March 2023
event_date_known = true
```

## Expected Missing Information

```text
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
known timing is reused
date question is skipped
next missing fact is prioritized
Smart Skip works for date information
```
