# TC-054 - Multiple Providers Review

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system recommends human review when several providers are involved and responsibility or sequence is unclear.

## Initial User Description

```text
I was seen by different providers. I am not sure which part of the course caused the problem or who should be looked at.
```

## Expected Conversation Behavior

- ask which providers were involved
- ask for approximate order
- avoid assigning responsibility
- capture uncertainty clearly
- recommend review if provider sequence matters

## Expected Facts

```text
multiple_providers = true
provider_sequence_unclear = true
responsibility_unclear = true
```

## Expected Missing Information

```text
provider_list
event_order
current_consequence
```

## Expected Next Step

```text
human_review
```

## Acceptance Checks

```text
providers are captured
sequence uncertainty is preserved
system avoids assigning responsibility
human review is recommended
```
