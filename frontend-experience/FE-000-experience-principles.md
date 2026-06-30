# FE-000 - Experience Principles

Version: 1.0
Status: Active Draft
Scope: Frontend experience principles

## Purpose

This document defines the experience principles for the ErstatningsHjaelp frontend.

These principles should guide design, prototype, frontend implementation and user testing.

## Core Principle

We do not design screens first.

We design the feeling of being helped.

## Desired User Feeling

The user should feel:

```text
safe
understood
not judged
not overwhelmed
able to start without knowing the rules
```

The user should not feel:

```text
examined
rejected
forced into a form
lost in legal language
blocked because they lack documents
```

## Principle 1 - AI Speaks First

The first experience should not be an empty form.

AI should gently welcome the user and explain that they can write in their own words.

Reason:

```text
A blank form creates pressure.
A calm welcome creates permission to start.
```

## Principle 2 - No Form On First Screen

The first user action should be free text.

Do not ask for:

```text
CPR
address
phone
hospital
case number
document upload
legal category
```

on the first screen.

Reason:

```text
The first goal is to start the story, not complete administration.
```

## Principle 3 - Start In Under 30 Seconds

A user should be able to start without reading a long page.

Target:

```text
User understands what to do within 10 seconds.
User can begin writing within 30 seconds.
```

## Principle 4 - One Question At A Time

After the first message, AI should ask one important question at a time.

Reason:

```text
The user may be stressed, uncertain or emotionally affected.
One question feels manageable.
```

## Principle 5 - AI Writes Like A Helpful Person

AI text should feel like a calm helper, not a system message.

Use:

```text
Jeg ved godt, det kan være svært at vide, hvor man skal starte.
Skriv bare et par sætninger.
Jeg stiller de rigtige spørgsmål bagefter.
```

Avoid:

```text
Please complete the required fields.
Your input is insufficient.
Case classification failed.
```

## Principle 6 - Typing Must Never Block The User

Typing animation should create warmth, but never slow the user down.

Rules:

```text
user can type immediately
animation can be skipped by typing
first welcome may animate slowly
later AI responses should be faster
```

## Principle 7 - Progress Must Feel Real

The system should show that each answer moves the user forward.

Use:

```text
short progress hints
clear next step
saving states
AI thinking states
```

Avoid fake precision such as:

```text
72% chance of compensation
```

## Principle 8 - Do Not Show Internal Judgement

The user should not see:

```text
commercial value
raw reason codes
internal confidence score
review priority
case weakness labels
```

User-facing language should be careful and non-final.

## Principle 9 - Help Before Assessment

The experience should first help the user explain the case.

Assessment and routing should happen quietly in the background.

## Principle 10 - Mobile Is The Primary Experience

The first experience must work beautifully on mobile.

Rules:

```text
large text input
clear CTA
no horizontal scrolling
keyboard does not hide action
short text blocks
```

## Principle 11 - User Can Be Unsure

The interface must accept:

```text
approximate dates
unknown answers
incomplete descriptions
emotional wording
non-medical language
```

## Principle 12 - Human Review Feels Reassuring

If the case goes to review, it should feel like help is continuing.

Use:

```text
Vi gennemgår oplysningerne nærmere.
```

Avoid:

```text
Your case was escalated.
```

## Signature Experience

The signature first experience is:

```text
AI welcomes the user
AI explains they do not need to know the rules
AI invites them to write a few sentences
User starts with free text
AI asks one follow-up question
```

## Acceptance Criteria

The first experience is successful when:

```text
user understands what to do immediately
user can start without documents
user feels invited rather than assessed
AI feels helpful but not gimmicky
typing animation supports, but does not block
```

## References

- frontend-experience/README.md
- docs/ux/UX-002-conversation-flow.md
- docs/ux/UX-009-microcopy-and-tone-of-voice.md
