# CONTRACT-001 - JSON Contracts Overview

Version: 1.0 Draft
Status: Active
Owner: Product / Engineering / AI
Domain: JSON Contracts
Related: docs/specifications/SPEC-001-api-overview.md, docs/specifications/SPEC-002-conversation-api.md, docs/specifications/SPEC-003-screening-and-decision-api.md, docs/specifications/SPEC-004-crm-and-review-api.md, reviews/REV-003-database-readiness-review.md

## Purpose

Define the MVP JSON contract layer before implementation.

The contracts describe how the application, AI services, decision engine, CRM, review and audit modules exchange structured data.

## Why Contracts Matter

JSON contracts should prevent hidden coupling between modules.

They should make it clear:

```text
what each module receives
what each module returns
which fields are required
which fields are optional
how uncertainty is represented
how validation errors are handled
```

## Contract Groups

The MVP contract set should include:

```text
CONTRACT-001 JSON Contracts Overview
CONTRACT-002 Conversation Message Contract
CONTRACT-003 Fact Extraction Contract
CONTRACT-004 Screening Result Contract
CONTRACT-005 Decision Result Contract
CONTRACT-006 CRM Handover Contract
CONTRACT-007 Human Review Contract
CONTRACT-008 Audit Event Contract
```

## General Envelope

All internal JSON payloads should follow a predictable shape where possible:

```json
{
  "data": {},
  "meta": {},
  "errors": []
}
```

## Error Shape

```json
{
  "code": "string",
  "message": "string",
  "field": "string|null"
}
```

## Uncertainty Rule

The system must represent uncertainty explicitly.

Do not convert uncertainty into false certainty.

Examples:

```json
{
  "value": "spring_2020",
  "confidence": 0.62,
  "is_confirmed": false,
  "uncertainty_note": "User only remembered approximate timing."
}
```

## Confirmation Rule

AI-created facts must be unconfirmed by default.

```json
{
  "source": "ai",
  "confirmation_state": "unconfirmed"
}
```

Confirmed facts must not be overwritten silently.

## Fake Data Rule

All examples in contract documentation must use fictional data only.

Do not use:

```text
real names
real emails
real case stories
real identifiers
production data
```

## Definition of Done

```text
JSON contract groups defined
general envelope defined
error shape defined
uncertainty rule defined
confirmation rule defined
fake-data rule documented
```
