# 19 - Final Architecture Review

## Purpose

This document is the final architecture review for ErstatningsHjælp MVP 0.1.

It summarizes:

- what has been decided
- what is frozen for MVP 0.1
- what remains open
- key risks
- recommended implementation order
- recommended work while waiting for implementation

---

# 1. Executive conclusion

The project is ready for implementation.

The planning layer now includes:

```text
Product flow
Database architecture
AI architecture
Scoring model
Conversation flow
API contracts
CRM workflow
Testing strategy
Security foundation
Governance
Handoff
Release plan
PR plans
```

The biggest risk is no longer missing planning.

The biggest risk is now that implementation may drift away from the agreed MVP scope.

Development should therefore follow the existing GitHub Issues and PR plans closely.

---

# 2. Core product decision

MVP 0.1 is an AI-assisted screening and internal CRM product.

It is not a full case management or legal automation product.

Core flow:

```text
User describes what happened
↓
AI screens the input
↓
System extracts structured facts
↓
System calculates internal scores
↓
System asks the next relevant question
↓
Lead is saved
↓
Internal user reviews the lead in CRM
```

---

# 3. AI role

AI should help with:

```text
understanding user text
extracting structured facts
identifying missing information
suggesting next question
summarizing the lead
suggesting category and recommended action
```

AI should not:

```text
make final decisions
promise outcomes
automatically submit anything
replace human review
```

Human review remains part of the model.

---

# 4. Scoring model

MVP 0.1 uses three core scores:

```text
Case Strength Score
Information Quality Score
Commercial Value Score
```

Overall Score formula:

```text
overall_score =
(case_strength * 0.50)
+
(information_quality * 0.20)
+
(commercial_value * 0.30)
```

This formula is frozen for MVP 0.1 unless explicitly approved.

---

# 5. Case categories

MVP 0.1 uses:

```text
A
B
C
D
```

Meaning:

```text
A = strong lead
B = promising lead with missing information
C = uncertain lead
D = weak, irrelevant or outdated lead
```

---

# 6. Conversation principle

The assistant should ask one question at a time.

This reduces friction and improves data quality.

Typical next-question focus areas:

```text
timing
location/provider
what went wrong
consequence
available documentation later
```

---

# 7. API architecture

Public endpoints:

```text
POST /api/v1/screening/start
POST /api/v1/screening/{lead}/message
```

Internal endpoints:

```text
GET /api/v1/leads
GET /api/v1/leads/{lead}
PATCH /api/v1/leads/{lead}/status
```

Public screening endpoints should remain public.

Internal CRM endpoints should require authentication.

---

# 8. CRM architecture

CRM MVP should allow an internal user to:

```text
view leads
filter leads
open lead detail
see scores
see conversation summary
see missing information
see recommended action
change lead status
```

CRM should present structured, readable information instead of requiring users to read raw AI output.

---

# 9. Security foundation

The following security and compliance areas have been planned:

```text
Audit log foundation
Role and permission model
Consent tracking foundation
Data retention policy
Security review checklist
Sensitive data handling rules
Operational security checklist
```

These are enough for MVP planning and later hardening.

---

# 10. Frozen for MVP 0.1

The following should not change without approval:

```text
Core lead flow
Core database tables
Public screening endpoints
Three-score model
Overall Score formula
Case category model
One-question-at-a-time principle
Internal CRM review flow
Human final review principle
MVP scope boundaries
```

---

# 11. Out of scope for MVP 0.1

MVP 0.1 should not include:

```text
advanced identity integrations
authorization signing flows
active file upload implementation
advanced document analysis
automated final decisions
automated external submission
production deployment
```

These should be planned as later releases.

---

# 12. Open technical decisions

## UI implementation

Open options:

```text
Blade
Livewire
Blade with simple controllers
```

Recommendation:

```text
Start simple. Do not let UI choice change database or API design.
```

## Permission implementation

Open options:

```text
simple role field
Laravel policies
permission package later
```

Recommendation:

```text
Start simple. Expand when needed.
```

## AI provider abstraction

Recommendation:

```text
Keep provider logic inside AiScreeningService or a small provider wrapper.
```

This reduces future migration cost.

---

# 13. Key risks

## Risk 1 - Scope creep

Mitigation:

```text
Follow MVP-0.1 scope.
Use architecture governance.
Reject new features until core flow works.
```

## Risk 2 - AI output used too directly

Mitigation:

```text
Use AiResponseValidator.
Use LeadScoringService.
Persist validated structured data.
```

## Risk 3 - Unsafe development data

Mitigation:

```text
Use dummy fixtures.
Use safe seeders.
Use security review checklist.
Avoid unnecessary raw content in logs.
```

## Risk 4 - Large pull requests

Mitigation:

```text
Follow PR plans.
One PR should primarily solve one issue.
```

## Risk 5 - CRM before core flow

Mitigation:

```text
Implement in sprint order.
Foundation before AI.
AI before public API.
Public API before CRM UI.
```

---

# 14. Recommended implementation order

## Foundation

```text
PR-001 Laravel Foundation
PR-002 Core Database Migrations
PR-003 Core Eloquent Models
```

## AI core

```text
PR-004 Prompt Repository
PR-005 AiScreeningService
PR-006 AI JSON Validator
PR-007 LeadScoringService
```

## Public screening API

```text
PR-008 Screening Start Endpoint
PR-009 Continue Screening Endpoint
```

## CRM

```text
Issue #10 Lead Detail API
Issue #11 Lead List API
Issue #12 Internal Authentication
Issue #13 CRM Lead Board
Issue #14 Lead Detail Page
Issue #15 Lead Status Updates
```

## QA and security

```text
Sprint 3 Testing and QA
Sprint 4 Security and Compliance
```

---

# 15. Implementation readiness

Implementation readiness checklist:

```text
README updated
Handoff updated
Release plan created
Milestone created
Issues created
PR plans created
Architecture governance created
Testing and security sprints planned
```

Status:

```text
Implementation ready = yes
```

---

# 16. Work while waiting for ServerAdmin

Recommended non-code work:

```text
Create Data Dictionary v2
Run consistency control
Review enum values
Review status flow
Review API and database mapping
```

Avoid expanding the MVP with new features before implementation starts.

---

# 17. Final verdict

The architecture is strong enough for first implementation.

MVP 0.1 is clearly scoped.

The main decisions are documented.

There are minor implementation choices left, but none block PR-001.

Final recommendation:

```text
Proceed to implementation.
Do not expand MVP scope before PR-001 to PR-009 are complete.
```
