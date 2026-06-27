# TC-012 - Emergency Room Discharge Concern

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate a case where a user was sent home and later needed more treatment.

## Scenario

A fictional user went to emergency care, was sent home, and later returned with worsening symptoms.

## Initial User Description

```text
I went to the emergency room because I felt very unwell. I was sent home, but later I had to come back because things got worse.
```

## Expected Conversation Behavior

- ask about first contact and return contact
- ask what symptoms changed
- ask what treatment was later needed
- ask about timeline
- confirm understanding before screening

## Expected Facts

```text
emergency_contact = true
sent_home = true
later_returned = true
worsening_reported = true
```

## Expected Missing Information

```text
first_contact_date
return_date
symptoms
later_treatment
current_consequence
```

## Expected Next Step

```text
continue_intake or human_review
```

## Acceptance Checks

```text
timeline is requested
worsening is captured
later treatment is captured
no final conclusion is claimed
```
