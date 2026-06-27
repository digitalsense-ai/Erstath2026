# TC-043 - Multiple Providers Involved

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system routes to review when several providers may be involved and responsibility is unclear.

## Initial User Description

```text
I was seen by more than one provider, and I am not sure where the problem started. It involved both the first visit and later follow-up.
```

## Expected Conversation Behavior

- ask for a simple timeline
- ask which providers were involved
- ask what happened at each stage
- avoid assigning responsibility
- recommend review if the timeline remains complex

## Expected Facts

```text
multiple_providers = true
timeline_complex = true
responsibility_unclear = true
```

## Expected Missing Information

```text
provider_list
event_timeline
current_consequence
```

## Expected Next Step

```text
human_review
```

## Acceptance Checks

```text
multiple providers are captured
timeline is requested
responsibility is not assigned automatically
human review can be recommended
```
