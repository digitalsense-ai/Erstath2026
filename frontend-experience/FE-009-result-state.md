# FE-009 - Result State

Version: 1.0
Status: Active Draft
Scope: First prototype result and next-step state

## Purpose

This document defines the result state after the first message and one or more smart questions.

The result state should give the user a clear next step without making a final legal conclusion.

## Experience Goal

The user should feel:

```text
I have made progress.
The system understood the important parts.
There is a clear next step.
This is not a final rejection or guarantee.
```

## Core Rule

Do not show final legal conclusions, compensation guarantees or internal AI scoring.

The result should be a careful next-step message.

## Possible Result Types

Allowed prototype result types:

```text
continue_conversation
human_review
request_documents_later
guide_away_carefully
create_case_later
```

## Result Type - Continue Conversation

Use when more information is needed.

User-facing copy:

```text
Tak. Vi mangler lige lidt mere information, før sagen kan vurderes bedre.
```

Next action:

```text
show next smart question
```

## Result Type - Human Review

Use when the case should be looked at by a person.

User-facing copy:

```text
Ud fra det, du har fortalt, kan sagen være relevant at gennemgå nærmere.
En specialist bør se på oplysningerne.
```

CTA:

```text
Fortsæt og opret sag
```

Secondary:

```text
Tilføj flere oplysninger
```

## Result Type - Request Documents Later

Use when documents would help, but should not block the first start.

User-facing copy:

```text
Det kan være relevant at se dokumenter senere, fx journal, breve eller afgørelser.
Du behøver ikke have dem klar for at fortsætte nu.
```

## Result Type - Guide Away Carefully

Use when current information does not fit the main compensation flow.

User-facing copy:

```text
Ud fra det, du har skrevet lige nu, lyder det ikke som en typisk patienterstatningssag.
Hvis der var en konkret helbredsmæssig skade, kan du tilføje det her.
```

CTA:

```text
Tilføj flere oplysninger
```

Secondary:

```text
Se andre muligheder
```

## Result Type - Create Case Later

Use when the prototype wants to show a possible case creation step.

User-facing copy:

```text
Vi har nu nok oplysninger til at oprette en foreløbig sag.
Næste skridt er at tilføje kontaktoplysninger og eventuelle dokumenter senere.
```

## Result Card Structure

Each result card should contain:

```text
short title
plain-language summary
next step explanation
primary CTA
secondary action
reassurance text
```

## Do Not Show

Do not show:

```text
percentage chance
raw AI score
commercial value
review priority
internal route label
raw reason codes
```

## Good Result Titles

```text
Vi kan gå videre med sagen
Sagen bør gennemgås nærmere
Vi mangler lidt mere information
Det kan være en anden type hjælp, du har brug for
```

## Bad Result Titles

```text
Du har vundet sagen
Din sag er afvist
AI score: 82
High commercial value
```

## Mobile Layout

```text
Result card
Summary
Next step
Primary CTA
Secondary action
```

Keep it short and scroll-friendly.

## Desktop Layout

```text
main result card
side summary card
optional timeline/progress card
```

## Prototype Result Examples

## Diagnosis Delay Example

```text
Ud fra det, du har fortalt, kan sagen være relevant at gennemgå nærmere.
Det vigtigste er nu at forstå tidsforløbet og hvilke dokumenter der findes.
```

## Operation Example

```text
Det lyder som et forløb, hvor konsekvensen efter operationen er vigtig.
Vi kan gå videre og samle lidt flere oplysninger.
```

## Complaint Without Injury Example

```text
Det lyder lige nu mest som en klage over forløbet.
Hvis der også var en konkret helbredsmæssig skade, kan du tilføje det.
```

## Acceptance Criteria

Result state is accepted when:

```text
next step is clear
wording is careful and non-final
user can continue or add information
internal AI data is hidden
mobile and desktop layouts are simple
```

## References

- FE-008-smart-question-state.md
- docs/ux/UX-003-screen-by-screen-specification.md
- docs/ux/UX-009-microcopy-and-tone-of-voice.md
- docs/ux/UX-012-notification-and-status-patterns.md
