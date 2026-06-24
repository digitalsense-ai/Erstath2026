# PR-002 - Core Database Migrations

## Related issue

```text
#2 Sprint 0.2: Create core database migrations
```

## Purpose

This pull request creates the first database structure for ErstatningsHjælp MVP 0.1.

The database must support the basic AI screening flow and internal CRM review flow.

---

# Scope

## This PR should include migrations for

```text
leads
lead_conversations
lead_scores
lead_entities
lead_assessments
lead_missing_information
lead_documents
```

## This PR should not include

```text
Eloquent model business logic
AI services
Controllers
CRM pages
Authentication
Document upload implementation
Real personal data
Secrets
Production data
```

Keep this PR focused on structure only.

---

# References

```text
docs/01-database-blueprint.md
docs/12-data-dictionary.md
github/Epic-01-Laravel-Foundation.md
```

---

# Table responsibilities

## leads

Main lead record and current workflow status.

## lead_conversations

Conversation messages between the user and the assistant.

## lead_scores

Calculated lead scores and short score explanations.

## lead_entities

Structured facts extracted from the screening conversation.

## lead_assessments

Current screening assessment, category and recommended next action.

## lead_missing_information

Information still needed before the lead can be assessed more confidently.

## lead_documents

Future-ready placeholder table for document metadata. Actual upload handling is not part of MVP 0.1.

---

# Data design rules

- Use clear table names
- Use consistent column naming
- Use foreign keys where practical
- Use indexes for lead status and prioritization
- Use flexible metadata columns only where justified
- Keep MVP data minimal
- Do not add real seed data
- Do not include sensitive example data

---

# Acceptance criteria

This PR is complete when:

- [ ] All core migrations exist
- [ ] Migrations run successfully from a clean database
- [ ] Rollback works
- [ ] Foreign keys are defined where needed
- [ ] Useful indexes exist
- [ ] Table names match the documentation
- [ ] No real personal data is committed
- [ ] No secrets are committed

---

# Manual review checklist

Reviewer should verify:

- Migration order is correct
- Table names match documentation
- Columns follow the data dictionary
- Foreign keys do not break migration or rollback
- No unnecessary tables are added
- No real data is included

---

# Suggested PR title

```text
PR-002: Add core database migrations
```

---

# Suggested PR description

```markdown
## Summary

Adds the core database migrations for the ErstatningsHjælp MVP 0.1 lead screening flow.

## Related issue

Closes #2

## Includes

- Lead storage
- Conversation storage
- Score storage
- Entity storage
- Assessment storage
- Missing information storage
- Future document metadata placeholder

## Test

Migrations run and rollback successfully from a clean database.
```

---

# Next PR

After this PR is merged, continue with:

```text
PR-003 - Core Eloquent Models
Related issue: #3
```
