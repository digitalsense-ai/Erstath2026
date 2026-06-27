# TC-007 - Old Event Date Limitation

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system asks about timing and handles an old event carefully.

## Scenario

A fictional user describes treatment that happened many years ago.

## Initial User Description

```text
The treatment happened many years ago. I think it was around eight years ago, but I am not completely sure.
```

## Expected Conversation Behavior

- ask for approximate date
- explain why timing matters
- ask whether the user became aware of possible injury later
- avoid making a final legal conclusion too early
- route to review or guide-away depending on complete information

## Expected Facts

```text
event_old = true
approximate_event_age_years = 8
timing_uncertain = true
```

## Expected Missing Information

```text
exact_or_approximate_event_date
awareness_date
current_consequence
```

## Expected Next Step

```text
human_review or guide_elsewhere depending on timing facts
```

## Acceptance Checks

```text
timing is requested
timing reason is explained
awareness date is considered
no premature rejection occurs
```
