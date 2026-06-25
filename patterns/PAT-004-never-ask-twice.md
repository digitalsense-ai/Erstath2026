# PAT-004 - Never Ask Twice

Version: 1.0 Draft
Status: Draft
Owner: Product / Experience Architecture
Domain: Experience / Decision
Related: DOC-020 Experience Architecture, DOC-021 Digital First Conversation Flow, DOC-022 Conversation Patterns, PAT-001 Speak Human Store Structured, PAT-002 Understanding Before Questioning, PAT-003 Confirm Before Classify, ADR-000 Enterprise Architecture Principles

## Purpose

This pattern defines how Erstatningshjaelp should avoid asking users for information they have already provided or confirmed.

The purpose is to reduce friction, avoid frustration, improve trust and make the first conversation feel intelligent and respectful.

## Principle

Never ask twice when the system already has enough information.

If the system is uncertain, confirm naturally instead of repeating the full question.

## Use This Pattern When

Use this pattern whenever the system is about to ask a screening question and the same information may already exist in:

- original free text
- extracted facts
- confirmed facts
- user corrections
- previous answers
- uploaded documents
- CRM records
- human review notes

## Core Rule

Before asking a question, the system should check whether the answer is already known with sufficient confidence.

If known, skip the question.

If partly known, ask only for the missing precision.

If uncertain, confirm the understanding in plain language.

## Examples

### Example 1 - Relation Already Known

User says:

"This is about my mother."

Do not ask:

"Who does the case concern?"

Instead, if needed, ask:

"I understand that this concerns your mother. Is that correct?"

### Example 2 - Date Partly Known

User says:

"It happened last year."

Do not ask:

"When did it happen?"

Instead, ask:

"Do you remember approximately which month it happened?"

### Example 3 - Consequence Already Known

User describes a serious consequence.

Do not ask bluntly:

"Was there an injury?"

Instead, acknowledge and ask only for missing details if needed.

## Internal Requirements

The system should maintain a conversation state that includes:

- facts already provided
- facts confirmed by the user
- facts inferred by AI
- confidence level per fact
- source of each fact
- questions already asked
- questions skipped
- reason for skipping

## Question Decision Logic

Before asking a question, the system should evaluate:

1. Is the fact already confirmed?
2. Is the fact already inferred with high confidence?
3. Is the fact partially known?
4. Is the fact required now?
5. Can the question be skipped?
6. Should the system confirm instead of ask?

## User-Facing Behavior

The user should experience the conversation as attentive and adaptive.

The system should not say:

"We already know this."

Instead, it should simply continue or confirm naturally.

## Acceptance Criteria

This pattern is correctly implemented when:

- previously provided information is reused
- repeated questions are avoided
- partial information results in precise follow-up questions
- skipped questions are tracked internally
- the CRM handover shows which information was already known
- user corrections update the conversation state

## CRM Impact

CRM should store:

- asked questions
- skipped questions
- confirmed facts
- inferred facts
- missing facts
- user corrections

This helps internal users understand why the conversation took a specific path.

## AI Impact

AI may assist by identifying whether a question has already been answered.

AI should also provide confidence levels and mark uncertainty.

AI should not skip required questions if confidence is too low or policy requires explicit confirmation.

## Decision Impact

Decision logic should distinguish between:

- skipped because confirmed
- skipped because high confidence
- skipped because not relevant
- still missing
- requires human review

## Do Not Do

Do not:

- ask the same question repeatedly
- ignore confirmed user corrections
- expose skip logic to the user as technical language
- assume low-confidence facts are confirmed
- skip mandatory policy questions without sufficient confidence

## Governance

Any screening flow that asks repeated questions should be reviewed against this pattern.

Any implementation of guided screening should include a conversation state model that supports this pattern.
