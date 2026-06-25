# POL-005 - Human Review Policy

Version: 1.0 Draft
Status: Draft
Owner: Product / Operations / Legal Review Required
Domain: Policy / Human Review
Related: DEC-006 Human Review, DEC-005 Routing Recommendation, DEC-007 Information Quality, DEC-008 Acceptance Policy Decision, DEC-012 Guide Elsewhere, DEC-013 CRM Assignment, POL-001 Acceptance Policy, POL-002 Routing Policy, POL-003 Confidence Policy, PAT-009 Human Review Bridge

## Purpose

This policy defines when the platform must route a lead to human review before continuing, guiding elsewhere, requesting identity, requesting consent, or assigning a final internal route.

Human review is a safety and quality mechanism.

It prevents AI and rule-based logic from making high-impact decisions where uncertainty, sensitivity or policy risk is present.

---

## Core Principle

Human review is required when automatic routing would be unreliable, inappropriate or insufficiently explainable.

Human review is not a rejection.

It means:

```text
A person should review the available information before the platform takes the next significant step.
```

---

## Human Review Outcomes

Human review may result in:

```text
continue
collect_more_information
guide_elsewhere_respectfully
mark_qualified
hold_for_follow_up
close_administratively
```

These outcomes should be recorded with reason and reviewer notes.

---

## Mandatory Review Triggers

The platform should route to human review when any of the following apply:

- confidence is low and the decision could materially affect the user's path
- facts are contradictory
- important facts are unresolved
- serious harm indicators are present
- death is mentioned
- child or vulnerable person context is mentioned
- severe permanent injury may be involved
- relation or authorization is unclear
- previous decision, rejection or appeal is mentioned
- timing or limitation is unclear but potentially important
- guide-away is considered but confidence or information quality is not strong enough
- policy explicitly requires review

---

## Review Triggers From Confidence

Human review should normally be triggered when:

```text
low confidence + serious indicator
low confidence + possible guide-away
low confidence + unclear timing
low confidence + previous decision mentioned
low confidence + relation uncertainty
```

Related:

```text
POL-003 Confidence Policy
```

---

## Review Triggers From Acceptance

Human review should normally be triggered when:

- acceptance outcome is uncertain
- score is low but serious indicators exist
- the lead appears outside normal scope but may still be important
- business value is high but facts are unclear
- the platform cannot distinguish between non-fit and missing information

Related:

```text
POL-001 Acceptance Policy
```

---

## Review Triggers From Routing

Human review should normally override other routes when:

- route would otherwise be guide-away
- identity or consent would be requested while relation is unclear
- documents would be requested before basic relevance is clear
- multiple routes compete and policy priority is unclear

Related:

```text
POL-002 Routing Policy
```

---

## User-Facing Message

When routing to human review, the user should receive a calm explanation.

Do not write:

```text
The AI is unsure.
Your case is complicated.
You may be rejected.
```

Prefer:

```text
Der er nogle forhold i det, du har beskrevet, som bør gennemgås nærmere, før vi går videre.
```

or:

```text
Vi vil gerne sikre, at oplysningerne bliver vurderet korrekt. Derfor bør næste skridt være en nærmere gennemgang.
```

---

## CRM Requirements

CRM must show:

- review_required
- review_reason
- policy reference
- decision id
- confidence level
- confirmed facts
- inferred facts
- unresolved facts
- missing information
- routing recommendation before review
- user-facing message shown
- suggested reviewer action

Reviewer should be able to see why the case reached review without reconstructing the full conversation manually.

---

## Reviewer Actions

Recommended reviewer actions:

```text
continue
collect_more_information
guide_elsewhere_respectfully
mark_qualified
assign_to_caseworker
close_administratively
```

Every action should require a reason.

---

## Audit Requirements

Every human review event must store:

```text
lead_id
policy_id
decision_id
review_required
review_reason
assigned_to
review_outcome
review_notes
user_facing_message
timestamp
```

---

## Test Requirements

Tests should verify that:

- low confidence serious cases route to review
- guide-away is blocked when review is required
- unclear relation blocks premature identity or consent flow
- previous decision mentioned triggers review
- review reason is stored
- CRM receives review context
- user-facing review messages avoid raw AI uncertainty
- reviewer outcomes are auditable

---

## Governance

This policy is a draft and requires business/legal review before production use.

Changes to review rules may affect:

- review queue volume
- routing behavior
- user-facing communication
- CRM workload
- acceptance rules
- implementation backlog
- test coverage

Human review rules should be versioned and monitored after implementation.
