# TC-008 - Childbirth Injury

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate a sensitive case involving childbirth and later complications.

## Scenario

A fictional user reports complications after childbirth treatment.

## Initial User Description

```text
After giving birth I had complications and pain that continued for a long time. I feel something may have been missed during the treatment.
```

## Expected Conversation Behavior

- use careful and respectful language
- ask what complication occurred
- ask when childbirth and treatment happened
- ask about current consequences
- ask about medical documentation
- confirm understanding before screening

## Expected Facts

```text
context = childbirth
complication_reported = true
lasting_consequence_possible = true
missed_issue_possible = true
```

## Expected Missing Information

```text
event_date
treatment_location
complication_details
current_consequence
documentation_available
```

## Expected Next Step

```text
continue_intake or human_review
```

## Acceptance Checks

```text
sensitive tone is used
current consequence is requested
missing facts are tracked
review can be recommended if uncertainty remains
```
