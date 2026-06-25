# 31 - Acceptance and Routing Architecture v2.0

Status: Updated for Enterprise Architecture Baseline
Domain: Decision / Trust / Policy
Related: DEC-005 Routing Recommendation, DEC-006 Human Review, DEC-007 Information Quality, DEC-008 Acceptance Policy Decision, DEC-009 Identity Gate, DEC-010 Consent Gate, DEC-011 Document Readiness, DEC-012 Guide Elsewhere, DEC-013 CRM Assignment, PAT-005 Explain Why, PAT-008 Respectful Guide-Away, PAT-009 Human Review Bridge

## Purpose

This document defines the high-level acceptance and routing architecture for ErstatningsHjaelp.

It explains how the platform should move from first conversation and screening into a responsible next step.

This document is now an architectural bridge between:

- Experience Pack
- Scoring Engine
- Decision Pack
- future Policy Pack
- CRM Workflow

Detailed decision behavior is defined in the Decision Pack. Future business rules will be formalized in Policy Pack.

---

## Core Principle

Routing must not be a raw score threshold.

Routing must combine:

- confirmed facts
- inferred facts
- confidence
- information quality
- scores
- severity indicators
- policy rules
- human review triggers
- user experience and trust principles

The correct model is:

```text
Digital first conversation
↓
Structured understanding
↓
Scores and confidence
↓
Information quality decision
↓
Acceptance policy decision
↓
Routing recommendation
↓
Human review when needed
↓
Identity / consent / document gates only when relevant
↓
CRM assignment
```

---

## MitID Is Not the Default Next Step

MitID should not be treated as the default continuation after screening.

The old model is superseded:

```text
Screening -> MitID
```

The current model is:

```text
Screening -> Decision Gate -> Responsible Routing -> Identity only when relevant
```

Identity verification is governed by:

```text
DEC-009 Identity Gate
PAT-005 Explain Why
```

---

## Decision Gate

The Decision Gate is not one decision.

It is a sequence of decisions:

```text
DEC-007 Information Quality
DEC-008 Acceptance Policy Decision
DEC-005 Routing Recommendation
DEC-006 Human Review
DEC-009 Identity Gate
DEC-010 Consent Gate
DEC-011 Document Readiness
DEC-013 CRM Assignment
```

The Decision Gate must be explainable and auditable.

---

## Routing Outcomes

The architecture supports these high-level routing outcomes:

```text
continue
collect_more_information
human_review_required
prepare_documents_later
identity_step_when_relevant
consent_step_when_relevant
guide_elsewhere_respectfully
crm_assignment
```

Older terms such as `GO`, `GO_AFTER_DOCUMENTS`, `NEEDS_REVIEW`, `COLLECT_MORE_INFORMATION` and `GUIDE_ELSEWHERE` may remain useful as conceptual labels, but implementation should use the Decision Pack naming and map them explicitly.

---

## Continue

Use when information is sufficient and policy supports continuation.

Continuation does not automatically mean MitID, document upload or active case.

It means:

```text
The lead may proceed to the next appropriate step.
```

The next step is selected by the relevant gate decision.

---

## Collect More Information

Use when the case may be relevant, but the platform lacks information needed for the next decision.

Examples:

- unclear timing
- unclear consequence
- unclear relation
- missing treatment context
- documentation status unknown

Governed by:

```text
DEC-007 Information Quality
DEC-004 Smart Skip Decision
```

---

## Human Review Required

Use when automatic routing would be irresponsible or unclear.

Triggers may include:

- low confidence
- sensitive context
- serious indicators
- contradictory information
- unclear timing
- unclear relation or authorization
- prior decision mentioned
- policy-required review

Governed by:

```text
DEC-006 Human Review
PAT-009 Human Review Bridge
```

Human review is not rejection.

It is a safety mechanism.

---

## Prepare Documents Later

Use when documents may be relevant, but the process should not force upload too early.

Document readiness is governed by:

```text
DEC-011 Document Readiness
```

