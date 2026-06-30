# UX-007 - Loading, Empty and Error States

Version: 1.0
Status: Active Draft
Scope: UI state handling

## Purpose

This document defines loading, empty and error states for ErstatningsHjaelp.

Good state handling is important because the user may be uncertain, emotionally affected or using the service on mobile.

## State Principles

States should be:

- calm
- clear
- short
- helpful
- non-technical
- recoverable where possible

Avoid:

- blame language
- stack traces
- raw API errors
- final legal conclusions
- internal AI details

## Loading States

## State: Initial Page Loading

Used when the intake page is loading.

Message:

```text
Vi gør vurderingen klar...
```

Fallback if slow:

```text
Det tager lidt længere end normalt. Prøv at opdatere siden, hvis den ikke åbner.
```

## State: AI Thinking

Used after the user submits a message or answer.

Message:

```text
Vi gennemgår din beskrivelse og finder det vigtigste næste spørgsmål.
```

Short mobile version:

```text
Vi finder næste spørgsmål...
```

Do not say:

```text
AI vurderer om du har en sag
AI beregner erstatning
```

## State: Saving Answer

Used when the user's answer is being stored.

Message:

```text
Vi gemmer dit svar...
```

Success:

```text
Tak, vi har gemt dit svar.
```

## Empty States

## State: Empty First Message

Trigger:

User tries to submit without writing anything.

Message:

```text
Skriv kort, hvad sagen handler om, før du fortsætter.
```

## State: Very Short Message

Trigger:

User writes too little to classify.

Message:

```text
Du må gerne skrive lidt mere, hvis du kan. Det hjælper os med at stille det rigtige næste spørgsmål.
```

## State: No Leads In CRM

Staff-facing.

Message:

```text
Der er ingen leads i denne visning endnu.
```

Action:

```text
Ryd filtre
```

## State: No Documents Yet

Staff-facing or later customer-facing.

Message:

```text
Der er endnu ikke tilføjet dokumenter.
```

Do not imply that the case is invalid only because documents are missing.

## Error States

## State: Network Error

Trigger:

The request fails because of network issue.

Message:

```text
Der opstod en forbindelsesfejl. Prøv igen om lidt.
```

Primary action:

```text
Prøv igen
```

## State: Server Error

Trigger:

Unexpected server error.

Message:

```text
Noget gik galt. Prøv igen om lidt.
```

Support text:

```text
Hvis problemet fortsætter, kan du prøve igen senere.
```

## State: Validation Error

Trigger:

Input does not pass validation.

Message should be field-specific.

Example:

```text
Skriv kort, hvad sagen handler om.
```

## State: AI Unavailable

Trigger:

AI provider or Fake AI service is unavailable.

User-facing message:

```text
Vi kunne ikke behandle beskrivelsen lige nu. Prøv igen om lidt.
```

Internal behavior:

- log error
- use safe fallback when possible
- do not expose provider details

## State: Invalid AI Output

Trigger:

AI or Brain output fails validation.

User-facing message:

```text
Vi kunne ikke behandle svaret korrekt. Prøv igen om lidt.
```

Internal behavior:

- reject invalid output
- log validation issue
- use fallback route when safe

## State: Session Expired

Trigger:

Conversation session is no longer available.

Message:

```text
Din session er udløbet. Start vurderingen igen for at fortsætte.
```

Action:

```text
Start igen
```

## Warning States

## State: Unsure Answer

Trigger:

User selects skip or writes that they do not know.

Message:

```text
Det er helt okay. Vi går videre med det, du ved.
```

## State: Leaving Page

Trigger:

User attempts to leave with unsaved text.

Message:

```text
Du har tekst, der ikke er sendt endnu. Vil du forlade siden?
```

## Success States

## State: Message Sent

Message:

```text
Tak, vi har modtaget din beskrivelse.
```

## State: Human Review Started

Message:

```text
Tak. Det du har skrevet, bør gennemgås nærmere.
```

## State: More Information Added

Message:

```text
Tak, vi har tilføjet oplysningerne.
```

## First Slice Required States

The first vertical slice must support:

```text
initial loading
AI thinking
saving answer
empty first message
validation error
network error
server error
message sent
```

## Staff-Facing State Rules

CRM states may be more technical, but still should not show raw stack traces or secrets.

Staff UI can show:

- validation failed
- AI output invalid
- review required
- missing facts
- route changed

## References

- UX-003-screen-by-screen-specification.md
- UX-004-component-library.md
- docs/api/API-READINESS-004-error-and-response-standard.md
- docs/ai-case-brain/BRAIN-018-brain-output-model.md
