# DOC-021 - Digital First Conversation Flow

Version: 1.0 Draft
Status: Draft
Owner: Product / Experience Architecture
Domain: Experience
Related: DOC-000 Product Constitution, DOC-020 Experience Architecture, ADR-000 Enterprise Architecture Principles

## Purpose

This document defines the official digital first conversation flow for Erstatningshjaelp.

The goal is to replace long forms with a guided, respectful and structured first conversation that helps the user explain their situation in their own words before the platform asks follow-up questions.

## Core Principle

The first step is not data collection.

The first step is understanding.

The system should first let the user describe what happened, then reflect what it understood, and only then ask targeted follow-up questions.

## Flow Overview

The digital first conversation follows this sequence:

1. Free text story
2. Internal interpretation
3. Empathy reflection
4. User confirmation
5. Smart skip
6. Guided screening
7. Information quality check
8. Routing readiness check
9. User-facing next step
10. CRM handover

## Step 1 - Free Text Story

The first screen invites the user to describe the situation in their own words.

The user should not be forced to know legal terms, case categories or exact documentation requirements.

Example user-facing intent:

"Describe in your own words what happened. You do not need to know all details yet."

The system should accept incomplete, emotional, uncertain and non-structured input.

## Step 2 - Internal Interpretation

After the free text input, the system may internally identify:

- who the case concerns
- what happened
- when it happened
- when the issue was discovered
- possible consequence or harm
- treatment context
- severity indicators
- documentation references
- previous case or decision references
- uncertainty
- missing information

This interpretation is internal and should not be shown as raw tags to the user.

## Step 3 - Empathy Reflection

The system responds with a short, human reflection of what it understood.

The reflection should:

- acknowledge the user's situation
- summarize the core facts in plain language
- avoid legal conclusions
- avoid raw technical labels
- avoid harsh or insensitive wording
- ask the user to confirm or correct the understanding

## Step 4 - User Confirmation

The user should be able to choose one of three simple options:

- Yes, that is correct
- No, I want to correct it
- I want to add something

Important classifications should not be used for routing before they are confirmed or have sufficient confidence.

## Step 5 - Smart Skip

The system checks which information is already known or sufficiently confirmed.

It should not ask questions that the user has already answered.

Examples:

- If the user already stated who the case concerns, do not ask who it concerns again.
- If the user already stated a serious outcome, do not re-ask bluntly.
- If a date is partially known, ask only for the missing precision.

## Step 6 - Guided Screening

The system asks one relevant question at a time.

Guided screening should prioritize:

- deadline relevance
- relation to the affected person
- treatment context
- consequence or harm
- causal link
- documentation
- previous case or decision
- readiness for next step

The user should be allowed to answer "I do not know" where uncertainty is realistic.

## Step 7 - Information Quality Check

The system evaluates whether there is enough information to continue.

Possible outcomes:

- enough information for routing
- more information needed
- documents needed later
- human review needed

The user should not see raw information quality scores in the first flow.

## Step 8 - Routing Readiness Check

Before suggesting a next step, the system should check:

- whether core facts are confirmed
- whether confidence is sufficient
- whether severity requires human review
- whether business policy allows continuation
- whether identity or consent is relevant now
- whether the user should be guided elsewhere respectfully

## Step 9 - User-Facing Next Step

The system explains the next step in clear and respectful language.

Possible user-facing outcomes include:

- continue to next step
- add more information
- wait for review
- prepare documents
- verify identity when relevant
- receive respectful guidance if the platform cannot continue

The system should never use raw labels such as reject, low score or not qualified in user-facing copy.

## Step 10 - CRM Handover

The internal CRM handover should include:

- original description
- empathy reflection
- confirmation state
- confirmed facts
- inferred facts
- missing information
- confidence levels
- screening answers
- routing recommendation
- routing explanation
- suggested next action
- audit trail

## Conversation State Model

The conversation should maintain state for:

- original free text
- extracted facts
- confirmed facts
- unresolved facts
- missing questions
- skipped questions
- confidence levels
- user corrections
- routing readiness
- CRM handover summary

## Do Not Do

The first conversation should not:

- start with a long form
- expose raw AI tags to the user
- show raw scores
- promise an outcome
- ask repeated questions
- use harsh rejection language
- force the user to know legal terms
- request identity before there is a clear reason

## Acceptance Criteria

The digital first conversation is acceptable when:

- the user can start with free text
- the system reflects understanding before asking many questions
- the user can correct the understanding
- repeated questions are avoided
- sensitive situations are handled respectfully
- the next step is explained clearly
- CRM receives structured handover data

## Related Future Artifacts

- DOC-022 Conversation Patterns
- DOC-023 Tone of Voice Guide
- PAT-001 Speak Human, Store Structured
- PAT-002 Understanding Before Questioning
- PAT-003 Confirm Before Classify
- PAT-004 Never Ask Twice
- PAT-005 Explain Why
- PAT-006 Smart Skip
