# BRAIN-004 - Rule Library Structure

Version: 1.0
Status: Draft
Scope: AI Case Brain v1.0

## Purpose

This document defines how the AI Case Brain rule library should be structured.

The goal is to make rules testable, explainable and adjustable without spreading logic across prompts, controllers or database queries.

## Rule Library Principle

Rules should be explicit.

AI may identify signals, but the system should use a rule library to interpret those signals into scores, routing, questions and review requirements.

## Rule Categories

The rule library should be divided into these groups:

1. Domain Rules
2. Case Type Rules
3. Time Limit Rules
4. Injury and Consequence Rules
5. Causation Signal Rules
6. Evidence and Document Rules
7. Information Quality Rules
8. Commercial Value Rules
9. Smart Question Rules
10. Routing Rules
11. Human Review Escalation Rules
12. Guide-Away Rules
13. Confidence Rules
14. Audit and Explanation Rules

## Rule Record Shape

Each rule should be documented with:

```text
Rule ID
Name
Category
Trigger
Condition
Effect
Score impact if relevant
Reason code
User-facing impact
Human review impact
Test references
```

## Example Rule Format

```text
Rule ID: TL-001
Name: Event date missing
Category: Time Limit
Trigger: event_date is missing
Condition: lead has possible patient injury but no event date
Effect: prioritise next question about time
Score impact: information_quality negative / no positive date points
Reason code: event_date_missing
User-facing impact: ask one date-related question
Human review impact: none unless other risk factors exist
Test references: TC-061, TC-066
```

## Rule ID Prefixes

Use these prefixes:

```text
DOM   Domain classification
TYPE  Case type classification
TL    Time limit
INJ   Injury and consequence
CAUS  Causation
DOC   Evidence and document
IQ    Information quality
CV    Commercial value
Q     Smart question
ROUTE Routing
HR    Human review
GA    Guide-away
CONF  Confidence
AUD   Audit and explanation
```

## Rule Priority

Rules should be evaluated in a predictable order:

1. Safety and policy guardrails
2. Domain classification
3. Blocking conditions
4. Time limit risk
5. Injury and consequence
6. Causation signals
7. Evidence and documentation
8. Scores
9. Missing information
10. Smart question selection
11. Routing
12. Human review escalation
13. Explanation and reason codes

## Rule Effects

A rule may affect:

- case type
- case category
- score
- missing information
- next question
- routing target
- human review flag
- confidence
- reason codes
- audit notes

## Reason Codes

Every rule that affects routing or review should produce a reason code.

Examples:

```text
event_date_missing
provider_missing
possible_diagnosis_delay
serious_consequence_indicated
causation_unclear
documentation_missing
low_confidence
human_review_required
```

## Testing Rules

Every important rule should reference at least one business test case or feature test.

Example:

```text
Rule TL-001 should be covered by TC-061 Missing Date Smart Follow-up.
```

## Rules Not In Prompts

Prompts may instruct the AI to extract information and suggest signals.

Prompts should not be the only place where business rules exist.

The application must be able to validate or override AI suggestions using the rule library.

## MVP Rule Target

Recommended target for AI Case Brain v1.0:

```text
Domain Rules: 10-20
Case Type Rules: 20-30
Time Limit Rules: 10-15
Injury Rules: 20-30
Causation Rules: 10-20
Document Rules: 10-20
Information Quality Rules: 10-20
Commercial Value Rules: 10-20
Smart Question Rules: 20-40
Routing Rules: 10-20
Human Review Rules: 10-20
Guide-Away Rules: 5-10
Confidence Rules: 5-10
Audit Rules: 5-10
```

Total target:

```text
150-250 explicit rules
```

## Implementation Direction

In Laravel, the rule library may start as config files or PHP classes.

Possible options:

1. Config-based rules for simple scoring and routing
2. PHP rule classes for complex logic
3. Hybrid approach

Recommended MVP approach:

```text
Use PHP rule classes for behavior and config arrays for thresholds.
```

## References

- BRAIN-001-ai-case-brain-overview.md
- BRAIN-002-decision-principles-and-guardrails.md
- BRAIN-003-routing-model.md
- test-cases/TC-000-test-case-catalog.md
