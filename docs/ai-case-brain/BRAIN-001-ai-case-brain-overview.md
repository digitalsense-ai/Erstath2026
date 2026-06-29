# BRAIN-001 - AI Case Brain Overview

Version: 1.0
Status: Draft
Scope: MVP 0.1 to MVP 1.0

## Purpose

AI Case Brain defines how ErstatningsHjaelp should reason about a potential patient compensation case before a human caseworker spends time on it.

It is not a prompt pack.
It is not a free chatbot.
It is the decision intelligence layer behind intake, screening, prioritisation, routing and human review support.

## Core Principle

AI may support understanding and prioritisation.

AI must not make final legal, medical or business decisions.

The system should:

- identify relevant facts
- detect missing information
- assess preliminary case strength
- estimate information quality
- estimate commercial relevance
- suggest the next best action
- explain why a recommendation was made
- escalate uncertain cases to human review

## What The Brain Must Decide

The AI Case Brain should help answer these questions:

1. Is this likely a patient injury compensation matter?
2. Is the case potentially within time limits?
3. Is there a clear injury or consequence?
4. Is there a possible connection between treatment and injury?
5. Is there enough information to proceed?
6. Should the system ask another question?
7. Should the user be guided to documents?
8. Should the user continue to onboarding later?
9. Should the case be routed to human review?
10. Should the user be politely guided away?

## Decision Outputs

The brain should produce structured outputs that can be stored, tested and audited.

Recommended outputs:

```json
{
  "case_domain": "patient_injury",
  "case_type": "diagnosis_delay",
  "case_category": "B",
  "recommended_action": "collect_more_information",
  "routing_target": "patient_compensation_screening",
  "human_review_required": false,
  "confidence": 0.74,
  "reason_codes": [
    "possible_diagnosis_delay",
    "serious_consequence_indicated",
    "event_date_missing"
  ],
  "next_question": "When did the patient first seek medical help?"
}
```

## Brain Components

AI Case Brain consists of these modules:

1. Domain Classifier
2. Case Type Classifier
3. Time Limit Guard
4. Injury and Consequence Detector
5. Causation Signal Detector
6. Evidence and Document Detector
7. Score Interpreter
8. Missing Information Prioritiser
9. Smart Question Selector
10. Routing Engine
11. Human Review Escalation Engine
12. Reason Code Generator
13. Confidence Model
14. Guide-Away Engine

## Relationship To Existing Packs

AI Case Brain uses:

- Database specs for persistence
- JSON contracts for structured output
- Prompt pack for model-facing instructions
- API readiness pack for endpoint implementation
- Business test cases for expected behavior
- Policies for guardrails
- Human review policy for escalation

## MVP Role

In MVP 0.1, the brain should support the first conversation slice with deterministic fake AI behavior.

In MVP 0.2 and later, the brain should become the rule and reasoning layer for real AI output validation and decision support.

## Non-Negotiable Rules

- Never promise compensation.
- Never state that the user has a valid legal claim as a final conclusion.
- Never replace human review for uncertain or high-impact cases.
- Never ask for MitID before the case has been screened as relevant.
- Never ask multiple unnecessary questions at once.
- Never treat AI-extracted facts as confirmed by default.
- Always preserve reason codes for important recommendations.

## First Brain Milestone

The first useful milestone is:

```text
Given one user message, classify the possible case type, detect missing information, select one next question and return reason codes.
```

This aligns with the first vertical slice:

```text
POST /api/v1/conversations
```

## References

- docs/contracts/CONTRACT-001-json-contracts-overview.md
- docs/prompts/PROMPT-001-ai-prompt-pack-overview.md
- docs/api/API-READINESS-003-first-vertical-slice-plan.md
- docs/mvp-start/MVP-START-004-fake-ai-provider-implementation-plan.md
- test-cases/TC-001 to TC-100
