# TC-004 - Infection After Surgery With Documents

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate an intake flow where the user describes infection after surgery and already has relevant documents.

## Scenario

A fictional patient had surgery, developed an infection, received antibiotics and has discharge notes.

## Initial User Description

```text
I had surgery at the hospital. A few days later the wound became infected and I needed antibiotics. I have discharge notes and messages from the hospital.
```

## Expected Conversation Behavior

- acknowledge the situation
- ask when surgery and infection happened
- ask what documents are available
- avoid asking for documents twice
- confirm understood facts before later use

## Expected Facts

```text
treatment_context = surgery
complication = infection
follow_up_treatment = antibiotics
documents_available = true
```

## Expected Missing Information

```text
surgery_date
infection_date
hospital_name
current_consequence
```

## Expected Next Step

```text
continue_intake
```

## Acceptance Checks

```text
facts created as unconfirmed
missing dates tracked
documents recognized
Smart Skip avoids duplicate document question
```
