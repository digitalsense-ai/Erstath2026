# POL-008 - AI Usage Policy

Version: 1.0 Draft
Status: Draft
Owner: Product / AI Governance / Security / Legal Review Required
Domain: Policy / AI Usage
Related: ADR-000 Enterprise Architecture Principles, DOC-001 Architecture Overview, DOC-020 Experience Architecture, DOC-021 Digital First Conversation Flow, docs/03-scoring-engine.md, docs/04-conversation-engine.md, docs/12-data-dictionary.md, POL-001 Acceptance Policy, POL-002 Routing Policy, POL-003 Confidence Policy, POL-005 Human Review Policy, POL-007 Communication Policy

## Purpose

This policy defines how AI may be used in ErstatningsHjaelp.

The purpose is to make AI useful, explainable and auditable without allowing it to make final legal, medical or business-critical decisions alone.

AI should help users explain their situation and help internal users understand leads faster.

AI must not become an uncontrolled decision-maker.

---

## Core Principle

AI assists.

The platform decides through documented architecture, decisions and policies.

Humans review where uncertainty, sensitivity or policy requires it.

The platform must maintain a clear separation between:

```text
AI interpretation
structured facts
scores
policy decisions
routing recommendations
human review
CRM actions
```

---

## Permitted AI Uses

AI may be used for:

- understanding free-text user descriptions
- extracting possible facts
- identifying missing information
- generating empathy reflections
- suggesting follow-up questions
- helping with Smart Skip decisions
- summarizing conversations for CRM
- producing internal risk notes
- suggesting routing inputs
- supporting score explanations
- drafting user-facing messages that follow policy

All AI outputs that affect routing, CRM or user-facing communication must be validated by system rules, policies or human review where relevant.

---

## Prohibited AI Uses

AI must not independently:

- make final legal conclusions
- tell a user they definitely have or do not have a case
- decide compensation entitlement
- override human review triggers
- request identity without Identity Gate logic
- request consent without Consent Gate logic
- force document upload without Document Collection Policy
- expose raw internal scores or labels to users
- provide medical advice
- claim another authority will accept a case
- make production policy decisions without audit

---

## AI and User-Facing Communication

AI-generated user-facing text must follow:

```text
POL-007 Communication Policy
DOC-023 Tone of Voice Guide
PAT-001 Speak Human Store Structured
PAT-005 Explain Why
PAT-008 Respectful Guide-Away
```

AI must not show users:

```text
raw confidence
raw score values
internal routing labels
internal rejection codes
prompt or system details
```

---

## AI and Facts

AI-extracted facts must be stored with reliability metadata.

A fact inferred by AI must not be treated as confirmed until confirmed by the user, document or human review.

Relevant states:

```text
ai_inferred
confirmation_pending
user_confirmed
user_corrected
document_supported
human_reviewed
unresolved
```

Related:

```text
docs/12-data-dictionary.md
POL-003 Confidence Policy
PAT-003 Confirm Before Classify
```

---

## AI and Scoring

AI may contribute to scoring inputs or explanations.

Scores must remain decision inputs, not final decisions.

Scoring must follow:

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

Related:

```text
docs/03-scoring-engine.md
POL-001 Acceptance Policy
POL-002 Routing Policy
```

---

## AI and Human Review

AI must route to human review when policies require it.

AI must not bypass human review because a generated explanation sounds confident.

Human review triggers are defined in:

```text
POL-005 Human Review Policy
DEC-006 Human Review
```

---

## AI Output Validation

AI outputs used by the system should be validated before use.

Validation may include:

- expected JSON schema
- required fields present
- allowed enum values only
- no prohibited user-facing wording
- confidence fields included where required
- no unsupported legal or medical conclusions
- decision references included where required

Invalid AI output should not be shown directly to users.

---

## Prompt Governance

Prompts must not override architecture, decisions or policies.

Prompt files should reference relevant:

```text
DOC
ADR
PAT
DEC
POL
```

Prompts should be versioned.

Prompt changes that affect routing, guide-away, identity, consent, document requests or user-facing legal-sensitive language should be reviewed.

---

## Data Minimization

AI inputs should be minimized.

Do not send unnecessary sensitive data to AI providers.

Where possible:

- send only relevant context
- avoid full raw history when a structured summary is enough
- avoid including documents unless document analysis is explicitly in scope
- store input hashes when useful for audit
- log only what is necessary for debugging and governance

---

## AI Run Logging

AI runs should be logged when they affect:

- conversation state
- extracted facts
- scores
- decisions
- routing
- CRM handover
- user-facing messages

Minimum logging fields:

```text
lead_id
provider
model
prompt_name
prompt_version
input_hash
output_json
output_validated
validation_errors
tokens_input
tokens_output
success
error_message
created_at
```

Related:

```text
docs/12-data-dictionary.md
```

---

## CRM Requirements

CRM should clearly distinguish between:

```text
AI-generated summary
confirmed facts
inferred facts
human-reviewed facts
policy decisions
reviewer notes
```

AI-generated content should not be confused with human review outcome.

---

## Audit Requirements

AI-assisted decisions must be auditable.

Audit should include:

```text
lead_id
ai_run_id if available
prompt_version
model
output_validated
decision_id if relevant
policy_id if relevant
user_facing_message if shown
timestamp
```

---

## Test Requirements

Tests should verify that:

- AI output is validated before use
- invalid AI output is not shown to users
- AI cannot bypass policy rules
- AI cannot expose internal labels to users
- AI-inferred facts are not treated as confirmed
- low confidence routes are handled according to policy
- human review triggers override AI recommendations
- AI run logging captures required fields
- prompts do not conflict with policy requirements

---

## Governance

This policy is a draft and requires AI governance, security, privacy and legal review before production use.

Changes to AI usage policy may affect:

- prompts
- AI providers
- data processing
- audit logs
- routing behavior
- CRM summaries
- user-facing communication
- implementation backlog
- test coverage

Any production AI use must be traceable to this policy and the relevant decision and communication policies.
