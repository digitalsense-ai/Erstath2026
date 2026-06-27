# TC-036 - Complaint About Room or Facility

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate a guide-away flow where the fictional user complains about surroundings rather than harm.

## Initial User Description

```text
The room and facilities were not good. I was uncomfortable, but I do not have any injury from it.
```

## Expected Conversation Behavior

- acknowledge the poor experience
- clarify whether any health consequence occurred
- identify that this may be a complaint path
- guide elsewhere if no harm is confirmed

## Expected Facts

```text
facility_complaint = true
injury_described = false
health_consequence = false
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
facility concern is captured
harm is clarified
respectful guide-away occurs
```
