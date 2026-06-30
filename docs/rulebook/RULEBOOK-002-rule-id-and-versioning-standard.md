# RULEBOOK-002 - Rule ID and Versioning Standard

Version: 1.0
Status: Active Draft
Scope: Long-term AI Case Brain rule library

## Purpose

This document defines how Rulebook rules should be identified, named and versioned.

The goal is to make every rule traceable across documentation, code, tests, reason codes and future audits.

## Rule ID Format

Use this format:

```text
<CATEGORY>-<NUMBER>
```

Examples:

```text
DOM-001
TYPE-014
TL-006
Q-022
HR-004
```

## Category Prefixes

Use these prefixes:

```text
DOM    Domain classification
TYPE   Case type classification
TL     Time limit
INJ    Injury and consequence
CAUS   Causation
DOC    Evidence and document
IQ     Information quality
CV     Commercial value
Q      Smart question
ROUTE  Routing
HR     Human review
GA     Guide-away
CONF   Confidence
AUD    Audit and explanation
```

## Numbering Rules

Rules should be numbered sequentially within their category.

Examples:

```text
DOM-001
DOM-002
DOM-003
```

Do not reuse a removed rule ID for a new meaning.

If a rule is deprecated, keep the ID and mark it as deprecated.

## Rule Name Standard

Rule names should be short and descriptive.

Good examples:

```text
Event Date Missing
Diagnosis Delay Timeline Missing
Low Confidence Human Review
No Specific Injury Guide-Away
```

Avoid vague names:

```text
Bad Case Rule
Date Rule
AI Rule 1
```

## Rule Versioning

Each rule should include a version.

Use semantic-style rule versions:

```text
1.0
1.1
2.0
```

### Patch-Level Change

Use a minor version when wording or test references change without changing behavior.

Example:

```text
1.0 -> 1.1
```

### Behavior Change

Use a major version when trigger, condition, effect or scoring changes materially.

Example:

```text
1.1 -> 2.0
```

## Rule Status Values

Use one of:

```text
draft
active
deprecated
replaced
blocked
```

## Reason Code Standard

Reason codes should be lowercase snake_case.

Examples:

```text
event_date_missing
possible_diagnosis_delay
human_review_required
critical_fact_missing
```

Reason codes should be stable because tests, UI and audit may depend on them.

## Test Reference Standard

Rules should reference tests or business test cases where possible.

Examples:

```text
TC-001
TC-016
tests/Unit/Brain/SmartQuestionSelectorTest.php
```

## Implementation Reference Standard

When implemented, a rule may reference the Laravel class or method that owns the behavior.

Example:

```text
App\Services\Brain\Rules\TimeLimit\EventDateMissingRule
```

## Deprecation Rule

When a rule is deprecated:

- keep the rule ID
- set status to deprecated
- explain why
- link to replacement rule if any
- keep tests until replacement is verified

## Example Rule Header

```text
Rule ID: TL-001
Name: Event Date Missing
Version: 1.0
Status: active
Category: Time Limit
Reason code: event_date_missing
```

## References

- RULEBOOK-001-rulebook-principles.md
- RULEBOOK-003-rule-authoring-template.md
- docs/ai-case-brain/BRAIN-004-rule-library-structure.md
