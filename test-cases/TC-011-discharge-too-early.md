# TC-011 - Discharge Too Early

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate a case where the user believes they were sent home too early and later needed further care.

## Scenario

A fictional user describes being discharged and returning shortly after with worsening symptoms.

## Initial User Description

```text
I was sent home after treatment, but the next day I got worse and had to contact healthcare again. I feel I may have been sent home too early.
```

## Expected Conversation Behavior

- ask when treatment and discharge happened
- ask what symptoms worsened
- ask whether further care was needed
- ask about current consequence
- confirm understanding before screening

## Expected Facts

```text
possible_early_discharge = true
worsening_after_discharge = true
further_care_needed = true
```

## Expected Missing Information

```text
discharge_date
return_contact_date
symptoms
current_consequence
documentation_available
```

## Expected Next Step

```text
continue_intake or human_review
```

## Acceptance Checks

```text
timeline is captured
worsening is captured
further care is captured
no final conclusion is claimed
```
