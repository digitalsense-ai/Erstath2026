# POL-006 - Document Collection Policy

Version: 1.0 Draft
Status: Draft
Owner: Product / Operations / Security / Legal Review Required
Domain: Policy / Documents
Related: DEC-011 Document Readiness, DEC-005 Routing Recommendation, DEC-006 Human Review, DEC-007 Information Quality, POL-001 Acceptance Policy, POL-002 Routing Policy, POL-004 Identity and Consent Policy, PAT-005 Explain Why, DOC-023 Tone of Voice Guide

## Purpose

This policy defines when the platform may ask about, request or collect documents.

The goal is to avoid forcing document upload too early while still allowing the platform and CRM to track document readiness.

Document collection must be purposeful, proportionate and explainable.

---

## Core Principle

Documents are supporting material, not the default next step after screening.

The platform must not treat the flow as:

```text
screening -> documents
```

The correct model is:

```text
screening
↓
information quality decision
↓
routing decision
↓
document readiness when relevant
↓
document collection only when needed
```

---

## Document Readiness vs Document Collection

The platform must distinguish between:

```text
document_readiness
document_collection
document_analysis
```

### Document readiness

The platform records whether documents may exist, may be relevant or may be needed later.

### Document collection

The platform asks the user to provide documents.

### Document analysis

The platform processes documents for summaries, timelines or missing information.

MVP 0.1 should normally support readiness tracking before full collection or analysis.

---

## When To Ask About Documents

The platform may ask whether documents exist when:

- documentation status is relevant to information quality
- the user has already described a potentially relevant case
- document availability could influence the next route
- the question is phrased lightly and does not block the conversation

Example:

```text
Har du allerede nogle dokumenter fra forløbet, fx journal, afgørelse eller breve? Det er helt okay, hvis du ikke har dem lige nu.
```

---

## When To Request Documents

The platform may request documents only when:

- there is a clear purpose
- the user has reached a route where documents are actually useful
- document collection is proportionate
- identity and consent requirements have been considered
- storage and access rules are defined
- the user understands what is requested and why

Document requests should not be used only to increase commitment or filter users.

---

## When Document Collection Should Wait

Document collection should usually wait when:

- basic relevance is unclear
- the platform lacks essential facts
- confidence is low
- human review is required first
- identity or consent requirements are unresolved
- relation to affected person is unclear
- secure storage is not implemented
- the document purpose is not yet clear

---

## Document Types

Common document categories:

```text
medical_record
patient_compensation_decision
complaint_decision
hospital_letter
municipality_letter
receipts
pay_slips
power_of_attorney
other
unknown
```

Document type labels must be internal and user-friendly labels should be handled by Communication Policy.

---

## Document Readiness States

Recommended readiness states:

```text
not_discussed
mentioned_by_user
may_exist
available_now
not_available_now
needed_later
not_needed_now
requested
received
reviewed
```

MVP 0.1 can use a simpler subset if implementation requires it.

---

## User-Facing Rules

Do not write:

```text
Upload documents to continue.
```

unless documents are truly required for that step.

Prefer:

```text
Dokumenter kan hjælpe med at afklare forløbet senere. Du behøver ikke have dem klar lige nu, men det er nyttigt at vide, om de findes.
```

When requesting documents, explain:

- which documents are needed
- why they are useful
- whether they are required now or later
- how they will be handled
- whether the user can continue without them

---

## Security and Privacy Requirements

Documents may contain sensitive personal data.

Before active upload is implemented, the project must define:

- secure storage architecture
- access controls
- retention rules
- deletion rules
- audit logging
- file type restrictions
- malware scanning approach
- no public-folder storage

Active upload must not be implemented without security review.

---

## CRM Requirements

CRM should show:

- document readiness state
- document types mentioned
- documents requested
- documents received
- documents missing
- why documents are needed
- whether documents block the next step
- document-related review reason if relevant

CRM should distinguish between:

```text
not needed now
needed later
blocking
received
```

---

## Audit Requirements

Document-related decisions must store:

```text
lead_id
policy_id
decision_id
document_readiness_state
document_types
reason
user_facing_message
timestamp
```

If upload is implemented later, audit must also store:

```text
document_id
uploaded_by
uploaded_at
access_events
delete_events
review_events
```

---

## Test Requirements

Tests should verify that:

- document collection is not default after screening
- document readiness can be tracked without upload
- missing documents do not automatically guide away
- human review can override document request
- identity/consent uncertainty blocks premature document collection
- user-facing messages explain why documents are relevant
- document readiness is visible in CRM
- document decisions are auditable

---

## Governance

This policy is a draft and requires security, privacy and legal review before production use.

Changes to document collection rules may affect:

- conversation flow
- CRM fields
- storage architecture
- security controls
- consent policy
- implementation backlog
- test requirements

Full document upload and AI document analysis should be treated as separate future implementation phases.
