# TC-069 - Unknown Answer Does Not Repeat

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system does not repeatedly ask for information the fictional user has said they do not know.

## Initial User Description

```text
I do not know the provider name. I only know it was a clinic in the city.
```

## Expected Conversation Behavior

- store that exact provider name is unknown
- store partial location context
- avoid asking the same provider-name question again
- ask a different useful question if needed

## Expected Facts

```text
provider_name_unknown = true
partial_location_known = true
provider_context_partial = true
```

## Expected Missing Information

```text
provider_name_if_later_available
```

## Expected Next Step

```text
continue_intake
```

## Acceptance Checks

```text
unknown answer is stored
partial information is preserved
same question is not repeated
next question is different and useful
```
