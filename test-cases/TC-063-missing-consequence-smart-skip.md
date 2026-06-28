# TC-063 - Missing Consequence Smart Skip

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system asks about consequence when missing and does not repeat the same question after the user gives a partial answer.

## Initial User Description

```text
I had problems after treatment, but I am not sure how serious they are. I still notice it sometimes.
```

## Expected Conversation Behavior

- acknowledge uncertainty
- store that some current effect exists
- ask for detail only where needed
- avoid repeatedly asking whether there is any consequence
- continue with relevant next missing information

## Expected Facts

```text
consequence_exists = true
consequence_details_unclear = true
severity_unknown = true
```

## Expected Missing Information

```text
consequence_details
severity_or_daily_impact
follow_up_needed
```

## Expected Next Step

```text
continue_intake
```

## Acceptance Checks

```text
partial consequence answer is stored
same consequence question is not repeated
missing information becomes more specific
```
