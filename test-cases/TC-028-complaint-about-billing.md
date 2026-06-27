# TC-028 - Complaint About Billing

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate a guide-away flow where the fictional user describes a billing or payment concern rather than treatment harm.

## Initial User Description

```text
I am unhappy about the bill I received after treatment. I do not have an injury, but I think the cost is wrong.
```

## Expected Conversation Behavior

- acknowledge the concern
- clarify whether any treatment harm is described
- explain that billing concerns may follow another path
- guide elsewhere if no harm or consequence is confirmed

## Expected Facts

```text
billing_complaint = true
harm_described = false
complaint_path_possible = true
```

## Expected Missing Information

```text
none_if_no_harm_confirmed
```

## Expected Next Step

```text
guide_elsewhere
```

## Acceptance Checks

```text
billing concern is recognized
harm is clarified before guide-away
respectful explanation is given
no final legal conclusion is claimed
```
