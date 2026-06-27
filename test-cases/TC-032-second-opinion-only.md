# TC-032 - Second Opinion Only

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate a flow where the fictional user mainly wants a second opinion and does not describe harm.

## Initial User Description

```text
I mostly want someone else to look at what happened. I am not sure there was any injury or consequence.
```

## Expected Conversation Behavior

- acknowledge the request
- ask whether any injury or consequence occurred
- explain what information is needed for compensation intake
- continue only if consequence is described
- guide elsewhere if the user only wants general advice

## Expected Facts

```text
second_opinion_request = true
injury_unclear = true
consequence_unclear = true
```

## Expected Missing Information

```text
whether_injury_exists
whether_consequence_exists
```

## Expected Next Step

```text
continue_intake_if_consequence_described or guide_elsewhere
```

## Acceptance Checks

```text
system clarifies purpose
injury and consequence are requested
respectful guide-away can occur
```
