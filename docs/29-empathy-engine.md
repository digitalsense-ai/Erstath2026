# 29 - Empathy Engine

## Status

Post-audit S2 flow improvement.

This document defines the Empathy Engine for ErstatningsHjælp.

The Empathy Engine is not a legal decision engine and not a scoring engine. It is a communication layer that translates AI understanding into careful, human, and trust-building language before the system continues the screening.

Core principle:

```text
Understanding Before Questioning
```

The system should show that it has understood the user before asking the next question.

---

## 1. Why this module exists

Many users will describe serious and emotional situations, including:

- severe illness
- death
- permanent injury
- loss of work capacity
- treatment delays
- complications involving relatives

A normal chatbot flow may feel too cold if it immediately asks another question.

Example of poor flow:

```text
User: Min mand døde efter en operation.
AI: Hvornår fandt operationen sted?
```

This is efficient, but it does not feel human.

The better flow is:

```text
User: Min mand døde efter en operation.
AI: Tak fordi du delte det. Vi forstår det sådan, at din mand gennemgik en operation, og at forløbet desværre endte med, at han gik bort. Har vi forstået situationen korrekt?
```

Only after confirmation should the system continue.

---

## 2. Core flow

The revised S2 flow should be:

```text
Free text
↓
AI extracts internal tags
↓
Empathy Engine creates a human reflection
↓
User confirms or corrects
↓
Guided screening continues
↓
Scoring
```

This replaces the earlier idea of showing raw tags directly to the user.

Raw tags may still be saved internally, but the user should normally see a natural-language reflection instead.

---

## 3. Main rule

The system should not ask the next factual question until it has first reflected the user's situation when serious triggers are detected.

Trigger examples:

```text
death
cancer
child
permanent_injury
loss_of_work_capacity
severe_complication
long_treatment_delay
```

---

## 4. Language principles

### Rule 1 - Do not conclude

Do not write:

```text
Der er tale om en diagnoseforsinkelse.
```

Write:

```text
Vi forstår det sådan, at diagnosen muligvis blev stillet senere end forventet.
```

---

### Rule 2 - Do not promise outcome

Do not write:

```text
Du har sandsynligvis en god sag.
```

Write:

```text
Vi skal stille nogle få spørgsmål mere for at kunne vurdere sagen nærmere.
```

---

### Rule 3 - Use gentle language for death

Avoid showing the word as a blunt tag in the user flow.

Avoid:

```text
Dødsfald
```

Prefer:

```text
gik bort
mistede livet
forløbet endte desværre meget alvorligt
```

The exact wording depends on context.

---

### Rule 4 - Keep reflection short

The reflection should normally be 2-3 sentences.

It should not become a long emotional message.

---

### Rule 5 - Use plain Danish

Avoid legal or technical terms too early.

Avoid:

```text
årsagssammenhæng
patientskade
kompensationsgrundlag
```

Prefer:

```text
sammenhæng mellem behandlingen og skaden
forløbet
følgerne
```

---

## 5. Reflection examples

### Example A - Death after delayed diagnosis

User writes:

```text
Min mor fik ikke diagnosticeret kræft i tide og døde senere.
```

Suggested reflection:

```text
Tak fordi du delte det.

Vi forstår det sådan, at din mor muligvis ikke blev diagnosticeret i tide, og at sygdomsforløbet desværre endte med, at hun gik bort.

Har vi forstået situationen korrekt?
```

Internal tags may include:

```text
parent
diagnose_delay
cancer
death
```

---

### Example B - Operation complication

User writes:

```text
Jeg fik en infektion efter en operation og har stadig problemer.
```

Suggested reflection:

```text
Tak. Vi forstår det sådan, at du fik en infektion efter en operation, og at du stadig oplever følger efter forløbet.

Har vi forstået det korrekt?
```

Internal tags may include:

```text
self
surgical_error_or_complication
infection
ongoing_consequences
```

---

### Example C - Child case

User writes:

```text
Mit barn fik en skade under fødslen.
```

Suggested reflection:

