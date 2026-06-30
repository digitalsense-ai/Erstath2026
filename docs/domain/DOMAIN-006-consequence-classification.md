# DOMAIN-006 - Consequence Classification

Version: 1.0
Status: Active Draft
Scope: Consequence terminology for intake and screening

## Purpose

This document defines consequence categories used in patient compensation screening.

Consequence classification helps AI Case Brain and staff understand how serious or material the described impact may be, without making a final legal or compensation decision.

## Important Limitation

A consequence category is a screening signal only.

It does not prove causation, liability, compensation eligibility or compensation amount.

## Consequence Categories

Allowed high-level categories:

```text
death
severe_permanent_consequence
permanent_consequence
temporary_consequence
worsened_disease
loss_of_work_capacity
reduced_daily_function
pain_or_symptoms
psychological_consequence
economic_loss
additional_treatment_needed
hospitalisation_or_readmission
no_specific_consequence
unknown
```

## Death

Description:

The patient died after or during a healthcare-related course.

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
documents or previous decision
```

Screening note:

Death should usually increase sensitivity and human review priority.

## Severe Permanent Consequence

Description:

The user describes life-changing, severe or major lasting impact.

Typical wording:

```text
Jeg kan ikke klare mig som før.
Jeg har fået en alvorlig varig skade.
Mit liv er ændret permanent.
Jeg har mistet meget funktion.
```

Important facts:

```text
what function is affected
whether consequence is permanent
medical assessment if known
work and daily life impact
support needs
```

## Permanent Consequence

Description:

The user describes lasting symptoms, functional limitation or chronic consequence.

Typical wording:

```text
Jeg har varige mén.
Jeg har stadig smerter.
Funktionen er stadig nedsat.
Jeg kan ikke det samme som før.
```

Important facts:

```text
duration
current symptoms
function affected
work impact
medical documentation if known
```

## Temporary Consequence

Description:

The user describes harm or symptoms that lasted for a period but improved or ended.

Typical wording:

```text
Jeg var sygemeldt i nogle måneder.
Jeg havde smerter i lang tid.
Det blev bedre senere.
```

Important facts:

```text
duration
recovery status
treatment needed
sick leave
impact during period
```

## Worsened Disease

Description:

The original disease or condition became worse.

Typical wording:

```text
Sygdommen blev værre.
Kræften spredte sig.
Behandlingen kom for sent.
```

Important facts:

```text
original condition
first symptoms or contact
correct diagnosis date
what changed because of delay
current condition
```

## Loss Of Work Capacity

Description:

The user describes reduced ability to work, long sick leave or loss of income caused by health consequence.

Typical wording:

```text
Jeg kan ikke arbejde som før.
Jeg blev langtidssygemeldt.
Jeg mistede mit arbejde.
Min arbejdsevne er nedsat.
```

Important facts:

```text
employment status before event
sick leave period
current work capacity
income impact
medical basis if known
```

## Reduced Daily Function

Description:

The consequence affects everyday activities but is not described primarily as work-related.

Typical wording:

```text
Jeg kan ikke gå langt.
Jeg har brug for hjælp i hverdagen.
Jeg kan ikke løfte eller bruge armen.
```

Important facts:

```text
activities affected
duration
need for help or aids
current status
```

## Pain Or Symptoms

Description:

The user describes pain, symptoms or discomfort.

Typical wording:

```text
Jeg har smerter.
Jeg har gener.
Symptomerne blev værre.
```

Important facts:

```text
symptom type
severity
duration
impact on life
whether symptoms are ongoing
```

## Psychological Consequence

Description:

The user describes psychological impact.

Typical wording:

```text
Jeg fik angst.
Jeg er psykisk påvirket.
Jeg har traumer efter forløbet.
```

Important facts:

```text
symptoms
duration
treatment or support
connection to healthcare event
work or daily impact
```

## Economic Loss

Description:

The user describes economic impact.

Typical wording:

```text
Jeg har mistet indkomst.
Jeg har haft udgifter.
Det har kostet mig penge.
```

Important facts:

```text
whether there is a health consequence
income loss
expenses
period
supporting documents
```

Screening note:

Economic loss without health consequence should be treated carefully and may not be enough for patient injury screening.

## Additional Treatment Needed

Description:

The user needed further treatment because of the event.

Typical wording:

```text
Jeg skulle opereres igen.
Jeg fik ekstra behandling.
Jeg blev indlagt igen.
```

Important facts:

```text
what extra treatment was needed
when it happened
why it was needed
current outcome
```

## Hospitalisation Or Readmission

Description:

The user was admitted or readmitted after the event.

Typical wording:

```text
Jeg blev indlagt igen.
Jeg måtte på hospitalet bagefter.
```

Important facts:

```text
admission date
reason for admission
duration
connection to earlier healthcare event
```

## No Specific Consequence

Description:

The user describes dissatisfaction or concern but no concrete consequence.

Typical wording:

```text
Jeg er utilfreds.
Jeg blev behandlet dårligt.
Jeg vil klage.
```

UX note:

Ask one consequence question before guide-away unless the matter is clearly out of scope.

## Unknown Consequence

Use unknown when the message suggests something happened but consequence is not clear.

Recommended question:

```text
Hvilke konsekvenser fik det for patienten?
```

## Consequence Severity Signal

Suggested internal severity order:

```text
death
severe_permanent_consequence
permanent_consequence
loss_of_work_capacity
worsened_disease
additional_treatment_needed
hospitalisation_or_readmission
temporary_consequence
pain_or_symptoms
psychological_consequence
economic_loss
no_specific_consequence
unknown
```

This order is only a screening aid and must not replace staff review.

## References

- DOMAIN-005-injury-types.md
- docs/rulebook/RULEBOOK-040-injury-and-consequence-rules.md
- docs/rulebook/RULEBOOK-110-human-review-rules.md
- docs/ai-case-brain/BRAIN-008-injury-and-consequence-rules.md
