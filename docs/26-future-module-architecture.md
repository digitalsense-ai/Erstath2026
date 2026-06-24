# 26 - Future Module Architecture

## Purpose

This document defines the future module structure for ErstatningsHjælp beyond MVP 0.1.

The goal is to prepare the remaining product areas as modular building blocks, without changing the current MVP 0.1 implementation scope.

MVP 0.1 remains:

```text
AI Screening
Lead Storage
Internal CRM
Testing Foundation
Security Foundation
```

The modules in this document are future-ready specifications.

They should not be implemented before the MVP 0.1 core flow works.

---

# 1. Module strategy

The product should grow as separate modules instead of one large system.

Each module should have:

```text
clear purpose
clear boundaries
own data model
own services
own UI surface if needed
own permissions
own audit events
own tests
```

This makes it easier to build, test and extend the platform safely.

---

# 2. Module overview

## MVP 0.1 modules

```text
Lead Module
Conversation Module
AI Screening Module
Scoring Module
CRM Module
Auth Module
Testing Module
Security Foundation Module
```

## Future modules

```text
Assignment Module
Internal Notes Module
Readiness Module
Authorization Module
Document Readiness Module
Case Lifecycle Module
Identity Readiness Module
Advanced CRM Module
Reporting Module
Audit Module
Notification Module
Case Intelligence Module
Operations Module
```

---

# 3. MVP 0.1 core modules

## 3.1 Lead Module

Purpose:

```text
Store and manage leads created through public screening.
```

Main responsibilities:

```text
create lead
store lead status
store summary
store category
store recommended action
connect lead to scores, conversations and assessment
```

Main entities:

```text
Lead
LeadAssessment
LeadMissingInformation
LeadEntity
```

---

## 3.2 Conversation Module

Purpose:

```text
Store the public screening conversation.
```

Main responsibilities:

```text
store user messages
store assistant messages
preserve conversation timeline
provide context for next AI call
```

Main entities:

```text
LeadConversation
```

---

## 3.3 AI Screening Module

Purpose:

```text
Turn user input into structured screening output.
```

Main responsibilities:

```text
load prompts
call AI provider
validate AI response
extract structured output
return safe result to application layer
```

Main services:

```text
PromptRepository
AiScreeningService
AiResponseValidator
```

---

## 3.4 Scoring Module

Purpose:

```text
Calculate official internal scores.
```

Main responsibilities:

```text
calculate case strength
calculate information quality
calculate commercial value
calculate overall score
explain score result
```

Main services:

```text
LeadScoringService
```

---

## 3.5 CRM Module

Purpose:

```text
Allow internal users to review and manage leads.
```

Main responsibilities:

```text
lead board
lead detail
filters
status updates
safe display of AI summaries
```

Main pages:

```text
/crm/leads
/crm/leads/{lead}
```

---

# 4. Future modules

---

# 4.1 Assignment Module

## Purpose

Allow internal users to assign leads or cases to a responsible person.

## Why this matters

Once lead volume grows, the team needs ownership and accountability.

## Responsibilities

```text
assign lead to user
change assignment
show assigned user in CRM
filter by assigned user
track assignment history later
```

## Candidate data model

```text
lead_assignments
- id
- lead_id
- assigned_to_user_id
- assigned_by_user_id
- assigned_at
- unassigned_at
- note
- created_at
- updated_at
```

Simpler MVP 0.2 alternative:

```text
leads.assigned_user_id
```

## Candidate services

```text
LeadAssignmentService
```

## Candidate audit events

```text
lead.assigned
lead.unassigned
lead.reassigned
```

## Permissions

```text
admin: assign/reassign
caseworker: assign to self or update assigned leads if allowed
viewer: read only
```

## Tests

```text
authenticated user can assign lead
viewer cannot assign lead
assignment appears on lead board
assignment appears on lead detail
```

---

# 4.2 Internal Notes Module

## Purpose

Allow internal users to add structured internal notes to leads or cases.

## Responsibilities

```text
create note
view notes
edit own note if allowed
mark note type
show notes on lead detail
```

## Candidate data model

```text
lead_notes
- id
- lead_id
- user_id
- note_type
- body
- visibility
- created_at
- updated_at
```

## Candidate note types

```text
general
review
follow_up
decision_support
```

## Rules

```text
notes are internal only
notes are never shown in public screening
notes should avoid unnecessary sensitive content
notes should be audit-ready
```

## Candidate audit events

```text
lead_note.created
lead_note.updated
lead_note.deleted
```

---

# 4.3 Readiness Module

## Purpose

Track whether a lead is ready for the next internal step.

## Responsibilities

```text
calculate or set readiness status
show readiness in CRM
list blockers
show missing requirements
```

## Candidate statuses

```text
not_started
needs_information
ready_for_review
ready_for_next_step
blocked
```

## Candidate fields

```text
readiness_status
readiness_reason
readiness_updated_at
```

## Candidate service

```text
LeadReadinessService
```

---

# 4.4 Authorization Module

## Purpose

Track whether required user acceptance or authorization steps are ready for deeper processing.

## Responsibilities

```text
record authorization status
record version
record timestamp
show status in CRM
support withdrawal concept
```

## Candidate data model

