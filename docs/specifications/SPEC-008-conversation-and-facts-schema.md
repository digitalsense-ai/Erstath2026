# SPEC-008 - Conversation and Facts Schema

Version: 1.0 Draft
Status: Planned
Owner: Product / Engineering
Domain: Database Specification / Conversation and Facts
Related: docs/12-data-dictionary.md, backlog/issues/ISSUE-010-create-lead-conversations-migration-and-model.md, backlog/issues/ISSUE-011-create-lead-facts-migration-and-model.md, backlog/issues/ISSUE-012-create-lead-missing-information-migration-and-model.md

## Purpose

Define the MVP schema for conversation messages, structured facts and missing information.

## Table: lead_conversations

Purpose: stores user and system messages for a lead.

Suggested columns:

```text
id                  bigint or uuid primary key
lead_id             foreign key indexed
role                string indexed
message             text
sequence            integer nullable indexed
metadata            json nullable
created_at          timestamp
updated_at          timestamp
```

Role values:

```text
user
system
staff
```

## Table: lead_facts

Purpose: stores structured facts extracted from conversation or later sources.

Suggested columns:

```text
id                  bigint or uuid primary key
lead_id             foreign key indexed
fact_key            string indexed
fact_value          json or text
source              string indexed
confidence          decimal nullable
confirmation_state  string indexed
confirmed_at        timestamp nullable
corrected_at        timestamp nullable
metadata            json nullable
created_at          timestamp
updated_at          timestamp
```

Confirmation states:

```text
unconfirmed
confirmed
corrected
rejected
```

## Table: lead_missing_information

Purpose: stores information still needed before screening, decision or handover can continue safely.

Suggested columns:

```text
id                  bigint or uuid primary key
lead_id             foreign key indexed
missing_key         string indexed
status              string indexed
reason              string nullable
priority            string nullable indexed
resolved_at         timestamp nullable
metadata            json nullable
created_at          timestamp
updated_at          timestamp
```

Status values:

```text
open
resolved
deferred
not_needed
```

## Relationship Rules

- Conversation messages belong to Lead.
- Facts belong to Lead.
- Missing information records belong to Lead.
- AI-created facts must be unconfirmed by default.
- Confirmed facts should not be overwritten without explicit correction handling.

## Indexes

Recommended indexes:

```text
lead_conversations: lead_id, role, sequence, created_at
lead_facts: lead_id, fact_key, source, confirmation_state
lead_missing_information: lead_id, missing_key, status, priority
```

## Definition of Done

```text
conversation schema defined
facts schema defined
missing information schema defined
relationship rules documented
indexes listed
```
