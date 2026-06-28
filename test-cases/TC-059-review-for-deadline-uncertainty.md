# TC-059 - Review for Deadline Uncertainty

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that deadline uncertainty can trigger human review instead of automatic guide-away.

## Initial User Description

```text
The event happened some years ago, but I only understood later that it might be connected to the treatment.
```

## Expected Conversation Behavior

- ask when the event happened
- ask when the user became aware of the possible connection
- explain why timing matters
- avoid automatic rejection if awareness timing is unclear
- recommend review if deadline facts are important and uncertain

## Expected Facts

```text
event_old_possible = true
awareness_date_relevant = true
deadline_uncertainty = true
```

## Expected Missing Information

```text
event_date
awareness_date
connection_explanation
```

## Expected Next Step

```text
human_review
```

## Acceptance Checks

```text
event timing is requested
awareness timing is requested
system avoids premature guide-away
human review is recommended
```
