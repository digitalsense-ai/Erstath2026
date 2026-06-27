# TC-017 - Current Consequence Unclear

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system asks about current consequence when the fictional user describes an event but not the impact.

## Initial User Description

```text
Something happened during my treatment, but I am not sure how to explain what it means for me today.
```

## Expected Conversation Behavior

- acknowledge uncertainty
- ask how the situation affects the user today
- ask whether extra care or follow-up was needed
- avoid assuming severity
- continue respectfully

## Expected Facts

```text
event_described = true
current_consequence_unclear = true
severity_unknown = true
```

## Expected Missing Information

```text
current_consequence
extra_follow_up_needed
functional_impact
```

## Expected Next Step

```text
continue_intake
```

## Acceptance Checks

```text
current consequence is requested
severity is not assumed
missing information is tracked
```
