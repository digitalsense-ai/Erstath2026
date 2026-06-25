# POL-003 - Confidence Policy

Version: 1.0 Draft
Status: Draft
Owner: Product / AI Governance / Legal Review Required
Domain: Policy / Confidence
Related: POL-001 Acceptance Policy, POL-002 Routing Policy, DEC-003 Confirm Understanding, DEC-004 Smart Skip Decision, DEC-005 Routing Recommendation, DEC-006 Human Review, DEC-007 Information Quality, PAT-003 Confirm Before Classify, PAT-009 Human Review Bridge

## Purpose

This policy defines how the platform should interpret and act on confidence levels.

Confidence is used to decide whether the system may continue automatically, ask for clarification, require user confirmation, or route to human review.

This policy helps prevent AI-inferred information from being treated as confirmed truth.

---

## Core Principle

Confidence is not certainty.

A high-confidence AI inference is still not the same as a user-confirmed, document-supported or human-reviewed fact.

The platform must distinguish between:

```text
ai_inferred
user_confirmed
user_corrected
document_supported
human_reviewed
```

---

## Confidence Sources

Confidence can be attached to:

- extracted facts
- inferred facts
- missing information detection
- score calculations
- routing recommendations
- policy outcomes
- CRM handover summaries
- AI generated messages

Each confidence value should have a source and context.

---

## Confidence Bands

Recommended internal confidence bands:

```text
0.00 - 0.39 = low confidence
0.40 - 0.69 = medium confidence
0.70 - 0.84 = high confidence
0.85 - 1.00 = very high confidence
```

These bands are internal guidance only.

They must not be shown directly to users.

---

## Low Confidence

Low confidence means the platform should not make strong automatic routing decisions.

Typical actions:

```text
ask clarification
request confirmation
collect_more_information
human_review_required
```

Low confidence should normally prevent:

```text
guide_elsewhere_respectfully
identity_step_when_relevant
consent_step_when_relevant
prepare_documents_later as a hard requirement
```

---

## Medium Confidence

Medium confidence may support continued conversation or targeted follow-up.

Typical actions:

```text
confirm_naturally
ask one focused question
collect_more_information
continue only if risk is low
```

Medium confidence should not be enough for sensitive or high-impact routing unless supported by confirmed facts or human review.

---

## High Confidence

High confidence may support routing recommendations when information quality is sufficient and no review trigger exists.

Typical actions:

```text
continue
crm_assignment
prepare_documents_later when relevant
```

High confidence does not override policy or human review rules.

---

## Very High Confidence

Very high confidence may reduce unnecessary questions, but still does not replace policy.

Typical actions:

```text
skip_already_known
continue
route with explanation
```

If the decision is sensitive, very high confidence still may require human review.

---

## Confirmation Rules

Important inferred facts should be confirmed before they are used for routing.

Examples:

- relation to affected person
- timing or limitation-relevant dates
- severity of injury
- previous decision or complaint
- documentation status
- consent or authorization relevance

Related:

```text
DEC-003 Confirm Understanding
PAT-003 Confirm Before Classify
```

---

## Confidence and Smart Skip

Smart Skip may skip questions only when:

- the information is already known
- confidence is sufficient for the current decision
- the skipped question is not required by policy
- the fact is confirmed or low-risk enough to infer temporarily

If confidence is too low, Smart Skip should choose:

```text
confirm_naturally
ask_now
postpone_until_later
human_review
```

Related:

```text
DEC-004 Smart Skip Decision
PAT-006 Smart Skip
```

---

## Confidence and Routing

Routing must consider confidence before choosing an outcome.

General rules:

| Situation | Recommended Action |
|---|---|
| Low confidence + important missing information | collect_more_information |
| Low confidence + sensitive context | human_review_required |
| Medium confidence + low risk | ask clarification or continue carefully |
| High confidence + sufficient information | routing recommendation allowed |
| High confidence + policy review trigger | human_review_required |

---

## Confidence and Guide-Away

Guide-away should not happen on low confidence.

Before guide-away, check:

- are important facts confirmed?
- is information quality sufficient?
- is confidence adequate?
- are serious indicators absent or reviewed?
- has the user had a chance to correct misunderstandings?

If not, route to clarification or human review instead.

---

## Confidence and Human Review

Human review should be triggered when confidence is low and the decision could materially affect the user's path.

Examples:

```text
low confidence + possible serious harm
low confidence + unclear timing
low confidence + possible previous decision
low confidence + relation uncertainty
low confidence + guide-away candidate
```

Related:

```text
DEC-006 Human Review
POL-005 Human Review Policy
PAT-009 Human Review Bridge
```

---

## Data Requirements

Confidence should be stored with:

- fact records
- score records
- decision records
- AI run outputs
- CRM handover snapshots where relevant

Relevant data structures:

```text
lead_facts.confidence
lead_facts.confirmation_state
lead_scores.confidence
lead_decisions.confidence
lead_reviews.review_reason
ai_runs.output_validated
lead_handover_snapshots.decisions
```

---

## User-Facing Rules

Do not show numeric confidence values to users.

Do not write:

```text
AI confidence is 0.42
The system is uncertain
```

Prefer:

```text
Vi mangler lidt mere information, før vi kan vurdere næste skridt sikkert.
```

or:

```text
Der er nogle forhold, som bør gennemgås nærmere, før vi går videre.
```

---

## Audit Requirements

Confidence-related decisions must store:

```text
lead_id
decision_id
policy_id
confidence_value
confidence_band
input_snapshot
action_taken
review_triggered
user_facing_message
timestamp
```

---

## Test Requirements

Tests should verify that:

- low confidence does not allow guide-away
- low confidence can trigger human review
- medium confidence triggers confirmation or clarification when needed
- high confidence does not bypass policy
- Smart Skip does not skip required low-confidence facts
- user-facing messages do not expose numeric confidence
- confidence is stored in decision records

---

## Governance

This policy is a draft and requires AI governance and business review before production use.

Changes to confidence thresholds may affect:

- routing
- human review volume
- user experience
- CRM queues
- test requirements
- acceptance policy behavior

Threshold changes should be versioned and tested.
