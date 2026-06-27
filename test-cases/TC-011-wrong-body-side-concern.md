# TC-011 - Wrong Body Side Concern

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate a case where the user is concerned that treatment may have been performed on the wrong side or wrong area.

## Scenario

A fictional user describes confusion about which side or area was treated.

## Initial User Description

```text
I went in for treatment and afterwards I became worried that the wrong side may have been treated. I am not sure what the notes say.
```

## Expected Conversation Behavior

- ask what treatment was planned
- ask what the user believes happened
- ask what consequence followed
- ask whether records or discharge notes exist
- avoid confirming the concern without evidence

## Expected Facts

```text
wrong_area_concern = true
records_needed = true
consequence_unclear = true
```

## Expected Missing Information

```text
planned_treatment
actual_treatment_understood_by_user
records_available
current_consequence
```

## Expected Next Step

```text
human_review
```

## Acceptance Checks

```text
concern is recorded neutrally
records are requested
human review can be recommended
no factual claim is made without confirmation
```
