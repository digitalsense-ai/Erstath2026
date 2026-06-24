# ServerAdmin Handoff Plan v3.0

## Purpose

This document is the primary handoff guide for ServerAdmin or any developer who will implement ErstatningsHjælp MVP 0.1.

It summarizes:

- current project status
- implementation order
- key documents
- GitHub Issues
- PR plans
- security rules
- MVP boundaries
- next technical steps

The goal is that implementation can begin without requiring the developer to read the full chat history.

---

# 1. Current status

```text
Project: ErstatningsHjælp
Current milestone: MVP 0.1 - AI Screening & CRM
Current phase: Implementation preparation complete
Implementation status: Not started
ServerAdmin status: Awaiting implementation start
```

The planning layer is complete enough for implementation.

The next real technical step is:

```text
PR-001 Laravel Foundation
```

---

# 2. Project asset overview

```text
Documents: 21
Prompts: 6
Epics: 8
GitHub Issues: #1-#30 planned/open, plus #16 closed as duplicate
PR Plans: PR-001 to PR-009
Release documents: 2
Handoff plan: 1
Governance document: 1
Implementation: 0%
```

---

# 3. Short project description

ErstatningsHjælp is an AI-assisted lead screening and internal CRM system.

The first version is not a full legal case platform.

MVP 0.1 must prove this flow:

```text
User writes a short description
↓
AI screens the lead
↓
System extracts structured facts
↓
System calculates scores
↓
System asks the next relevant question
↓
Lead is saved
↓
Internal user reviews the lead in CRM
```

---

# 4. MVP 0.1 scope

## Must include

```text
Laravel foundation
Core database migrations
Core Eloquent models
Prompt Repository
AI screening service
AI JSON validation
Deterministic scoring service
Screening start endpoint
Continue screening endpoint
Internal authentication
Lead list API
Lead detail API
CRM lead board
CRM lead detail page
Lead status updates
Testing foundation
Security/compliance foundation
```

## Must not include

```text
Advanced identity integrations
Authorization signing flows
Active file upload implementation
Advanced document analysis
Automated final decision
Automated external submission
Production deployment
```

These are later-release items.

---

# 5. Key documents

## Start here

```text
README.md
docs/serveradmin-handoff-plan.md
github/MVP-0.1-Release-Plan.md
github/MVP-0.1-Milestone.md
docs/18-architecture-governance.md
docs/19-architecture-review-final.md
docs/20-data-dictionary-v2.md
docs/21-consistency-review.md
```

## Core architecture

```text
docs/01-database-blueprint.md
docs/02-ai-engine.md
docs/03-scoring-engine.md
docs/04-conversation-engine.md
docs/05-crm-workflow.md
docs/06-domain-model.md
docs/08-api-specification.md
docs/20-data-dictionary-v2.md
```

## Quality and security

```text
docs/09-security-gdpr.md
docs/10-testing-strategy.md
docs/18-architecture-governance.md
docs/21-consistency-review.md
github/Epic-07-Testing-QA-Safety-Net.md
github/Epic-08-Security-Compliance-Hardening.md
```

## Prompt pack

```text
prompts/01-screening-system-prompt.md
prompts/02-entity-extraction-prompt.md
prompts/03-score-engine-prompt.md
prompts/04-next-question-prompt.md
prompts/05-summary-prompt.md
prompts/06-case-category-prompt.md
```

---

# 6. Epics

```text
github/Epic-01-Laravel-Foundation.md
github/Epic-02-AI-Screening.md
github/Epic-03-CRM.md
github/Epic-04-Testing.md
github/Epic-05-Security-GDPR.md
github/Epic-06-Documents.md
github/Epic-07-Testing-QA-Safety-Net.md
github/Epic-08-Security-Compliance-Hardening.md
```

---

# 7. Implementation order

## Sprint 0 - Foundation

```text
#1 Laravel Foundation
#2 Core Database Migrations
#3 Core Eloquent Models
```

## Sprint 1 - AI Screening

```text
#4 Prompt Repository
#5 AiScreeningService
#6 AI JSON Validator
#7 LeadScoringService
#8 POST /api/v1/screening/start
#9 POST /api/v1/screening/{lead}/message
```

