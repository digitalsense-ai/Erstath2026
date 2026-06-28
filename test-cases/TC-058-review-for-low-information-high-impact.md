# TC-058 - Review for Low Information High Impact

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system can recommend human review when the fictional user gives few details but describes high impact.

## Initial User Description

```text
I cannot explain much right now, but what happened has changed my everyday life a lot.
```

## Expected Conversation Behavior

- acknowledge the impact carefully
- ask only a small number of simple questions
- capture that detail level is low
- avoid rejecting because information is limited
- recommend review if impact appears high

## Expected Facts

```text
low_information = true
high_impact_possible = true
current_consequence = true
```

## Expected Missing Information

```text
event_description
provider_context
timing
impact_details
```

## Expected Next Step

```text
human_review
```

## Acceptance Checks

```text
high impact is recognized
limited detail is handled safely
case is not rejected too early
human review is recommended
```
