# DOMAIN-010 - Glossary

Version: 1.0
Status: Active Draft
Scope: Shared glossary for domain, AI, UX and staff language

## Purpose

This document defines a shared glossary for ErstatningsHjaelp.

The glossary helps keep domain language consistent across AI Case Brain, Rulebook, prompts, UX, CRM, tests and staff workflows.

## Important Limitation

Glossary terms are for internal consistency and user-friendly explanation.

They do not create legal conclusions or final definitions.

## Glossary Terms

## AI Case Brain

The structured rule and decision intelligence layer that evaluates intake information and returns structured outputs such as missing information, next question, routing, confidence and reason codes.

## Approximate Date

A date that is not exact but still useful for screening.

Examples:

```text
2021
last summer
around three years ago
before Christmas
```

## Case Domain

The broad area a user message belongs to.

Examples:

```text
patient_injury
patient_complaint
general_medical_question
out_of_scope
unclear
```

## Case Type

The likely pattern within a patient injury matter.

Examples:

```text
diagnosis_delay
surgical_error
medication_injury
infection
lack_of_follow_up
birth_injury
```

## Causation Signal

A screening signal that describes whether the user has explained a possible connection between healthcare handling and the consequence.

It does not prove causation.

## Clinical Event

A healthcare-related event such as consultation, examination, test, surgery, medication, discharge or follow-up.

## Complaint Without Injury

A matter where the user is dissatisfied with service, communication, waiting time or behavior, but no concrete health consequence is described.

## Confidence

An internal measure of how safe it is to rely on an automated recommendation.

Confidence is not a truth score and must not override guardrails or human review triggers.

## Consequence

The impact the user says followed from the healthcare event.

Examples:

```text
pain
loss of function
worsened disease
loss of work capacity
death
additional treatment
```

## Discovery Date

The date when the user became aware, or may have become aware, that an injury could be connected to healthcare handling.

## Document Signal

A signal that relevant documents may exist.

Examples:

```text
medical record
scan result
previous decision
referral
operation report
```

Document signal does not mean the document has been reviewed.

## Event Date

The date when the relevant event happened, or approximately happened.

## Fact

A structured piece of information extracted from user input or documents.

Facts created by AI should be unconfirmed by default.

## Guide-Away

A careful route used when the current information does not support continuing in the main compensation screening flow.

Guide-away must be non-final and allow important missing information to be added.

## Healthcare Context

A context involving a healthcare provider, treatment, examination, medication, diagnosis, follow-up or similar.

## Human Review

Manual staff review of a lead or AI-supported recommendation.

Human review is required when uncertainty, seriousness, procedural issues or guardrails require staff attention.

## Information Quality

A measure of whether the system has enough useful information to continue screening, ask another question, request documents or route to review.

## Injury

A health-related harm, worsening, symptom, function loss or other consequence described by the user.

Injury is a screening term unless confirmed later.

## Intake

The first user-facing flow where the user describes what happened and the system asks one question at a time.

## Missing Information

Important information that is not yet known.

Examples:

```text
event date
provider
consequence
treatment link
document status
```

## Next Question

The one best question selected by AI Case Brain to collect the most important missing information.

## Patient Complaint

A complaint about healthcare experience, communication, waiting time or treatment process.

May or may not include a compensation-relevant injury.

## Patient Injury

A possible injury or worsening connected to healthcare handling.

This is a screening category, not a final conclusion.

## Previous Decision

A prior decision, rejection, appeal decision or similar document or outcome.

Previous decisions often require staff review.

## Reason Code

A structured internal code explaining why a rule, route, question or review flag was triggered.

Reason codes are staff-facing and should not be shown raw to customers.

## Review Priority

Internal priority for staff review.

Allowed values:

```text
low
medium
high
urgent
```

Review priority is not customer-facing.

## Route

The next system direction after evaluation.

Allowed routing targets:

```text
continue_conversation
request_documents
human_review
onboarding_later
guide_away
```

## Rulebook

The expanded long-term rule library for AI Case Brain.

The Rulebook describes explicit rule groups, reason codes and implementation mapping.

## Screening

Initial structured assessment of whether the case may be relevant, what is missing and what next step should happen.

Screening is not a final decision.

## Smart Question

A question selected because it is the most useful missing item at that point in the conversation.

## Staff Override

A manual staff change to an AI-supported recommendation or route.

Staff override must be logged.

## Treatment Link

The user-described possible connection between healthcare handling and the consequence.

This is a signal, not proof.

## Unconfirmed Fact

A fact extracted by AI or provided by the user that has not been verified by documents or staff.

## Unknown

A controlled value used when the system cannot safely classify or determine a field.

Unknown is better than guessing.

## User-Safe Summary

A plain-language summary that can be shown to the user without exposing internal scoring, commercial value or raw reason codes.

## References

- DOMAIN-000-index.md
- DOMAIN-001-patient-compensation-overview.md
- docs/ai-case-brain/BRAIN-018-brain-output-model.md
- docs/rulebook/RULEBOOK-002-rule-id-and-versioning-standard.md
- docs/ux/UX-009-microcopy-and-tone-of-voice.md
