# TC-081 - No Personal Data in Test Examples

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that test examples and demo flows do not require real personal data.

## Initial User Description

```text
I want to test the flow with sample information only.
```

## Expected Conversation Behavior

- allow fake test information
- avoid requesting real identifiers in test context
- remind that test data should be fictional if needed
- continue with the intake structure using safe sample data

## Expected Facts

```text
test_context = true
fake_data_only = true
real_identifiers_not_needed = true
```

## Expected Missing Information

```text
sample_event_description
sample_provider_context
sample_consequence
```

## Expected Next Step

```text
continue_test_flow
```

## Acceptance Checks

```text
real identifiers are not requested for tests
fake data is accepted
flow remains usable
privacy rule is respected
```
