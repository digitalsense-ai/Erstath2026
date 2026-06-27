# TC-025 - No Extra Care Needed

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate a weak-case flow where the fictional user describes concern but no extra care or lasting consequence.

## Initial User Description

```text
Something felt off after the appointment, but I did not need any extra care and it went away by itself.
```

## Expected Conversation Behavior

- acknowledge the concern
- ask whether there is any current consequence
- ask whether any follow-up was needed
- explain why this matters
- guide elsewhere if no consequence is confirmed

## Expected Facts

```text
concern_reported = true
extra_care_needed = false
resolved_without_follow_up = true
current_consequence = false
```

## Expected Missing Information

```text
none_if_no_consequence_confirmed
```

## Expected Next Step

```text
guide_elsewhere
```

## Acceptance Checks

```text
system confirms no extra care and no consequence
reason for guide-away is explained
no final legal conclusion is claimed
```
