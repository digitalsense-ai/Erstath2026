# BRAIN-015 - Guide-Away Rules

Version: 1.0
Status: Draft
Scope: AI Case Brain v1.0

## Purpose

This document defines when and how AI Case Brain should politely guide a user away from the main patient injury compensation flow.

Guide-away does not mean a hard rejection. It means the system does not currently have enough basis to continue the case as a qualified ErstatningsHjaelp lead.

## Core Principle

The system should never say:

```text
You have no case.
```

Instead, it should explain carefully that the information provided so far does not currently indicate enough basis to continue.

## Guide-Away Output

Recommended output:

```json
{
  "routing_target": "guide_away",
  "recommended_action": "guide_away",
  "guide_away_reason_codes": [
    "no_specific_injury",
    "treatment_link_missing"
  ],
  "allow_additional_information": true
}
```

## Rule GA-001 - No Specific Injury

Trigger:

The user describes dissatisfaction, concern or poor experience but no specific injury or consequence.

Effect:

Ask one consequence question first if not already asked. If no consequence is provided, guide away.

Reason code:

```text
no_specific_injury
```

## Rule GA-002 - No Healthcare Treatment Link

Trigger:

The user describes harm or loss, but no connection to healthcare treatment, diagnosis, medication or follow-up.

Effect:

Ask one clarification question. If no healthcare link exists, guide away or route out of scope.

Reason code:

```text
no_healthcare_treatment_link
```

## Rule GA-003 - General Medical Advice Request

Trigger:

The user asks for diagnosis, medication, symptom advice or treatment guidance rather than compensation screening.

Effect:

Guide away from compensation flow and provide safe general direction where appropriate.

Reason code:

```text
general_medical_advice_request
```

## Rule GA-004 - Service Complaint Without Injury

Trigger:

The user complains about tone, waiting time, administration, communication or service without concrete harm.

Effect:

Route to patient_complaint or guide away from compensation screening.

Reason code:

```text
service_complaint_without_injury
```

## Rule GA-005 - Clearly Out Of Scope Matter

Trigger:

The matter is clearly about insurance, employment, municipality, property damage, traffic accident or another non-healthcare domain.

Effect:

Guide away from ErstatningsHjaelp patient injury flow.

Reason code:

```text
clearly_out_of_scope
```

## Rule GA-006 - Clearly Weak Screening Signals

Trigger:

case_strength is below threshold and no human review override applies.

Default threshold:

```text
case_strength < 40
```

Effect:

Guide away respectfully.

Reason code:

```text
weak_screening_signals
```

## Rule GA-007 - Time Limit Appears Blocking

Trigger:

Known dates strongly indicate a possible blocking time issue and no exception or human review trigger applies.

Effect:

Guide away carefully or human review if uncertainty remains.

Reason code:

```text
time_limit_appears_blocking
```

## Rule GA-008 - User Can Add Information

Trigger:

Any guide-away response is generated.

Effect:

Include an option for the user to add more information if something important is missing.

Reason code:

```text
additional_information_allowed
```

## User-Facing Language

Preferred language:

```text
Based on the information provided so far, we cannot currently see enough basis to continue this as a patient injury compensation case. If there is important information missing, you can add it here.
```

For out-of-scope matters:

```text
This does not currently look like a patient injury compensation matter. It may belong in another process or authority depending on what happened.
```

## What Not To Say

Do not say:

- you have no case
- you will not receive compensation
- this is legally impossible
- no one made a mistake
- the provider is not responsible

## Human Review Override

Do not guide away automatically when:

- serious harm is described
- the user appears vulnerable
- confidence is low
- facts conflict
- time limit is uncertain
- case type is unusual

Use human review instead.

## Test References

- TC-021 Guide Away Weak Case
- TC-022 No Specific Injury Guide-Away
- TC-041 Human Review Unclear Case
- TC-081 Out of Scope Flow

## References

- BRAIN-002-decision-principles-and-guardrails.md
- BRAIN-003-routing-model.md
- BRAIN-014-human-review-escalation-rules.md
