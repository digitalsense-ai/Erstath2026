# Dokument 2 - AI JSON Schema & Prompt Architecture v1.0

## Formål

AI må aldrig fungere som en fri chatbot.

AI skal fungere som en struktureret sagskvalificeringsmotor.

AI's opgave er:

- udtrække fakta
- identificere manglende oplysninger
- beregne scores
- stille næste spørgsmål
- anbefale næste handling

AI må ikke:

- love erstatning
- give juridiske garantier
- træffe afgørelser
- optræde som advokat

---

## AI Workflow

```text
Bruger besked
↓
Entity Extraction
↓
Score Engine
↓
Missing Information Engine
↓
Decision Engine
↓
Next Question Engine
↓
JSON Output
```

---

## Output-format

AI skal altid returnere JSON.

Ingen fritekst til backend.

### Standard JSON Schema

```json
{
  "summary": "",
  "entities": {},
  "scores": {},
  "score_explanation": {},
  "missing_information": [],
  "case_category": "",
  "recommended_action": "",
  "next_question": "",
  "confidence": 0.0
}
```

---

## Summary

Kort intern opsummering.

Eksempel:

```json
{
  "summary": "Mulig diagnoseforsinkelse ved kræft. Dødsfald oplyst. Hospital endnu ukendt."
}
```

Denne vises som udgangspunkt kun internt.

---

## Entities

AI skal udtrække fakta.

### V1 Entities

```json
{
  "diagnosis": "",
  "injury_type": "",
  "hospital": "",
  "doctor": "",
  "event_year": "",
  "diagnosis_year": "",
  "death": false,
  "permanent_injury": false,
  "economic_loss": false,
  "documents_available": false,
  "previous_claim": false,
  "previous_decision": ""
}
```

---

## Injury Types

Fast liste:

```text
diagnose_delay
misdiagnosis
surgical_error
medication_injury
infection
equipment_failure
birth_injury
other
```

---

## Scores

AI skal returnere alle 3 scores.

```json
{
  "case_strength": 82,
  "information_quality": 61,
  "commercial_value": 77
}
```

---

## Score Explanation

For debugging og audit.

Eksempel:

```json
{
  "score_explanation": {
    "case_strength": [
      "Diagnoseforsinkelse",
      "Kræft",
      "Dødsfald"
    ],
    "information_quality": [
      "Diagnose kendt",
      "Konsekvens kendt",
      "Hospital mangler"
    ],
    "commercial_value": [
      "Dødsfald indikerer mulig høj værdi"
    ]
  }
}
```

Dette er vigtigt, fordi systemet skal kunne forklare hvorfor en sag fik en bestemt score.

---

## Missing Information

AI skal identificere mangler.

```json
{
  "missing_information": [
    {
      "field": "hospital",
      "priority": 10
    },
    {
      "field": "diagnosis_date",
      "priority": 9
    },
    {
      "field": "journal",
      "priority": 7
    }
  ]
}
```

---

## Case Category

AI placerer sagen i:

```text
A
B
C
D
```

### A-sag

Meget lovende sag.

### B-sag

Lovende sag, men mangler oplysninger.

### C-sag

Usikker sag, kræver mere information eller manuel vurdering.

### D-sag

Svag, irrelevant eller muligvis forældet sag.

---

## Recommended Action

Mulige værdier:

```text
reject
collect_more_information
request_documents
manual_review
mitid_flow
```

---

## Next Question Engine

AI må kun stille ét spørgsmål ad gangen.

Eksempel:

Bruger:

> Min mor fik ikke diagnosticeret kræft i tide.

Manglende:

```text
Hospital
Dato
Dødsfald
Dokumentation
```

AI vælger:

```json
{
  "next_question": "Hvornår blev kræften diagnosticeret?"
}
```

Ikke fem spørgsmål på én gang.

---

## Confidence

AI skal angive sikkerhed.

```json
{
  "confidence": 0.87
}
```

Skala:

```text
0.00 - 0.40 = lav sikkerhed
0.41 - 0.70 = middel sikkerhed
0.71 - 1.00 = høj sikkerhed
```

---

## System Prompt v1

```text
Du er AI Screening Engine for ErstatningsHjælp.

Du vurderer ikke juridisk ansvar.

Du afgør ikke om kunden får medhold.

Du skal:

1. Udtrække fakta
2. Identificere manglende oplysninger
3. Beregne scores
4. Prioritere sagen
5. Stille det vigtigste næste spørgsmål

Returnér altid gyldig JSON.

Ingen markdown.

Ingen forklaringer.

Ingen tekst udenfor JSON.
```

---

## Version 1 Succeskriterium

Når brugeren skriver:

> Min mor fik ikke diagnosticeret kræft i tide og døde senere.

skal AI kunne:

- identificere kræft
- identificere diagnoseforsinkelse
- identificere dødsfald
- beregne Case Strength
- beregne Information Quality
- beregne Commercial Value
- finde manglende oplysninger
- stille næste bedste spørgsmål
