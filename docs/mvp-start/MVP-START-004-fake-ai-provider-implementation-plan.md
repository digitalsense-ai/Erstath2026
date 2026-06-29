# MVP-START-004 - Fake AI Provider Implementation Plan

Version: 1.0
Status: Ready for implementation
Scope: MVP 0.1

## Purpose

This document defines the first fake AI provider used during MVP development.

The fake provider allows the team to build and test the conversation, fact extraction, missing information and decision flow before connecting to a real AI provider.

## Why Fake AI Comes First

The first implementation slice must be deterministic.

A fake AI provider makes tests stable and avoids depending on:

- external provider uptime
- API keys
- model changes
- token costs
- prompt instability

## Interface

Create an interface such as:

```php
interface AiScreeningServiceInterface
{
    public function analyse(array $input): array;
}
```

The exact signature may be adjusted when DTOs are implemented.

## Fake Implementation

Create:

```text
App\Services\Screening\FakeAiScreeningService
```

The fake service should return predictable structured data.

## Example Input

```json
{
  "message": "My mother was diagnosed with cancer too late.",
  "locale": "da",
  "conversation_history": []
}
```

## Example Output

```json
{
  "summary": "Possible delayed diagnosis with serious consequence. Key details are missing.",
  "facts": [
    {
      "key": "injury_type",
      "value": "diagnosis_delay",
      "confidence": 0.82,
      "confirmation_status": "unconfirmed"
    },
    {
      "key": "condition_type",
      "value": "cancer",
      "confidence": 0.78,
      "confirmation_status": "unconfirmed"
    }
  ],
  "missing_information": [
    {
      "key": "event_date",
      "priority": 100,
      "question": "When did this happen?"
    },
    {
      "key": "provider",
      "priority": 90,
      "question": "Which hospital or clinic was involved?"
    }
  ],
  "next_question": "When did this happen?",
  "confidence": 0.8
}
```

## Configuration

Use environment settings such as:

```text
AI_ENABLED=false
AI_FAKE_MODE=true
AI_PROVIDER=fake
```

When fake mode is enabled, bind the interface to FakeAiScreeningService.

## Service Binding

Recommended place:

```text
AppServiceProvider
```

or a dedicated provider later:

```text
AiServiceProvider
```

Binding rule:

- if AI_PROVIDER=fake, use FakeAiScreeningService
- later, if AI_PROVIDER=openai, use OpenAiScreeningService

## Required Fake Scenarios

The fake provider should support at least these scenarios:

### 1. Basic patient injury

Used for TC-001.

Returns:

- possible injury type
- missing event date
- next question

### 2. Missing information

Used for TC-061 and TC-066.

Returns:

- one missing item at a time
- priority ordering

### 3. Repeated question prevention

Used for TC-016.

Returns a different next question when the answer already covers the previous missing item.

### 4. Provider unavailable simulation

Used for TC-088.

Returns or throws a controlled unavailable state.

### 5. Invalid output simulation

Used for TC-089.

Returns malformed or incomplete data that the validator must reject.

## Validation

Even fake output must pass the same validator as real AI output.

This ensures the real provider can be added later without changing the rest of the application flow.

## What Not To Do

Do not:

- call a real AI provider in the first slice
- put prompt text directly inside controllers
- store raw provider secrets in code
- skip validation because the provider is fake
- let fake data look like real patient data

## Done Criteria

Fake AI provider is ready when:

- interface exists
- fake implementation exists
- service binding works
- first conversation feature test uses fake AI
- fake output is validated
- fallback scenarios can be tested

## References

- API-READINESS-003 First Vertical Slice Plan
- API-READINESS-004 Error and Response Standard
- CONTRACT-003 Fact Extraction Contract
- PROMPT-001 to PROMPT-007
- TC-001
- TC-016
- TC-061
- TC-066
- TC-088
- TC-089
