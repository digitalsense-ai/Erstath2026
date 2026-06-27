# TC-018 - Treatment Abroad Routing

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system clarifies routing when the fictional user describes treatment outside the expected jurisdiction.

## Initial User Description

```text
The treatment happened while I was abroad. I live here, but the provider was in another country.
```

## Expected Conversation Behavior

- ask where the treatment happened
- ask what type of provider was involved
- explain why location matters
- avoid giving a final conclusion too early
- guide or route based on clarified information

## Expected Facts

```text
treatment_abroad = true
jurisdiction_unclear = true
needs_routing_clarification = true
```

## Expected Missing Information

```text
treatment_country
provider_type
residence_context
```

## Expected Next Step

```text
guide_elsewhere or human_review depending on clarified facts
```

## Acceptance Checks

```text
location is captured
routing uncertainty is captured
reason is explained
no final conclusion is claimed
```
