# 25 - Post-MVP Sprint Plan

## Purpose

This document prepares the next sprint direction after MVP 0.1.

It does not change MVP 0.1 scope.

MVP 0.1 remains:

```text
PR-001 to PR-015
AI Screening
Lead Storage
Internal CRM
Testing Foundation
Security Foundation
```

The purpose of this document is to make the next sprints easier to start once MVP 0.1 is implemented and validated.

---

# 1. Important rule

Post-MVP sprints must not be started before the core MVP 0.1 flow works.

Do not implement these sprints before:

```text
PR-001 Laravel Foundation
PR-002 Database
PR-003 Models
PR-004 Prompts
PR-005 AI Service
PR-006 AI Validator
PR-007 Scoring
PR-008 Screening Start
PR-009 Screening Continue
PR-010 Lead Detail API
PR-011 Lead List API
PR-012 Internal Auth
PR-013 CRM Lead Board
PR-014 Lead Detail Page
PR-015 Lead Status Updates
```

---

# 2. Suggested post-MVP sprint ladder

```text
Sprint 5 - Assignment and Internal Notes
Sprint 6 - Readiness and Authorization Tracking
Sprint 7 - Document Readiness
Sprint 8 - Advanced CRM and Reporting
Sprint 9 - Case Lifecycle Foundation
Sprint 10 - Identity Readiness
Sprint 11 - Case Intelligence Preparation
```

This sequence prioritizes useful internal workflow improvements before heavy integrations.

---

# 3. Sprint 5 - Assignment and Internal Notes

## Goal

Improve internal CRM workflow without adding heavy external integrations.

## Why this sprint first?

Assignment and notes give immediate operational value once leads start entering the CRM.

This sprint helps answer:

```text
Who owns this lead?
What has been reviewed internally?
What is the next internal step?
```

## Suggested issues

```text
Create lead assignment model
Assign lead to internal user
Show assigned user on lead board
Filter leads by assigned user
Add internal notes to lead detail page
Audit assignment and note events
```

## Suggested data additions

```text
lead_assignments
lead_notes
assigned_user_id on leads if simpler
```

## Out of scope

```text
external integrations
public user accounts
advanced case management
file handling
```

## Definition of Done

```text
Internal user can assign a lead
Lead board shows assignment
Lead detail shows assignment and notes
Notes are internal only
Assignment and notes are audit-ready
```

---

# 4. Sprint 6 - Readiness and Authorization Tracking

## Goal

Prepare the CRM for deeper qualification steps.

This does not require external signing or advanced identity flows.

## Suggested issues

```text
Define readiness status model
Add readiness status to lead detail
Define authorization status model
Create authorization tracking records
Show authorization status in CRM
Add withdrawal concept to documentation
```

## Candidate statuses

```text
readiness_status:
not_started
needs_information
ready_for_review
ready_for_next_step
blocked

authorization_status:
not_started
requested
given
withdrawn
expired
not_required
```

## Out of scope

```text
real external signing integration
advanced identity verification
public portal
```

## Definition of Done

```text
CRM can show readiness state
CRM can show authorization state
Internal users can understand what is missing
No external integration is required
```

---

# 5. Sprint 7 - Document Readiness

## Goal

Prepare the system to track which supporting material may be needed, without necessarily implementing active uploads.

## Suggested issues

```text
Define document checklist model
Create document requirement types
Show missing material checklist on lead detail page
Add document readiness status
Define safe storage architecture
```

## Candidate fields

```text
document_type
required
status
notes
source
created_at
updated_at
```

## Candidate statuses

```text
not_needed
needed
requested
received
reviewed
missing
```

## Out of scope

```text
active file upload
file processing
advanced document analysis
```

## Definition of Done

```text
CRM can show which material is needed
Internal users can mark material readiness
No actual file processing is required
Storage/security plan is documented
```

---

# 6. Sprint 8 - Advanced CRM and Reporting

## Goal

Make CRM more useful once lead volume grows.

## Suggested issues

```text
Add advanced lead filters
Add dashboard counters
Add score distribution overview
Add lead source tracking if available
Add saved views later
Add priority queues
```

## Useful metrics

```text
new leads per period
qualified leads
rejected leads
manual review leads
average score
leads by category
leads by assigned user
lead age
```

## Out of scope

```text
financial forecasting automation
advanced AI prediction
external BI integration
```

## Definition of Done

```text
CRM gives better operational overview
Internal users can filter and prioritize faster
Basic reporting supports business decisions
```

---

# 7. Sprint 9 - Case Lifecycle Foundation

## Goal

Create a separation between a lead and a deeper internal case.

This sprint should only start if MVP 0.1 proves that enough leads become qualified.

## Suggested issues

```text
Define case lifecycle statuses
Create case record from qualified lead
Add case overview page
Add case status history
Define case transition rules
```

## Candidate statuses

```text
qualified_lead
ready_for_review
accepted_for_casework
not_accepted
closed
```

## Definition of Done

```text
Qualified leads can be moved into case lifecycle
Case status is separate from screening status
Internal users can track case progression
```

---

# 8. Sprint 10 - Identity Readiness

## Goal

Prepare the platform for stronger identity handling later.

This sprint should focus on readiness, not full external integration.

## Suggested issues

```text
Define identity readiness model
Add verification status field
Show verification status in CRM
Document integration boundary
Prepare service interface for future provider
```

## Candidate statuses

```text
not_started
pending
verified
failed
not_required
```

## Out of scope

```text
production identity integration
real external provider flow
```

---

# 9. Sprint 11 - Case Intelligence Preparation

## Goal

Prepare data structures for later case intelligence features.

Do not build automated final decisions.

## Suggested issues

```text
Define outcome tracking fields
Create quality feedback model
Prepare score calibration process
Prepare similar-case data model
Add internal feedback fields
```

## Out of scope

```text
automated final decision
fully automated legal analysis
external submission automation
```

---

# 10. Recommended next sprint after MVP 0.1

Recommended first post-MVP sprint:

```text
Sprint 5 - Assignment and Internal Notes
```

Reason:

```text
It improves internal CRM workflow immediately.
It does not require heavy external integrations.
It builds naturally on MVP 0.1.
It helps internal users manage real leads.
```

---

# 11. Suggested implementation trigger

Do not start Sprint 5 until:

```text
MVP 0.1 lead board works
Lead detail page works
Internal auth works
Status updates work
At least basic testing exists
```

---

# 12. Final recommendation

The next sprints can be prepared now, but they should remain inactive until MVP 0.1 is working.

Final rule:

```text
Prepare post-MVP now.
Implement MVP 0.1 first.
Start Sprint 5 only after MVP 0.1 is validated.
```
