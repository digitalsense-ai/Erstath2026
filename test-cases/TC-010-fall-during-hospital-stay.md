# TC-010 - Fall During Hospital Stay

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate a case where a user describes a fall during a hospital stay.

## Scenario

A fictional user fell while admitted and later had pain and reduced mobility.

## Initial User Description

```text
I was admitted to the hospital and fell while I was there. After that I had pain and problems walking. I am not sure whether enough was done to prevent it.
```

## Expected Conversation Behavior

- acknowledge the situation
- ask when and where the fall happened
- ask what consequence followed
- ask whether staff were involved before or after the fall
- ask whether documents are available

## Expected Facts

```text
context = hospital_stay
incident = fall
consequence_reported = pain_and_walking_problem
prevention_unclear = true
```

## Expected Missing Information

```text
incident_date
location
current_consequence
documentation_available
```

## Expected Next Step

```text
continue_intake or human_review
```

## Acceptance Checks

```text
fall context is captured
consequence is requested
prevention uncertainty is captured
no final conclusion is claimed
```
