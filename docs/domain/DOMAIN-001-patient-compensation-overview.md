# DOMAIN-001 - Patient Compensation Overview

Version: 1.0
Status: Active Draft
Scope: Domain knowledge overview

## Purpose

This document gives a high-level overview of the patient compensation domain for ErstatningsHjaelp.

It is intended to support shared understanding across product, AI, UX, engineering and caseworker workflows.

## Important Limitation

This document is not legal advice and should not be used as a final decision guide.

It describes screening concepts, common patterns and terminology that may help structure a possible case.

## What The Product Screens For

ErstatningsHjaelp screens for possible patient injury compensation matters.

The system looks for signals such as:

```text
healthcare involvement
treatment or examination event
possible injury or worsening
possible connection between healthcare handling and consequence
time information
documents or evidence
missing information
need for human review
```

## What The Product Does Not Decide Automatically

The system must not automatically decide:

```text
whether compensation is legally owed
whether a healthcare provider is responsible
whether a user will win a case
final compensation amount
final limitation or time-bar conclusion
```

AI may support intake and screening, but final handling must remain reviewable by staff.

## Main Case Domains

High-level domains:

```text
patient injury
patient complaint without injury
general medical question
insurance or private damage
employment or social case
legal other
unclear
out of scope
```

## Patient Injury Signals

Typical patient injury signals include:

```text
delayed diagnosis
wrong diagnosis
surgical complication or possible error
medication injury
infection after treatment
lack of follow-up
birth-related injury
device or equipment issue
consent or information issue with consequence
```

These are screening signals only.

## Patient Complaint Without Injury

Some matters may involve dissatisfaction without a concrete injury.

Examples:

```text
poor communication
rude treatment
long waiting time without described health consequence
administrative frustration
lack of explanation
```

These may be relevant for complaint handling, but may not fit the compensation screening flow unless a consequence is described.

## General Medical Question

The system may receive general medical questions such as:

```text
What does this symptom mean?
Should I take this medicine?
Is this diagnosis correct?
What treatment should I choose?
```

These should not be handled as compensation screening unless the user describes a healthcare event and possible consequence.

## Key Screening Questions

The first screening layer usually needs to understand:

```text
What happened?
When did it happen?
Who or what healthcare provider was involved?
What consequence did it have?
Why does the user believe it is connected to healthcare handling?
Are there documents?
Has there been a previous complaint or decision?
```

## Common User Uncertainty

Users may not know:

```text
exact date
medical terminology
which provider was responsible
which documents exist
whether the injury is permanent
whether the case is already too old
```

The UX and AI should accept approximate answers and avoid pressure.

## Internal Screening Concepts

Important internal concepts:

```text
case domain
case type
consequence severity
causation signal
time-limit signal
information quality
document signal
confidence
human review need
routing target
```

## Safe Wording Principle

Use cautious language:

```text
possible
may be relevant
currently enough information
needs review
based on what is currently provided
```

Avoid final language:

```text
you have a case
you do not have a case
compensation is guaranteed
compensation is impossible
the hospital is responsible
```

## References

- DOMAIN-000-index.md
- docs/rulebook/RULEBOOK-010-domain-rules.md
- docs/rulebook/RULEBOOK-020-case-type-rules.md
- docs/ux/UX-009-microcopy-and-tone-of-voice.md
