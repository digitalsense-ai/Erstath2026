# UX-009 - Microcopy and Tone of Voice

Version: 1.0
Status: Active Draft
Scope: Customer and staff-facing wording

## Purpose

This document defines the tone of voice and microcopy rules for ErstatningsHjaelp.

The product should sound calm, human and clear.

## Tone Principles

The language should be:

- respectful
- simple
- calm
- helpful
- non-judgmental
- careful with uncertainty
- clear about next step

Avoid language that feels:

- legalistic
- cold
- sales-heavy
- blaming
- final too early
- overconfident
- technical

## Core Voice

ErstatningsHjaelp should sound like:

```text
A calm professional who helps the user explain what happened, one step at a time.
```

Not like:

```text
A lawyer giving a final decision.
A chatbot trying to sell.
A hospital system using medical jargon.
```

## AI Wording Rules

Allowed:

```text
Vi hjælper med at finde de vigtigste oplysninger.
Vi gennemgår din beskrivelse.
Vi finder det vigtigste næste spørgsmål.
```

Avoid:

```text
AI vurderer din sag.
AI afgør om du kan få erstatning.
AI beregner din erstatning.
```

## Welcome Copy

Headline:

```text
Fortæl os kort, hvad der skete
```

Body:

```text
Du kan beskrive sagen med dine egne ord. Vi hjælper med at finde de vigtigste oplysninger og spørger kun om én ting ad gangen.
```

Support text:

```text
Du behøver ikke have dokumenter klar for at starte.
```

CTA:

```text
Start vurdering
```

## First Message Copy

Prompt:

```text
Hvad skete der?
```

Helper text:

```text
Skriv kort med dine egne ord. Du kan fx nævne behandling, diagnose, operation, medicin eller opfølgning.
```

Placeholder:

```text
Eksempel: Min diagnose blev stillet for sent, og sygdommen blev værre...
```

Submit:

```text
Send beskrivelse
```

## Smart Question Copy

Acknowledgement:

```text
Tak. Vi mangler én oplysning for at forstå sagen bedre.
```

Time question:

```text
Hvornår skete det cirka?
```

Provider question:

```text
Hvilket hospital, klinik eller behandler var involveret?
```

Consequence question:

```text
Hvilke konsekvenser fik det for patienten?
```

Treatment link question:

```text
Hvordan mener du, at skaden hænger sammen med behandlingen?
```

Document question:

```text
Har du journal, breve eller andre dokumenter om sagen?
```

## Skip Copy

Use:

```text
Jeg ved det ikke
Jeg er ikke sikker
Spring over for nu
```

Response after skip:

```text
Det er helt okay. Vi går videre med det, du ved.
```

## Loading Copy

Default:

```text
Vi gennemgår din beskrivelse og finder det vigtigste næste spørgsmål.
```

Short:

```text
Vi finder næste spørgsmål...
```

Saving:

```text
Vi gemmer dit svar...
```

Success:

```text
Tak, vi har gemt dit svar.
```

## Validation Copy

Empty first message:

```text
Skriv kort, hvad sagen handler om, før du fortsætter.
```

Too short:

```text
Du må gerne skrive lidt mere, hvis du kan. Det hjælper os med at stille det rigtige næste spørgsmål.
```

Network error:

```text
Der opstod en forbindelsesfejl. Prøv igen om lidt.
```

Server error:

```text
Noget gik galt. Prøv igen om lidt.
```

## Human Review Copy

Use:

```text
Tak. Det du har skrevet, bør gennemgås nærmere.
```

Support text:

```text
Vi sender oplysningerne videre til manuel vurdering. Du kan blive bedt om flere oplysninger senere.
```

Avoid exposing:

- review priority
- internal score
- commercial value
- detailed reason codes

## Guide-Away Copy

Use:

```text
Ud fra de oplysninger, du har givet indtil nu, kan vi ikke se nok grundlag til at fortsætte i denne vurdering.
```

Support text:

```text
Hvis der mangler noget vigtigt, kan du tilføje flere oplysninger.
```

CTA:

```text
Tilføj flere oplysninger
```

Avoid:

```text
Du har ingen sag.
Du kan ikke få erstatning.
Det er ikke en fejl.
Der er ingen ansvarlig.
```

## CRM Microcopy

Staff-facing wording may be more direct but should remain clear.

Examples:

```text
Needs review
Missing information
Unconfirmed fact
AI suggestion
Human override
Waiting for documents
Guide-away suggested
```

Danish equivalents can be chosen during frontend localisation.

## Internal Label Rules

Internal labels such as reason codes should not be shown to users.

They may be shown to staff with explanation.

Examples:

```text
event_date_missing
possible_diagnosis_delay
low_confidence
```

## Copy QA Checklist

Before accepting copy:

- no final legal conclusion
- no internal score shown to user
- no blame language
- one clear next action
- short enough for mobile
- plain Danish
- respectful guide-away
- AI role explained carefully

## References

- UX-002-conversation-flow.md
- UX-003-screen-by-screen-specification.md
- UX-007-loading-empty-error-states.md
- docs/ai-case-brain/BRAIN-015-guide-away-rules.md
