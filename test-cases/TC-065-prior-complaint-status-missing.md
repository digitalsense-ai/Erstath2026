# TC-065 - Prior Complaint Status Missing

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system asks whether the fictional user has already complained or received a prior response when this matters.

## Initial User Description

```text
I have already talked to someone about this before, but I do not remember whether there was a formal response.
```

## Expected Conversation Behavior

- ask whether there was a prior complaint or response
- accept uncertainty
- ask for approximate status rather than exact wording
- avoid asking the same status question again once answered

## Expected Facts

```text
prior_contact_possible = true
prior_response_unclear = true
status_information_missing = true
```

## Expected Missing Information

```text
prior_complaint_status
prior_response_status
```

## Expected Next Step

```text
continue_intake
```

## Acceptance Checks

```text
prior status gap is detected
uncertainty is accepted
Smart Skip prevents duplicate status question
missing information is updated
```
