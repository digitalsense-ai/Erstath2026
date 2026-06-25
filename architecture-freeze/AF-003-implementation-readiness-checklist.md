# AF-003 - Implementation Readiness Checklist

Version: 1.0 Draft
Status: Draft
Owner: Enterprise Architecture / Product / Delivery
Domain: Architecture Freeze / Delivery Readiness
Related: AF-001 Architecture Freeze Report, AF-002 Repository Migration Map, DOC-003 Architecture Index, docs/serveradmin-handoff-plan.md, docs/27-sprint-backlog-masterplan.md

## Purpose

This checklist defines when ErstatningsHjaelp is ready to move from architecture and planning into implementation.

The purpose is to avoid starting code from outdated or conflicting documents.

Implementation should begin only when the repository has a clear and traceable path from architecture to backlog to code.

---

## Current Readiness Status

```text
Ready for architecture work: yes
Ready for repository consistency work: yes
Ready for Policy Pack: yes
Ready for traceable implementation backlog: not yet
Ready for ServerAdmin coding: not yet
```

This document does not block all work.

It defines which kind of work is safe to do next.

---

## Readiness Levels

### Level 1 - Architecture Baseline Ready

The project has a stable architecture direction.

### Level 2 - Policy Ready

Business and trust rules are documented enough for implementation.

### Level 3 - Backlog Ready

Implementation work is broken into traceable epics and issues.

### Level 4 - Development Ready

ServerAdmin or developers can begin Sprint 0 safely.

---

# Level 1 - Architecture Baseline Ready

## Checklist

| Requirement | Status |
|---|---|
| README points to current architecture baseline | Done |
| Architecture Index exists | Done |
| Product Constitution exists | Done |
| Architecture Overview exists | Done |
| Repository Constitution exists | Done |
| Enterprise Architecture Principles exist | Done |
| Experience Pack exists | Done |
| Pattern Library exists | Done |
| Decision Pack exists | Done |
| Repository Consistency Review exists | Done |
| Architecture Freeze Report exists | Done |
| Repository Migration Map exists | Done |
| Implementation Readiness Checklist exists | Done |

## Level 1 Decision

```text
Level 1 readiness: achieved
```

The project has an architecture baseline.

---

# Level 2 - Policy Ready

## Required Policy Pack

Before implementation logic is finalized, the following policies should exist:

```text
POL-001 Acceptance Policy
POL-002 Routing Policy
POL-003 Confidence Policy
POL-004 Identity and Consent Policy
POL-005 Human Review Policy
POL-006 Document Collection Policy
POL-007 Communication Policy
POL-008 AI Usage Policy
```

## Checklist

| Requirement | Status |
|---|---|
| Acceptance rules documented | Not started |
| Routing rules documented | Not started |
| Confidence thresholds and review rules documented | Not started |
| Identity and consent trigger rules documented | Not started |
| Human review triggers documented | Not started |
| Document collection timing rules documented | Not started |
| User-facing communication rules documented | Not started |
| AI usage boundaries documented | Not started |
| Policies reference relevant DEC and PAT documents | Not started |

## Level 2 Decision

```text
Level 2 readiness: not achieved
```

Next required work: create Policy Pack v1.0.

---

# Level 3 - Backlog Ready

## Required Backlog Structure

The implementation backlog should be created under:

```text
/backlog/epics
/backlog/issues
/sprints
```

The old `/github` planning files may be reused, but must be migrated or mapped.

## Required Epic Areas

```text
Epic A - Laravel Foundation
Epic B - Data Model and Migrations
Epic C - Digital First Conversation
Epic D - AI Screening Service
Epic E - Decision and Routing Engine
Epic F - CRM Lead Board and Detail
Epic G - Human Review Queue
Epic H - Security, Audit and Testing
```

## Checklist

| Requirement | Status |
|---|---|
| /backlog/epics exists | Not started |
| /backlog/issues exists | Not started |
| /sprints exists | Not started |
| MVP epics rewritten with architecture references | Not started |
| MVP issues rewritten with DEC/PAT/POL references | Not started |
| Old GitHub PR plans reviewed | Not started |
| Sprint 0 created | Not started |
| Sprint 1 created | Not started |
| Sprint 2 created | Not started |
| Sprint 3 created | Not started |
| Sprint 4 created | Not started |
| Sprint 5 created | Not started |

## Issue Readiness Standard

Each implementation issue should include:

```text
Purpose
Related architecture
Related decisions
Related patterns
Related policies
Data impact
Acceptance criteria
Test requirements
Out of scope
```

## Level 3 Decision

```text
Level 3 readiness: not achieved
```

Next required work after Policy Pack: create traceable implementation backlog.

---

# Level 4 - Development Ready

## Sprint 0 Development Gate

ServerAdmin may begin Sprint 0 only when:

| Requirement | Status |
|---|---|
| Architecture baseline complete | Done |
| Policy Pack v1.0 complete | Not started |
| Traceable backlog created | Not started |
| Sprint 0 issue set created | Not started |
| Data Dictionary v2 accepted as implementation source | Draft |
| ServerAdmin handoff updated to Ready for implementation = yes | Not yet |
| Security rules for local development defined | Partially |
| No real data policy visible in implementation docs | Yes |
| Testing expectations documented | Partially |
| Out-of-scope items clearly listed | Yes |

## Level 4 Decision

```text
Level 4 readiness: not achieved
```

Development should not start yet.

---

## Safe Work To Do Now

The following work is safe now:

```text
create Policy Pack
review remaining old docs
create backlog folders
rewrite epics and issues
prepare sprint definitions
review prompts against policies
update Architecture Index
```

---

## Work That Should Wait

The following work should wait until Level 4 is achieved:

```text
Laravel implementation
production-like deployment
real AI integration in code
real personal data handling
MitID integration
active document upload
consent signing flows
external submission workflows
```

---

## MVP Implementation Entry Criteria

Before Sprint 0 starts, the project should be able to answer:

1. Which architecture document supports this work?
2. Which decision card does this work implement?
3. Which policy constrains this work?
4. Which data structures are affected?
5. What should be tested?
6. What is explicitly out of scope?
7. What must not be exposed to the user?
8. What must be auditable?

If an issue cannot answer these questions, it is not ready.

---

## ServerAdmin Handoff Criteria

Before sending the project to ServerAdmin for coding, update:

```text
docs/serveradmin-handoff-plan.md
```

It should say:

```text
Ready for implementation = yes
```

Only after:

```text
Policy Pack complete
Traceable backlog complete
Sprint 0 defined
Implementation risks listed
```

---

## Architecture Freeze Completion

Architecture Freeze program consists of:

```text
AF-001 Architecture Freeze Report
AF-002 Repository Migration Map
AF-003 Implementation Readiness Checklist
```

With this checklist created, Architecture Freeze documentation is complete.

However, implementation readiness is not complete until Level 4 is achieved.

---

## Final Readiness Decision

```text
Architecture Freeze documentation: complete
Architecture baseline: ready
Policy readiness: not ready
Backlog readiness: not ready
Development readiness: not ready
```

The next correct phase is:

```text
Policy Pack v1.0
```
