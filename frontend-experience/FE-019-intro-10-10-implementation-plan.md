# FE-019 - Intro 10/10 Implementation Plan

Version: 1.0
Status: Active Draft
Scope: Concrete implementation plan for the intro page

## Goal

Move the intro page from good to excellent.

The page must feel clear, safe, calm and human for a first-time visitor.

## What must improve

1. The first screen must explain what ErstatningsHjaelp helps with.
2. The user must feel allowed to be unsure.
3. The AI must feel like a calm helper, not a form assistant.
4. Trust signals must be visible early.
5. The first action must be easy for older users.

## First screen requirements

The first screen should include:

```text
clear headline
simple explanation
trust reassurance line
AI welcome
large text input
primary button
```

## Reassurance line

Use four short messages near the top:

```text
Gratis at starte
Ingen dokumenter nu
Du må være usikker
Et spørgsmål ad gangen
```

## First question

Preferred label:

```text
Hvad fik dig til at søge hjælp i dag?
```

This is more human than:

```text
Hvad skete der?
```

## AI welcome target copy

```text
Hej. Jeg er her for at hjælpe dig i gang.
Mange er i tvivl om, om de overhovedet har en sag. Det er helt normalt.
Du behøver ikke kende reglerne eller have dokumenter klar.
Start bare med det, du er mest bekymret for.
```

## AI response rule

AI must answer the person before the case.

Good pattern:

```text
Tak fordi du fortæller det.
Det lyder som noget, der kan have fyldt meget.
Jeg hjælper dig roligt videre.
[Then one factual question]
```

## Visual target

The page should feel:

```text
light
calm
large enough to read
not crowded
not like a legal form
```

## Accessibility target

Implement:

```text
large button height
visible focus
large input text
clear labels
no time pressure
reduced motion support
keyboard navigation
```

## Mobile target

On mobile, the user should see:

```text
headline
short reassurance
AI welcome
input
button
```

without feeling overwhelmed.

## Acceptance test

A first-time user should answer yes to:

```text
I understand what this helps with.
I know what to do first.
I know I do not need documents now.
I feel allowed to be unsure.
The page feels calm and human.
```

## Next build tasks

1. Style reassurance line so it is visible and calm.
2. Improve AI welcome timing and copy.
3. Make first AI reply empathy-first.
4. Add a short privacy/trust line below the input.
5. Test mobile and keyboard-only navigation.
