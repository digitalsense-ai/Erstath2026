# DEC-002 - Empathy Reflection

Version: 1.0 Draft
Status: Draft
Owner: Product / Decision Architecture
Domain: Decision / Experience
Related: DEC-000 Decision Catalog, DOC-020 Experience Architecture, DOC-021 Digital First Conversation Flow, DOC-022 Conversation Patterns, DOC-023 Tone of Voice Guide, PAT-001 Speak Human Store Structured, PAT-002 Understanding Before Questioning

## Purpose

This decision card defines when and how the platform should generate an empathy reflection after the user has described the situation.

The goal is to show understanding before moving into follow-up questions.

## Decision Question

Should the system reflect its understanding back to the user before continuing?

## Inputs

- Original user description
- Extracted facts
- Inferred facts
- Missing information
- Confidence levels
- Sensitive context indicators
- Conversation state

## Decision Rules

### Rule 1 - Reflect after meaningful free text

If the user has provided a meaningful description, the system should create a short reflection before asking multiple follow-up questions.

### Rule 2 - Ask clarification if input is too short

If the description is too short to reflect meaningfully, ask one gentle clarification question.

### Rule 3 - Do not expose internal labels

The reflection must not show raw tags, scores, routing labels or internal categories.

### Rule 4 - Use sensitive tone when needed

If the input suggests a sensitive or serious situation, the reflection should be calm, careful and respectful.

## Possible Outcomes

- show empathy reflection
- ask one clarification question
- continue existing flow
- route to human review if the content is too sensitive or unclear for automation

## User-Facing Impact

The user should feel that the platform has read and understood the description.

The user should be able to confirm, correct or add information.

## Internal Impact

The system should store:

- reflection text
- facts used in the reflection
- confidence level
- confirmation status
- user correction if provided

## Audit Requirements

Log:

- decision id
- reflection generated
- source facts
- confidence
- selected outcome

## Related Patterns

- PAT-001 Speak Human, Store Structured
- PAT-002 Understanding Before Questioning
- PAT-003 Confirm Before Classify
- PAT-007 One Thought Per Screen

## Test Requirements

Test that:

- meaningful descriptions receive a reflection
- short unclear descriptions receive one clarification question
- raw internal labels are not shown
- sensitive context results in respectful wording
- user correction updates the internal state
