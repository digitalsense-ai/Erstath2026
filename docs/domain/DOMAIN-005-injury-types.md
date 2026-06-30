# DOMAIN-005 - Injury Types

Version: 1.0
Status: Active Draft
Scope: Injury terminology for intake and screening

## Purpose

This document defines common injury types and injury signals used in patient compensation screening.

The goal is to give AI Case Brain, Rulebook, prompts and caseworkers a shared vocabulary for describing possible injuries without making final conclusions.

## Important Limitation

An injury type is a screening label only.

It does not prove that an injury occurred, that healthcare caused it, or that compensation is owed.

## Injury Type Categories

Allowed high-level injury categories:

```text
physical_injury
worsened_disease
permanent_function_loss
temporary_function_loss
pain_or_symptom_worsening
infection
medication_reaction
psychological_injury
birth_related_injury
death
loss_of_work_capacity
economic_consequence_only
no_specific_injury
unknown
```

## Physical Injury

Description:

A physical harm or bodily injury is described.

Typical wording:

```text
Jeg fik en skade.
Nerven blev beskadiget.
Jeg mistede funktion.
Jeg kan ikke bruge armen som før.
```

Important facts:

```text
what body part is affected
when symptoms started
whether symptoms are temporary or lasting
what treatment event came before it
current function level
```

## Worsened Disease

Description:

A disease or condition became worse, possibly because diagnosis, treatment or follow-up was delayed or insufficient.

Typical wording:

```text
Sygdommen blev værre.
Kræften nåede at sprede sig.
Jeg fik det dårligere, fordi de ikke reagerede.
```

Important facts:

```text
original symptoms
first contact date
diagnosis date
what changed because of timing
current condition
```

## Permanent Function Loss

Description:

The user describes lasting or permanent loss of ability, movement, sensation, strength or function.

Typical wording:

```text
Jeg har varige mén.
Jeg har permanent nedsat funktion.
Jeg kan ikke arbejde som før.
Jeg har kroniske smerter.
```

Important facts:

```text
function affected
duration
medical assessment if known
work or daily-life impact
```

## Temporary Function Loss

Description:

The user describes injury or symptoms that lasted for a period but may have improved.

Typical wording:

```text
Jeg var sygemeldt i flere måneder.
Jeg kunne ikke gå i en periode.
Smerterne varede længe, men blev bedre.
```

Important facts:

```text
duration
recovery status
treatment needed
work absence
```

## Pain Or Symptom Worsening

Description:

The user describes pain, discomfort or worsening symptoms after healthcare contact.

Typical wording:

```text
Jeg fik stærke smerter.
Mine symptomer blev værre.
Jeg har stadig gener.
```

Important facts:

```text
symptom type
severity
duration
when it started
impact on daily life
```

## Infection

Description:

The user describes infection after healthcare contact, operation, wound care or hospital stay.

Typical wording:

```text
Jeg fik infektion efter operationen.
Såret blev betændt.
Jeg blev indlagt med infektion.
```

Important facts:

```text
treatment event
infection timing
antibiotic treatment
hospital admission
lasting consequence
```

## Medication Reaction

Description:

The user describes injury or symptoms after medication.

Typical wording:

```text
Jeg fik en bivirkning.
Jeg fik forkert medicin.
Dosis var forkert.
Jeg reagerede voldsomt på medicinen.
```

Important facts:

```text
medicine name
dose
prescriber
reaction
known allergy or interaction
recovery status
```

## Psychological Injury

Description:

The user describes psychological or emotional consequence after healthcare handling.

Typical wording:

```text
Jeg fik angst efter forløbet.
Jeg er psykisk påvirket.
Det har givet mig traumer.
```

Important facts:

```text
symptoms
duration
support or treatment
connection to healthcare event
impact on work or daily life
```

## Birth-Related Injury

Description:

Injury is connected to pregnancy, birth or care of newborn child.

Typical wording:

```text
Mit barn fik en skade under fødslen.
Der skete noget under fødslen.
De reagerede ikke på tegnene.
```

Important facts:

```text
mother or child affected
date of birth
event during pregnancy or birth
current consequence
hospital or maternity ward
```

## Death

Description:

The user describes that the patient died.

Typical wording:

```text
Min mor døde.
Patienten døde efter forløbet.
Vi mener dødsfaldet kunne være undgået.
```

Important facts:

```text
date of death
healthcare event before death
cause of death if known
relationship to user
whether there are documents or prior decisions
```

Human review note:

Death should normally trigger high sensitivity and human review priority.

## Economic Consequence Only

Description:

The user describes financial loss without a clear health injury.

Typical wording:

```text
Jeg mistede penge.
Jeg havde udgifter.
Jeg mistede indkomst.
```

Important facts:

```text
whether there is also a health consequence
work capacity impact
cause of financial loss
```

## No Specific Injury

Description:

The user does not describe a concrete injury or health consequence.

Typical wording:

```text
Jeg er utilfreds.
Jeg blev behandlet dårligt.
Jeg vil klage.
```

UX note:

Ask one consequence question before guiding away unless the case is clearly out of scope.

## Unknown Injury

Use unknown when the message suggests harm but the type is not clear.

Recommended question:

```text
Hvilke konsekvenser fik det for patienten?
```

## References

- DOMAIN-003-common-case-patterns.md
- DOMAIN-006-consequence-classification.md
- docs/rulebook/RULEBOOK-040-injury-and-consequence-rules.md
- docs/ai-case-brain/BRAIN-008-injury-and-consequence-rules.md
