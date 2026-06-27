# TC-045 - High Impact Low Confidence

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that a high-impact case with low confidence is not automatically routed away.

## Initial User Description

```text
This has affected my life a lot, but I do not have many details and I am not sure how to prove what happened.
```

## Expected Conversation Behavior

- acknowledge the impact
- ask for basic context in simple steps
- ask about documents without blocking the user
- avoid guide-away based only on low detail
- recommend review if high impact remains plausible

## Expected Facts

```text
high_impact_reported = true
low_detail_level = true
proof_unclear = true
```

## Expected Missing Information

```text
basic_event_description
provider_context
current_consequence
documentation_available
```

## Expected Next Step

```text
human_review or continue_intake
```

## Acceptance Checks

```text
high impact is recognized
low confidence does not cause automatic guide-away
missing information is tracked
review can be recommended
```
