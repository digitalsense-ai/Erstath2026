# TC-054 - Review After Guide Away Disagreement

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system can route to human review when a fictional user disagrees with a guide-away recommendation and adds new relevant information.

## Initial User Description

```text
I understand why you think this may not fit, but I actually still have problems today and had extra follow-up afterwards.
```

## Expected Conversation Behavior

- acknowledge the correction
- update facts without dismissing the user
- capture the new consequence information
- reconsider next step
- recommend review if relevant uncertainty remains

## Expected Facts

```text
guide_away_disputed = true
new_consequence_information = true
extra_follow_up_needed = true
```

## Expected Missing Information

```text
current_consequence_details
follow_up_details
```

## Expected Next Step

```text
human_review or continue_intake
```

## Acceptance Checks

```text
new information is accepted
previous direction can be reconsidered
facts are corrected safely
human review can be recommended
```
