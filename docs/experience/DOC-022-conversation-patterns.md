# DOC-022 - Conversation Patterns

Version: 1.0 Draft
Status: Draft
Owner: Product / Experience Architecture
Domain: Experience
Related: DOC-020 Experience Architecture, DOC-021 Digital First Conversation Flow, ADR-000 Enterprise Architecture Principles

## Purpose

This document defines the core conversation patterns used in Erstatningshjaelp.

The purpose is to make the user-facing conversation consistent, respectful and efficient while still producing structured information for screening, routing and CRM handover.

## Pattern Philosophy

The conversation should feel human to the user and structured to the system.

The user should not experience the data model, internal scores, raw AI tags or business routing logic.

## Pattern 1 - Free Text First

The user should be invited to describe the situation in their own words before being asked many structured questions.

Use when:

- starting a new screening flow
- collecting the initial case story
- the system does not yet know the user's situation

Avoid when:

- a specific missing fact is needed
- the user has already provided a detailed description

## Pattern 2 - Empathy Reflection

After the user describes the situation, the system should reflect what it understood in calm and plain language.

The reflection should:

- acknowledge the situation
- summarize the main facts
- avoid legal conclusions
- avoid raw labels
- invite correction

Example structure:

1. Thank the user for sharing
2. Reflect the situation in one or two sentences
3. Ask whether the understanding is correct
4. Offer correction or additional input

## Pattern 3 - Confirm Before Classify

Important inferred facts should be confirmed before they are used for routing.

Use when the system has inferred:

- who the case concerns
- treatment type
- injury or consequence
- timing
- previous decision
- relation to affected person
- severe outcome

## Pattern 4 - Smart Skip

The system should skip questions that have already been answered with sufficient confidence.

The system may ask for missing precision, but should not repeat the full question.

Example:

If the user wrote that the case concerns their mother, do not ask who the case concerns. Instead, confirm naturally if needed.

## Pattern 5 - One Question at a Time

The system should ask one focused question at a time.

This reduces cognitive load and helps users who may be emotionally affected or uncertain.

Avoid compound questions such as asking for date, treatment type and consequence in the same screen.

## Pattern 6 - Explain Why

When asking for sensitive information, documents, identity, consent or authorization, the system should explain why the information is needed.

The explanation should be short and practical.

## Pattern 7 - Allow Uncertainty

The system should allow users to answer that they do not know when uncertainty is realistic.

The system should not force precision too early.

## Pattern 8 - Correct and Continue

When the user corrects the system's understanding, the system should update its internal state and continue from the corrected version.

The system should not defend the previous interpretation.

## Pattern 9 - Respectful Guide-Away

When the platform cannot continue, the system should avoid harsh rejection language.

The system should:

- thank the user
- explain that based on the current information the platform may not be able to continue
- allow the user to add missing information
- provide a clear next step where possible

Do not use user-facing phrases such as:

- rejected
- low score
- not qualified
- no case

## Pattern 10 - Human Review Bridge

When confidence is low or the situation is sensitive, the system should route to human review instead of forcing a user-facing conclusion.

User-facing copy should explain that the information needs to be reviewed.

## Pattern 11 - CRM Summary Handover

Every completed conversation stage should produce a structured internal handover.

The handover should include:

- original user input
- system reflection
- confirmation status
- confirmed facts
- unresolved facts
- skipped questions
- missing information
- routing recommendation
- reason for next action

## Pattern 12 - No Raw Internal Labels

Raw labels, tags, scores and internal routing names should not be shown to users in the first conversation flow.

Use natural language explanations instead.

## Conversation Pattern Rules

A conversation pattern is acceptable when it:

- reduces user confusion
- supports structured internal data
- avoids false promises
- respects emotional context
- avoids repetition
- allows correction
- supports audit and CRM handover

## Related Future Pattern Files

The following individual pattern files are planned:

- PAT-001 Speak Human, Store Structured
- PAT-002 Understanding Before Questioning
- PAT-003 Confirm Before Classify
- PAT-004 Never Ask Twice
- PAT-005 Explain Why
- PAT-006 Smart Skip
- PAT-007 One Thought Per Screen
- PAT-008 Respectful Guide-Away
- PAT-009 Human Review Bridge

## Governance

Any new user-facing conversation behavior should be checked against these patterns before implementation.
