# DEV-004 - Conversation Engine Guide

Version: 1.0 Draft
Status: Planned
Owner: Engineering
Domain: Developer Handbook / Conversation
Related: docs/04-conversation-engine.md, docs/specifications/SPEC-002-conversation-api.md, docs/specifications/SPEC-008-conversation-and-facts-schema.md

## Purpose

Explain how the conversation engine should be implemented.

## Main Responsibilities

The conversation engine should:

- start a lead conversation
- store user and system messages
- maintain conversation state
- identify known facts
- track missing information
- support confirmation of understanding
- prepare summaries for later handover

## Main Components

```text
ConversationSessionController
ConversationSessionService
FactExtractionStub
FactMergeService
MissingInformationService
SmartSkipService
ConversationSummaryBuilder
```

## State Principle

The system should always know the current conversation state before deciding the next action.

Invalid states must return a controlled response.

## Fact Principle

Facts created from system processing should be unconfirmed by default.

Confirmed facts should not be overwritten without correction handling.

## Smart Skip Principle

Do not ask for information that is already confirmed.

Do ask when required information is missing and relevant.

## Definition of Done

```text
conversation responsibilities documented
main components listed
state principle documented
fact principle documented
Smart Skip principle documented
```
