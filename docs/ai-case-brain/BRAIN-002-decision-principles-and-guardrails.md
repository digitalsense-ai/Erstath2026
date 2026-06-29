# BRAIN-002 - Decision Principles and Guardrails

Version: 1.0
Status: Draft
Scope: AI Case Brain v1.0

## Purpose

This document defines the decision principles and guardrails that all AI Case Brain modules must follow.

The purpose is to make the system helpful, explainable and safe while keeping final decisions with humans.

## Principle 1 - Screening Is Not Final Decision-Making

The system may say:

- the case appears relevant
- the case may need more information
- the case should be reviewed by a human
- the case does not currently appear strong enough to proceed

The system must not say:

- the user will receive compensation
- the case is legally won
- a medical error is proven
- a public authority will agree

## Principle 2 - One Best Next Step

At each point, the brain should recommend one primary next step.

Examples:

- ask one question
- request one document group
- route to human review
- guide away politely
- continue to onboarding later

Avoid returning several competing next steps unless the API contract explicitly allows secondary options.

## Principle 3 - Facts Are Not Confirmed By Default

AI-extracted facts must start as:

```text
unconfirmed
```

A fact may only become confirmed when:

- the user confirms it
- a document supports it
- a staff member confirms it
- a trusted integration provides it

## Principle 4 - Reason Codes Are Required

Every important recommendation must include reason codes.

Examples:

```text
possible_diagnosis_delay
serious_consequence_indicated
event_date_missing
provider_missing
potential_time_limit_issue
human_review_due_to_uncertainty
```

Reason codes allow:

- debugging
- audit
- human review
- QA testing
- future model improvement

## Principle 5 - Uncertainty Must Be Visible

The brain should expose uncertainty instead of hiding it.

Use confidence values and human review flags.

Examples:

```json
{
  "confidence": 0.48,
  "human_review_required": true,
  "reason_codes": ["low_confidence", "causation_unclear"]
}
```

## Principle 6 - Time Limit Risk Comes Early

If the event date or discovery date is missing, the brain should prioritise time-limit clarification.

If the case appears clearly outside relevant time limits, the system should not continue collecting unnecessary information before guide-away or human review logic has been considered.

## Principle 7 - Do Not Over-Question

The brain should avoid long form-like questioning.

Rules:

- ask one question at a time
- avoid repeated questions
- reuse already provided answers
- stop after the configured question limit
- route to review if progress is low

## Principle 8 - Serious Cases Should Be Handled Carefully

Cases involving death, severe permanent injury, children, vulnerable users, or very high value should be handled with extra care.

The brain may increase human review priority even if scores are not complete.

## Principle 9 - Guide Away Respectfully

Weak or out-of-scope cases must be handled respectfully.

The system should not say:

```text
You have no case.
```

Prefer:

```text
Based on the information provided so far, we cannot currently see enough basis to continue with this case. You can still add more information if something important is missing.
```

## Principle 10 - Commercial Value Is Internal

Commercial value may support internal prioritisation.

It should not be exposed directly to the user in a way that feels transactional or insensitive.

## Principle 11 - Human Review Overrides AI

Human review can override AI recommendations.

When this happens, store:

- original AI recommendation
- human outcome
- reviewer note
- reason code
- timestamp

## Principle 12 - No Hidden State Changes

Important changes must be auditable.

Examples:

- lead status changed
- recommendation changed
- human review outcome stored
- case routed forward
- case guided away

## Guardrail Checklist

Before a recommendation is stored, check:

- Is output valid JSON?
- Does it match the relevant contract?
- Are reason codes present?
- Are AI facts unconfirmed by default?
- Is confidence present?
- Is human review required when uncertainty is high?
- Is the user-facing wording careful?

## References

- policies/POL-005-human-review-policy.md
- policies/POL-008-ai-usage-policy.md
- docs/contracts/CONTRACT-005-decision-output-contract.md
- docs/prompts/PROMPT-005-decision-support-prompt.md
