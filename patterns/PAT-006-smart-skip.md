# PAT-006 - Smart Skip

Version: 1.0 Draft
Status: Draft
Owner: Product / Experience Architecture
Domain: Experience / Decision
Related: DOC-020 Experience Architecture, DOC-021 Digital First Conversation Flow, DOC-022 Conversation Patterns, PAT-001 Speak Human Store Structured, PAT-003 Confirm Before Classify, PAT-004 Never Ask Twice, PAT-005 Explain Why, ADR-000 Enterprise Architecture Principles

## Purpose

This pattern defines how Erstatningshjaelp should decide which questions to ask, skip, confirm or postpone during the guided screening flow.

The goal is to make the conversation feel intelligent, respectful and efficient without losing the information needed for routing, review and CRM handover.

## Principle

Ask only what matters now.

Skip what is already known.

Confirm what is uncertain.

Postpone what is not needed yet.

## Difference Between Never Ask Twice and Smart Skip

PAT-004 Never Ask Twice prevents repeated questions.

PAT-006 Smart Skip decides whether a question should be asked at all in the current context.

Smart Skip considers:

- already known facts
- confidence level
- routing relevance
- emotional context
- policy requirements
- timing of the user journey
- whether a question is necessary now or later

## Use This Pattern When

Use this pattern when the system is selecting the next question or next step in a guided screening flow.

Examples:

- choosing the next follow-up question
- deciding whether a date question is needed now
- deciding whether document questions should be postponed
- deciding whether relation questions can be skipped
- deciding whether a sensitive question should be asked by a human instead

## Question Actions

For each potential question, the system should choose one of the following actions:

1. Ask now
2. Confirm naturally
3. Skip because already known
4. Skip because not relevant
5. Postpone until later
6. Route to human review

## Smart Skip Logic

Before asking a question, evaluate:

1. Is the answer already confirmed?
2. Is the answer inferred with high confidence?
3. Is the answer required for current routing?
4. Is the answer required later but not now?
5. Is the question sensitive or emotionally difficult?
6. Does policy require explicit confirmation?
7. Would asking now reduce trust or create unnecessary friction?

## Examples

### Example 1 - Known Relation

If the user has clearly stated that the case concerns their mother, the system should not ask who the case concerns.

Possible action: confirm naturally if needed.

### Example 2 - Documents Not Needed Yet

If the user is still in the first conversation, the system should not immediately request all documents unless document readiness is required for the next step.

Possible action: postpone.

### Example 3 - Sensitive Outcome

If the user has described a serious outcome, the system should not ask bluntly for severity again.

Possible action: acknowledge and ask only missing details when necessary.

### Example 4 - Low Confidence Timing

If the user wrote "a few years ago", the system may need more timing precision.

Possible action: ask a narrow follow-up question.

## User-Facing Behavior

The user should not see the skip logic.

The conversation should simply feel shorter, more relevant and more attentive.

## Internal Behavior

The system should store:

- candidate questions
- selected question action
- reason for skip or ask
- confidence level
- source of known facts
- postponed questions
- questions routed to human review

## Acceptance Criteria

This pattern is correctly implemented when:

- the system asks fewer irrelevant questions
- already known facts are reused
- uncertain facts are confirmed naturally
- sensitive questions are handled carefully
- skipped questions are logged internally
- postponed questions can be asked later when relevant
- CRM handover shows missing and skipped information clearly

## CRM Impact

CRM should be able to show:

- which questions were asked
- which were skipped
- which were postponed
- why key questions were not asked
- what information is still missing

## AI Impact

AI may assist in selecting the next best question.

AI should not skip policy-required questions unless the information is already confirmed or the policy allows skipping.

AI should provide uncertainty markers when suggesting a skip.

## Decision Impact

Decision logic should distinguish between:

- missing information
- skipped because known
- skipped because not relevant
- postponed
- requires human review

This distinction is important for routing and audit.

## Do Not Do

Do not:

- skip required information without reason
- skip because the system wants to finish faster
- hide uncertainty by skipping questions
- ask all questions just because they exist in the form
- expose internal skip logic to the user

## Governance

Any guided screening implementation should use Smart Skip logic or explicitly document why it does not.

Question lists should be reviewed regularly to remove unnecessary or poorly timed questions.
