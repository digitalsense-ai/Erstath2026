# TC-083 - User Choice Before Next Step

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system waits for a clear user choice before moving to the next step.

## Initial User Description

```text
I may want to continue, but I want to understand the next step first.
```

## Expected System Behavior

- explain the next step in plain language
- do not assume the user's choice
- record the user's choice clearly
- wait before continuing

## Expected Facts

```text
next_step_explanation_needed = true
user_choice_pending = true
```

## Expected Missing Information

```text
user_choice
```

## Expected Next Step

```text
explain_and_wait
```

## Acceptance Checks

```text
choice is not assumed
next step is explained
user choice is recorded
system waits before continuing
```
