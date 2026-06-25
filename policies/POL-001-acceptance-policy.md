# POL-001 - Acceptance Policy

Version: 1.0 Draft
Status: Draft
Owner: Product / Business / Legal Review Required
Domain: Policy / Acceptance
Related: DEC-008 Acceptance Policy Decision, DEC-005 Routing Recommendation, DEC-006 Human Review, DEC-007 Information Quality, DEC-012 Guide Elsewhere, PAT-005 Explain Why, PAT-008 Respectful Guide-Away, AF-003 Implementation Readiness Checklist

## Purpose

This policy defines the business and trust rules for deciding whether a lead should continue in the ErstatningsHjaelp flow, require more information, require human review, or be guided elsewhere.

This policy does not make legal decisions.

It defines internal acceptance guidance for the platform.

---

## Core Principle

Acceptance must not be based on raw scores alone.

Acceptance must consider:

- confirmed facts
- inferred facts
- information quality
- confidence
- severity indicators
- timing and limitation uncertainty
- relation or authorization uncertainty
- documentation status
- business relevance
- human review triggers
- respectful user experience

---

## AI Role

AI may recommend an acceptance-related route.

AI must not present the recommendation as a final legal conclusion.

AI must not expose raw internal labels such as:

```text
accepted
rejected
low value
no case
not qualified
```

User-facing explanations must follow:

```text
PAT-005 Explain Why
PAT-008 Respectful Guide-Away
DOC-023 Tone of Voice Guide
```

---

## Acceptance Outcomes

The policy supports these internal outcomes:

```text
continue
collect_more_information
human_review_required
guide_elsewhere_respectfully
hold_for_crm_review
```

These outcomes are implemented through:

```text
DEC-008 Acceptance Policy Decision
DEC-005 Routing Recommendation
DEC-013 CRM Assignment
```

---

## Continue

Use when the available information suggests that the lead is relevant enough to continue to the next appropriate step.

Continue does not automatically mean:

```text
MitID
document upload
active case
external submission
```

It only means that the platform should proceed to the next responsible decision.

---

## Collect More Information

Use when the lead may be relevant, but the platform lacks information needed for responsible routing.

Typical examples:

- event timing is unclear
- discovery timing is unclear
- treatment place is missing
- consequence is unclear
- relation to affected person is unclear
- documentation status is unknown
- previous decision status is unclear

If missing information could change the route, the platform should collect more information before guiding away.

---

## Human Review Required

Use when the platform should not continue or guide away automatically.

Human review should be triggered when:

- confidence is low
- facts are contradictory
- serious harm is indicated
- death is mentioned
- child or vulnerable person context is mentioned
- permanent injury may be involved
- relation or authorization is unclear
- previous decision, rejection or appeal is mentioned
- timing or limitation is unclear but potentially important
- the case appears commercially or ethically significant but uncertain

Human review is a safety mechanism, not a rejection.

---

## Guide Elsewhere Respectfully

Use only when the information and policy indicate that the lead is unlikely to fit the service.

Before guide-away, the platform should check:

- is key information missing?
- is confidence too low?
- are there serious indicators?
- could human review be more appropriate?
- has the user had a chance to correct important misunderstandings?

If the answer is yes to any of these, guide-away should usually wait.

---

## Signals That May Support Continuation

Examples of positive signals:

- clear treatment-related event
- clear harm or consequence
- plausible connection between treatment and harm
- relevant timing information
- documentation exists or may exist
- user can explain what changed or went wrong
- previous decision or complaint may be relevant

These are signals, not guarantees.

---

## Signals That May Support Guide-Away

Examples of guide-away signals:

- no treatment-related issue described
- no concrete harm described
- clearly unrelated request
- user only seeks general medical advice
- user asks about something outside service scope
- information repeatedly remains insufficient after reasonable clarification
- policy-defined non-fit with adequate confidence

Even then, user-facing language must remain respectful.

---

## Non-Automatic-Rejection Rules

The platform should not automatically guide away when:

- death is mentioned
- child or vulnerable person context is mentioned
- severe permanent injury may be involved
- limitation period is unclear
- previous decision or appeal is mentioned
- relation or authorization is unclear
- confidence is low
- AI interpretation is uncertain
- key information is missing but obtainable

These cases should normally route to collect more information or human review.

---

## Score Use

Scores may support acceptance decisions.

But scores must be interpreted through this chain:

```text
Score
↓
Confidence
↓
Information quality
↓
Policy rules
↓
Decision
↓
Routing
↓
CRM assignment
```

A low score alone must not automatically produce user-facing rejection.

---

## User-Facing Communication

When continuing:

```text
Ud fra det du har fortalt, kan det være relevant at se nærmere på forløbet. Næste skridt er at afklare de oplysninger, der mangler, så vi kan vurdere det mere sikkert.
```

When collecting more information:

```text
Vi mangler nogle få oplysninger, før vi kan vurdere, hvad næste skridt bør være.
```

When routing to human review:

```text
Der er nogle forhold i det du har beskrevet, som bør gennemgås nærmere, før vi går videre.
```

When guiding elsewhere:

```text
Ud fra de oplysninger vi har nu, ser det ikke ud til, at dette er det rigtige næste skridt. Hvis der er vigtige oplysninger, vi ikke har fået med, kan du stadig tilføje dem.
```

These are examples and must be refined in Communication Policy.

---

## CRM Requirements

CRM must store:

- acceptance outcome
- reason
- confidence
- policy reference
- decision id
- missing information
- review trigger if relevant
- user-facing message shown
- suggested next action

---

## Audit Requirements

Every acceptance decision must be auditable.

Minimum audit data:

```text
lead_id
decision_id
policy_id
outcome
reason
confidence
input_snapshot
user_facing_message
timestamp
```

---

## Test Requirements

Tests should verify that:

- high-score leads do not bypass policy
- low-score leads are not automatically rejected when serious indicators exist
- missing critical information triggers collect_more_information
- low confidence triggers human review
- guide-away messages do not expose raw labels
- acceptance outcome is stored in lead_decisions
- CRM receives policy reference and reason

---

## Governance

This policy is a draft and requires business/legal review before production use.

Changes to this policy may affect:

- routing
- scoring interpretation
- CRM queues
- user-facing communication
- audit requirements
- implementation backlog

Major changes should be versioned.
