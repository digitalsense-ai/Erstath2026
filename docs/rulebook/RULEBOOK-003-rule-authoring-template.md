# RULEBOOK-003 - Rule Authoring Template

Version: 1.0
Status: Active Draft
Scope: Long-term AI Case Brain rule library

## Purpose

This document defines the standard template for writing Rulebook rules.

All important rules should use the same structure so they can be reviewed, implemented and tested consistently.

## Standard Rule Template

Use this format for each rule:

```text
## Rule <RULE-ID> - <Rule Name>

Version:
Status:
Category:
Reason code:

### Purpose

Describe what this rule is meant to detect or decide.

### Trigger

Describe when the rule should be considered.

### Condition

Describe the exact condition that must be true for the rule to apply.

### Effect

Describe what the rule changes or produces.

### Score Impact

Describe impact on case strength, information quality or commercial value if relevant.

### Routing Impact

Describe whether this affects continue conversation, request documents, human review, onboarding later or guide-away.

### Question Impact

Describe whether this rule creates or prioritises a next question.

### Human Review Impact

Describe whether this rule triggers, increases or avoids human review.

### User-Facing Impact

Describe whether this rule affects user-facing language.

### Internal Explanation

Describe what should be shown to staff or QA.

### Test References

List business test cases or automated tests.

### Implementation Notes

Add notes for Laravel implementation.
```

## Minimal Rule Template

For simple rules, use this shorter structure:

```text
## Rule <RULE-ID> - <Rule Name>

Version:
Status:
Category:
Reason code:

Trigger:
Condition:
Effect:
Test references:
Implementation notes:
```

## Example Full Rule

```text
## Rule TL-001 - Event Date Missing

Version: 1.0
Status: active
Category: Time Limit
Reason code: event_date_missing

### Purpose

Detect that the event date is missing in an otherwise relevant patient injury screening flow.

### Trigger

A user message or conversation state suggests a possible patient injury.

### Condition

No event date, treatment date, diagnosis date or approximate year is known.

### Effect

Add event_date to missing information with high priority.

### Score Impact

Reduce information quality because time limit assessment cannot be performed.

### Routing Impact

Prefer continue_conversation unless another rule requires human review.

### Question Impact

Prioritise a time-related next question.

### Human Review Impact

No direct human review trigger unless the case is old, serious or conflicting.

### User-Facing Impact

Ask a plain-language question about when it happened.

### Internal Explanation

The system cannot assess timing because event date is missing.

### Test References

TC-061
ConversationStartTest
SmartQuestionSelectorTest

### Implementation Notes

Implemented by TimeLimitRules or a dedicated EventDateMissingRule class.
```

## Authoring Checklist

Before adding a rule, confirm:

- rule ID is unique
- reason code is stable
- trigger is clear
- condition is testable
- effect is specific
- user-facing impact is safe
- human review impact is clear
- test reference exists or is planned
- rule does not duplicate an existing rule

## References

- RULEBOOK-001-rulebook-principles.md
- RULEBOOK-002-rule-id-and-versioning-standard.md
- docs/ai-case-brain/BRAIN-020-first-50-mvp-rules-catalog.md
