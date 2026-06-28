# TC-063 - Missing Consequence Smart Follow-up

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system asks about consequence when the fictional user describes treatment but not the impact.

## Initial User Description

```text
I think something went wrong during treatment, but I have not explained what happened afterwards.
```

## Expected Conversation Behavior

- detect that consequence is missing
- ask what impact the event had
- avoid assuming severity
- store the answer as a key fact

## Expected Facts

```text
treatment_concern = true
consequence_missing = true
severity_unknown = true
```

## Expected Missing Information

```text
current_or_past_consequence
```

## Expected Next Step

```text
continue_intake
```

## Acceptance Checks

```text
consequence gap is detected
one consequence question is asked
severity is not assumed
missing information is updated after answer
```
