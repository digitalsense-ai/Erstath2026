# TC-016 - Short Description Needs Follow-up

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system can handle a very short first message and ask only useful follow-up questions.

## Initial User Description

```text
Something went wrong during treatment and I need help.
```

## Expected Conversation Behavior

- acknowledge the message
- ask what happened
- ask where the treatment happened
- ask whether there was a consequence
- avoid asking too many questions at once

## Expected Facts

```text
possible_treatment_issue = true
initial_description_short = true
```

## Expected Missing Information

```text
event_description
provider_type
current_consequence
event_timing
```

## Expected Next Step

```text
continue_intake
```

## Acceptance Checks

```text
system asks one focused follow-up
missing information is tracked
conversation does not block
```
