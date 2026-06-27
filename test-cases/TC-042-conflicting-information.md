# TC-042 - Conflicting Information

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that conflicting or uncertain information leads to careful clarification and possible human review.

## Initial User Description

```text
One provider told me the result was expected, but another person later said it might not have been normal. I am confused about what is correct.
```

## Expected Conversation Behavior

- acknowledge uncertainty
- ask who said what in neutral terms
- ask what consequence the user has today
- avoid choosing between conflicting statements
- route to review if uncertainty remains important

## Expected Facts

```text
conflicting_information = true
expected_result_disputed = true
current_consequence_unknown = true
```

## Expected Missing Information

```text
statement_sources
current_consequence
documentation_available
```

## Expected Next Step

```text
human_review or continue_intake
```

## Acceptance Checks

```text
conflict is captured neutrally
system does not decide who is correct
review can be recommended
```
