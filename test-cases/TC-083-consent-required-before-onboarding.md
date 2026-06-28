# TC-083 - Consent Required Before Onboarding

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that consent is handled before the system moves into onboarding steps that require it.

## Initial User Description

```text
I want to continue, but I am not sure what I am agreeing to yet.
```

## Expected Behavior

- explain the next step in plain language
- ask for consent only when needed
- avoid moving to onboarding before consent is clear
- store consent status when given

## Expected Facts

```text
consent_unclear = true
onboarding_not_ready = true
explanation_needed = true
```

## Expected Missing Information

```text
consent_status
```

## Expected Next Step

```text
explain_and_collect_consent
```

## Acceptance Checks

```text
consent is not assumed
next step is explained
onboarding is paused until consent is clear
consent status is stored
```
