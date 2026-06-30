# FE-004 - Desktop Home

Version: 1.0
Status: Active Draft
Scope: Desktop landing screen specification

## Purpose

This document defines the desktop home screen for ErstatningsHjaelp.

The desktop experience should feel trustworthy, calm and easy to start, while still keeping the first action focused on free-text intake.

## Experience Goal

The desktop home should make the user feel:

```text
I understand what this service does.
I can begin without documents.
I can write in my own words.
There is human help behind the system.
```

## Desktop Principle

Desktop may show more context than mobile, but the first action must remain simple.

The free-text start area should be the visual center.

## Screen Structure

Recommended structure:

```text
header
hero section
AI typing welcome
free-text input
primary CTA
trust/reassurance card
short three-step explanation below
```

## Desktop Wireframe

```text
----------------------------------------------------------------
ErstatningsHjaelp                         Saadan virker det

[ Left column ]                            [ Right card ]

Faa en gratis indledende vurdering         Tryg start
af din sag                                 - Ingen dokumenter kraeves
                                           - Svar paa et spoergsmaal ad gangen
Fortael os kort, hvad der er sket          - Specialist kan gennemgaa sagen

[AI skriver]
Hej.
Jeg ved godt, det kan vaere svaert...

[ Stor tekstboks ]
"Jeg fik en operation, og siden..."

[ Start gratis vurdering ]

----------------------------------------------------------------
Saadan fungerer det
1. Fortael hvad der skete
2. Vi stiller de vigtigste spoergsmaal
3. En specialist kan gennemgaa sagen
----------------------------------------------------------------
```

## Header

Header should be simple.

Recommended items:

```text
logo
how it works
FAQ later
contact later
primary CTA anchor optional
```

Avoid overwhelming navigation.

## Hero Headline

Recommended headline:

```text
Faa en gratis indledende vurdering af din sag
```

Supporting headline:

```text
Start med at fortaelle, hvad der er sket. Du behoever ikke kende reglerne.
```

## Primary Start Area

The start area contains:

```text
AI typing welcome
large text input
primary CTA
short reassurance
```

This must be more prominent than testimonials, FAQ or explanation content.

## Trust Card

Desktop can include a calm trust card next to the input.

Recommended content:

```text
Du kan starte uden dokumenter
Du skriver med dine egne ord
AI stiller kun et spoergsmaal ad gangen
En specialist kan gennemgaa sagen
```

Avoid:

```text
guaranteed compensation
fake success rates
legal conclusions
```

## AI Typing Area

Use `AiTypingWelcome`.

Desktop can show slightly more text than mobile, but should still be concise.

Recommended max:

```text
4-5 short lines
```

## Text Input

Suggested desktop style:

```text
wide text area
min-height: 160-220 px
clear label
large readable font
soft helper text
```

## CTA

Primary CTA:

```text
Start gratis vurdering
```

Secondary CTA below or nearby:

```text
Se hvordan det virker
```

Secondary CTA should not compete with starting.

## Below Hero - Three Steps

Use:

```text
1. Fortael hvad der skete
2. Vi stiller de vigtigste spoergsmaal
3. En specialist kan gennemgaa sagen
```

Keep the section short.

## Below Hero - Optional Later Sections

Can include later:

```text
case examples
FAQ
privacy explanation
about the process
human review explanation
```

But these should not distract from the first text input.

## First Interaction States

States:

```text
empty
ai_typing_intro
example_rotation
user_typing
ready_to_submit
submitting
ai_thinking
error
```

## Desktop Interaction Notes

Desktop users may read more before starting, but we should still make the path obvious.

Rules:

```text
input visible above fold
CTA visible above fold
examples visible or typed if user hesitates
no required registration before first message
```

## Accessibility

Requirements:

```text
visible labels
keyboard focus order starts logically
CTA reachable by keyboard
animation respects reduced motion
contrast is high enough
```

## Do Not Include Above Fold

Do not include:

```text
CPR field
login requirement
file upload
long legal text
complex category selection
large testimonials block
```

## Acceptance Criteria

Desktop home is accepted when:

```text
first action is obvious
free-text input is central
AI welcome feels human
trust signals support the action
user can begin without reading the full page
```

## References

- FE-000-experience-principles.md
- FE-002-landing-experience.md
- FE-005-ai-typing-component.md
- docs/ux/UX-003-screen-by-screen-specification.md
