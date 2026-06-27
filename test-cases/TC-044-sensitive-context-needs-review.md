# TC-044 - Sensitive Context Needs Review

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system uses careful language and routes to human review when the context is sensitive and uncertain.

## Initial User Description

```text
The situation is difficult for me to talk about. It happened during treatment, and I still feel affected by it, but I am not ready to explain everything yet.
```

## Expected Conversation Behavior

- use careful and respectful language
- respect the user's boundary
- ask only minimal context questions
- explain that more detail may be needed later
- route to human review if enough concern is present but details are limited

## Expected Facts

```text
sensitive_context = true
limited_details = true
current_effect_reported = true
review_needed_possible = true
```

## Expected Missing Information

```text
event_context
current_effect_details
provider_context
consent_or_readiness_to_continue
```

## Expected Next Step

```text
human_review or pause_or_continue_intake
```

## Acceptance Checks

```text
user boundary is respected
minimal context is requested
sensitive tone is used
human review can be recommended
```
