# 20 - Data Dictionary v2

## Purpose

This document defines the main data fields for ErstatningsHjælp MVP 0.1.

It is intended for developers working on:

- database migrations
- Eloquent models
- API responses
- AI output mapping
- CRM views
- tests
- security and retention rules

The goal is to keep field names, meanings and usage consistent across the project.

---

# 1. Classification model

Each field can be described using these classifications.

## Sensitivity class

```text
public
internal
personal
potentially_sensitive
system
```

## Retention class

```text
short_lived
lead_lifecycle
case_lifecycle
audit_lifecycle
configuration
```

## Source

```text
user_input
ai_output
system_generated
internal_user
calculated
future_flow
```

---

# 2. Lead

The Lead is the main object in MVP 0.1.

It represents one potential case or inquiry from a user.

| Field | Type | Required | Source | Used by | Sensitivity | Retention | Notes |
|---|---|---:|---|---|---|---|---|
| id | integer | yes | system_generated | database, CRM, API | system | lead_lifecycle | Internal primary key |
| uuid | uuid/string | yes | system_generated | public/internal references | system | lead_lifecycle | Safer external reference than id |
| first_name | string nullable | no | user_input | CRM | personal | lead_lifecycle | Optional in MVP |
| last_name | string nullable | no | user_input | CRM | personal | lead_lifecycle | Optional in MVP |
| email | string nullable | no | user_input | CRM/contact | personal | lead_lifecycle | Optional in MVP |
| phone | string nullable | no | user_input | CRM/contact | personal | lead_lifecycle | Optional in MVP |
| status | enum/string | yes | system_generated/internal_user | CRM workflow | internal | lead_lifecycle | Current workflow state |
| case_category | enum/string nullable | no | ai_output/calculated | CRM prioritization | internal | lead_lifecycle | A, B, C, D |
| summary | text nullable | no | ai_output | CRM | potentially_sensitive | lead_lifecycle | Short safe summary |
| recommended_action | enum/string nullable | no | ai_output | CRM/API | internal | lead_lifecycle | Next system recommendation |
| created_at | timestamp | yes | system_generated | all | system | lead_lifecycle | Creation time |
| updated_at | timestamp | yes | system_generated | all | system | lead_lifecycle | Last update |

---

# 3. LeadConversation

Stores conversation messages in the screening flow.

| Field | Type | Required | Source | Used by | Sensitivity | Retention | Notes |
|---|---|---:|---|---|---|---|---|
| id | integer | yes | system_generated | database | system | lead_lifecycle | Internal primary key |
| lead_id | foreign key | yes | system_generated | relations | system | lead_lifecycle | Belongs to Lead |
| role | enum/string | yes | system_generated | conversation rendering | internal | lead_lifecycle | user, assistant, system if needed |
| message | text | yes | user_input/ai_output | AI, CRM | potentially_sensitive | lead_lifecycle | Avoid unnecessary logging outside DB |
| metadata | json nullable | no | system_generated | debugging/future | internal | short_lived | Keep minimal |
| created_at | timestamp | yes | system_generated | timeline | system | lead_lifecycle | Message time |
| updated_at | timestamp | yes | system_generated | database | system | lead_lifecycle | Usually not important |

---

# 4. LeadScore

Stores calculated score values.

| Field | Type | Required | Source | Used by | Sensitivity | Retention | Notes |
|---|---|---:|---|---|---|---|---|
| id | integer | yes | system_generated | database | system | lead_lifecycle | Internal primary key |
| lead_id | foreign key | yes | system_generated | relations | system | lead_lifecycle | Belongs to Lead |
| case_strength | integer | yes | calculated | CRM/API | internal | lead_lifecycle | 0-100 |
| information_quality | integer | yes | calculated | CRM/API | internal | lead_lifecycle | 0-100 |
| commercial_value | integer | yes | calculated | CRM/API | internal | lead_lifecycle | 0-100 |
| overall_score | integer | yes | calculated | CRM/API | internal | lead_lifecycle | Formula-based score |
| explanation | text nullable | no | calculated/ai_output | CRM | internal | lead_lifecycle | Short explanation only |
| created_at | timestamp | yes | system_generated | audit/timeline | system | lead_lifecycle | Score creation time |
| updated_at | timestamp | yes | system_generated | database | system | lead_lifecycle | Score update time |

## Overall Score formula

```text
overall_score =
(case_strength * 0.50)
+
(information_quality * 0.20)
+
(commercial_value * 0.30)
```

---

# 5. LeadEntity

Stores structured facts extracted from screening.

