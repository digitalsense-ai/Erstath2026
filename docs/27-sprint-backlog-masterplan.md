# 27 - Sprint Backlog Masterplan

## Purpose

This document defines the long-term sprint-based backlog for ErstatningsHjælp.

The goal is to prepare a high-volume project backlog without creating too many GitHub issues too early.

This document does not change MVP 0.1 scope.

MVP 0.1 remains the active implementation target:

```text
Sprint 0-4
Issues #1-#30
PR-001 to PR-015
```

All later sprints are prepared as backlog candidates and should be activated only when the previous phase is sufficiently implemented and reviewed.

---

# 1. Backlog strategy

The project should be managed as:

```text
MVP Phase
↓
Sprint
↓
Epic
↓
Module
↓
Issue
↓
PR
```

This creates a clear order while still allowing a large amount of future work to be prepared.

The goal is not to hit a fixed number of issues.

The goal is to have enough structured backlog that ServerAdmin and future developers can continue without guessing the product direction.

---

# 2. Current confirmed backlog

## MVP 0.1

```text
Sprint 0 - Foundation
Sprint 1 - AI Screening
Sprint 2 - CRM
Sprint 3 - Testing and QA
Sprint 4 - Security and Compliance
```

Existing issue range:

```text
#1-#30
```

Closed duplicates:

```text
#16
#31
```

Existing PR plans:

```text
PR-001 to PR-015
```

Status:

```text
Ready for implementation
```

---

# 3. Proposed post-MVP sprint ladder

```text
Sprint 5  - Assignment and Internal Notes
Sprint 6  - Readiness and Authorization Tracking
Sprint 7  - Document Readiness
Sprint 8  - Advanced CRM and Reporting
Sprint 9  - Case Lifecycle Foundation
Sprint 10 - Identity Readiness
Sprint 11 - Case Intelligence Preparation
Sprint 12 - Audit Expansion and Governance Controls
Sprint 13 - Notifications and Operational Alerts
Sprint 14 - Admin and Operations Console
Sprint 15 - MVP 1.0 Stabilization and Launch Readiness
```

This creates a future backlog of roughly 60-80 candidate issues without forcing an exact number.

---

# 4. Activation rules

Future sprints should be activated gradually.

## Do not activate Sprint 5 before

```text
PR-001 to PR-015 are implemented or mostly implemented
CRM lead board works
Lead detail page works
Status updates work
Authentication works
Basic tests exist
```

## Do not activate Sprint 6 before

```text
Sprint 5 workflow is reviewed
Assignment and notes are stable
Internal users can manage ownership and notes
```

## Do not activate heavier integration sprints before

```text
Security foundation is reviewed
Operational requirements are understood
Clear product need is confirmed
```

---

# 5. Sprint 5 - Assignment and Internal Notes

## MVP phase

```text
MVP 0.2
```

## Module focus

```text
Assignment Module
Internal Notes Module
Audit-ready internal workflow
```

## Goal

Allow internal users to assign leads and add internal notes.

## Candidate issues

### S5-01 - Create lead assignment model

Priority: High

Depends on:

```text
PR-012 Internal Authentication
PR-013 CRM Lead Board
PR-014 Lead Detail Page
```

Description:

Create the data structure for lead assignment.

Potential implementation:

```text
lead_assignments table
or assigned_user_id on leads for simpler start
```

---

### S5-02 - Assign lead to internal user

Priority: High

Description:

Allow an authenticated internal user to assign a lead to a caseworker.

Acceptance direction:

```text
admin can assign
caseworker permissions defined
viewer cannot assign
```

---

### S5-03 - Show assigned user on lead board

Priority: High

Description:

Display assigned user in the CRM lead board.

---

### S5-04 - Filter leads by assigned user

Priority: Medium

Description:

Add filter support for assigned user.

---

### S5-05 - Add internal notes model

Priority: High

Description:

Create internal notes for leads.

Rules:

```text
notes are internal only
notes are not public
notes should avoid unnecessary sensitive content
```

---

### S5-06 - Add notes section to lead detail page

Priority: High

Description:

Show internal notes on the lead detail page.

---

### S5-07 - Add note creation form

Priority: Medium

Description:

Allow authenticated internal users to add notes.

---

### S5-08 - Make assignment and notes audit-ready