```text
lead_authorizations
- id
- lead_id
- authorization_type
- version
- status
- given_at
- withdrawn_at
- source
- metadata
- created_at
- updated_at
```

## Candidate statuses

```text
not_started
requested
given
withdrawn
expired
not_required
```

## Out of scope initially

```text
external signing provider
production signing flow
```

---

# 4.5 Document Readiness Module

## Purpose

Track what supporting material may be needed without requiring active upload at first.

## Responsibilities

```text
create document checklist
mark material as needed or not needed
track status
show checklist in CRM
prepare safe storage architecture
```

## Candidate data model

```text
document_requirements
- id
- lead_id
- document_type
- required
- status
- note
- created_at
- updated_at
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

## Out of scope initially

```text
active file upload
file processing
advanced document analysis
```

---

# 4.6 Case Lifecycle Module

## Purpose

Separate qualified leads from deeper internal cases.

## Responsibilities

```text
create case from qualified lead
track case status
show case overview
record status history
support internal workflow
```

## Candidate data model

```text
cases
- id
- lead_id
- status
- assigned_user_id
- opened_at
- closed_at
- created_at
- updated_at

case_status_history
- id
- case_id
- old_status
- new_status
- changed_by_user_id
- changed_at
- note
```

## Candidate statuses

```text
qualified_lead
ready_for_review
accepted_for_casework
not_accepted
closed
```

---

# 4.7 Identity Readiness Module

## Purpose

Prepare the platform for stronger identity handling later.

## Responsibilities

```text
track identity readiness
show verification status in CRM
prepare integration boundary
avoid hard-coding provider logic
```

## Candidate fields

```text
identity_status
identity_checked_at
identity_provider_reference later
```

## Candidate statuses

```text
not_started
pending
verified
failed
not_required
```

## Out of scope initially

```text
real production identity provider integration
```

---

# 4.8 Advanced CRM Module

## Purpose

Improve CRM usability when lead volume grows.

## Responsibilities

```text
advanced filters
saved views
priority queues
dashboards
bulk actions later
```

## Candidate filters

```text
status
category
score range
assigned user
created date
readiness status
recommended action
```

## Candidate pages

```text
/crm/dashboard
/crm/leads?view=qualified
/crm/leads?view=needs-review
```

---

# 4.9 Reporting Module

## Purpose

Give business and operational insight.

## Candidate metrics

```text
lead volume
qualified leads
rejected leads
manual review rate
average score
lead age
conversion from lead to case
caseworker workload
```

## Candidate data sources

```text
leads
lead_scores
lead_status_history later
assignments
cases later
```

---

# 4.10 Audit Module

## Purpose

Provide traceability for important internal actions.

## Responsibilities

```text
record status changes
record assignments
record authorization events
record note events
record key CRM views later if needed
```

## Candidate data model

```text
audit_logs
- id
- event_type
- subject_type
- subject_id
- actor_id
- metadata
- created_at
```

## Important rule

Audit metadata must be safe and should not store unnecessary raw user content.

---

# 4.11 Notification Module

## Purpose

Notify internal users about important events.

## Candidate notifications

```text
new qualified lead
lead assigned
lead ready for review
missing information updated
case status changed
```

## Candidate channels

```text
in-app notification
email later
```

## Out of scope initially

```text
SMS
external notification systems
complex automation
```

---

# 4.12 Case Intelligence Module

## Purpose

Prepare for future decision-support and learning from outcomes.

## Responsibilities

```text
track outcome data later
calibrate scoring
identify patterns
support similar-case research later
provide quality feedback to internal users
```

## Out of scope

```text
automated final decision
fully automated legal analysis
external submission automation
```

---

# 4.13 Operations Module

## Purpose

Support technical operations and safe maintenance.

## Responsibilities

```text
health checks
backup status
queue monitoring
log review
system configuration overview
operational checklist
```

## Candidate pages later

```text
/admin/system-health
/admin/operations
```

---

# 5. Suggested module build order

After MVP 0.1:

```text
1. Assignment Module
2. Internal Notes Module
3. Readiness Module
4. Authorization Module
5. Document Readiness Module
6. Advanced CRM Module
7. Reporting Module
8. Case Lifecycle Module
9. Identity Readiness Module
10. Audit Module expansion
11. Notification Module
12. Case Intelligence Module
13. Operations Module
```

Reason:

```text
Start with internal workflow value.
Delay heavy integrations.
Keep security and audit improving gradually.
```

---

# 6. Module boundary rules

Each module should follow these rules:

```text
Do one job clearly
Avoid changing MVP 0.1 flow unless approved
Use services for business logic
Use resources/DTOs for API output
Use policies or roles for access control
Use tests for core behavior
Use safe dummy data
Be audit-ready where relevant
```

---

# 7. When to create issues

Do not create full GitHub issue sets for all future modules too early.

Recommended approach:

```text
Create detailed issues only when the previous sprint is close to done.
Keep this document as the module map.
Use MVP 0.2 roadmap to select the next sprint.
```

---

# 8. Final recommendation

Yes, the remaining product areas can be prepared as modules.

This is the safest way to make the future system ready without overloading MVP 0.1.

Final rule:

```text
Design modules now.
Implement MVP 0.1 first.
Activate future modules one sprint at a time.
```
