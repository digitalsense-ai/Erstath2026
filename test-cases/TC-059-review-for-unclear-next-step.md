# TC-059 - Review for Unclear Next Step

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that human review can be used when the system cannot safely choose the next step.

## Initial User Description

```text
I have explained what I can, but I still do not know whether this should continue, be paused or go somewhere else.
```

## Expected Conversation Behavior

- summarize what is known
- list what is still unclear
- avoid forcing a next step
- recommend review when the next step is uncertain

## Expected Facts

```text
next_step_unclear = true
known_information_exists = true
important_uncertainty_remains = true
```

## Expected Missing Information

```text
uncertainty_reason
remaining_key_questions
```

## Expected Next Step

```text
human_review
```

## Acceptance Checks

```text
known and unknown information is separated
next step is not forced
human review is recommended
```
