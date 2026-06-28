# TC-052 - High Emotional Distress Review

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system handles strong distress carefully and avoids pushing the user through a rigid automated flow.

## Initial User Description

```text
I find it very hard to talk about what happened. It still affects me, and I am not sure I can explain everything clearly.
```

## Expected Conversation Behavior

- use calm and respectful language
- let the user provide only what they can
- ask simple questions
- avoid pressure
- recommend human review if automated intake is not appropriate

## Expected Facts

```text
high_distress = true
limited_clarity = true
current_impact_possible = true
```

## Expected Missing Information

```text
minimal_event_context
current_impact
consent_to_continue
```

## Expected Next Step

```text
human_review
```

## Acceptance Checks

```text
user is not pressured
minimal context is accepted
human review can be recommended
respectful tone is used
```
