# TC-002 - No Compensable Damage

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the MVP can handle a scenario where the user describes dissatisfaction or concern, but no clear compensable damage is described.

## Scenario

A patient received medication, felt worried about whether it was correct, but does not describe any actual injury, extra treatment or lasting consequence.

All details are fictional.

## Initial User Description

```text
I think I may have received the wrong medicine once, but nothing really happened afterwards. I just became worried.
```

## Expected Conversation Behavior

The system should:

- acknowledge the concern respectfully
- ask whether any harm occurred
- ask whether additional treatment was needed
- ask whether there are lasting symptoms
- avoid dismissive language
- avoid making a final legal conclusion too early

## Expected Facts

Possible facts:

```text
possible_medication_issue: yes
actual_harm_described: no
additional_treatment: no
lasting_symptoms: no
```

## Expected Missing Information

Likely missing information:

```text
medication_name
incident_date
whether_any_symptoms_occurred
whether_healthcare_provider_confirmed_error
```

## Expected Screening Behavior

The screening should identify weak basis for compensation if no harm, no extra treatment and no lasting consequence are confirmed.

## Expected Decision Behavior

Possible expected next step:

```text
guide_elsewhere or close_as_not_ready
```

Reason code suggestion:

```text
NO_COMPENSABLE_DAMAGE_DESCRIBED
```

## Expected CRM or Review Behavior

CRM handover should not happen unless later information changes the case.

Human review may be used if the system is uncertain or the user adds conflicting details.

## Acceptance Notes

This test passes if the system handles the user respectfully, checks for harm, avoids overclaiming and does not route a weak case to CRM without sufficient basis.
