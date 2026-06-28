# TC-055 - Prior Condition Unclear Review

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system recommends human review when a prior condition may affect the interpretation of the current story.

## Initial User Description

```text
I already had some problems before the treatment, but afterwards it became worse. I do not know what belongs to what.
```

## Expected Conversation Behavior

- acknowledge the uncertainty
- ask what existed before treatment
- ask what changed after treatment
- avoid deciding causation
- recommend review if the distinction matters

## Expected Facts

```text
prior_condition_possible = true
worsening_after_treatment = true
causation_unclear = true
```

## Expected Missing Information

```text
pre_existing_condition
post_treatment_change
current_consequence
```

## Expected Next Step

```text
human_review
```

## Acceptance Checks

```text
before and after are separated
causation is not assumed
human review is recommended
reason code can be stored
```
