# TC-068 - Skip Known Provider

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system does not ask for provider or location when the fictional user has already provided it.

## Initial User Description

```text
The treatment happened at a hospital. I do not know if the later problem is connected.
```

## Expected Conversation Behavior

- store hospital as provider context
- do not ask again where it happened
- ask for missing timing or consequence information instead
- keep provider context available for screening

## Expected Facts

```text
provider_context = hospital
provider_known = true
connection_unclear = true
```

## Expected Missing Information

```text
event_date
current_consequence
connection_clarification
```

## Expected Next Step

```text
continue_intake
```

## Acceptance Checks

```text
provider context is reused
provider question is skipped
next missing information is prioritized
Smart Skip works for provider information
```
