# DOMAIN-003 - Common Case Patterns

Version: 1.0
Status: Active Draft
Scope: Patient compensation case pattern knowledge

## Purpose

This document describes common case patterns that may appear in patient compensation intake.

The goal is to give AI Case Brain, Rulebook, prompts, UX and caseworkers a shared language for recognising and describing recurring case types.

## Important Limitation

These are screening patterns only.

A pattern match does not mean that compensation is owed, that an error occurred, or that the case will succeed.

## Pattern 1 - Diagnosis Delay

## Description

The user believes diagnosis was made too late and that the delay caused worsening, lost treatment opportunity or more serious consequence.

## Typical User Language

```text
Diagnosen blev stillet for sent.
De sendte mig hjem flere gange.
Lægen reagerede ikke på symptomerne.
Scanningen blev først lavet meget senere.
Prøvesvaret blev ikke fulgt op.
Sygdommen nåede at udvikle sig.
```

## Important Facts

```text
first symptom or contact date
first healthcare contact
provider involved
date of correct diagnosis
what changed because of delay
current consequence
relevant tests or scans
```

## Related Rulebook Areas

```text
TYPE diagnosis_delay
TL time-limit rules
CAUS delay worsened outcome
DOC test or scan document
Q diagnosis delay timeline question
```

## Pattern 2 - Misdiagnosis

## Description

The user believes a wrong diagnosis was given and that this caused wrong treatment, delayed treatment or worsening.

## Typical User Language

```text
Jeg fik en forkert diagnose.
De sagde det var noget andet.
Jeg blev behandlet for det forkerte.
Den rigtige diagnose kom først senere.
```

## Important Facts

```text
wrong diagnosis
correct diagnosis
dates
provider
consequence
whether treatment changed
```

## Pattern 3 - Surgical Injury Or Possible Surgical Error

## Description

The user describes injury, worsening or complication after an operation.

## Typical User Language

```text
Jeg fik en skade efter operationen.
Operationen gik galt.
Jeg har fået nedsat funktion efter indgrebet.
Der opstod en komplikation.
```

## Important Facts

```text
operation type
operation date
hospital or clinic
what happened after operation
consequence
whether complication was known risk or unexpected
follow-up treatment
```

## Pattern 4 - Medication Injury

## Description

The user describes harm from medication, wrong medicine, wrong dose, interaction or missing allergy handling.

## Typical User Language

```text
Jeg fik forkert medicin.
Dosis var for høj.
Jeg fik en alvorlig bivirkning.
De tog ikke hensyn til min allergi.
```

## Important Facts

```text
medicine name
prescriber or provider
dose
when it was taken
reaction or injury
known allergy or risk
medication list
```

## Pattern 5 - Infection After Treatment

## Description

The user describes an infection that occurred after operation, hospital stay, injection, wound care or other healthcare contact.

## Typical User Language

```text
Jeg fik infektion efter operationen.
Såret blev betændt.
Jeg blev indlagt med infektion bagefter.
```

## Important Facts

```text
treatment event
infection date
symptoms
hospital stay
antibiotic treatment
consequence
wound or hygiene issue if known
```

## Pattern 6 - Lack Of Follow-Up

## Description

The user believes healthcare failed to follow up on symptoms, test results, scans, referrals or discharge plans.

## Typical User Language

```text
Der blev aldrig fulgt op.
Ingen reagerede på prøvesvaret.
Henvisningen blev glemt.
Jeg blev sendt hjem uden plan.
```

## Important Facts

```text
what should have been followed up
who was responsible
when the result or referral existed
when follow-up happened or failed
consequence
relevant document
```

## Pattern 7 - Birth Or Child-Related Injury

## Description

The user describes injury to mother or child in connection with pregnancy, birth, maternity care or child treatment.

## Typical User Language

```text
Der skete noget under fødslen.
Mit barn fik en skade.
De reagerede ikke på tegnene.
Fødslen blev håndteret forkert.
```

## Important Facts

```text
mother or child affected
date of birth or treatment
event during pregnancy or birth
consequence
hospital or maternity ward
current condition
```

## Pattern 8 - Consent Or Information Issue With Consequence

## Description

The user says they were not informed about risk, alternative treatment, side effects or likely consequence, and that this affected their choice or outcome.

## Typical User Language

```text
Jeg blev ikke informeret om risikoen.
Jeg fik ikke at vide, at det kunne ske.
Jeg ville ikke have sagt ja, hvis jeg vidste det.
```

## Important Facts

```text
what information was missing
what treatment was chosen
what consequence occurred
whether written information exists
what user would have done differently
```

## Pattern 9 - Journal Or Information Error

## Description

The user describes wrong, missing or misunderstood information in journal or communication.

## Typical User Language

```text
Der står noget forkert i journalen.
De havde forkerte oplysninger.
Vigtig information blev ikke givet videre.
```

## Important Facts

```text
what information was wrong or missing
where it appeared
who relied on it
what consequence it caused
journal or letter document
```

## Pattern 10 - Weak Or Unclear Case Pattern

## Description

The user describes dissatisfaction, concern or general harm but no clear healthcare link or consequence.

## Typical User Language

```text
Jeg er utilfreds.
Noget gik galt.
Jeg vil klage.
Kan jeg få erstatning?
```

## Important Facts

```text
healthcare context
specific event
consequence
possible treatment link
```

## UX Note

Ask one clarifying question before guide-away unless the matter is clearly out of scope.

## References

- DOMAIN-002-domain-language-and-boundaries.md
- docs/rulebook/RULEBOOK-020-case-type-rules.md
- docs/rulebook/RULEBOOK-090-smart-question-rules.md
- docs/ai-case-brain/BRAIN-006-case-type-classification-rules.md
