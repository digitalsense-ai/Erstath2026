# FE-006 - First Message State

Version: 1.0
Status: Active Draft
Scope: First free-text message interaction

## Purpose

This document defines the state where the user begins writing the first description of what happened.

This is the most important conversion moment in the frontend experience.

## Experience Goal

The user should feel:

```text
I can write this in my own words.
It does not have to be perfect.
A short explanation is enough to start.
```

## First Message Principle

The first message is not a legal statement.

It is the start of a conversation.

## User Prompt

Recommended label:

```text
Fortæl os kort, hvad der er sket
```

Supporting text:

```text
Du behøver ikke kende reglerne. Skriv bare med dine egne ord.
```

## Text Input Requirements

The input should support:

```text
multi-line text
short and long messages
mobile keyboard
copy/paste
Danish characters
approximate wording
```

## Placeholder / Example Behavior

When empty, the input can show typed examples.

Examples:

```text
Jeg fik en operation, og siden har jeg haft smerter.
Min sygdom blev først opdaget flere måneder senere.
Jeg fik forkert medicin og blev meget syg.
Mit barn kom til skade under fødslen.
```

The examples should disappear when the user starts typing.

## Minimum Input Rule

Do not require a long description.

Soft validation should trigger only if the text is too short to understand anything.

Suggested minimum:

```text
10-20 characters or one meaningful phrase
```

Validation copy:

```text
Skriv bare lidt mere om, hvad der skete - så hjælper vi dig videre.
```

Avoid:

```text
Input too short.
Required field missing.
Invalid case description.
```

## CTA States

## Disabled

When no useful text exists:

```text
Start gratis vurdering
```

Disabled helper:

```text
Skriv lidt om, hvad der skete.
```

## Active

When text is useful:

```text
Start gratis vurdering
```

## Loading

After submit:

```text
Jeg gennemgår din beskrivelse...
```

## User Typing Behavior

When the user starts typing:

```text
stop AI example rotation
keep AI welcome visible or collapse slightly
activate character/input feedback only if helpful
save local draft later if possible
```

## Helpful Microcopy

Use small reassurance text:

```text
2-3 sætninger er nok til at starte.
Du kan altid tilføje mere senere.
Du behøver ikke have dokumenter klar endnu.
```

## Example Good First Messages

```text
Jeg fik en operation i skulderen i 2022, og siden har jeg haft smerter og nedsat funktion.
```

```text
Min fars kræft blev først opdaget meget sent, selvom han havde været til læge flere gange.
```

```text
Jeg fik en medicin, jeg ikke kunne tåle, og blev indlagt bagefter.
```

## Example Weak But Acceptable Messages

```text
Jeg vil gerne vide, om jeg har en sag.
```

```text
Der skete noget under min behandling.
```

Handling:

```text
accept and ask a clarifying question
```

## Do Not Reject Early

Avoid blocking because:

```text
date is missing
hospital is missing
medical term is missing
case type is unclear
message is emotional
```

AI should ask follow-up questions.

## Submit Behavior

On submit:

```text
keep user's text visible briefly
show loading/AI thinking state
send to fake or real API
return AI acknowledgement and one next question
```

## Error Recovery

If submit fails:

```text
keep user text
show friendly error
allow retry
```

Copy:

```text
Noget gik galt. Din tekst er gemt her, så du kan prøve igen.
```

## Accessibility

Requirements:

```text
visible label
clear error message
keyboard submit works if appropriate
focus moves to next AI response after submit
screen reader announces loading state politely
```

## Acceptance Criteria

First message state is accepted when:

```text
user can write freely
short messages are accepted when meaningful
validation is gentle
CTA behavior is clear
submit leads to AI response state
no formal fields block start
```

## References

- FE-002-landing-experience.md
- FE-003-mobile-home.md
- FE-004-desktop-home.md
- docs/ux/UX-002-conversation-flow.md
