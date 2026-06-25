# PAT-008 - Respectful Guide-Away

Version: 1.0 Draft
Status: Draft
Owner: Product / Experience Architecture
Domain: Experience / Trust / Decision
Related: DOC-020 Experience Architecture, DOC-021 Digital First Conversation Flow, DOC-022 Conversation Patterns, DOC-023 Tone of Voice Guide, PAT-001 Speak Human Store Structured, PAT-005 Explain Why, ADR-000 Enterprise Architecture Principles

## Purpose

This pattern defines how Erstatningshjaelp should guide a user respectfully when the platform may not be able to continue with the case based on the current information.

The goal is to avoid harsh rejection language and ensure the user still leaves with clarity and dignity.

## Principle

Do not reject harshly.

Guide respectfully.

The user should never feel dismissed by a raw system decision, score or internal routing label.

## Use This Pattern When

Use this pattern when the platform needs to communicate that:

- the current information does not appear to match the situations the platform normally continues with
- more information is needed before anything further can happen
- the user may need to seek another path
- the case should not continue automatically
- the system cannot safely recommend continuation

## User-Facing Behavior

The message should:

1. thank the user for sharing
2. explain the current limitation in calm language
3. avoid final legal conclusions
4. avoid raw internal labels or scores
5. allow the user to add information if relevant
6. give a clear next step where possible

## Language to Avoid

Do not use user-facing language such as:

- rejected
- low score
- not qualified
- no case
- failed screening
- weak case
- case closed

## Preferred Language

Use language such as:

"Based on the information you have shared so far, it does not look like we can continue with the case right now. If there is important information we have missed, you can still add it."

or:

"We need more information before we can say what the most relevant next step is."

or:

"This may not be the type of situation we normally help with, but you can add more details if something important is missing."

## User Options

Where relevant, the user should be offered options such as:

- add more information
- indicate that documents exist
- request manual review if policy allows
- see alternative next steps
- end the flow respectfully

## Internal Behavior

Internally, the system may store:

- routing outcome
- reason for guide-away
- missing information
- confidence level
- policy rule applied
- whether the user added more information
- whether human review is needed

## Acceptance Criteria

This pattern is correctly implemented when:

- the user-facing copy is respectful
- raw rejection labels are not shown
- raw scores are not shown
- uncertainty is communicated honestly
- the user has a clear next step
- the CRM handover records the routing reason
- the user can add information where appropriate

## CRM Impact

CRM should store:

- guide-away reason
- information used for the recommendation
- missing information
- whether the user added more information
- whether manual review was triggered

## AI Impact

AI may help draft respectful wording, but must not create unsupported final conclusions.

AI should not tell the user that they definitely do or do not have a case.

## Decision Impact

Decision logic should distinguish between:

- guide away because outside scope
- guide away because information is insufficient
- guide away because confidence is too low
- guide away because policy requires no continuation
- route to human review instead of guide-away

## Do Not Do

Do not:

- expose raw internal routing terms
- present the outcome as a final legal conclusion
- make the user feel blamed
- close the door if more information may change routing
- use cold or dismissive language

## Governance

Any guide-away or non-continuation flow should be reviewed against this pattern and the Tone of Voice Guide.
