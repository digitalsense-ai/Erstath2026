# POL-004 - Identity and Consent Policy

Version: 1.0 Draft
Status: Draft
Owner: Product / Security / Legal Review Required
Domain: Policy / Identity / Consent
Related: DEC-009 Identity Gate, DEC-010 Consent Gate, DEC-005 Routing Recommendation, DEC-006 Human Review, POL-001 Acceptance Policy, POL-002 Routing Policy, POL-003 Confidence Policy, PAT-005 Explain Why, DOC-023 Tone of Voice Guide

## Purpose

This policy defines when the platform may ask for identity verification, consent or authorization.

The goal is to prevent identity and consent steps from becoming default friction in the user journey.

Identity and consent must only appear when there is a clear purpose, a responsible next step and an understandable user-facing explanation.

---

## Core Principle

Identity and consent are not default continuation steps.

The platform must not treat the flow as:

```text
screening -> MitID -> consent -> documents
```

The correct model is:

```text
screening
↓
routing decision
↓
identity or consent only when relevant
```

---

## Identity Gate

Identity verification may be requested only when:

- the platform has a clear next step that requires identity
- the user has received an explanation of why identity is needed
- the information quality is sufficient for that step
- no unresolved human review trigger blocks the flow
- the identity step is proportionate to the current purpose

Identity verification must not be used only to increase conversion or create commitment.

Related:

```text
DEC-009 Identity Gate
```

---

## Consent Gate

Consent or authorization may be requested only when:

- there is a clear purpose
- the user can understand what is being consented to
- the scope is limited to the relevant next step
- the consent text version is stored
- withdrawal or change handling is considered

Consent must not be bundled with unrelated permissions.

Related:

```text
DEC-010 Consent Gate
```

---

## When Identity Should Wait

Identity should usually wait when:

- the platform is still collecting basic information
- the case may need human review first
- relation to the affected person is unclear
- confidence is low
- acceptance or routing is uncertain
- the next step does not require identity
- the user is only clarifying whether the service is relevant

---

## When Consent Should Wait

Consent should usually wait when:

- the purpose is not yet clear
- the user has not reached a step requiring permission
- identity or relation is unclear
- the platform is still in exploratory intake
- the user has not been told what consent enables

---

## Relation and Authorization

If the user is not the affected person, the platform must handle relation and authorization carefully.

Relevant relation states:

```text
self
parent_or_guardian
spouse_or_partner
child_of_patient
relative
representative
unknown
```

If relation is unclear, the platform should clarify or route to human review before requesting consent or identity.

---

## User-Facing Explanation

Identity and consent steps must be explained in simple language.

Do not write:

```text
Log in with MitID to continue.
```

Prefer:

```text
For at kunne gå videre med dette trin skal vi først bekræfte din identitet. Det gør vi for at sikre, at oplysningerne behandles korrekt og kun bruges til det formål, vi forklarer her.
```

Consent explanation should include:

- what the user is consenting to
- why it is needed
- what happens next
- whether the consent can be withdrawn or changed

---

## Data Requirements

Identity and consent state should be stored in structured fields.

Minimum data:

```text
identity_gate_outcome
identity_required_reason
identity_status
consent_gate_outcome
consent_type
consent_purpose
consent_text_version
consent_status
accepted_at
withdrawn_at
relation_to_affected_person
authorization_status
```

---

## CRM Requirements

CRM should show identity and consent status only when relevant.

CRM should include:

- identity required yes/no
- reason identity is required
- consent required yes/no
- consent purpose
- relation status
- authorization status
- unresolved blockers
- next suggested action

---

## Audit Requirements

Identity and consent decisions must be auditable.

Minimum audit data:

```text
lead_id
decision_id
policy_id
identity_gate_outcome
consent_gate_outcome
reason
user_facing_message
consent_text_version if applicable
timestamp
```

---

## Test Requirements

Tests should verify that:

- identity is not requested immediately after screening by default
- identity requires a clear purpose
- consent requires a clear purpose and text version
- low confidence blocks premature identity/consent flow
- unclear relation triggers clarification or review
- user-facing messages explain why identity or consent is needed
- identity and consent decisions are stored in lead_decisions
- CRM receives gate outcomes and reasons

---

## Governance

This policy is a draft and requires security, privacy and legal review before production use.

Changes to this policy may affect:

- user journey
- routing
- CRM fields
- consent records
- identity integrations
- security requirements
- implementation backlog

MitID or other identity integrations must not be implemented until this policy is accepted and mapped into backlog issues.
