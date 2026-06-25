# DEC-005 - Routing Recommendation

Version: 1.0 Draft
Status: Draft
Owner: Product / Decision Architecture
Domain: Decision
Related: DEC-000 Decision Catalog, DEC-004 Smart Skip Decision, PAT-005 Explain Why, PAT-008 Respectful Guide-Away, PAT-009 Human Review Bridge

## Purpose

This decision card defines how the platform creates a routing recommendation after the first conversation and guided screening.

The routing recommendation helps decide the next operational step without exposing raw internal labels to the user.

## Decision Question

What is the most appropriate next route based on the current information?

## Inputs

- Confirmed facts
- Inferred facts
- Missing information
- Information quality
- Confidence levels
- Severity indicators
- Prior decision or case status
- Documentation signals
- Business policy rules
- Human review triggers

## Decision Rules

### Rule 1 - Use confirmed facts first

Confirmed facts should carry more weight than inferred facts.

### Rule 2 - Use confidence levels

Low-confidence routing should not lead to a final automated outcome.

### Rule 3 - Respect review triggers

If the case is sensitive, unclear or policy requires review, route to human review.

### Rule 4 - Do not expose raw routing labels

Internal routing outcomes must be translated into respectful user-facing language.

### Rule 5 - Missing information may route to collection

If key information is missing, the next route may be to collect more information instead of continuing or guiding away.

## Possible Outcomes

- continue
- collect more information
- prepare for document step
- route to human review
- guide elsewhere respectfully
- hold for CRM review

## User-Facing Impact

The user should see a clear next step, not raw routing logic.

Examples of user-facing next steps:

- We need a little more information before we can guide you further.
- The information should be reviewed before we continue.
- Based on what you have shared, we may be able to continue to the next step.
- Based on the current information, it does not look like we can continue right now, but you can add more information if something is missing.

## Internal Impact

The system should store:

- routing outcome
- routing reason
- confidence
- missing information
- source facts
- policy rules applied
- suggested next action

## Audit Requirements

Log:

- decision id
- input snapshot
- routing outcome
- reason
- confidence
- policy references
- user-facing message shown

## Related Patterns

- PAT-003 Confirm Before Classify
- PAT-005 Explain Why
- PAT-008 Respectful Guide-Away
- PAT-009 Human Review Bridge

## Test Requirements

Test that:

- low-confidence routing leads to review or more information
- sensitive cases can route to review
- missing information can route to collection
- raw internal labels are not shown to users
- routing reasons are visible internally
