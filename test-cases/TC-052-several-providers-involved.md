# TC-052 - Several Providers Involved

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system recommends human review when several providers are involved and responsibility or routing is unclear.

## Initial User Description

```text
I was first seen in one place and then sent somewhere else. I am not sure where the problem happened or who was responsible.
```

## Expected Conversation Behavior

- ask which providers were involved
- ask for the rough sequence of events
- avoid assigning responsibility
- mark provider responsibility as unclear
- recommend review if routing remains complex

## Expected Facts

```text
multiple_providers = true
responsibility_unclear = true
timeline_needed = true
```

## Expected Missing Information

```text
provider_sequence
first_provider
second_provider
current_consequence
```

## Expected Next Step

```text
human_review
```

## Acceptance Checks

```text
provider sequence is requested
responsibility is not assumed
human review is recommended
```
