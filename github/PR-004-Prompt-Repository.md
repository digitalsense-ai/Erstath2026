# PR-004 - Prompt Repository

## Related issue

```text
#4 Sprint 1: Create Prompt Repository
```

## Purpose

This pull request creates a small Laravel service responsible for loading prompt files from the repository.

The goal is to keep prompts versioned, readable and separate from controller or service logic.

---

# Scope

## This PR should include

```text
PromptRepository service
Methods for loading prompt files
Safe handling of missing prompt files
Unit tests for prompt loading
Documentation note if needed
```

## This PR should not include

```text
AI provider calls
Scoring logic
API endpoints
CRM pages
Prompt rewriting
Real user data
Secrets
```

---

# Suggested class

```text
App Services Prompts PromptRepository
```

Use the actual Laravel namespace format in code.

---

# Prompt files to support

```text
prompts/01-screening-system-prompt.md
prompts/02-entity-extraction-prompt.md
prompts/03-score-engine-prompt.md
prompts/04-next-question-prompt.md
prompts/05-summary-prompt.md
prompts/06-case-category-prompt.md
```

---

# Expected behavior

The service should be able to:

```text
Load a prompt by key
Return prompt content as text
Fail safely if prompt does not exist
Be easy to mock in tests
```

---

# Acceptance criteria

This PR is complete when:

- [ ] PromptRepository exists
- [ ] Prompt files can be loaded by stable keys
- [ ] Missing prompt files are handled safely
- [ ] Unit tests cover successful prompt loading
- [ ] Unit tests cover missing prompt handling
- [ ] No AI API calls are made in this PR
- [ ] No secrets are committed

---

# Suggested PR title

```text
PR-004: Add Prompt Repository
```

---

# Suggested PR description

```markdown
## Summary

Adds a PromptRepository service for loading versioned prompt files from the repository.

## Related issue

Closes #4

## Includes

- Prompt loading service
- Stable prompt keys
- Safe missing prompt handling
- Unit tests

## Not included

- AI provider integration
- API endpoints
- Scoring logic
```

---

# Next PR

```text
PR-005 - AiScreeningService
Related issue: #5
```
