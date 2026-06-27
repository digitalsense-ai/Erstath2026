# TC-038 - Third Party Asking Generally

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system clarifies role and consent when a fictional third party asks generally.

## Initial User Description

```text
I am asking for someone else and only know a few details. I am not sure what they want to do yet.
```

## Expected Conversation Behavior

- clarify the user's role
- avoid collecting unnecessary details
- explain that consent may be needed later
- continue only with general, non-sensitive context

## Expected Facts

```text
third_party = true
limited_information = true
consent_status_unknown = true
```

## Expected Missing Information

```text
user_role
consent_status
basic_event_context
```

## Expected Next Step

```text
continue_with_general_context or pause_until_consent
```

## Acceptance Checks

```text
role is clarified
consent need is explained
sensitive collection is limited
```
