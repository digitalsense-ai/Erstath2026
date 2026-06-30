# FE-014 - Desktop Wireframe Spec

Version: 1.0
Status: Active Draft
Scope: Desktop wireframe for first frontend prototype

## Purpose

This document defines the desktop wireframe for the first ErstatningsHjaelp prototype.

It should help frontend build a trustworthy desktop experience while keeping the first user action focused on free text.

## Desktop Layout Principle

Desktop can show more context than mobile, but the free-text start must remain the primary action.

## Recommended Breakpoints

```text
tablet: 768 px+
desktop: 1024 px+
wide: 1280 px+
```

## Screen 1 - Desktop Landing

```text
┌──────────────────────────────────────────────────────────────┐
│ ErstatningsHjaelp                    Sådan virker det  FAQ   │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  Få en gratis indledende vurdering     ┌──────────────────┐  │
│  af din sag                            │ Tryg start       │  │
│                                        │                  │  │
│  Start med at fortælle, hvad der       │ ✓ Ingen          │  │
│  er sket. Du behøver ikke kende        │   dokumenter     │  │
│  reglerne.                             │                  │  │
│                                        │ ✓ Ét spørgsmål   │  │
│  ┌────────────────────────────────┐    │   ad gangen      │  │
│  │ AI skriver                     │    │                  │  │
│  │ Hej. Jeg ved godt, det kan     │    │ ✓ Specialist kan │  │
│  │ være svært at starte...        │    │   gennemgå sagen │  │
│  └────────────────────────────────┘    └──────────────────┘  │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐    │
│  │ Skriv med dine egne ord...                           │    │
│  │                                                      │    │
│  └──────────────────────────────────────────────────────┘    │
│                                                              │
│  [ Start gratis vurdering ]  Du kan starte på 5-10 min.      │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

## Screen 2 - User Typing

```text
┌──────────────────────────────────────────────────────────────┐
│  Fortæl os kort, hvad der er sket                            │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐    │
│  │ Jeg fik en operation i knæet i 2023, og siden har    │    │
│  │ jeg haft smerter og svært ved at arbejde.            │    │
│  └──────────────────────────────────────────────────────┘    │
│                                                              │
│  2-3 sætninger er nok til at starte.                         │
│                                                              │
│  [ Start gratis vurdering ]                                  │
└──────────────────────────────────────────────────────────────┘
```

## Screen 3 - Conversation Transition

```text
┌──────────────────────────────────────────────────────────────┐
│  Samtale                                                     │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐    │
│  │ Du                                                   │    │
│  │ Jeg fik en operation i knæet i 2023...               │    │
│  └──────────────────────────────────────────────────────┘    │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐    │
│  │ AI                                                   │    │
│  │ Jeg gennemgår din beskrivelse og finder det          │    │
│  │ vigtigste næste spørgsmål...                         │    │
│  └──────────────────────────────────────────────────────┘    │
└──────────────────────────────────────────────────────────────┘
```

## Screen 4 - Smart Question Desktop

```text
┌──────────────────────────────────────────────────────────────┐
│  Samtale                                  ┌───────────────┐  │
│                                           │ Fremdrift     │  │
│  ┌──────────────────────────────────┐     │               │  │
│  │ AI                               │     │ Ét spørgsmål  │  │
│  │ Tak. Det hjælper mig med at      │     │ ad gangen.    │  │
│  │ forstå forløbet.                 │     │               │  │
│  │                                  │     │ Du kan svare  │  │
│  │ Hvornår blev operationen         │     │ cirka.        │  │
│  │ udført cirka?                    │     └───────────────┘  │
│  └──────────────────────────────────┘                        │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐    │
│  │ Fx marts 2023, 2023 eller sidste sommer              │    │
│  └──────────────────────────────────────────────────────┘    │
│                                                              │
│  [ Fortsæt ]  [ Jeg ved det ikke ]                           │
└──────────────────────────────────────────────────────────────┘
```

## Screen 5 - Result Desktop

```text
┌──────────────────────────────────────────────────────────────┐
│  ┌──────────────────────────────────────┐  ┌──────────────┐ │
│  │ Sagen bør gennemgås nærmere          │  │ Næste skridt │ │
│  │                                      │  │              │ │
│  │ Ud fra det, du har fortalt, kan      │  │ 1. Opret sag │ │
│  │ sagen være relevant at gennemgå      │  │ 2. Tilføj    │ │
│  │ nærmere.                             │  │    kontakt   │ │
│  │                                      │  │ 3. Dokumenter│ │
│  │ En specialist bør se på oplysningerne│  │    senere    │ │
│  │                                      │  └──────────────┘ │
│  │ [ Fortsæt og opret sag ]             │                   │
│  │ [ Tilføj flere oplysninger ]         │                   │
│  └──────────────────────────────────────┘                   │
└──────────────────────────────────────────────────────────────┘
```

## Desktop Spacing Rules

```text
max content width: 1120-1200 px
hero grid: 60/40 or 65/35
main column max width: 680-760 px
card padding: 24-32 px
section gap: 48-72 px
```

## Desktop Typography

```text
hero headline: 44-56 px
subheading: 18-22 px
body: 16-18 px
helper: 14-16 px
button: 16-17 px
```

## Desktop Visual Priority

Priority order:

```text
headline
AI welcome
text input
CTA
trust card
three-step explanation
```

## Do Not Overcrowd Desktop

Avoid adding too much above the fold.

Do not include:

```text
long FAQ
many testimonials
case category selector
document upload
login requirement
legal explanation block
```

## Acceptance Criteria

Desktop wireframe is accepted when:

```text
input remains visually central
trust card supports but does not dominate
AI welcome feels calm
first action is obvious
conversation state feels continuous after submit
result state has clear next step
```

## References

- FE-004-desktop-home.md
- FE-006-first-message-state.md
- FE-008-smart-question-state.md
- FE-009-result-state.md
