# FE-003 - Mobile Home

Version: 1.0
Status: Active Draft
Scope: Mobile landing screen specification

## Purpose

This document defines the first mobile home screen for ErstatningsHjaelp.

Mobile is the primary experience because many users will arrive from search, social, referral links or a phone browser.

## Experience Goal

The mobile screen should feel simple, calm and immediately usable.

The user should understand:

```text
I can start by writing a few sentences.
I do not need documents yet.
I will be guided one question at a time.
```

## Mobile First Rule

The first screen should not feel like a website with many sections.

It should feel like the beginning of a conversation.

## Screen Structure

Recommended order:

```text
logo / small header
trust hint
headline
AI typing welcome
large text input
primary CTA
short reassurance
small how-it-works link or section below
```

## Mobile Wireframe

```text
--------------------------------
ErstatningsHjaelp

Gratis indledende vurdering

Fortael os kort,
hvad der er sket

[AI skriver]
Hej.
Jeg ved godt, det kan vaere svaert
at vide, hvor man skal starte.
Skriv bare et par saetninger.

[ Stor tekstboks ]
"Jeg fik en operation, og siden..."

[ Start gratis vurdering ]

Du behoever ikke have dokumenter klar.
Det tager typisk 5-10 minutter.
--------------------------------
```

## Header

Keep the header minimal.

Recommended content:

```text
logo
optional small menu icon later
```

Do not show a full navigation menu on the first mobile viewport.

## Headline

Recommended headline:

```text
Fortael os kort, hvad der er sket
```

Alternative:

```text
Start med at fortaelle din historie
```

Avoid:

```text
Udfyld ansogningsformular
Indsend juridisk vurdering
Opret erstatningskrav
```

## AI Typing Area

Use `AiTypingWelcome` from FE-005.

Mobile placement:

```text
below headline
above input
```

The AI welcome should not take too much height.

Maximum visible intro area:

```text
3-4 short lines
```

## Text Input

The input should be large enough to feel inviting.

Suggested mobile size:

```text
min-height: 140-180 px
full width
rounded corners
large tap area
```

Placeholder/example behavior:

```text
rotating typed examples when empty
clear when user starts typing
```

## CTA

Primary CTA:

```text
Start gratis vurdering
```

CTA behavior:

```text
full width
sticky near bottom only if content is long
active after short text
```

Inactive state copy:

```text
Skriv lidt om, hvad der skete
```

## Reassurance Text

Below CTA:

```text
Du behoever ikke have dokumenter klar.
Du svarer kun paa et spoergsmaal ad gangen.
```

Keep it short.

## Keyboard Behavior

When keyboard opens:

```text
input remains visible
CTA remains reachable
page does not jump aggressively
AI welcome can collapse if needed
```

## First Interaction States

States:

```text
empty
ai_typing_intro
examples_rotating
user_typing
ready_to_submit
submitting
error
```

## Empty State

The screen should never feel empty because AI speaks first.

## User Typing State

When user types:

```text
stop example rotation
show CTA active when minimum useful length is reached
optional helper text remains small
```

Minimum useful length should be soft, not strict.

Example:

```text
Skriv bare lidt mere, saa kan vi bedre hjaelpe dig videre.
```

## Submitting State

After submit:

```text
button shows loading
input is disabled briefly
show AI thinking transition
```

Copy:

```text
Jeg gennemgaar din beskrivelse...
```

## Error State

Friendly error:

```text
Noget gik galt. Din tekst er ikke forsvundet. Proev igen om lidt.
```

## Accessibility

Requirements:

```text
input has visible label
CTA is large enough
focus state is visible
animation respects reduced motion
screen reader does not read every typed character
```

## Do Not Include On Mobile First View

Do not include:

```text
long testimonials
large FAQ
complex navigation
file upload
login
CPR fields
case category dropdowns
```

## Acceptance Criteria

Mobile home is accepted when:

```text
user can understand the page in under 10 seconds
user can start in under 30 seconds
AI welcome feels helpful
input is clearly primary
CTA is easy to tap
keyboard behavior works
```

## References

- FE-000-experience-principles.md
- FE-002-landing-experience.md
- FE-005-ai-typing-component.md
- docs/ux/UX-006-mobile-first-guidelines.md
