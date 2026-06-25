# DEC-001 - Start Conversation

Version: 1.0 Draft
Status: Draft
Owner: Product / Decision Architecture
Domain: Decision / Experience
Related: DEC-000 Decision Catalog, DOC-020 Experience Architecture, DOC-021 Digital First Conversation Flow

## Purpose

This decision card defines how Erstatningshjaelp starts the first user conversation.

The goal is to begin with a simple and respectful first step instead of a long form.

## Decision Question

How should the platform begin the first user interaction?

## Inputs

- User state
- Conversation state
- Existing submitted information
- Entry point

## Decision Rules

### Rule 1 - Start with free text

If the user has not yet described the situation, the platform should start with a free-text description step.

### Rule 2 - Continue existing state

If the user has already started a flow, the platform should continue from the last meaningful step.

### Rule 3 - Avoid long first forms

The first step should not be a long structured form unless a specific operational flow requires it.

### Rule 4 - Allow uncertainty

The first step should allow incomplete and uncertain descriptions.

## Possible Outcomes

- show free-text prompt
- continue existing conversation
- ask one clarification question
- show current status

## User-Facing Impact

The first step should feel simple, calm and easy to answer.

The user should understand that all details are not required immediately.

## Internal Impact

The system should record:

- entry point
- original user description
- conversation state
- timestamp

## Audit Requirements

Log:

- decision id
- selected start mode
- reason
- state used for the decision

## Related Patterns

- PAT-001 Speak Human, Store Structured
- PAT-002 Understanding Before Questioning
- PAT-007 One Thought Per Screen

## Test Requirements

Test that:

- new flows start with free text
- existing flows continue from state
- first step is not a long form
- unclear input can trigger one gentle clarification
