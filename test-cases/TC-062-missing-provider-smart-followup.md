# TC-062 - Missing Provider Smart Follow-up

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system asks for treatment location or provider when this key information is missing.

## Initial User Description

```text
The treatment caused problems afterwards, but I have not mentioned where it happened.
```

## Expected Conversation Behavior

- detect that provider or location is missing
- ask one clear question about where it happened
- explain briefly why provider context matters
- avoid asking again once answered

## Expected Facts

```text
provider_missing = true
treatment_context_present = true
location_needed = true
```

## Expected Missing Information

```text
provider_or_treatment_location
```

## Expected Next Step

```text
continue_intake
```

## Acceptance Checks

```text
provider gap is detected
one provider question is asked
answer is reused later
Smart Skip prevents duplicate provider question
```