| Field | Type | Required | Source | Used by | Sensitivity | Retention | Notes |
|---|---|---:|---|---|---|---|---|
| id | integer | yes | system_generated | database | system | lead_lifecycle | Internal primary key |
| lead_id | foreign key | yes | system_generated | relations | system | lead_lifecycle | Belongs to Lead |
| entity_type | string | yes | ai_output | AI/CRM | internal | lead_lifecycle | Broad group |
| entity_key | string | yes | ai_output | AI/CRM/API | internal | lead_lifecycle | Specific key |
| entity_value | text/json | no | ai_output | AI/CRM | potentially_sensitive | lead_lifecycle | Store only needed value |
| confidence | decimal nullable | no | ai_output | AI quality | internal | lead_lifecycle | 0.0-1.0 if available |
| source | string nullable | no | system_generated | traceability | internal | lead_lifecycle | Example: user_message, ai_summary |
| created_at | timestamp | yes | system_generated | database | system | lead_lifecycle | Creation time |
| updated_at | timestamp | yes | system_generated | database | system | lead_lifecycle | Update time |

---

# 6. LeadAssessment

Stores the current structured assessment for a lead.

| Field | Type | Required | Source | Used by | Sensitivity | Retention | Notes |
|---|---|---:|---|---|---|---|---|
| id | integer | yes | system_generated | database | system | lead_lifecycle | Internal primary key |
| lead_id | foreign key | yes | system_generated | relations | system | lead_lifecycle | Belongs to Lead |
| summary | text nullable | no | ai_output | CRM/API | potentially_sensitive | lead_lifecycle | Human-readable summary |
| case_category | enum/string nullable | no | ai_output/calculated | CRM/API | internal | lead_lifecycle | A, B, C, D |
| recommended_action | enum/string nullable | no | ai_output | CRM/API | internal | lead_lifecycle | Controlled value |
| next_question | text nullable | no | ai_output | public API | internal | lead_lifecycle | One question at a time |
| confidence | decimal nullable | no | ai_output | CRM/internal | internal | lead_lifecycle | 0.0-1.0 if used |
| risk_flags | json nullable | no | ai_output | CRM/internal | internal | lead_lifecycle | Safe structured flags |
| raw_ai_output | json nullable | no | ai_output | debugging | potentially_sensitive | short_lived | Avoid long-term reliance |
| created_at | timestamp | yes | system_generated | database | system | lead_lifecycle | Creation time |
| updated_at | timestamp | yes | system_generated | database | system | lead_lifecycle | Update time |

---

# 7. LeadMissingInformation

Stores information that is still needed.

| Field | Type | Required | Source | Used by | Sensitivity | Retention | Notes |
|---|---|---:|---|---|---|---|---|
| id | integer | yes | system_generated | database | system | lead_lifecycle | Internal primary key |
| lead_id | foreign key | yes | system_generated | relations | system | lead_lifecycle | Belongs to Lead |
| field_key | string | yes | ai_output/system | AI/CRM | internal | lead_lifecycle | What is missing |
| question | text nullable | no | ai_output | conversation | internal | lead_lifecycle | Suggested user question |
| priority | integer nullable | no | ai_output/system | conversation ordering | internal | lead_lifecycle | Higher = more important |
| status | enum/string | yes | system_generated/internal_user | CRM | internal | lead_lifecycle | missing, requested, answered, ignored |
| created_at | timestamp | yes | system_generated | database | system | lead_lifecycle | Creation time |
| updated_at | timestamp | yes | system_generated | database | system | lead_lifecycle | Update time |

---

# 8. LeadDocument

MVP 0.1 may include only future-ready document metadata structure.

Active upload handling is out of scope unless explicitly approved later.

| Field | Type | Required | Source | Used by | Sensitivity | Retention | Notes |
|---|---|---:|---|---|---|---|---|
| id | integer | yes | system_generated | database | system | case_lifecycle | Internal primary key |
| lead_id | foreign key | yes | system_generated | relations | system | case_lifecycle | Belongs to Lead |
| filename | string nullable | no | future_flow | CRM/future | potentially_sensitive | case_lifecycle | Metadata only in MVP planning |
| file_path | string nullable | no | future_flow | storage/future | potentially_sensitive | case_lifecycle | Not public web path |
| mime_type | string nullable | no | future_flow | validation/future | internal | case_lifecycle | Metadata |
| status | enum/string nullable | no | future_flow | CRM/future | internal | case_lifecycle | uploaded, pending, processed later |
| created_at | timestamp | yes | system_generated | database | system | case_lifecycle | Creation time |
| updated_at | timestamp | yes | system_generated | database | system | case_lifecycle | Update time |

---

# 9. AuditLog

Tracks important internal events.

