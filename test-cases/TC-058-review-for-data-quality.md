# TC-058 - Review for Data Quality

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that poor information quality can trigger review before the system relies on extracted facts.

## Initial User Description

```text
I wrote this quickly and may have mixed up some details. I am not sure the order is correct.
```

## Expected Conversation Behavior

- acknowledge uncertainty
- ask for the most important event first
- avoid relying on weak facts too strongly
- mark information quality as uncertain
- recommend review if the order affects next step

## Expected Facts

```text
information_quality_uncertain = true
sequence_unclear = true
fact_reliability_low = true
```

## Expected Missing Information

```text
event_sequence
key_event
current_consequence
```

## Expected Next Step

```text
continue_intake or human_review
```

## Acceptance Checks

```text
information quality is captured
weak facts are handled safely
review can be recommended
```
