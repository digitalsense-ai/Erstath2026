# DEC-004 - Smart Skip Decision

Version: 1.0 Draft
Status: Draft
Owner: Product / Decision Architecture
Domain: Decision / Experience
Related: DEC-000 Decision Catalog, DOC-021 Digital First Conversation Flow, PAT-004 Never Ask Twice, PAT-006 Smart Skip

## Purpose

This decision card defines how the platform decides whether a question should be asked, skipped, confirmed, postponed or routed to review.

The goal is to make guided screening shorter, more relevant and more respectful.

## Decision Question

Should the platform ask this question now?

## Inputs

- Current conversation state
- Confirmed facts
- Inferred facts
- Missing facts
- Confidence levels
- Previous answers
- Question priority
- Policy requirements
- Sensitive context indicators

## Decision Rules

### Rule 1 - Skip confirmed facts

If the answer is already confirmed, do not ask again.

### Rule 2 - Confirm high-impact inferred facts

If a fact is inferred and affects routing, confirm it before using it for important decisions.

### Rule 3 - Ask only what matters now

Questions that are not needed for the current step should be postponed.

### Rule 4 - Escalate sensitive uncertainty

If the question concerns a sensitive or complex area and confidence is low, route to human review instead of forcing an automated flow.

## Possible Outcomes

- ask now
- confirm naturally
- skip because already known
- skip because not relevant
- postpone until later
- route to human review

## User-Facing Impact

The user should experience fewer repeated or irrelevant questions.

The user should not see internal skip logic.

## Internal Impact

The system should store:

- selected question action
- reason for action
- skipped questions
- postponed questions
- confidence levels
- required follow-up

## Audit Requirements

Log:

- decision id
- candidate question
- selected action
- reason
- confidence
- state snapshot

## Related Patterns

- PAT-004 Never Ask Twice
- PAT-006 Smart Skip
- PAT-007 One Thought Per Screen

## Test Requirements

Test that:

- confirmed facts are not asked again
- partially known facts trigger narrow follow-up
- irrelevant questions are skipped
- required policy questions are not skipped without reason
- skipped and postponed questions are visible internally