Lack of documents must not automatically stop a promising or unclear case.

---

## Identity Step When Relevant

Use only when identity verification is needed for a clear next process step.

Identity must not be used as a generic continuation step.

Governed by:

```text
DEC-009 Identity Gate
PAT-005 Explain Why
```

---

## Consent Step When Relevant

Use only when consent or authorization is required for the next process step.

Consent must have a clear purpose.

Governed by:

```text
DEC-010 Consent Gate
```

---

## Guide Elsewhere Respectfully

Use when the current information and policy support non-continuation.

Do not use harsh language.

Do not show raw labels such as:

```text
rejected
low score
not qualified
no case
```

Governed by:

```text
DEC-012 Guide Elsewhere
PAT-008 Respectful Guide-Away
DOC-023 Tone of Voice Guide
```

If missing information could change the route, the user should be allowed to add information.

---

## Acceptance Policy

The system needs an explicit policy layer.

This document is not the full policy.

The future Policy Pack should define:

```text
POL-001 Acceptance Policy
POL-002 Routing Policy
POL-003 Confidence Policy
POL-004 Identity and Consent Policy
POL-005 Human Review Policy
POL-006 Document Collection Policy
POL-007 Communication Policy
POL-008 AI Usage Policy
```

Acceptance policy must be documented before implementation logic is finalized.

---

## Policy Override Rules

Potential override rules include:

```text
serious indicators -> consider human review
low confidence -> do not final-route automatically
unclear timing -> collect more information or review
unclear relation -> clarify or review before identity/consent
prior decision mentioned -> review before guide-away
missing documents -> do not automatically stop the flow
```

These rules must be formalized in Policy Pack before implementation.

---

## CRM Impact

CRM must receive structured routing handover.

Minimum CRM data:

- routing outcome
- routing reason
- score snapshot
- confidence
- information quality outcome
- policy rules triggered
- missing information
- human review reason
- identity gate outcome
- consent gate outcome
- document readiness state
- user-facing message shown

Governed by:

```text
DEC-013 CRM Assignment
docs/05-crm-workflow.md
docs/12-data-dictionary.md
```

---

## Audit Impact

Every important routing decision should be auditable.

Minimum audit data:

```text
lead_id
decision_id
decision_version
routing_outcome
scores_snapshot
confidence
policy_refs
missing_information
confirmed_facts
inferred_facts
user_facing_message
decision_timestamp
```

---

## Responsible Acceptance Metrics

The business goal should not be maximum intake.

A better metric is:

```text
Responsible Acceptance Rate
```

This means:

- accept the right cases
- avoid accepting clearly unsuitable cases
- avoid routing serious or uncertain cases away too early
- treat all users respectfully
- leave users with more clarity than before

Additional metrics:

- false guide-away rate
- human review precision
- missing information resolution rate
- repeated question rate
- CRM handover completeness
- identity gate timing accuracy

---

## Testing Requirements

Tests should cover:

- high information quality can continue to routing
- missing critical information routes to collect more information
- low confidence routes to human review
- serious or sensitive indicators can trigger review
- unclear relation prevents premature identity/consent flow
- document absence does not automatically stop the flow
- guide-away language is respectful
- raw internal labels are not user-facing
- CRM stores routing reasons
- audit log records decision data

---

## Future Learning

When enough historical data exists, routing can be improved using:

- human review outcomes
- accepted and non-accepted lead outcomes
- false positive and false negative analysis
- similar case matching
- document readiness outcomes

However, early MVP routing must remain rule-based, explainable and auditable.

Historical learning requires future AI governance and likely an ADR.

---

## Product Conclusion

Acceptance and routing is not a single score threshold.

It is a trust-critical decision architecture.

The platform must understand, assess, explain and route responsibly.

The current model is:

```text
Understand
↓
Structure facts
↓
Score and assess confidence
↓
Apply policy
↓
Route responsibly
↓
Explain next step
↓
Handover to CRM
```

This protects both user trust and business quality.
