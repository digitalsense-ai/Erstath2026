# TC-071 - User Answers Partially

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system can handle a partial answer and narrow the next question.

## Initial User Description

```text
It happened at a clinic, but I do not remember the exact name or date.
```

## Expected Conversation Behavior

- store clinic as provider type
- mark provider name and timing as incomplete
- ask for the most important missing detail first
- avoid asking again whether it was a clinic

## Expected Facts

```text
provider_type = clinic
provider_name_missing = true
event_date_missing = true
```

## Expected Missing Information

```text
provider_name
event_date_or_approximate_timing
```

## Expected Next Step

```text
continue_intake
```

## Acceptance Checks

```text
partial answer is stored
next question is narrowed
known provider type is reused
Smart Skip prevents duplicate provider type question
```
