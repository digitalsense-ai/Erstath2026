# FE-002 - Landing Experience

Version: 1.0
Status: Active Draft
Scope: First landing experience

## Purpose

This document defines the first landing experience for ErstatningsHjaelp.

The landing experience is the first moment where the user decides whether they feel safe enough to start.

## Experience Goal

The landing page should make the user feel:

```text
I can start by writing a few sentences.
I do not need to know the rules.
I do not need documents yet.
The system will help me step by step.
```

## Primary Action

The first action is not a form submission.

The first action is:

```text
write what happened in your own words
```

## Main Layout

The landing page should contain:

```text
logo/header
calm hero section
AI welcome typing area
large free-text input
primary CTA
short reassurance text
small trust signals
simple explanation below fold
```

## Above The Fold

The first viewport should focus on one task:

```text
Fortæl os kort, hvad der er sket.
```

Suggested structure:

```text
[Logo]

Få en gratis indledende vurdering af din sag

AI welcome typing component

[Large text area]

[Start gratis vurdering]

Du behøver ikke have dokumenter klar.
Det tager typisk 5-10 minutter at komme i gang.
```

## AI Welcome Copy

The AI welcome should be calm and human.

Recommended sequence:

```text
Hej.
Jeg ved godt, det kan være svært at vide, hvor man skal starte.
Skriv bare et par sætninger om, hvad der skete.
Jeg stiller de rigtige spørgsmål bagefter.
```

## Example Prompts

If the user waits, the input area may show rotating typed examples:

```text
Jeg fik en operation, og siden har jeg haft smerter.
Min sygdom blev først opdaget flere måneder senere.
Jeg fik forkert medicin og blev meget syg.
Mit barn kom til skade under fødslen.
```

## Important Behavior

The examples must feel like help, not like required formats.

Use text such as:

```text
Mange starter fx sådan her:
```

Avoid:

```text
Use this format.
Required information.
Complete all fields.
```

## Input Behavior

The input should:

```text
be large and inviting
support multi-line text
show soft placeholder/example guidance
activate CTA when the user has written enough
allow submit with imperfect language
```

Minimum text guidance:

```text
Du kan skrive kort. 2-3 sætninger er nok til at starte.
```

## CTA Behavior

Primary CTA:

```text
Start gratis vurdering
```

CTA inactive state:

```text
disabled until user writes a short description
```

Validation message:

```text
Skriv bare lidt om, hvad der skete - så hjælper vi dig videre.
```

## Trust Signals

Trust signals should support, not dominate.

Possible trust signals:

```text
Gratis indledende vurdering
Du svarer på ét spørgsmål ad gangen
Ingen dokumenter kræves for at starte
En specialist kan gennemgå sagen
```

Avoid showing:

```text
high win rate claims
guaranteed compensation
legal certainty
fake urgency
```

## Below The Fold

Below first viewport:

```text
Sådan fungerer det
1. Fortæl hvad der skete
2. Vi stiller de vigtigste spørgsmål
3. En specialist kan gennemgå sagen
```

Optional later sections:

```text
case examples
FAQ
privacy reassurance
about human review
```

## Mobile Experience

Mobile must prioritise:

```text
AI welcome
input field
CTA
short reassurance
```

Everything else can move below.

## Desktop Experience

Desktop can use two-column layout:

```text
left: headline, AI welcome, input
right: calm trust card or illustration
```

But the input must remain the primary visual focus.

## Do Not Include On First Screen

Do not include:

```text
CPR field
login
file upload
long legal explanation
case category dropdown
hospital dropdown
large FAQ block above input
```

## Acceptance Criteria

The landing experience is successful when:

```text
user understands they can start with free text
user sees examples of simple wording
AI welcome feels human
input is the clear primary action
CTA is obvious
mobile view feels natural
```

## References

- FE-000-experience-principles.md
- FE-001-user-journey.md
- docs/ux/UX-003-screen-by-screen-specification.md
- docs/ux/UX-009-microcopy-and-tone-of-voice.md