Priority: Medium

Description:

Prepare audit events for assignment and notes.

Candidate events:

```text
lead.assigned
lead.reassigned
lead_note.created
lead_note.updated
```

---

# 6. Sprint 6 - Readiness and Authorization Tracking

## MVP phase

```text
MVP 0.2
```

## Module focus

```text
Readiness Module
Authorization Module
Consent/authorization readiness
```

## Goal

Track whether a lead is ready for deeper internal handling.

## Candidate issues

### S6-01 - Define readiness status model

Priority: High

Candidate statuses:

```text
not_started
needs_information
ready_for_review
ready_for_next_step
blocked
```

---

### S6-02 - Add readiness status to lead detail

Priority: High

Description:

Show readiness status clearly in CRM.

---

### S6-03 - Add readiness blockers

Priority: Medium

Description:

Allow system or internal users to show why a lead is not ready.

---

### S6-04 - Define authorization status model

Priority: High

Candidate statuses:

```text
not_started
requested
given
withdrawn
expired
not_required
```

---

### S6-05 - Create authorization tracking records

Priority: High

Description:

Create database structure for authorization/acceptance tracking.

---

### S6-06 - Show authorization status in CRM

Priority: Medium

Description:

Display status on lead detail.

---

### S6-07 - Add authorization status filters

Priority: Low/Medium

Description:

Allow CRM board filtering by authorization status.

---

### S6-08 - Document withdrawal handling

Priority: Medium

Description:

Document how future withdrawal should be represented.

---

# 7. Sprint 7 - Document Readiness

## MVP phase

```text
MVP 0.2
```

## Module focus

```text
Document Readiness Module
Material checklist
Safe metadata model
```

## Goal

Track which supporting material may be needed without implementing full file processing too early.

## Candidate issues

### S7-01 - Define document requirement types

Priority: High

Description:

Create a controlled list of material/document requirement types.

---

### S7-02 - Create document checklist model

Priority: High

Description:

Create data model for required, requested or received material.

---

### S7-03 - Show document checklist on lead detail

Priority: High

Description:

Display missing or requested material in CRM.

---

### S7-04 - Add document readiness status

Priority: Medium

Candidate statuses:

```text
not_needed
needed
requested
received
reviewed
missing
```

---

### S7-05 - Add checklist management UI

Priority: Medium

Description:

Allow internal users to mark material as needed, requested or received.

---

### S7-06 - Define safe storage architecture

Priority: High

Description:

Document future secure storage rules before active upload is built.

---

### S7-07 - Prepare file metadata model

Priority: Medium

Description:

Prepare metadata-only records without requiring upload flow.

---

### S7-08 - Add document readiness tests

Priority: Medium

Description:

Test checklist status changes and access rules.

---

# 8. Sprint 8 - Advanced CRM and Reporting

## MVP phase

```text
MVP 0.2 / MVP 0.3
```

## Module focus

```text
Advanced CRM Module
Reporting Module
Business metrics
```

## Goal

Improve CRM usability and operational insight.

## Candidate issues

### S8-01 - Add advanced lead filters

Priority: High

Filters:

```text
status
category
score range
assigned user
created date
readiness status
recommended action
```

---

### S8-02 - Add CRM dashboard counters

Priority: High

Counters:

```text
new leads
qualified leads
rejected leads
manual review leads
awaiting information
```

---

### S8-03 - Add score distribution overview

Priority: Medium

Description:

Show score bands and category distribution.

---

### S8-04 - Add priority queues

Priority: Medium

Candidate queues:

```text
strong leads
needs information
manual review
assigned to me
```

---

### S8-05 - Add lead age indicator

Priority: Medium

Description:

Show how long a lead has been in current status.

---

### S8-06 - Add basic operational report page

Priority: Medium

Description:

Show lead volume and conversion indicators.

---

### S8-07 - Add export-safe reporting plan

Priority: Low/Medium

Description:

Plan safe export rules without implementing broad exports too early.

---

### S8-08 - Add reporting tests

Priority: Medium

Description:

Test dashboard counts and filters.

---

# 9. Sprint 9 - Case Lifecycle Foundation

## MVP phase

```text
MVP 0.3
```

## Module focus

```text
Case Lifecycle Module
Lead-to-case transition
Case status history
```

