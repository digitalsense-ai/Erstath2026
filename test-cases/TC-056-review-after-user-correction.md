# TC-056 - Review After User Correction

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system can route to review when a user correction changes important facts.

## Initial User Description

```text
I need to correct something I said earlier. It was not the same date, and the problem started later than I first wrote.
```

## Expected Conversation Behavior

- accept the correction
- preserve correction history where relevant
- update affected facts safely
- avoid using outdated facts for routing
- recommend review if the correction changes the next step

## Expected Facts

```text
user_correction = true
important_fact_changed = true
routing_may_change = true
```

## Expected Missing Information

```text
corrected_date
corrected_timeline
confirmation_of_updated_understanding
```

## Expected Next Step

```text
human_review or continue_intake
```

## Acceptance Checks

```text
correction is captured
old fact is not silently overwritten
updated understanding is confirmed
review can be recommended
```
