# TC-042 - Conflicting User Statements

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system routes to human review when the fictional user's statements conflict in a way that affects routing.

## Initial User Description

```text
At first I thought I had no lasting problem, but now I think it may still affect me. I am not sure what is correct.
```

## Expected Conversation Behavior

- acknowledge the uncertainty
- ask the user to clarify current consequence
- preserve both statements in the record
- avoid overwriting confirmed facts without correction handling
- recommend review if uncertainty remains important

## Expected Facts

```text
conflicting_statements = true
current_consequence_unclear = true
correction_needed = true
```

## Expected Missing Information

```text
current_consequence_clarification
statement_correction
```

## Expected Next Step

```text
continue_intake or human_review
```

## Acceptance Checks

```text
conflict is captured
clarification is requested
facts are not silently overwritten
human review can be recommended
```
