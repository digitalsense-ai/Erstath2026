# BRAIN-019 - Rule Evaluation Order

Version: 1.0
Status: Draft
Scope: AI Case Brain v1.0

## Purpose

This document defines the recommended order for evaluating AI Case Brain rules.

A fixed evaluation order prevents conflicting behavior and makes the system easier to test, debug and explain.

## Core Principle

The brain should not evaluate all rules as one flat list.

Rules should run in stages.

Each stage may add facts, reason codes, scores, missing information, review flags or routing recommendations.

## Recommended Evaluation Pipeline

```text
1. Input validation
2. Safety and policy guardrails
3. Domain classification
4. Case type classification
5. Time limit assessment
6. Injury and consequence assessment
7. Causation signal assessment
8. Evidence and document assessment
9. Information quality scoring
10. Commercial value scoring
11. Case strength scoring
12. Confidence calculation
13. Missing information prioritisation
14. Smart question selection
15. Routing decision
16. Human review escalation
17. Guide-away validation
18. Audit and explanation generation
19. Output validation
```

## Stage 1 - Input Validation

Purpose:

Ensure the input can be processed.

Checks:

- message exists
- message is not empty
- locale is supported or defaults safely
- conversation history shape is valid

Output:

- validation status
- fallback if invalid

## Stage 2 - Safety and Policy Guardrails

Purpose:

Ensure the system does not provide unsafe or unsupported guidance.

Checks:

- no final legal conclusion
- no compensation promise
- no unsupported medical advice
- no exposure of internal commercial logic

Output:

- policy reason codes
- possible human review flag

## Stage 3 - Domain Classification

Uses:

- BRAIN-005

Output:

- case_domain
- domain confidence
- reason codes

## Stage 4 - Case Type Classification

Uses:

- BRAIN-006

Output:

- case_type
- secondary_case_types
- case type confidence
- missing case-type-specific fields

## Stage 5 - Time Limit Assessment

Uses:

- BRAIN-007

Output:

- date signals
- time limit uncertainty
- missing date fields
- time-related reason codes

## Stage 6 - Injury and Consequence Assessment

Uses:

- BRAIN-008

Output:

- consequence type
- severity band
- vulnerable patient signal
- consequence reason codes

## Stage 7 - Causation Signal Assessment

Uses:

- BRAIN-009

Output:

- causation signal
- causation confidence
- causation reason codes

## Stage 8 - Evidence and Document Assessment

Uses:

- BRAIN-010

Output:

- document status
- relevant document types
- evidence strength
- document reason codes

## Stage 9 - Information Quality Scoring

Uses:

- BRAIN-011

Output:

- information_quality score
- missing critical facts
- information reason codes

## Stage 10 - Commercial Value Scoring

Uses:

- BRAIN-012

Output:

- commercial_value score
- internal priority signals
- commercial reason codes

## Stage 11 - Case Strength Scoring

Purpose:

Combine domain, case type, time, injury, causation and evidence signals into preliminary case strength.

Output:

- case_strength score
- score drivers
- negative factors

## Stage 12 - Confidence Calculation

Uses:

- BRAIN-016

Output:

- confidence value
- confidence band
- confidence reason codes

## Stage 13 - Missing Information Prioritisation

Purpose:

Create and sort missing information items.

Priority order:

1. date or time limit fields
2. provider
3. consequence
4. causation link
5. case-type-specific fields
6. document status
7. previous decision status
8. economic impact

## Stage 14 - Smart Question Selection

Uses:

- BRAIN-013

Output:

- one next question or null
- question reason code

## Stage 15 - Routing Decision

Uses:

- BRAIN-003

Output:

- routing_target
- recommended_action
- case_category

## Stage 16 - Human Review Escalation

Uses:

- BRAIN-014

Output:

- human_review_required
- review_priority
- review reason codes

## Stage 17 - Guide-Away Validation

Uses:

- BRAIN-015

Purpose:

Ensure guide-away is respectful and not used when human review is safer.

Output:

- guide_away reason codes
- allow additional information flag

## Stage 18 - Audit and Explanation Generation

Uses:

- BRAIN-017

Output:

- reason_codes
- internal_summary
- user_safe_summary

## Stage 19 - Output Validation

Uses:

- BRAIN-018

Checks:

- required fields are present
- scores are 0-100
- confidence is 0-1
- next_question has only one question
- facts are unconfirmed by default
- routing target is valid

## Conflict Resolution Rules

If rules conflict:

1. Safety guardrails win.
2. Human review overrides automated routing.
3. Blocking conditions override onboarding.
4. Guide-away must not override human review triggers.
5. Confidence cannot override policy.
6. User-provided facts remain unconfirmed until validated.

## References

- BRAIN-004-rule-library-structure.md
- BRAIN-018-brain-output-model.md
- docs/api/API-READINESS-003-first-vertical-slice-plan.md
