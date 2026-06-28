# TC-057 - Review for Routing Jurisdiction Unclear

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that unclear routing or jurisdiction can trigger human review instead of an unsafe guide-away.

## Initial User Description

```text
The treatment was partly here and partly somewhere else. I am not sure which place is responsible for what happened.
```

## Expected Conversation Behavior

- ask where each part happened
- separate the treatment contexts
- explain why location and provider type matter
- avoid routing too early
- recommend review if responsibility remains unclear

## Expected Facts

```text
routing_unclear = true
multiple_locations = true
responsibility_unclear = true
```

## Expected Missing Information

```text
location_sequence
provider_types
responsibility_context
```

## Expected Next Step

```text
human_review
```

## Acceptance Checks

```text
routing uncertainty is captured
system avoids early guide-away
human review is recommended
reason code can be stored
```
