# TC-053 - Third Party Consent Review

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system routes carefully when a fictional third party provides details and consent is not yet clear.

## Initial User Description

```text
I am writing on behalf of a family member. I know some details, but I am not sure if they have agreed that I can share everything.
```

## Expected Conversation Behavior

- clarify the user's role
- explain that consent may be needed
- limit collection of sensitive details
- continue only with safe general context
- recommend review if the case should proceed

## Expected Facts

```text
third_party = true
consent_unclear = true
sensitive_details_limited = true
```

## Expected Missing Information

```text
user_role
consent_status
basic_event_context
```

## Expected Next Step

```text
human_review or pause_until_consent
```

## Acceptance Checks

```text
role is clarified
consent need is explained
sensitive collection is limited
human review can be recommended
```
