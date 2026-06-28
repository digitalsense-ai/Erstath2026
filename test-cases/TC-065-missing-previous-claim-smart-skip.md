# TC-065 - Missing Previous Claim Smart Skip

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system records whether the fictional user has previously complained or submitted a claim, and avoids asking repeatedly.

## Initial User Description

```text
I have not complained before and I have not received any decision about this.
```

## Expected Conversation Behavior

- store that there was no previous complaint
- store that there was no previous decision
- avoid repeating questions about previous complaint or decision
- continue with the next most important missing information

## Expected Facts

```text
previous_claim = false
previous_decision = false
previous_claim_status_known = true
```

## Expected Missing Information

```text
none_for_previous_claim_status
```

## Expected Next Step

```text
continue_intake
```

## Acceptance Checks

```text
previous claim status is stored
previous decision status is stored
Smart Skip prevents duplicate status question
conversation continues to next priority
```
