# TC-004 - Delayed Diagnosis Cancer

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate a case where a user describes delayed diagnosis and potential serious consequence.

## Scenario

A fictional patient reports repeated contacts with healthcare before a later cancer diagnosis.

## Initial User Description

```text
I went to the doctor several times because I had symptoms, but I was told to wait and see. Months later I was diagnosed with cancer. I am worried that it should have been found earlier.
```

## Expected Conversation Behavior

- acknowledge the concern carefully
- ask about timeline and contacts
- ask when diagnosis was made
- ask about current consequence
- ask about documents if relevant
- confirm understanding before screening

## Expected Facts

```text
possible_delayed_diagnosis = true
condition = cancer
multiple_healthcare_contacts = true
serious_consequence_possible = true
```

## Expected Missing Information

```text
first_contact_date
diagnosis_date
healthcare_provider
documentation_available
current_consequence
```

## Expected Next Step

```text
human_review
```

## Acceptance Checks

```text
timeline is requested
seriousness is recognized
human review is recommended
no final legal conclusion is claimed
```
