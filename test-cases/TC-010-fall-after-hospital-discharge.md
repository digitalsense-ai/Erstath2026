# TC-010 - Fall After Hospital Discharge

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate a case where the user describes a fall shortly after discharge and uncertainty about follow-up instructions.

## Scenario

A fictional user was discharged and later fell at home.

## Initial User Description

```text
I was sent home from the hospital and later that day I fell at home. I am not sure if I should have been observed longer or given clearer instructions.
```

## Expected Conversation Behavior

- ask what treatment or stay came before discharge
- ask when the fall happened
- ask what consequence followed
- ask what discharge instructions were given
- avoid assuming responsibility

## Expected Facts

```text
discharge_related = true
fall_after_discharge = true
instruction_unclear = true
```

## Expected Missing Information

```text
discharge_date
fall_date
injury_or_consequence
discharge_instructions
```

## Expected Next Step

```text
continue_intake or human_review
```

## Acceptance Checks

```text
timeline is captured
discharge context is captured
consequence is requested
no final conclusion is claimed
```