```text
Tak fordi du beskriver det.

Vi forstår det sådan, at sagen handler om dit barn og en mulig skade i forbindelse med fødslen.

Har vi forstået situationen korrekt?
```

Internal tags may include:

```text
child
birth_injury
```

---

### Example D - Unclear case

User writes:

```text
Jeg blev behandlet forkert og har haft mange problemer siden.
```

Suggested reflection:

```text
Tak. Vi forstår det sådan, at du oplever, at noget i behandlingsforløbet kan være gået galt, og at du efterfølgende har haft problemer.

Har vi forstået det korrekt?
```

Then the system can ask a clarifying question.

---

## 6. User response options

After the reflection, the user should have simple choices:

```text
[Ja, det er korrekt]
[Nej, ret det]
[Jeg vil tilføje noget]
```

If the user chooses correction, show click choices or a short free-text field.

---

## 7. Internal tag handling

The Empathy Engine should not remove the structured tag system.

It should hide raw tags from the user unless needed for clarification.

Internal flow:

```text
AI extracts tags
↓
Empathy Engine writes reflection
↓
User confirms reflection
↓
Tags become stronger evidence for Information Quality
```

The CRM should still be able to show:

```text
AI suggested tags
User confirmed understanding
User corrections
```

---

## 8. When to show click choices instead

If AI confidence is low, the system may show choices.

Example:

```text
Vi er lidt usikre på, hvad der bedst beskriver forløbet.

Hvad passer bedst?

[Diagnosen kom for sent]
[Der var en operationsskade]
[Der var problemer med medicin]
[Der opstod infektion]
[Andet]
[Ved ikke]
```

Click choices should be used for clarification, not as the first emotional response to serious events.

---

## 9. Confidence impact

The Empathy Engine can be used as a quality check.

If the system cannot generate a clear reflection, that may indicate low understanding.

Possible logic:

```text
clear reflection generated + user confirms
→ higher understanding confidence

unclear reflection or user rejects
→ lower understanding confidence
→ ask clarification question
```

This makes the Empathy Engine both a UX layer and a weak AI-understanding validation layer.

---

## 10. Scoring impact

The Empathy Engine should not directly increase Case Strength.

It can increase Information Quality only after the user confirms the reflection or corrects it.

Recommended principle:

```text
AI inferred fact
<
user confirmed fact
<
uploaded evidence
<
human reviewed fact
```

---

## 11. CRM impact

CRM should show a short reflection history.

Example:

```text
AI reflection:
Vi forstod det sådan, at brugerens mor muligvis ikke blev diagnosticeret i tide, og at forløbet desværre endte med, at hun gik bort.

User response:
Confirmed
```

This helps the caseworker understand why the system proceeded.

---

## 12. Prompt requirements

The Empathy Engine prompt must instruct the AI to:

- use gentle language
- avoid conclusions
- avoid legal guarantees
- avoid over-emotional language
- keep the text short
- ask whether the understanding is correct
- never expose raw tags to the user by default

---

## 13. Testing requirements

Future tests should cover:

- death case reflection uses gentle wording
- cancer case reflection does not promise outcome
- unclear case asks for confirmation
- AI does not expose raw tags in the user-facing text
- user rejection lowers confidence
- user confirmation strengthens information quality
- CRM records reflection and confirmation

---

## 14. Implementation recommendation

Recommended build order:

```text
1. Add empathy reflection prompt
2. Add reflection field to screening response
3. Add user confirmation action
4. Store reflection confirmation
5. Update guided screening flow
6. Add CRM display
7. Add tests for sensitive wording
```

This can be implemented after MVP 0.1 or as part of the first major S2 UX upgrade.

---

## 15. Product conclusion

The Empathy Engine is a core trust layer.

It makes the product feel less like a chatbot and more like a careful guided intake experience.

For ErstatningsHjælp, this is especially important because users may describe some of the most difficult experiences in their lives.

The recommended S2 principle going forward is:

```text
Understand first.
Reflect carefully.
Ask only then.
```
