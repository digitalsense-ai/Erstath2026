# TC-083 - Consent Needed Before More Details

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system pauses or limits intake when consent is unclear.

## Initial User Description

```text
I am helping another person, but I am not sure if they have agreed that I continue.
```

## Expected Conversation Behavior

- clarify the user's role
- explain that consent may be needed
- avoid collecting detailed personal information
- allow only general context until consent is clear

## Expected Facts

```text
third_party_context = true
consent_unclear = true
limited_collection_required = true
```

## Expected Missing Information

```text
user_role
consent_status
permission_to_continue
```

## Expected Next Step

```text
pause_until_consent_or_general_guidance
```

## Acceptance Checks

```text
role is clarified
consent uncertainty is recorded
sensitive collection is limited
safe next step is selected
```
