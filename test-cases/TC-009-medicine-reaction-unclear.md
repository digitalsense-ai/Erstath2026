# TC-009 - Medicine Reaction Unclear

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate a medicine-related case where the user is unsure why symptoms occurred.

## Scenario

A fictional user felt unwell after receiving medicine.

## Initial User Description

```text
I received medicine and afterwards I felt very dizzy and unwell. I do not know if this was expected or if something went wrong.
```

## Expected Conversation Behavior

- ask what medicine was given if known
- ask what symptoms occurred
- ask when symptoms started
- ask whether extra treatment was needed
- avoid assuming an error
- confirm understanding before screening

## Expected Facts

```text
medicine_related = true
symptoms_after_medicine = true
cause_unclear = true
```

## Expected Missing Information

```text
medicine_name
symptom_timeline
extra_treatment_needed
current_consequence
```

## Expected Next Step

```text
continue_intake or human_review
```

## Acceptance Checks

```text
uncertainty is captured
extra treatment question is asked
facts remain unconfirmed until confirmed
```
