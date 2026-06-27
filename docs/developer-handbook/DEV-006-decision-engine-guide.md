# DEV-006 - Decision Engine Guide

Version: 1.0 Draft
Status: Planned
Owner: Engineering
Domain: Developer Handbook / Decision Engine
Related: docs/31-acceptance-and-routing-architecture.md, docs/specifications/SPEC-003-screening-and-decision-api.md, backlog/issues/ISSUE-045-create-decision-engine-service-interface.md

## Purpose

Explain how the decision engine should be implemented.

## Main Responsibilities

The decision engine should:

- build structured decision input
- evaluate acceptance rules
- evaluate recommended next step
- evaluate review triggers
- persist decision results
- store reason codes

## Core Components

```text
DecisionEngineServiceInterface
DecisionInputBuilder
AcceptancePolicyEvaluator
NextStepEvaluator
ReviewTriggerEvaluator
DecisionResultPersister
DecisionReasonCodeCatalog
DecisionEngineOrchestrator
```

## Key Rules

- Scores are inputs, not final decisions.
- Decisions must include reason codes.
- Unconfirmed facts must be handled separately from confirmed facts.
- The decision engine should not render CRM responses.
- Tests must use fake data only.

## Test Focus

- decision input building
- acceptance evaluation
- next step evaluation
- review trigger evaluation
- decision persistence
- feature-level evaluation flow

## Definition of Done

```text
decision components explained
reason code rule documented
test focus documented
```
