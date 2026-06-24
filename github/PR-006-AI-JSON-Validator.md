# PR-006 - AI JSON Validator

## Related issue

```text
#6 Sprint 1: Create AI JSON Validator
```

## Purpose

This pull request creates the validation layer for structured AI output.

AI output must never be trusted directly. Before it is saved or used by the application, it must be validated against the expected MVP 0.1 structure.

---

# Scope

## This PR should include

```text
AiResponseValidator service
Validation of required top-level fields
Validation of score ranges
Validation of allowed category values
Validation of allowed recommended actions
Safe fallback behavior
Unit tests for valid and invalid AI output
```

## This PR should not include

```text
AI provider calls
Public API endpoints
Database persistence
CRM UI
Score formula changes
Prompt changes
Real user data
Secrets
```

---

# Suggested class

```text
App Services AI AiResponseValidator
```

Use the actual Laravel namespace format in code.

---

# Expected validation areas

The validator should check:

```text
summary exists
scores exist
score values are numeric and between 0 and 100
case category is allowed
recommended action is allowed
next question is either text or empty depending on action
confidence is valid if present
missing information is structured if present
entities are structured if present
```

---

# Allowed case categories

```text
A
B
C
D
```

---

# Allowed recommended actions

Use the values defined in the AI and API documentation.

Examples:

```text
collect_more_information
manual_review
qualified
reject
```

If implementation uses a stricter enum, it must match the documented values.

---

# Failure behavior

Invalid AI output should not crash the public user flow.

The application should be able to:

```text
mark the lead for review
save a safe failure state
avoid saving untrusted AI output as final assessment
return a safe user-facing response
```

---

# Acceptance criteria

This PR is complete when:

- [ ] AiResponseValidator exists
- [ ] Required fields are validated
- [ ] Score ranges are validated
- [ ] Category values are validated
- [ ] Recommended actions are validated
- [ ] Invalid output is rejected safely
- [ ] Unit tests cover valid output
- [ ] Unit tests cover invalid output
- [ ] No AI provider call is made in this PR
- [ ] No secrets are committed

---

# Suggested PR title

```text
PR-006: Add AI JSON Validator
```

---

# Suggested PR description

```markdown
## Summary

Adds the AI response validator used to validate structured AI output before it is persisted or returned by the application.

## Related issue

Closes #6

## Includes

- AI output validator
- Score range validation
- Category validation
- Recommended action validation
- Invalid-output tests

## Not included

- AI provider integration
- API endpoints
- Database persistence
```

---

# Next PR

```text
PR-007 - LeadScoringService
Related issue: #7
```
