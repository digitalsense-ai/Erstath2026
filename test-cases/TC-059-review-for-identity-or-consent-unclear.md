# TC-059 - Review for Identity or Consent Unclear

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system pauses or routes to review when identity, role or consent is unclear.

## Initial User Description

```text
I am writing about another person, but I am not sure whether I am allowed to continue on their behalf.
```

## Expected Conversation Behavior

- clarify the user's role
- explain that consent may be needed
- avoid collecting unnecessary sensitive details
- continue only with safe general context
- recommend review or pause if consent is unclear

## Expected Facts

```text
third_party = true
identity_or_role_unclear = true
consent_unclear = true
```

## Expected Missing Information

```text
user_role
consent_status
permission_to_continue
```

## Expected Next Step

```text
pause_until_consent or human_review
```

## Acceptance Checks

```text
role is clarified
consent uncertainty is captured
sensitive collection is limited
system can pause or recommend review
```
