# TC-011 - Wrong Site Concern

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate a case where a fictional user is concerned that treatment may have been performed in the wrong area.

## Initial User Description

```text
I believe the treatment may have been done in the wrong place. I am not sure, but I needed extra follow-up afterwards.
```

## Expected Conversation Behavior

- ask what treatment was planned
- ask what the user believes happened
- ask what follow-up was needed
- ask about current consequences
- confirm understanding before routing

## Expected Facts

```text
wrong_area_concern = true
extra_follow_up_needed = true
current_consequence_unknown = true
```

## Expected Missing Information

```text
planned_treatment
actual_treatment_description
follow_up_details
current_consequence
```

## Expected Next Step

```text
human_review
```

## Acceptance Checks

```text
concern is captured neutrally
follow-up is captured
human review can be recommended
no final conclusion is claimed
```
