# DEV-005 - AI Integration Guide

Version: 1.0 Draft
Status: Planned
Owner: Engineering
Domain: Developer Handbook / AI
Related: docs/03-scoring-engine.md, docs/specifications/SPEC-003-screening-and-decision-api.md, policies/POL-008-ai-usage-policy.md

## Purpose

Explain how AI-related functionality should be implemented in the MVP.

## Main Responsibilities

AI-related services should:

- build structured screening requests
- validate screening responses
- store AI run metadata
- map validated output to facts and scores
- handle fallback states safely

## Main Components

```text
AiScreeningServiceInterface
AiScreeningRequestBuilder
AiScreeningResponseValidator
AiScreeningMapper
AiRunLogger
```

## Validation Rule

AI output must be validated before it is stored or used.

Invalid or incomplete output must not be mapped into facts or scores.

## Fact Rule

AI-created facts are unconfirmed by default.

A user or reviewer must confirm facts before they become confirmed facts.

## Logging Rule

AI run records should store metadata needed for review and troubleshooting.

Do not store unnecessary sensitive payloads.

## Prompt Version Rule

Every AI run should reference a prompt name and prompt version when available.

## Definition of Done

```text
AI responsibilities documented
main components listed
validation rule documented
fact rule documented
logging rule documented
prompt version rule documented
```
