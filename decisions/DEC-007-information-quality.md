# DEC-007 - Information Quality

Version: 1.0 Draft
Status: Draft
Owner: Product / Decision Architecture
Domain: Decision / AI / Operations
Related: DEC-000 Decision Catalog, DEC-005 Routing Recommendation, DEC-006 Human Review, PAT-003 Confirm Before Classify, PAT-006 Smart Skip

## Purpose

This decision card defines how Erstatningshjaelp decides whether the available information is sufficient for the next step.

The goal is to avoid routing too early when key information is missing, while also avoiding unnecessary questions when enough information already exists.

## Decision Question

Is the current information good enough to support the next decision or action?

## Inputs

- Original user description
- Confirmed facts
- Inferred facts
- Missing information
- Confidence levels
- User corrections
- Screening answers
- Document signals
- Prior case or decision signals
- Current routing candidate

## Decision Rules

### Rule 1 - Confirmed facts count more than inferred facts

User-confirmed, document-supported or human-reviewed facts should carry more weight than AI-inferred facts.

### Rule 2 - Missing critical facts reduce quality

If critical facts are missing, the system should collect more information or route to review instead of making a strong recommendation.

### Rule 3 - Enough information depends on the next step

The system does not need all information immediately. It only needs enough information for the current next step.

### Rule 4 - Low information quality should not be shown as a score to the user

The user should see a clear explanation or follow-up question, not a raw score.

## Possible Outcomes

- sufficient for routing
- collect more information
- ask one follow-up question
- prepare for document step later
- route to human review
- stop automatic flow until review

## User-Facing Impact

The user should receive one clear next question or next step.

The user should not see raw quality scores or internal field names.

## Internal Impact

The system should store:

- quality assessment
- missing fields
- critical gaps
- confidence level
- recommended next question
- recommended next action

## Audit Requirements

Log:

- decision id
- information quality outcome
- missing critical facts
- confidence
- next action selected
- state snapshot

## Related Patterns

- PAT-003 Confirm Before Classify
- PAT-004 Never Ask Twice
- PAT-006 Smart Skip
- PAT-009 Human Review Bridge

## Test Requirements

Test that:

- missing critical facts trigger more information or review
- high-confidence confirmed facts support routing
- raw information scores are not shown to the user
- the system can continue when information is sufficient for the current step
- CRM can see what information is missing
