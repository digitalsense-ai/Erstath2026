# TC-091 - Rate Limit or Timeout Fallback

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that temporary service limits or timeouts are handled safely.

## Initial User Description

```text
The user submits a message while an external service is slow or temporarily limited.
```

## Expected System Behavior

- save the user message
- keep the lead record available
- store fallback status
- avoid exposing technical details
- allow retry or review later

## Expected Facts

```text
service_timeout_or_limit = true
message_saved = true
fallback_status = true
```

## Expected Missing Information

```text
processing_result_pending
```

## Expected Next Step

```text
retry_later_or_review
```

## Acceptance Checks

```text
message is not lost
lead remains available
fallback status is stored
technical details are not shown to user
```
