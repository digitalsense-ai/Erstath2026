# TC-010 - Wrong Site Treatment Concern

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate a case where a user is concerned that treatment was performed in the wrong place or on the wrong area.

## Scenario

A fictional user describes treatment and later concern that the wrong area may have been treated.

## Initial User Description

```text
I had a treatment and afterwards I became worried that the wrong area was treated. I am not sure, but I have pain in the area now.
```

## Expected Conversation Behavior

- ask what treatment was performed
- ask which area was intended and which area is now affected
- ask when the treatment happened
- ask about current consequences
- ask whether documentation exists
- confirm understanding before screening

## Expected Facts

```text
treatment_area_concern = true
wrong_area_unclear = true
pain_after_treatment = true
current_consequence_possible = true
```

## Expected Missing Information

```text
treatment_date
intended_treatment_area
affected_area
documentation_available
current_consequence
```

## Expected Next Step

```text
human_review or continue_intake
```

## Acceptance Checks

```text
system captures uncertainty
system does not assume fault
affected area is requested
review can be recommended if uncertainty remains
```
