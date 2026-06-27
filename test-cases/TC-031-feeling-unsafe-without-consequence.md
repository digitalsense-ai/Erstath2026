# TC-031 - Feeling Unsafe Without Consequence

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate a guide-away flow where a fictional user felt unsafe during contact but confirms no later consequence.

## Initial User Description

```text
I felt unsafe during the appointment, but nothing happened afterwards and I do not have any ongoing problem.
```

## Expected Conversation Behavior

- acknowledge the experience respectfully
- clarify whether any consequence exists
- explain why consequence matters
- guide elsewhere if no consequence is confirmed

## Expected Facts

```text
felt_unsafe = true
current_consequence = false
ongoing_problem = false
```

## Expected Missing Information

```text
none_if_no_consequence_confirmed
```

## Expected Next Step

```text
guide_elsewhere
```

## Acceptance Checks

```text
concern is handled respectfully
consequence is clarified
guide-away is explained
no final legal conclusion is claimed
```
