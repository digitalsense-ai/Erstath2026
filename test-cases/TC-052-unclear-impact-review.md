# TC-052 - Unclear Impact Review

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system recommends review when the fictional user describes an unclear ongoing impact.

## Initial User Description

```text
It still affects me in some way, but I find it hard to explain. Some days are normal and some days are not.
```

## Expected Conversation Behavior

- acknowledge uncertainty
- ask for simple examples
- ask whether follow-up happened
- avoid assuming severity
- recommend review if the impact remains unclear but important

## Expected Facts

```text
impact_unclear = true
impact_varies = true
severity_uncertain = true
```

## Expected Missing Information

```text
impact_examples
follow_up_context
severity_clarification
```

## Expected Next Step

```text
continue_intake or human_review
```

## Acceptance Checks

```text
impact uncertainty is captured
severity is not assumed
review can be recommended
```
