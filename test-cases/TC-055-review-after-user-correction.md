# TC-055 - Review After User Correction

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system handles a user correction safely and can recommend human review if the correction changes the case direction.

## Initial User Description

```text
I need to correct something I said earlier. The problem did not start right away; it became clear later.
```

## Expected Conversation Behavior

- accept the correction
- preserve the earlier statement as changed
- update facts through correction handling
- reassess missing information
- recommend review if the correction changes routing

## Expected Facts

```text
user_correction = true
timing_changed = true
case_direction_may_change = true
```

## Expected Missing Information

```text
corrected_timeline
awareness_date
current_consequence
```

## Expected Next Step

```text
continue_intake or human_review
```

## Acceptance Checks

```text
correction is recorded
facts are not silently overwritten
routing can be reassessed
human review can be recommended
```
