# PR-003 - Core Eloquent Models

## Related issue

```text
#3 Sprint 0.2: Create core Eloquent models
```

## Purpose

This pull request creates the first Eloquent model layer for the MVP 0.1 screening and CRM flow.

The models should match the core database structure and make later AI, API and CRM work easier.

---

# Scope

## This PR should include models for

```text
Lead
ConversationMessage
LeadScore
LeadEntity
LeadAssessment
MissingInformation
Document
```

## This PR should include

```text
Model classes
Relationships
Fillable or guarded configuration
Casts where needed
Basic factories using dummy data only
Basic model tests if practical
```

## This PR should not include

```text
Controllers
AI services
CRM pages
Authentication
External API calls
Real personal data
Production data
```

---

# References

```text
docs/06-domain-model.md
docs/12-data-dictionary.md
github/Epic-01-Laravel-Foundation.md
```

---

# Model responsibilities

## Lead

Main aggregate root for a screening lead.

Should relate to:

```text
conversation messages
scores
entities
assessment
missing information
documents
```

## ConversationMessage

Stores one message in a lead conversation.

## LeadScore

Stores calculated score values for a lead.

## LeadEntity

Stores extracted structured facts from screening.

## LeadAssessment

Stores current assessment summary, category and recommended action.

## MissingInformation

Stores information still needed for better assessment.

## Document

Future-ready model for document metadata only. Full upload is not part of MVP 0.1.

---

# Acceptance criteria

This PR is complete when:

- [ ] Core models exist
- [ ] Relationships are defined
- [ ] Mass assignment rules are defined
- [ ] Useful casts are defined
- [ ] Factories use dummy data only
- [ ] Basic model tests pass if included
- [ ] No real personal data is committed
- [ ] No secrets are committed

---

# Suggested PR title

```text
PR-003: Add core Eloquent models
```

---

# Suggested PR description

```markdown
## Summary

Adds the first Eloquent model layer for the ErstatningsHjælp MVP 0.1 screening and CRM flow.

## Related issue

Closes #3

## Includes

- Core model classes
- Relationships
- Casts and assignment rules
- Dummy-data factories where relevant

## Not included

- Controllers
- AI services
- CRM UI
- Authentication
```

---

# Next PR

```text
PR-004 - Prompt Repository
Related issue: #4
```
