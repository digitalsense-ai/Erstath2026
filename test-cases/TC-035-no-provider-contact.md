# TC-035 - No Provider Contact

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system clarifies whether a healthcare provider was involved.

## Initial User Description

```text
I had a bad experience, but I am not sure it was connected to any treatment or provider contact.
```

## Expected Conversation Behavior

- ask whether there was contact with a provider
- ask what happened in simple language
- explain why provider context matters
- guide elsewhere if no provider-related event exists

## Expected Facts

```text
provider_contact_unclear = true
treatment_context_unclear = true
```

## Expected Missing Information

```text
provider_contact
specific_event_description
```

## Expected Next Step

```text
continue_intake or guide_elsewhere
```

## Acceptance Checks

```text
provider contact is clarified
system does not assume treatment context
guide-away is respectful if not relevant
```
