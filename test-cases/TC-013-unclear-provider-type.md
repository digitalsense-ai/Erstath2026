# TC-013 - Unclear Provider Type

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system clarifies where the event happened when the provider type is unclear.

## Initial User Description

```text
I received treatment, but I am not sure whether this belongs under a hospital, clinic or another provider. I just want to know what to do next.
```

## Expected Conversation Behavior

- ask where the treatment happened
- ask what type of provider was involved
- explain why provider type matters
- continue only with relevant questions

## Expected Facts

```text
provider_type_unclear = true
needs_routing_clarification = true
```

## Expected Missing Information

```text
provider_type
treatment_location
event_description
```

## Expected Next Step

```text
continue_intake
```

## Acceptance Checks

```text
provider type is requested
reason is explained
no duplicate provider question is asked
```
