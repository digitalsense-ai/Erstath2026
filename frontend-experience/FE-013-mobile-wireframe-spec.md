# FE-013 - Mobile Wireframe Spec

Version: 1.0
Status: Active Draft
Scope: Mobile wireframe for first frontend prototype

## Purpose

This document defines the mobile wireframe for the first ErstatningsHjaelp prototype.

It translates the experience principles into a concrete mobile layout that a frontend developer can build.

## Mobile Screen Width

Design for:

```text
360 px minimum
390 px common iPhone width
430 px larger mobile width
```

## Mobile Layout Principle

The mobile layout should feel like a conversation starter, not a website form.

## Screen 1 - Landing Empty State

```text
┌──────────────────────────────┐
│ ErstatningsHjaelp             │
│                               │
│ Gratis indledende vurdering   │
│                               │
│ Fortæl os kort,               │
│ hvad der er sket              │
│                               │
│ ┌──────────────────────────┐  │
│ │ Hej.                    │  │
│ │ Jeg ved godt, det kan   │  │
│ │ være svært at starte.   │  │
│ └──────────────────────────┘  │
│                               │
│ ┌──────────────────────────┐  │
│ │ Skriv med dine egne ord │  │
│ │ ...                      │  │
│ │                          │  │
│ └──────────────────────────┘  │
│                               │
│ [ Start gratis vurdering ]    │
│                               │
│ Du behøver ikke dokumenter.   │
└──────────────────────────────┘
```

## Screen 2 - Example Typing State

```text
┌──────────────────────────────┐
│ Fortæl os kort,               │
│ hvad der er sket              │
│                               │
│ Mange starter fx sådan her:   │
│                               │
│ ┌──────────────────────────┐  │
│ │ "Jeg fik en operation,  │  │
│ │ og siden har jeg haft   │  │
│ │ smerter."               │  │
│ └──────────────────────────┘  │
│                               │
│ [ Start gratis vurdering ]    │
│                               │
└──────────────────────────────┘
```

## Screen 3 - User Typing State

```text
┌──────────────────────────────┐
│ Fortæl os kort,               │
│ hvad der er sket              │
│                               │
│ ┌──────────────────────────┐  │
│ │ Jeg fik en operation i   │  │
│ │ knæet i 2023, og siden  │  │
│ │ har jeg haft smerter... │  │
│ └──────────────────────────┘  │
│                               │
│ 2-3 sætninger er nok.         │
│                               │
│ [ Start gratis vurdering ]    │
│                               │
└──────────────────────────────┘
```

## Screen 4 - AI Thinking State

```text
┌──────────────────────────────┐
│ Din besked                    │
│ ┌──────────────────────────┐  │
│ │ Jeg fik en operation... │  │
│ └──────────────────────────┘  │
│                               │
│ AI                            │
│ ┌──────────────────────────┐  │
│ │ Jeg gennemgår din       │  │
│ │ beskrivelse og finder   │  │
│ │ næste spørgsmål...      │  │
│ └──────────────────────────┘  │
└──────────────────────────────┘
```

## Screen 5 - Smart Question State

```text
┌──────────────────────────────┐
│ AI                            │
│ ┌──────────────────────────┐  │
│ │ Tak. Det hjælper mig    │  │
│ │ med at forstå forløbet. │  │
│ │                          │  │
│ │ Hvornår blev operationen│  │
│ │ udført cirka?           │  │
│ └──────────────────────────┘  │
│                               │
│ ┌──────────────────────────┐  │
│ │ Fx marts 2023, 2023     │  │
│ │ eller sidste sommer     │  │
│ └──────────────────────────┘  │
│                               │
│ [ Fortsæt ]                   │
│ [ Jeg ved det ikke ]          │
└──────────────────────────────┘
```

## Screen 6 - Result State

```text
┌──────────────────────────────┐
│ Sagen bør gennemgås nærmere   │
│                               │
│ Ud fra det, du har fortalt,   │
│ kan sagen være relevant at    │
│ gennemgå nærmere.             │
│                               │
│ En specialist bør se på       │
│ oplysningerne.                │
│                               │
│ [ Fortsæt og opret sag ]      │
│ [ Tilføj flere oplysninger ]  │
└──────────────────────────────┘
```

## Spacing Rules

```text
page padding: 20-24 px
card padding: 16-20 px
vertical gap: 16-24 px
button height: minimum 48 px
input min height: 140 px
```

## Mobile Typography

```text
headline: large, clear, 28-34 px
body: 16-18 px
helper text: 14-15 px
button: 16 px medium weight
```

## Sticky Behavior

Use sticky CTA only if page height grows.

First screen should normally fit without requiring sticky CTA.

## Keyboard Behavior

When keyboard opens:

```text
input remains visible
CTA remains reachable or scrolls into view
AI intro may collapse
no layout jump that loses user text
```

## Acceptance Criteria

Mobile wireframe is accepted when:

```text
first task is obvious
input is primary
AI welcome is visible but not dominant
CTA is easy to tap
smart question fits on small screens
result card is readable
```

## References

- FE-003-mobile-home.md
- FE-006-first-message-state.md
- FE-008-smart-question-state.md
- FE-009-result-state.md
