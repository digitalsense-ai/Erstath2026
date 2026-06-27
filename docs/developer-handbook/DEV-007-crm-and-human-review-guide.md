# DEV-007 - CRM and Human Review Guide

Version: 1.0 Draft
Status: Planned
Owner: Engineering
Domain: Developer Handbook / CRM and Review
Related: docs/05-crm-workflow.md, docs/specifications/SPEC-004-crm-and-review-api.md, backlog/issues/ISSUE-057-create-crm-lead-board-endpoint.md, backlog/issues/ISSUE-068-create-human-review-queue-endpoint.md

## Purpose

Explain how CRM handover and human review should be implemented.

## CRM Responsibilities

The CRM module should:

- list leads for internal handling
- show lead detail
- expose confirmed facts and open missing information
- show latest decision context
- build and store handover snapshots

## Review Responsibilities

The review module should:

- list leads needing review
- show review detail
- update review status
- store review outcome
- preserve review notes where allowed

## Core Components

```text
CrmLeadBoardController
CrmLeadDetailController
CrmLeadBoardResource
CrmLeadDetailResource
CrmHandoverSnapshotBuilder
ReviewQueueController
ReviewDetailController
ReviewStatusService
ReviewOutcomeService
```

## Key Rules

- CRM should use stored facts, decisions and snapshots.
- Review outcomes should be stored separately from decisions.
- Internal responses must avoid unnecessary sensitive payloads.
- Tests must use fake data only.

## Test Focus

- CRM board response
- CRM detail response
- handover snapshot creation
- review queue response
- review status update
- review outcome persistence

## Definition of Done

```text
CRM responsibilities explained
review responsibilities explained
core components listed
test focus documented
```
