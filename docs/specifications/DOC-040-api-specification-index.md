# DOC-040 - API Specification Index

Version: 1.0 Draft
Status: Draft
Owner: Product / Engineering
Domain: API Specification
Related: README.md, docs/04-conversation-engine.md, docs/05-crm-workflow.md, docs/31-acceptance-and-routing-architecture.md, backlog/BACKLOG-000-traceable-backlog-index.md

## Purpose

This document is the index for the MVP API specification.

The purpose is to make backend implementation predictable by defining API areas, request and response contracts, error behavior and ownership.

## API Areas

The MVP API is split into the following areas:

```text
Conversation API
CRM API
Human Review API
Decision API
Internal Screening API
Audit API
```

## Documents

```text
DOC-041 - Conversation API Specification
DOC-042 - CRM API Specification
DOC-043 - Human Review API Specification
DOC-044 - Decision and Screening API Specification
DOC-045 - API Error and Response Standards
```

## General API Principles

- APIs should return predictable JSON.
- API responses should avoid unnecessary sensitive data.
- Internal implementation details should not be exposed.
- All examples must use fake data only.
- API behavior must match the backlog and architecture documents.
- Breaking changes must be documented before implementation.

## Standard Response Shape

Recommended success response shape:

```json
{
  "data": {},
  "meta": {}
}
```

Recommended error response shape:

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "details": {}
  }
}
```

## Authentication Note

Authentication and access rules are documented separately in the security sprint. Until implemented, API examples must not imply public access to CRM, review or internal endpoints.

## Definition of Done

```text
API areas listed
API documents linked
standard response shape defined
fake-data rule stated
```
