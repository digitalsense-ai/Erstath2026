# TC-049 - Review Needed Before CRM Handover

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that a lead can be held for human review before CRM handover when the case is incomplete or uncertain.

## Initial User Description

```text
I have described what I remember, but I am missing important details and I am not sure whether the case is ready to send on.
```

## Expected Conversation Behavior

- acknowledge that the case may be incomplete
- identify the most important missing information
- avoid sending directly to CRM if review is needed first
- create or expose review context

## Expected Facts

```text
case_incomplete = true
handover_readiness_unclear = true
review_before_crm_needed = true
```

## Expected Missing Information

```text
key_missing_details
handover_readiness_reason
```

## Expected Next Step

```text
human_review
```

## Acceptance Checks

```text
CRM handover is not forced
review state is available
missing information is visible
reason code can be stored
```
