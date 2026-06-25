# PAT-007 - One Thought Per Screen

Version: 1.0 Draft
Status: Draft
Owner: Product / Experience Architecture
Domain: Experience
Related: DOC-020 Experience Architecture, DOC-021 Digital First Conversation Flow, DOC-022 Conversation Patterns, DOC-023 Tone of Voice Guide, PAT-001 Speak Human Store Structured, PAT-005 Explain Why, PAT-006 Smart Skip, ADR-000 Enterprise Architecture Principles

## Purpose

This pattern defines how Erstatningshjaelp should structure user-facing screens and conversation steps so the user only needs to focus on one clear task or idea at a time.

The goal is to reduce cognitive load, increase completion quality and make the experience feel calm and manageable.

## Principle

One screen should contain one main thought.

One question should ask for one main piece of information.

One step should have one clear purpose.

## Use This Pattern When

Use this pattern whenever the platform presents:

- a screening question
- an empathy reflection
- a confirmation step
- a document request
- an identity or consent explanation
- a routing explanation
- a guide-away message
- a CRM-facing summary step that is later shown to the user

## User-Facing Behavior

Each screen should make it clear:

- what the user should do now
- why it matters if explanation is needed
- what the available answer options are
- how the user can continue

The user should not have to process multiple unrelated concepts in the same step.

## Good Screen Structure

A good screen usually contains:

1. A short context sentence if needed
2. One focused question or instruction
3. Simple answer options
4. Optional free-text fallback where relevant

## Bad Screen Structure

Avoid combining several tasks in one screen, such as:

- asking for date, treatment type and documents at the same time
- explaining identity, consent and document upload in one long block
- showing routing explanation and asking for multiple corrections at once
- presenting raw summary, scores and next action in the same user-facing screen

## Examples

### Good Example

Question:

"Do you know approximately when this happened?"

Options:

- Within the last year
- 1-3 years ago
- More than 3 years ago
- I do not know

### Bad Example

"When did it happen, what treatment was involved, do you have documents, and have you complained before?"

This creates too much cognitive load.

## Relationship to Smart Skip

Smart Skip decides whether a question should be asked.

One Thought Per Screen defines how the selected question should be presented.

Together, the patterns ensure that the user sees fewer and clearer steps.

## Relationship to Explain Why

If a question requires explanation, keep the explanation short and connected to the current question.

Do not add broad process explanations unless they are needed for the current step.

## Internal Behavior

The system should model each screen or step with:

- step_id
- purpose
- primary question or message
- answer options
- optional explanation
- expected data output
- next-step logic

## Acceptance Criteria

This pattern is correctly implemented when:

- each user-facing step has one main purpose
- questions are not bundled unnecessarily
- explanations are short and relevant
- answer options are easy to understand
- long forms are avoided in the first conversation
- the user can move forward without understanding internal system logic

## CRM Impact

CRM handover may show grouped information, but user-facing collection should remain step-by-step.

The CRM should be able to see which step produced each answer where relevant.

## AI Impact

AI-generated questions or summaries should be constrained to one main thought per user-facing screen.

AI should not generate long multi-question prompts unless the flow explicitly allows it.

## Do Not Do

Do not:

- overload one screen with many questions
- combine sensitive steps without explanation
- show scores and user guidance together in the first flow
- require users to understand internal categories before answering
- use long text blocks when a short explanation is enough

## Governance

Any new user-facing flow should be reviewed for cognitive load and screen focus.

If a screen contains more than one main action, it should usually be split into multiple steps.
