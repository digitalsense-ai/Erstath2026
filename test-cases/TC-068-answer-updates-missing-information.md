# TC-068 - Answer Updates Missing Information

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that a user's answer resolves or updates the relevant missing information record.

## Initial User Description

```text
Earlier I did not know where it happened, but now I found out it was at the regional hospital.
```

## Expected Conversation Behavior

- recognize that the user is resolving a prior gap
- update provider or location information
- mark the missing item as resolved
- avoid asking the same location question again

## Expected Facts

```text
provider_location_known = true
previous_missing_information_resolved = true
```

## Expected Missing Information

```text
provider_or_location = resolved
```

## Expected Next Step

```text
continue_intake
```

## Acceptance Checks

```text
answer updates the correct missing item
missing item is marked resolved
Smart Skip prevents repeated question
fact history remains traceable
```
