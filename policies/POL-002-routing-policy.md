# POL-002 - Routing Policy

Version: 1.0 Draft
Status: Draft
Owner: Product / Operations / Legal Review Required
Domain: Policy / Routing
Related: POL-001 Acceptance Policy, DEC-005 Routing Recommendation, DEC-006 Human Review, DEC-007 Information Quality, DEC-008 Acceptance Policy Decision, DEC-009 Identity Gate, DEC-010 Consent Gate, DEC-011 Document Readiness, DEC-012 Guide Elsewhere, DEC-013 CRM Assignment

## Purpose

This policy defines how the platform should translate screening results, acceptance outcomes, confidence, missing information and review triggers into a responsible next route.

Routing is the operational bridge between decision logic and user or CRM action.

---

## Core Principle

Routing must be explainable, auditable and user-respectful.

Routing must not be based on a raw score threshold alone.

Routing must consider:

- acceptance outcome
- information quality
- confidence level
- severity or sensitivity indicators
- missing information
- human review triggers
- identity or consent requirements
- document readiness
- CRM queue needs

---

## Routing Outcomes

Canonical routing outcomes:

```text
continue
collect_more_information
human_review_required
prepare_documents_later
identity_step_when_relevant
consent_step_when_relevant
guide_elsewhere_respectfully
crm_assignment
hold_for_internal_follow_up
```

These outcomes must be stored through `lead_decisions` and surfaced in CRM through CRM handover.

---

## Routing Sequence

Routing should follow this order:

```text
Information quality check
↓
Acceptance policy decision
↓
Confidence policy check
↓
Human review policy check
↓
Routing recommendation
↓
Gate check: identity / consent / documents
↓
CRM assignment
↓
User-facing explanation
```

---

## Continue

Route to `continue` when:

- information quality is sufficient for the next step
- acceptance policy supports continuation
- confidence is acceptable
- no mandatory human review trigger exists

`continue` does not automatically mean identity verification, document collection or active case creation.

It only means the platform may proceed to the next responsible step.

---

## Collect More Information

Route to `collect_more_information` when:

- the lead may be relevant
- key information is missing
- the missing information could change routing
- confidence is limited because of missing facts
- the user can reasonably provide clarification

The system should ask one focused question at a time and follow Smart Skip.

Related:

```text
DEC-004 Smart Skip Decision
DEC-007 Information Quality
PAT-006 Smart Skip
```

---

## Human Review Required

Route to `human_review_required` when automated routing would be unreliable, risky or inappropriate.

Triggers include:

- low confidence
- contradictory facts
- serious harm indicators
- sensitive context
- possible death or severe injury
- unclear timing with possible limitation issue
- unclear relation or authority
- previous decision or complaint mentioned
- policy-required review

Human review must include a review reason.

Related:

```text
DEC-006 Human Review
POL-005 Human Review Policy
```

---

## Prepare Documents Later

Route to `prepare_documents_later` when documents may be needed, but forcing document collection now would be premature.

This is not the same as active document upload.

MVP 0.1 may track document readiness but should not require full document processing unless separately implemented.

Related:

```text
DEC-011 Document Readiness
POL-006 Document Collection Policy
```

---

## Identity Step When Relevant

Route to `identity_step_when_relevant` only when identity verification is necessary for a clear next process step.

Identity must not be used as the default next step after screening.

Related:

```text
DEC-009 Identity Gate
POL-004 Identity and Consent Policy
```

---

## Consent Step When Relevant

Route to `consent_step_when_relevant` only when consent or authorization is necessary for the next process step.

Consent must have a specific purpose and user-facing explanation.

Related:

```text
DEC-010 Consent Gate
POL-004 Identity and Consent Policy
```

---

## Guide Elsewhere Respectfully

Route to `guide_elsewhere_respectfully` only when:

- acceptance policy supports guide-away
- information quality is sufficient enough for this route
- confidence is adequate
- no mandatory human review trigger exists
- the user has had reasonable chance to correct or add key information

Do not expose labels like:

```text
rejected
not qualified
low score
bad case
```

Related:

```text
DEC-012 Guide Elsewhere
PAT-008 Respectful Guide-Away
POL-007 Communication Policy
```

---

## CRM Assignment

Every route should produce CRM assignment data.

CRM must receive:

- routing outcome
- routing reason
- policy reference
- decision id
- confidence
- missing information
- human review reason if relevant
- suggested next action
- user-facing message shown

Related:

```text
DEC-013 CRM Assignment
docs/05-crm-workflow.md
docs/12-data-dictionary.md
```

---

## Routing Priority Rules

When multiple routes are possible, use this priority order:

1. human_review_required if policy or confidence requires review
2. collect_more_information if missing facts could change the route
3. guide_elsewhere_respectfully if policy supports non-continuation with adequate confidence
4. continue if continuation is responsible
5. prepare_documents_later / identity / consent only when relevant gate requires it
6. crm_assignment for internal operational placement

---

## User-Facing Explanation

Every route should have a user-facing explanation unless it is purely internal.

Explanations should be:

- short
- calm
- non-technical
- non-final unless human-reviewed and approved
- clear about the next step

Do not show raw routing labels.

---

## Audit Requirements

Every routing decision must store:

```text
lead_id
policy_id
decision_id
routing_outcome
routing_reason
confidence
input_snapshot
policy_refs
user_facing_message
timestamp
```

---

## Test Requirements

Tests should verify that:

- missing critical facts route to collect_more_information
- low confidence routes to human_review_required
- serious indicators can override guide-away
- identity is not default after screening
- document absence does not automatically stop routing
- guide-away requires adequate confidence
- CRM receives routing reason and next action
- user-facing messages do not expose internal labels

---

## Governance

Routing policy is a draft and requires business/legal review before production use.

Major changes to routing policy may affect:

- conversation flow
- scoring interpretation
- CRM queues
- identity and consent timing
- document collection timing
- test requirements
- implementation backlog
