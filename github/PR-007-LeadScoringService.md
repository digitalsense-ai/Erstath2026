# PR-007 - LeadScoringService

## Related issue

```text
#7 Sprint 1: Create LeadScoringService
```

## Purpose

This pull request creates the deterministic scoring service for MVP 0.1.

AI may help identify facts and suggest interpretation, but the official internal lead scores should be calculated by backend logic where practical.

---

# Scope

## This PR should include

```text
LeadScoringService
Case Strength calculation
Information Quality calculation
Commercial Value calculation
Overall Score calculation
Score explanation output
Unit tests for scoring scenarios
```

## This PR should not include

```text
AI provider calls
Public API endpoints
CRM pages
Database migrations
Prompt changes
Real personal data
Secrets
```

---

# Suggested class

```text
App Services Scoring LeadScoringService
```

Use the actual Laravel namespace format in code.

---

# Core score types

```text
case_strength
information_quality
commercial_value
overall_score
```

Each score should be clamped between 0 and 100.

---

# Overall Score formula

```text
overall_score =
(case_strength * 0.50)
+
(information_quality * 0.20)
+
(commercial_value * 0.30)
```

Round to nearest integer unless the implementation documents another clear deterministic rounding method.

---

# Expected behavior

The service should be able to:

```text
Accept structured screening data
Calculate all score values
Return score explanations
Handle missing information conservatively
Avoid over-scoring weak or unclear leads
Be tested without AI calls
```

---

# Acceptance criteria

This PR is complete when:

- [ ] LeadScoringService exists
- [ ] All three core scores are calculated
- [ ] Overall Score formula is implemented
- [ ] Scores are clamped between 0 and 100
- [ ] Score explanations are returned
- [ ] Missing information lowers confidence/quality appropriately
- [ ] Unit tests cover strong cases
- [ ] Unit tests cover low-information cases
- [ ] Unit tests cover weak or unclear cases
- [ ] No AI call is needed to run scoring tests
- [ ] No secrets are committed

---

# Suggested PR title

```text
PR-007: Add LeadScoringService
```

---

# Suggested PR description

```markdown
## Summary

Adds deterministic scoring logic for MVP 0.1 lead screening.

## Related issue

Closes #7

## Includes

- Case Strength Score
- Information Quality Score
- Commercial Value Score
- Overall Score formula
- Score explanations
- Unit tests

## Not included

- AI provider integration
- API endpoints
- CRM UI
```

---

# Next PR

```text
PR-008 - Screening Start Endpoint
Related issue: #8
```