## Goal

Separate qualified leads from deeper internal case handling.

## Candidate issues

### S9-01 - Define case lifecycle statuses

Priority: High

Candidate statuses:

```text
qualified_lead
ready_for_review
accepted_for_casework
not_accepted
closed
```

---

### S9-02 - Create case record model

Priority: High

Description:

Create data model for internal case records.

---

### S9-03 - Convert qualified lead to case

Priority: High

Description:

Allow internal user to create a case record from qualified lead.

---

### S9-04 - Add case overview page

Priority: Medium

Description:

Show created case with status and linked lead.

---

### S9-05 - Add case status history

Priority: High

Description:

Track case status changes.

---

### S9-06 - Define case transition rules

Priority: Medium

Description:

Prevent invalid status transitions.

---

### S9-07 - Add case lifecycle tests

Priority: Medium

Description:

Test case creation and transitions.

---

# 10. Sprint 10 - Identity Readiness

## MVP phase

```text
MVP 0.3 / MVP 0.4
```

## Module focus

```text
Identity Readiness Module
Verification status
Integration boundary
```

## Goal

Prepare the platform for stronger identity handling later without building a production identity integration too early.

## Candidate issues

### S10-01 - Define identity readiness model

Priority: High

Candidate statuses:

```text
not_started
pending
verified
failed
not_required
```

---

### S10-02 - Add verification status field

Priority: Medium

Description:

Add verification status to the relevant lead or case model.

---

### S10-03 - Show verification status in CRM

Priority: Medium

Description:

Display readiness without activating external integration.

---

### S10-04 - Create identity provider interface draft

Priority: Medium

Description:

Prepare service interface for future provider abstraction.

---

### S10-05 - Document identity integration boundary

Priority: High

Description:

Document what is and is not implemented.

---

### S10-06 - Add identity readiness tests

Priority: Low/Medium

Description:

Test status display and access rules.

---

# 11. Sprint 11 - Case Intelligence Preparation

## MVP phase

```text
MVP 0.4 / MVP 1.0 preparation
```

## Module focus

```text
Case Intelligence Module
Outcome tracking
Score calibration
Quality feedback
```

## Goal

Prepare for later decision-support and learning without automating final decisions.

## Candidate issues

### S11-01 - Define outcome tracking fields

Priority: High

Description:

Prepare fields for later case outcome and lead quality analysis.

---

### S11-02 - Create quality feedback model

Priority: Medium

Description:

Allow internal users to provide feedback on AI screening quality.

---

### S11-03 - Prepare score calibration process

Priority: Medium

Description:

Define how scoring could be improved based on outcomes.

---

### S11-04 - Prepare similar-case data model

Priority: Low/Medium

Description:

Plan future similar-case support without implementing recommendations yet.

---

### S11-05 - Add internal feedback UI

Priority: Medium

Description:

Add lightweight feedback controls to lead/case detail.

---

### S11-06 - Add intelligence safety rules

Priority: High

Description:

Document that intelligence features are decision-support only.

---

# 12. Sprint 12 - Audit Expansion and Governance Controls

## MVP phase

```text
MVP 1.0 preparation
```

## Module focus

```text
Audit Module
Governance controls
Review traceability
```

## Goal

Expand auditability and governance around internal actions.

## Candidate issues

### S12-01 - Implement audit event service

Priority: High

Description:

Create a reusable audit logging service.

---

### S12-02 - Audit lead status changes

Priority: High

Description:

Log lead workflow changes.

---

### S12-03 - Audit assignments and notes

Priority: Medium

Description:

Log assignment and internal note events.

---

### S12-04 - Add audit view for admins

Priority: Medium

Description:

Provide internal admin view of key audit events.

---

### S12-05 - Add governance checklist to PR template later

Priority: Medium

Description:

Ensure future PRs follow architecture and security rules.

---

### S12-06 - Add audit tests

Priority: Medium

Description:

Test event creation and safe metadata handling.

---

# 13. Sprint 13 - Notifications and Operational Alerts

## MVP phase

```text
MVP 1.0 preparation
```

## Module focus

```text
Notification Module
Internal alerts
Operational awareness
```

## Goal

Notify internal users about important workflow events.

## Candidate issues

### S13-01 - Define notification types

Priority: Medium

