# SPEC-011 - JSON Contracts Overview

Version: 1.0 Draft
Status: Active
Owner: Product / Engineering
Domain: JSON Contracts
Related: SPEC-001-api-overview.md, SPEC-002-conversation-api.md, SPEC-003-screening-and-decision-api.md, SPEC-004-crm-and-review-api.md, SPEC-005-audit-and-health-api.md

## Purpose

Define the common JSON contract principles for the MVP.

The goal is to make communication between API controllers, services, AI output validation, decision logic, CRM handover and tests predictable.

## Standard API Envelope

All API responses should use this envelope unless there is a deliberate exception:

```json
{
  "data": {},
  "meta": {},
  "errors": []
}
```

## Standard Error Object

```json
{
  "code": "string",
  "message": "string",
  "field": "string|null"
}
```

## Contract Groups

```text
SPEC-012 Conversation JSON Contracts
SPEC-013 Fact and Missing Information JSON Contracts
SPEC-014 Screening and Decision JSON Contracts
SPEC-015 CRM Review Audit JSON Contracts
```

## General Rules

- JSON contracts must use snake_case keys.
- Unknown or unavailable values should be null instead of guessed.
- AI-created facts must be marked unconfirmed.
- Reason codes must be machine-readable strings.
- User-facing text must not contain final legal conclusions.
- Test examples must use fictional data only.

## Versioning

Contracts should include a version field where the structure may evolve.

Example:

```json
{
  "contract_version": "v1"
}
```

## Definition of Done

```text
standard envelope defined
standard error shape defined
contract groups listed
general JSON rules documented
versioning rule documented
```