## Sprint 2 - CRM

```text
#10 GET /api/v1/leads/{lead}
#11 GET /api/v1/leads
#12 Internal Authentication
#13 CRM Lead Board
#14 Lead Detail Page
#15 Lead Status Updates
```

## Sprint 3 - Testing and QA

```text
#17 Create screening test fixtures
#18 Add safe dummy data seeders
#19 Add scoring unit tests
#20 Add AI JSON validation tests
#21 Add screening endpoint feature tests
#22 Add CRM access and authentication tests
#23 Add basic CI test workflow
```

## Sprint 4 - Security and Compliance

```text
#24 Create audit log foundation
#25 Define role and permission model
#26 Create consent tracking foundation
#27 Create data retention policy
#28 Create security review checklist
#29 Define sensitive data handling rules
#30 Create operational security checklist
```

Issue #16 was closed as a duplicate and should not be used for planning.

---

# 8. PR plans

Detailed PR plans currently exist for the first implementation sequence:

```text
github/PR-001-Laravel-Foundation.md
github/PR-002-Core-Database-Migrations.md
github/PR-003-Core-Eloquent-Models.md
github/PR-004-Prompt-Repository.md
github/PR-005-AiScreeningService.md
github/PR-006-AI-JSON-Validator.md
github/PR-007-LeadScoringService.md
github/PR-008-Screening-Start-Endpoint.md
github/PR-009-Continue-Screening-Endpoint.md
```

Recommended build order:

```text
PR-001 → PR-002 → PR-003 → PR-004 → PR-005 → PR-006 → PR-007 → PR-008 → PR-009
```

After PR-009, continue with CRM issues #10-#15.

---

# 9. MVP-active status flow

Use this as the active MVP 0.1 flow:

```text
NEW
↓
SCREENING
↓
AWAITING_INFO
↓
QUALIFIED
↓
REVIEW
↓
CLOSED
```

Side branch:

```text
REJECTED
```

Future-reserved statuses must not be activated before their flows exist.

---

# 10. Scoring model

MVP 0.1 uses three core scores:

```text
case_strength
information_quality
commercial_value
```

Official overall score formula:

```text
overall_score =
(case_strength * 0.50)
+
(information_quality * 0.20)
+
(commercial_value * 0.30)
```

The deterministic LeadScoringService should be the official scoring source.

---

# 11. Case categories

```text
A = strong lead
B = promising lead with missing information
C = uncertain lead
D = weak, irrelevant or outdated lead
```

`unknown` may be used only as a validation fallback, not as the intended final business category.

---

# 12. Recommended action values

Canonical MVP 0.1 values:

```text
collect_more_information
manual_review
qualified
reject
```

Optional internal fallback:

```text
unknown
```

Future-oriented values should not drive MVP 0.1 flow until the related features exist.

---

# 13. Security rules

From the beginning:

```text
Do not commit secrets
Do not commit real personal data
Do not commit real case material
Use dummy fixtures only
Protect all internal CRM routes
Keep public endpoints minimal
Validate AI output before storing official assessment data
Avoid unnecessary raw content in logs
Do not expose raw AI/debug payloads publicly
```

---

# 14. What ServerAdmin should do first

Start with:

```text
github/PR-001-Laravel-Foundation.md
```

Expected result:

```text
Laravel installed in repository root
Application runs locally
.env.example exists
.env is not committed
Basic README instructions still valid
```

Do not start CRM, AI integration, authentication, or deployment before the foundation works.

---

# 15. Definition of ready for PR-001

```text
Repository accessible
README current
PR-001 plan exists
MVP scope understood
No production deployment expected
No real data required
No secrets required in repository
```

Status:

```text
Ready for PR-001 = yes
```

---

# 16. Final handoff note

The project is ready for implementation, but not yet implemented.

The correct next step is code, not more product scope.

Final instruction:

```text
Follow the issues.
Follow the PR plans.
Keep MVP 0.1 small.
Do not expand scope before PR-001 to PR-009 are complete.
```