| Field | Type | Required | Source | Used by | Sensitivity | Retention | Notes |
|---|---|---:|---|---|---|---|---|
| id | integer | yes | system_generated | database | system | audit_lifecycle | Internal primary key |
| event_type | string | yes | system_generated | security/review | internal | audit_lifecycle | Example: lead.status_changed |
| subject_type | string nullable | no | system_generated | traceability | system | audit_lifecycle | Related entity type |
| subject_id | integer/string nullable | no | system_generated | traceability | system | audit_lifecycle | Related entity id |
| actor_id | integer nullable | no | internal_user/system | traceability | system | audit_lifecycle | Acting user if available |
| metadata | json nullable | no | system_generated | security/review | internal | audit_lifecycle | Safe metadata only |
| created_at | timestamp | yes | system_generated | audit | system | audit_lifecycle | Event time |

---

# 10. ConsentRecord

Tracks user consent or acceptance records for future flows.

| Field | Type | Required | Source | Used by | Sensitivity | Retention | Notes |
|---|---|---:|---|---|---|---|---|
| id | integer | yes | system_generated | database | system | audit_lifecycle | Internal primary key |
| lead_id | foreign key nullable | no | system_generated | relations | system | audit_lifecycle | Related lead if applicable |
| user_id | foreign key nullable | no | system_generated | relations | system | audit_lifecycle | Related user if applicable |
| consent_area | string | yes | user_input/system | compliance | internal | audit_lifecycle | Controlled value |
| consent_version | string | yes | system_generated | compliance | internal | audit_lifecycle | Version of accepted text |
| status | enum/string | yes | user_input/system | compliance | internal | audit_lifecycle | given, withdrawn, expired, not_required |
| given_at | timestamp nullable | no | user_input/system | compliance | system | audit_lifecycle | When given |
| withdrawn_at | timestamp nullable | no | user_input/system | compliance | system | audit_lifecycle | When withdrawn |
| source | string nullable | no | system_generated | compliance | internal | audit_lifecycle | Where it was recorded |
| metadata | json nullable | no | system_generated | compliance | internal | audit_lifecycle | Safe metadata only |
| created_at | timestamp | yes | system_generated | database | system | audit_lifecycle | Creation time |
| updated_at | timestamp | yes | system_generated | database | system | audit_lifecycle | Update time |

---

# 11. User

Internal user model for CRM access.

| Field | Type | Required | Source | Used by | Sensitivity | Retention | Notes |
|---|---|---:|---|---|---|---|---|
| id | integer | yes | system_generated | auth/CRM | system | configuration | Internal primary key |
| name | string | yes | internal_user | CRM/auth | personal | configuration | Internal user name |
| email | string | yes | internal_user | auth | personal | configuration | Login identifier |
| password | hash | yes | internal_user/system | auth | system | configuration | Hashed only |
| role | enum/string | yes | internal_user/admin | auth/permissions | internal | configuration | admin, caseworker, viewer |
| created_at | timestamp | yes | system_generated | database | system | configuration | Creation time |
| updated_at | timestamp | yes | system_generated | database | system | configuration | Update time |

---

# 12. Controlled values

## Lead status

```text
NEW
SCREENING
AWAITING_INFO
QUALIFIED
REJECTED
MITID_PENDING
POA_PENDING
DOCUMENTS_PENDING
REVIEW
ACTIVE_CASE
CLOSED
```

MVP 0.1 may not actively use all later statuses.

## Case category

```text
A
B
C
D
```

## Recommended action

```text
collect_more_information
manual_review
qualified
reject
```

If more actions are added later, they must be added to:

```text
AI prompts
AiResponseValidator
API spec
tests
CRM display mapping
```

## Conversation role

```text
user
assistant
system
```

## Missing information status

```text
missing
requested
answered
ignored
```

## Internal roles

```text
admin
caseworker
viewer
```

---

# 13. Mapping overview

## Public screening start response should include

```text
lead_id or lead_uuid
status
summary
scores
case_category
recommended_action
next_question
confidence if used
```

## CRM lead list should include

```text
lead id or uuid
status
case_category
overall_score
case_strength
information_quality
commercial_value
summary
recommended_action
created_at
updated_at
```

## CRM lead detail should include

```text
lead overview
contact fields if available
conversation
scores
entities
assessment
missing information
status history later
audit events later
```

---

# 14. Developer rules

- Use the field names in this dictionary unless there is a strong reason not to.
- If a field name changes, update database docs, API docs, prompts, tests and README references.
- Do not introduce new enum values without updating validator and tests.
- Do not store unnecessary raw content.
- Keep MVP data minimal.
- Use dummy data only in tests and seeders.

---

# 15. Conclusion

This Data Dictionary v2 should be treated as the primary field reference for MVP 0.1 implementation.

If implementation needs to diverge, the divergence should be documented in the related pull request.
