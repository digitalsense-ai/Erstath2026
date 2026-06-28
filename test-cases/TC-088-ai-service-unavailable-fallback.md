# TC-088 - AI Service Unavailable Fallback

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system handles AI service unavailability without losing the user's input.

## Initial User Description

```text
The user submits an intake message while the AI service is temporarily unavailable.
```

## Expected System Behavior

- store the user's message
- do not lose the lead
- mark screening as pending or fallback
- show a safe user-facing message
- make the lead available for later retry or review

## Expected Facts

```text
ai_service_unavailable = true
message_saved = true
screening_pending_or_fallback = true
```

## Expected Missing Information

```text
screening_result_pending
```

## Expected Next Step

```text
retry_later_or_human_review
```

## Acceptance Checks

```text
message is saved
lead is not lost
safe fallback status is stored
system does not expose technical error details
```
