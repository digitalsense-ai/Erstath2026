# TC-025 - Minor Temporary Discomfort

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate a weak-case flow where the fictional user describes short-term discomfort only.

## Initial User Description

```text
I felt uncomfortable for a short time after the appointment, but it went away and I did not need more help.
```

## Expected Conversation Behavior

- acknowledge the experience
- clarify duration and whether follow-up was needed
- avoid escalating if no current consequence exists
- guide elsewhere if appropriate

## Expected Facts

```text
temporary_discomfort = true
resolved_without_follow_up = true
current_consequence_absent = true
```

## Expected Missing Information

```text
discomfort_duration
```

## Expected Next Step

```text
guide_elsewhere or close_intake
```

## Acceptance Checks

```text
short-term nature is captured
no strong case is created by default
respectful explanation is given
```
