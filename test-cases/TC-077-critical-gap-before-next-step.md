# TC-077 - Critical Gap Before Next Step

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that a critical missing fact must be clarified before the system chooses the next step.

## Initial User Description

```text
I can describe the situation, but an important detail is still missing.
```

## Expected Conversation Behavior

- identify the critical gap
- ask one focused question
- explain why the detail matters
- avoid choosing a final path too early

## Expected Facts

```text
critical_gap_exists = true
next_step_not_ready = true
```

## Expected Missing Information

```text
critical_missing_field
```

## Expected Next Step

```text
continue_intake_or_review
```

## Acceptance Checks

```text
critical gap is recognized
one focused question is asked
reason is explained
next step is not chosen too early
```
