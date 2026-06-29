# MVP-START-003 - First Feature Test Plan

Version: 1.0
Status: Ready for implementation
Scope: MVP 0.1

## Purpose

This document defines the first feature tests that should be created after the Laravel baseline is ready.

The goal is to prove the foundation and the first conversation slice before real AI integration is added.

## Test Strategy

Start with small feature tests that prove real API behavior.

Do not begin with large end-to-end browser tests.

Use Laravel feature tests for API endpoints and unit tests for services.

## Test 1 - Health Endpoint

Endpoint:

```text
GET /api/v1/health
```

Expected:

- status code 200
- JSON response
- response contains status ok

Example expected response:

```json
{
  "data": {
    "status": "ok"
  }
}
```

Purpose:

Prove routing, JSON response format and test runner.

## Test 2 - Start Conversation

Endpoint:

```text
POST /api/v1/conversations
```

Input:

```json
{
  "message": "My mother was diagnosed with cancer too late.",
  "source": "web",
  "locale": "da"
}
```

Expected:

- status code 201 or 200
- lead is created
- conversation is created
- user message is stored
- assistant message is returned
- next_question is present
- missing_information is present

Business testcase:

- TC-001 Basic Patient Injury Flow

## Test 3 - Continue Conversation

Endpoint:

```text
POST /api/v1/conversations/{conversation}/messages
```

Input:

```json
{
  "message": "It happened in 2022 at Herlev Hospital."
}
```

Expected:

- status code 200
- new user message is stored
- assistant response is stored
- facts are updated
- repeated question is avoided where possible

Business testcases:

- TC-016 Repeated Question Prevention
- TC-067 Prior Answer Reuse

## Test 4 - Validation Error

Endpoint:

```text
POST /api/v1/conversations
```

Input:

```json
{}
```

Expected:

- status code 422
- standard error shape
- code VALIDATION_ERROR
- no HTML response

Reference:

- API-READINESS-004

## Test 5 - Fake AI Fallback

Scenario:

Fake AI service can simulate unavailable provider or invalid output.

Expected:

- system does not crash
- lead can be routed to review or safe fallback
- standard error or fallback response is returned

Business testcases:

- TC-088 AI Service Unavailable Fallback
- TC-089 Invalid AI Output Fallback

## Recommended Test Files

Create:

```text
tests/Feature/Api/HealthEndpointTest.php
tests/Feature/Api/ConversationStartTest.php
tests/Feature/Api/ConversationMessageTest.php
tests/Feature/Api/ApiValidationErrorTest.php
tests/Feature/Api/FakeAiFallbackTest.php
```

## Test Data Rules

All test data must be fictional.

Do not use real patient names, CPR numbers, hospital records or real case material.

## Done Criteria

This test plan is complete when:

- the health endpoint test passes
- the first conversation start test passes
- the continue conversation test passes
- validation errors use standard JSON
- fake AI fallback behavior is tested

## References

- TC-001
- TC-016
- TC-067
- TC-088
- TC-089
- API-READINESS-003
- API-READINESS-004
