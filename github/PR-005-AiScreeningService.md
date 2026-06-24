# PR-005 - AiScreeningService

## Related issue

```text
#5 Sprint 1: Create AiScreeningService
```

## Purpose

This pull request creates the Laravel service responsible for running the AI screening flow.

The service should accept a screening input, load the relevant prompt, call the configured AI provider and return structured output for validation.

---

# Scope

## This PR should include

```text
AiScreeningService
AI provider configuration wrapper
PromptRepository integration
Safe provider error handling
Basic logging hooks without sensitive data
Unit tests with mocked AI response
```

## This PR should not include

```text
Public API endpoints
Database persistence
CRM pages
Scoring formula changes
Prompt rewriting
Real personal data
Secrets
```

---

# Suggested class

```text
App Services AI AiScreeningService
```

Use the actual Laravel namespace format in code.

---

# Expected behavior

The service should be able to:

```text
Receive screening input
Load the screening prompt
Call the configured AI provider
Return decoded structured output
Handle provider failure safely
Be mockable in tests
```

---

# Error handling

If the AI provider fails, the service should not crash the whole application.

It should return or throw a controlled application-level failure that can be handled by the endpoint layer.

Do not expose technical provider errors to end users.

---

# Acceptance criteria

This PR is complete when:

- [ ] AiScreeningService exists
- [ ] PromptRepository is used
- [ ] AI provider call is isolated in one place
- [ ] Provider failure is handled safely
- [ ] Structured output is returned for later validation
- [ ] Tests use mocked provider responses
- [ ] No real user data is used in tests
- [ ] No secrets are committed

---

# Suggested PR title

```text
PR-005: Add AiScreeningService
```

---

# Suggested PR description

```markdown
## Summary

Adds the AiScreeningService used by the MVP 0.1 screening flow.

## Related issue

Closes #5

## Includes

- AI screening service
- PromptRepository integration
- Safe provider failure handling
- Mocked tests

## Not included

- API endpoints
- Database persistence
- CRM UI
- Score formula changes
```

---

# Next PR

```text
PR-006 - AI JSON Validator
Related issue: #6
```