Candidate notifications:

```text
new qualified lead
lead assigned
lead ready for review
status changed
missing information updated
```

---

### S13-02 - Create in-app notification model

Priority: Medium

Description:

Create notification storage for internal users.

---

### S13-03 - Show notifications in CRM header

Priority: Low/Medium

Description:

Display internal notifications.

---

### S13-04 - Notify user when assigned lead changes

Priority: Medium

Description:

Generate notification on assignment.

---

### S13-05 - Add notification read/unread state

Priority: Low/Medium

Description:

Allow internal users to mark notifications read.

---

### S13-06 - Add notification tests

Priority: Medium

Description:

Test notification creation and access.

---

# 14. Sprint 14 - Admin and Operations Console

## MVP phase

```text
MVP 1.0 preparation
```

## Module focus

```text
Operations Module
Admin tools
System health
```

## Goal

Prepare operational visibility for admins.

## Candidate issues

### S14-01 - Create admin dashboard shell

Priority: Medium

Description:

Create a basic admin-only area.

---

### S14-02 - Add system health checklist page

Priority: Medium

Description:

Show operational checklist items.

---

### S14-03 - Add environment readiness checklist

Priority: Medium

Description:

Help verify staging/production readiness.

---

### S14-04 - Add queue and job monitoring plan

Priority: Low/Medium

Description:

Prepare for queue operations if used.

---

### S14-05 - Add backup and restore checklist view

Priority: Medium

Description:

Expose operational checklist for backups and restore testing.

---

### S14-06 - Add admin access tests

Priority: Medium

Description:

Ensure only admins can access operations pages.

---

# 15. Sprint 15 - MVP 1.0 Stabilization and Launch Readiness

## MVP phase

```text
MVP 1.0
```

## Module focus

```text
Stabilization
Quality
Security
Launch readiness
```

## Goal

Prepare the platform for a stable MVP 1.0 release.

## Candidate issues

### S15-01 - Run full functional QA pass

Priority: High

Description:

Test the full public and internal flow.

---

### S15-02 - Run security checklist review

Priority: High

Description:

Review against security and compliance documentation.

---

### S15-03 - Run data retention review

Priority: High

Description:

Ensure storage rules are understood and documented.

---

### S15-04 - Review all public text and disclaimers

Priority: High

Description:

Ensure public communication is safe and clear.

---

### S15-05 - Review performance and slow queries

Priority: Medium

Description:

Check key pages and APIs for obvious performance problems.

---

### S15-06 - Create launch checklist

Priority: High

Description:

Prepare operational launch checklist.

---

### S15-07 - Create post-launch monitoring checklist

Priority: Medium

Description:

Define what to watch after launch.

---

### S15-08 - Final MVP 1.0 release review

Priority: High

Description:

Review scope, risks and readiness before launch.

---

# 16. Approximate future backlog size

Candidate issue count by sprint:

```text
Sprint 5:  8 issues
Sprint 6:  8 issues
Sprint 7:  8 issues
Sprint 8:  8 issues
Sprint 9:  7 issues
Sprint 10: 6 issues
Sprint 11: 6 issues
Sprint 12: 6 issues
Sprint 13: 6 issues
Sprint 14: 6 issues
Sprint 15: 8 issues
```

Approximate future candidate issues:

```text
77
```

Combined with MVP 0.1 issues:

```text
30 + 77 = 107 candidate/planned issues
```

This does not mean all should be created in GitHub now.

It means the project direction is ready at a high level.

---

# 17. Recommended GitHub issue creation strategy

## Create now only if desired

```text
Sprint 5 issues
```

Reason:

```text
Sprint 5 is the next realistic post-MVP sprint.
```

## Keep as document backlog for now

```text
Sprint 6-15
```

Reason:

```text
They depend on lessons from MVP 0.1 and Sprint 5.
```

---

# 18. Final recommendation

Following sprints is the best model.

It gives a large backlog without creating chaos.

The recommended approach is:

```text
Keep Sprint 0-4 as active MVP 0.1 backlog.
Prepare Sprint 5 as the next candidate GitHub issue set.
Keep Sprint 6-15 in this masterplan until needed.
```

Final rule:

```text
Plan many sprints.
Create GitHub issues gradually.
Build one sprint at a time.
```
