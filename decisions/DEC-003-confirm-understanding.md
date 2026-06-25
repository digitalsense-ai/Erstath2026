# DEC-003 - Confirm Understanding

Version: 1.0 Draft
Status: Draft
Owner: Product / Decision Architecture
Domain: Decision / Experience
Related: DEC-000 Decision Catalog, DEC-002 Empathy Reflection, DOC-020 Experience Architecture, DOC-021 Digital First Conversation Flow, PAT-003 Confirm Before Classify, PAT-004 Never Ask Twice

## Purpose

This decision card defines when the platform should ask the user to confirm, correct or add to the system's understanding before continuing.

The goal is to avoid using misunderstood information for screening, routing or CRM handover.

## Decision Question

Should the system ask the user to confirm the current understanding before continuing?

## Inputs

- Original user description
- System reflection
- Inferred facts
- Confidence levels
- Sensitive context indicators
- Missing information
- Previous user corrections
- Current conversation state

## Decision Rules

### Rule 1 - Confirm important inferred facts

If the system has inferred important facts, the user should be asked to confirm or correct them before the facts are used for important routing.

### Rule 2 - Skip confirmation for low-impact facts

If a fact is low impact and not used for routing or eligibility logic, confirmation may be postponed.

### Rule 3 - Require confirmation when confidence is low

If confidence is low and the fact affects the next step, the system should confirm before continuing.

### Rule 4 - Use plain language

The confirmation must be written in simple user-facing language and must not expose raw tags, scores or internal labels.

## Possible Outcomes

- ask for confirmation
- accept current understanding
- ask one correction question
- continue to guided screening
- route to human review if uncertainty is too high

## User-Facing Impact

The user should be able to choose:

- yes, that is correct
- no, I want to correct it
- I want to add something

## Internal Impact

The system should store:

- confirmation state
- confirmed facts
- corrected facts
- unresolved facts
- source of each fact
- confidence level

## Audit Requirements

Log:

- decision id
- facts requiring confirmation
- confidence levels
- selected outcome
- user response

## Related Patterns

- PAT-001 Speak Human, Store Structured
- PAT-002 Understanding Before Questioning
- PAT-003 Confirm Before Classify
- PAT-004 Never Ask Twice

## Test Requirements

Test that:

- important inferred facts are confirmable
- user corrections update state
- raw internal labels are not shown
- high-confidence confirmed facts are not repeatedly confirmed
- low-confidence routing facts require confirmation or review
