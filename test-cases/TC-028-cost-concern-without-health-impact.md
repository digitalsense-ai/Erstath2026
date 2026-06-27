# TC-028 - Cost Concern Without Health Impact

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate a guide-away flow where the fictional user mainly describes cost concern and no health impact.

## Initial User Description

```text
I had expenses after the visit, but I do not think there was any health problem caused by the treatment.
```

## Expected Conversation Behavior

- acknowledge the concern
- clarify whether a treatment-related health consequence exists
- avoid treating cost alone as a health injury
- guide elsewhere if no health consequence is confirmed

## Expected Facts

```text
cost_concern = true
health_consequence_described = false
injury_described = false
```

## Expected Missing Information

```text
whether_health_consequence_exists
```

## Expected Next Step

```text
guide_elsewhere
```

## Acceptance Checks

```text
cost concern is captured
health consequence is clarified
no final legal conclusion is claimed
```
