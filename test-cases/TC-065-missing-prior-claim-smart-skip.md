# TC-065 - Missing Prior Claim Smart Skip

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system records whether the fictional user has already complained or applied elsewhere.

## Initial User Description

```text
I have not complained anywhere yet. I am trying to understand whether I should do something first.
```

## Expected Conversation Behavior

- store that no prior complaint or claim exists
- avoid asking the same status question again
- explain why prior status may matter later
- continue with the main intake questions

## Expected Facts

```text
prior_claim_or_complaint = false
prior_status_known = true
user_needs_next_step_guidance = true
```

## Expected Missing Information

```text
none_for_prior_status
main_event_details
current_consequence
```

## Expected Next Step

```text
continue_intake
```

## Acceptance Checks

```text
prior status is stored
Smart Skip prevents duplicate prior-status question
next-step uncertainty is handled
conversation continues
```
