# TC-044 - Known Risk Unclear

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate human review routing when a fictional user is unsure whether the consequence was an expected risk.

## Initial User Description

```text
I was told there can be risks, but I do not know if what happened to me was expected or if something was different.
```

## Expected Conversation Behavior

- ask what the user was told before treatment
- ask what happened afterwards
- ask what consequence exists today
- mark risk information as unclear
- recommend review if uncertainty remains important

## Expected Facts

```text
risk_information_given_possible = true
known_risk_unclear = true
current_consequence_unknown = true
```

## Expected Missing Information

```text
risk_information_details
post_treatment_event
current_consequence
documentation_available
```

## Expected Next Step

```text
human_review
```

## Acceptance Checks

```text
risk uncertainty is captured
system does not decide known risk alone
human review can be recommended
```
