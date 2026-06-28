# TC-075 - Stop After Maximum Questions

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system does not keep asking questions forever.

## Initial User Description

```text
I have answered several questions, but some information is still missing.
```

## Expected Conversation Behavior

- track question count
- stop after the configured maximum
- choose a safe next step
- keep remaining gaps visible

## Expected Facts

```text
maximum_questions_reached = true
remaining_gaps_exist = true
safe_next_step_needed = true
```

## Expected Missing Information

```text
remaining_open_fields
```

## Expected Next Step

```text
qualify_or_review_or_guide_elsewhere
```

## Acceptance Checks

```text
question limit is respected
system selects a next step
remaining gaps are preserved
conversation does not loop
```
