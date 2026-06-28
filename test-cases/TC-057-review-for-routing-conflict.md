# TC-057 - Review for Routing Conflict

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system recommends review when routing signals conflict.

## Initial User Description

```text
Part of this seems like a treatment issue, but part of it seems like a complaint about the process. I am not sure where it belongs.
```

## Expected Conversation Behavior

- capture both possible paths
- ask clarifying questions
- avoid forcing a single route too early
- recommend review if routing remains unclear

## Expected Facts

```text
routing_conflict = true
treatment_issue_possible = true
complaint_path_possible = true
```

## Expected Missing Information

```text
main_concern
current_consequence
provider_context
```

## Expected Next Step

```text
human_review
```

## Acceptance Checks

```text
conflicting routing signals are preserved
clarification is requested
human review can be recommended
```
