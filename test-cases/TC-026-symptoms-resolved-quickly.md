# TC-026 - Symptoms Resolved Quickly

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate a weak-case flow where a fictional user describes temporary symptoms that resolved without further care.

## Initial User Description

```text
I felt unwell for a short time after the appointment, but it passed quickly and I did not need follow-up.
```

## Expected Conversation Behavior

- acknowledge the experience
- ask whether any current consequence remains
- ask whether any follow-up was needed
- explain why lasting consequence matters
- guide elsewhere if no consequence is confirmed

## Expected Facts

```text
temporary_symptoms = true
resolved_quickly = true
follow_up_needed = false
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
temporary nature is captured
no duplicate consequence question is asked
guide-away is respectful
no final legal conclusion is claimed
```
