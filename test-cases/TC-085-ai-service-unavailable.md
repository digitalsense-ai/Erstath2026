# TC-085 - AI Service Unavailable

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system handles temporary AI service unavailability without losing the user's intake.

## Initial User Description

```text
The user has submitted an intake message, but the AI service is temporarily unavailable.
```

## Expected System Behavior

- save the user message
- mark AI processing as pending or failed safely
- show a clear fallback message
- avoid duplicate lead creation
- allow retry or human follow-up

## Expected Facts

```text
ai_service_unavailable = true
message_saved = true
fallback_needed = true
```

## Expected Missing Information

```text
none_from_user_until_retry
```

## Expected Next Step

```text
retry_ai_or_human_followup
```

## Acceptance Checks

```text
message is not lost
AI failure is recorded
fallback message is clear
no duplicate lead is created
```
