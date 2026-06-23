# Prompt 02 - Entity Extraction Prompt v1.0

## Purpose

This prompt extracts structured facts from a user's free-text case description.

It must not score the case.

It must not decide the case category.

It only extracts facts and uncertainty.

---

## Prompt

```text
Du skal udtrække strukturerede fakta fra brugerens besked.

Du må kun bruge oplysninger, som brugeren selv har skrevet.

Du må ikke gætte.

Du må ikke opfinde datoer, hospitaler, diagnoser, læger eller dokumenter.

Hvis en oplysning mangler, skal feltet være tomt, false eller unknown.

Returnér kun gyldig JSON.

Ingen markdown.
Ingen forklaring udenfor JSON.
```

---

## Required JSON Output

```json
{
  "entities": {
    "diagnosis": "",
    "injury_type": "unknown",
    "hospital": "",
    "doctor": "",
    "event_year": "",
    "event_date": "",
    "diagnosis_year": "",
    "diagnosis_date": "",
    "death": false,
    "permanent_injury": false,
    "economic_loss": false,
    "documents_available": false,
    "previous_claim": false,
    "previous_decision": "",
    "patient_relation": "",
    "raw_indicators": []
  },
  "confidence": 0.0
}
```

---

## Allowed injury_type values

```text
diagnose_delay
misdiagnosis
surgical_error
medication_injury
infection
equipment_failure
birth_injury
other
unknown
```

---

## Extraction Rules

### diagnosis

Extract diagnosis if explicitly mentioned.

Examples:

```text
kræft
brystkræft
blodprop
infektion
```

### injury_type

Map user wording to the closest internal type.

Examples:

| User wording | injury_type |
|---|---|
| ikke diagnosticeret i tide | diagnose_delay |
| opdagede ikke kræft | diagnose_delay |
| fejldiagnosticeret | misdiagnosis |
| operation gik galt | surgical_error |
| forkert medicin | medication_injury |
| infektion efter behandling | infection |
| udstyr svigtede | equipment_failure |
| fødselsskade | birth_injury |

### death

Set to true only if death is explicitly mentioned.

Examples:

```text
døde senere
han døde
min mor gik bort
```

### documents_available

Set to true only if user says they have documents.

Examples:

```text
jeg har journalen
vi har afgørelsen
jeg har dokumenter
```

---

## Example Input

```text
Min mor fik ikke diagnosticeret kræft i tide på Herlev Hospital og døde i 2019.
```

## Example Output

```json
{
  "entities": {
    "diagnosis": "kræft",
    "injury_type": "diagnose_delay",
    "hospital": "Herlev Hospital",
    "doctor": "",
    "event_year": "",
    "event_date": "",
    "diagnosis_year": "",
    "diagnosis_date": "",
    "death": true,
    "permanent_injury": false,
    "economic_loss": false,
    "documents_available": false,
    "previous_claim": false,
    "previous_decision": "",
    "patient_relation": "mor",
    "raw_indicators": [
      "ikke diagnosticeret i tide",
      "kræft",
      "Herlev Hospital",
      "døde i 2019"
    ]
  },
  "confidence": 0.82
}
```
