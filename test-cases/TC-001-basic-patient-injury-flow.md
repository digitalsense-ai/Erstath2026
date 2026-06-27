# TC-001 - Basic Patient Injury Flow

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the MVP can handle a basic patient injury scenario from intake to CRM handover.

## Scenario

A patient describes a treatment course where an operation was followed by an infection and additional treatment.

All details are fictional.

## Initial User Description

```text
I had surgery at a hospital. After the operation I got an infection and had to be treated again. I am not sure if this can give compensation.
```

## Expected Conversation Behavior

The system should:

- acknowledge the situation in plain language
- ask when the treatment happened
- ask what treatment was performed
- ask what harm or extra treatment followed
- ask whether there is documentation
- avoid giving a final legal conclusion

## Expected Facts

The system should identify possible facts such as:

```text
treatment_type: surgery
possible_harm: infection
additional_treatment: yes
treatment_place: hospital
documentation_available: unknown
```

Facts should remain unconfirmed until the user accepts the system understanding.

## Expected Missing Information

Likely missing information:

```text
treatment_date
hospital_or_department
infection_date
additional_treatment_details
documentation_status
```

## Expected Screening Behavior

Screening should be possible after enough information is collected.

AI suggestions should not become confirmed facts automatically.

## Expected Decision Behavior

Expected next step:

```text
continue_intake or ready_for_crm
```

depending on information completeness.

## Expected CRM or Review Behavior

If enough information is available, a handover snapshot should be prepared for CRM.

Human review is not automatically required unless confidence is low or information is inconsistent.

## Acceptance Notes

This test passes if the flow stores conversation messages, extracts unconfirmed facts, tracks missing information and produces a safe next step without overclaiming.
