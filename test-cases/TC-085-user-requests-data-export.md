# TC-085 - User Requests Data Export

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that a user request for their stored information is routed safely.

## Initial User Description

```text
Can I get a copy of the information you have about me?
```

## Expected Behavior

- recognize the data access request
- avoid continuing normal intake until intent is clear
- route to privacy request handling
- avoid exposing data directly in chat without process controls

## Expected Facts

```text
data_access_request = true
privacy_process_needed = true
normal_intake_paused = true
```

## Expected Next Step

```text
privacy_request_handling
```

## Acceptance Checks

```text
data access request is recognized
normal intake is paused
privacy process is used
no uncontrolled data exposure occurs
```
