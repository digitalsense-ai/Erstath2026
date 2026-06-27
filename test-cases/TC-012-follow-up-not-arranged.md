# TC-012 - Follow-up Not Arranged

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate a case where the user expected follow-up but did not receive it.

## Scenario

A fictional user describes missing follow-up after treatment and later complications.

## Initial User Description

```text
After my treatment I expected a follow-up appointment, but I did not receive one. Later my symptoms got worse and I needed more help.
```

## Expected Conversation Behavior

- ask what follow-up was expected
- ask whether follow-up was agreed or written down
- ask what symptoms worsened
- ask what further help was needed
- track missing documents

## Expected Facts

```text
follow_up_expected = true
follow_up_not_received = true
symptoms_worsened = true
further_help_needed = true
```

## Expected Missing Information

```text
follow_up_plan
symptom_timeline
further_treatment
current_consequence
documentation_available
```

## Expected Next Step

```text
continue_intake
```

## Acceptance Checks

```text
expected follow-up is separated from documented follow-up
worsening symptoms are captured
missing information is tracked
```
