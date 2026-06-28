# TC-059 - Review Before MitID If User Uncertain

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system can recommend review before MitID when the fictional user is unsure whether it makes sense to continue.

## Initial User Description

```text
I am not sure if this is worth continuing with. I do not want to identify myself yet unless someone thinks it makes sense.
```

## Expected Conversation Behavior

- respect the user's hesitation
- explain why identification normally comes later
- collect enough non-sensitive context to assess next step
- avoid pushing MitID too early
- recommend review if the case may be relevant but the user is uncertain

## Expected Facts

```text
mitid_hesitation = true
user_uncertain_about_continuing = true
pre_identification_review_possible = true
```

## Expected Missing Information

```text
basic_event_context
current_consequence
reason_for_hesitation
```

## Expected Next Step

```text
human_review
```

## Acceptance Checks

```text
MitID is not pushed too early
user hesitation is respected
review can happen before onboarding
no pressure is applied
```
