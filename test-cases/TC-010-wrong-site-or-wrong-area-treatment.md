# TC-010 - Wrong Area Treatment

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate a case where the user believes treatment may have been performed on the wrong area.

## Scenario

A fictional user describes confusion about which area was treated.

## Initial User Description

```text
I went in for treatment on one area, but afterwards I was told that another area may have been treated. I am confused and worried about whether something went wrong.
```

## Expected Conversation Behavior

- ask what treatment was planned
- ask what the user believes happened
- ask whether there was any consequence
- ask whether documents are available
- avoid making a final conclusion

## Expected Facts

```text
planned_treatment_area_known = unclear
possible_wrong_area_treatment = true
consequence_unclear = true
```

## Expected Missing Information

```text
planned_treatment_area
actual_treatment_area
current_consequence
documentation_available
```

## Expected Next Step

```text
continue_intake or human_review
```

## Acceptance Checks

```text
planned versus actual treatment is separated
consequence is requested
human review can be recommended if uncertainty remains
```
