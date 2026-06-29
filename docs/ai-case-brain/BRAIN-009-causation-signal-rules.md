# BRAIN-009 - Causation Signal Rules

Version: 1.0
Status: Draft
Scope: AI Case Brain v1.0

## Purpose

This document defines how AI Case Brain identifies early causation signals.

Causation is only a preliminary screening signal. The system must not conclude that a healthcare provider caused the injury.

## Causation Output Values

Recommended values:

```text
strong_possible_connection
possible_connection
weak_or_unclear_connection
no_visible_connection
unknown
```

## Rule CAUS-001 - Direct Timeline Connection

Trigger:

The user describes that symptoms, harm or deterioration happened shortly after treatment, medication, surgery or discharge.

Effect:

Increase possible causation signal.

Reason code:

```text
direct_timeline_connection
```

## Rule CAUS-002 - Delay Worsened Outcome

Trigger:

The user states that delayed diagnosis, referral or treatment caused disease progression, more invasive treatment or death.

Effect:

Increase causation signal for diagnosis_delay or lack_of_follow_up.

Reason code:

```text
delay_worsened_outcome_signal
```

## Rule CAUS-003 - Provider Acknowledgement Signal

Trigger:

The user mentions that hospital, doctor, insurer, Patienterstatningen or another authority acknowledged an error or partial responsibility.

Effect:

Increase causation and evidence signal, but keep fact unconfirmed until documented.

Reason code:

```text
provider_or_authority_acknowledgement_signal
```

## Rule CAUS-004 - Alternative Explanation Mentioned

Trigger:

The user mentions that the harm may be due to underlying disease, known risk, unavoidable complication or natural progression.

Effect:

Lower causation confidence and consider human review.

Reason code:

```text
alternative_explanation_signal
```

## Rule CAUS-005 - Known Complication Without Error Signal

Trigger:

The message describes a complication after treatment but no delay, mistake, missing follow-up, wrong medication, wrong diagnosis or unusual event.

Effect:

Set causation to weak_or_unclear_connection.

Reason code:

```text
known_complication_without_error_signal
```

## Rule CAUS-006 - Missing Treatment Link

Trigger:

The user describes an injury or consequence but no link to healthcare treatment, diagnosis, medication or follow-up.

Effect:

Ask one clarifying question or guide away if out of scope.

Reason code:

```text
treatment_link_missing
```

Recommended question:

```text
How do you believe this is connected to the treatment or healthcare contact?
```

## Rule CAUS-007 - Repeated Contact Before Diagnosis

Trigger:

The user describes several contacts with healthcare providers before a later serious diagnosis.

Effect:

Increase possible causation signal for diagnosis_delay.

Reason code:

```text
repeated_contacts_before_diagnosis
```

## Rule CAUS-008 - Test Result Not Acted On

Trigger:

The user mentions that test results, scans, blood tests or pathology results were missed, delayed or not followed up.

Effect:

Increase causation signal for lack_of_follow_up or diagnosis_delay.

Reason code:

```text
test_result_not_acted_on
```

## Rule CAUS-009 - Wrong Medication Or Dose

Trigger:

The user mentions wrong medicine, wrong dose, contraindication, allergy ignored or interaction.

Effect:

Increase causation signal for medication_injury.

Reason code:

```text
wrong_medication_or_dose_signal
```

## Rule CAUS-010 - Causation Unclear

Trigger:

The system cannot determine whether the injury may be connected to healthcare treatment.

Effect:

Set causation to unknown or weak_or_unclear_connection and request clarification or human review.

Reason code:

```text
causation_unclear
```

## Rule CAUS-011 - Conflicting Causation Facts

Trigger:

User-provided facts point in different directions, such as both known complication and claimed obvious error.

Effect:

Route to human review when confidence is low.

Reason code:

```text
conflicting_causation_facts
```

## Human Review Guidance

Human review should be considered when:

- serious consequence exists and causation is unclear
- case value appears high but evidence is weak
- alternative explanations are prominent
- facts conflict
- AI confidence is below threshold

## Test References

- TC-041 Human Review Unclear Case
- TC-071 Serious Consequence Review Priority
- TC-073 Causation Unclear Flow
- TC-089 Invalid AI Output Fallback

## References

- BRAIN-008-injury-and-consequence-rules.md
- docs/contracts/CONTRACT-004-screening-output-contract.md
- docs/prompts/PROMPT-004-screening-prompt.md
