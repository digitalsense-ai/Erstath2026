# TC-019 - Private Provider Routing

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system clarifies routing when the fictional user describes a private provider.

## Initial User Description

```text
The treatment was done by a private clinic. I am not sure whether this is handled the same way as treatment at a public hospital.
```

## Expected Conversation Behavior

- ask what type of private provider was involved
- ask where the treatment happened
- explain why provider type matters
- continue with relevant intake questions

## Expected Facts

```text
private_provider = true
provider_routing_unclear = true
```

## Expected Missing Information

```text
provider_type
treatment_location
event_description
```

## Expected Next Step

```text
continue_intake or guide_elsewhere depending on routing facts
```

## Acceptance Checks

```text
provider type is captured
routing explanation is provided
conversation does not stop prematurely
```
