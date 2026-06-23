# Prompt 03 - Score Engine Prompt v1.0

## Purpose

This prompt calculates the three internal screening scores for a lead:

- Case Strength
- Information Quality
- Commercial Value

The prompt must use the internal scoring rules and must not invent legal conclusions.

---

## Prompt

```text
Du skal beregne interne screeningsscores for ErstatningsHjælp.

Du må ikke afgøre sagen juridisk.
Du må ikke love erstatning.
Du må ikke opfinde fakta.
Du må kun score ud fra de oplysninger, der er givet i entities og samtalekontekst.

Hvis vigtige oplysninger mangler, skal Information Quality være lavere.
Hvis du er usikker, skal confidence være lavere.

Returnér kun gyldig JSON.
Ingen markdown.
Ingen tekst udenfor JSON.
```

---

## Required JSON Output

```json
{
  "scores": {
    "case_strength": 0,
    "information_quality": 0,
    "commercial_value": 0,
    "overall_score": 0
  },
  "score_explanation": {
    "case_strength": [],
    "information_quality": [],
    "commercial_value": []
  },
  "confidence": 0.0
}
```

---

# Scoring Rules

## Case Strength

Maks score = 100.

### Frister

| Regel | Point |
|---|---:|
| Indenfor 3 år fra erkendelse | +15 |
| Indenfor 10 år fra hændelse | +10 |
| Forældet | -100 |

Hvis sagen vurderes forældet:

```text
case_strength = 0
```

og sagen bør senere kategoriseres som D.

---

### Skadetype

| Skadetype | Point |
|---|---:|
| diagnose_delay | +25 |
| misdiagnosis | +20 |
| surgical_error | +20 |
| medication_injury | +15 |
| equipment_failure | +20 |
| infection | +10 |
| birth_injury | +25 |
| other | +5 |
| unknown | 0 |

---

### Alvorlighed

| Konsekvens | Point |
|---|---:|
| Dødsfald | +25 |
| 100% mén | +25 |
| Varigt mén | +20 |
| Tab af erhvervsevne | +20 |
| Midlertidig skade | +10 |
| Ingen dokumenteret skade | 0 |

---

### Dokumentation

| Dokumentation | Point |
|---|---:|
| Journal findes | +10 |
| Tidligere afgørelse | +15 |
| Lægeudtalelse | +10 |
| Hospital erkender fejl | +25 |
| Ingen dokumentation | 0 |

---

### Årsagssammenhæng

| Vurdering | Point |
|---|---:|
| Meget tydelig | +15 |
| Sandsynlig | +10 |
| Uklar | +5 |
| Ingen synlig | 0 |

---

## Information Quality

Maks score = 100.

### Basisinformation

| Felt | Point |
|---|---:|
| event_date eller event_year | 15 |
| diagnosis | 15 |
| hospital | 15 |
| consequence/death/permanent_injury | 15 |
| documents_available kendt | 10 |

### Supplerende oplysninger

| Felt | Point |
|---|---:|
| diagnosis_date eller diagnosis_year | 10 |
| injury_type | 5 |
| previous_claim kendt | 5 |
| previous_decision kendt | 5 |
| doctor | 5 |

---

## Commercial Value

Maks score = 100.

### Estimeret værdi

Hvis konkret beløb ikke er kendt, vurder forsigtigt ud fra skade og konsekvens.

| Faktor | Point |
|---|---:|
| Meget høj forventet værdi | +40 |
| Høj forventet værdi | +30 |
| Middel forventet værdi | +20 |
| Lav/middel forventet værdi | +10 |
| Lav forventet værdi | +5 |

### Bonusfaktorer

| Faktor | Point |
|---|---:|
| Dødsfald | +20 |
| Forsørgertab | +20 |
| Varigt mén | +15 |
| Tabt erhvervsevne | +15 |
| Tabt arbejdsfortjeneste | +10 |
| Tidligere medhold | +20 |
| Tidligere delvist medhold | +10 |

---

## Overall Score

Use weighted model:

```text
overall_score =
(case_strength x 0.50)
+
(information_quality x 0.20)
+
(commercial_value x 0.30)
```

Round to nearest integer.

---

## Constraints

- Scores must be between 0 and 100.
- If there is too little information, do not over-score.
- If case appears time-barred, case_strength should be 0.
- Explanations must be short and audit-friendly.

---

## Example Input

```json
{
  "entities": {
    "diagnosis": "kræft",
    "injury_type": "diagnose_delay",
    "hospital": "",
    "event_year": "",
    "diagnosis_year": "2019",
    "death": true,
    "documents_available": false,
    "previous_claim": false,
    "previous_decision": ""
  }
}
```

## Example Output

```json
{
  "scores": {
    "case_strength": 75,
    "information_quality": 45,
    "commercial_value": 60,
    "overall_score": 65
  },
  "score_explanation": {
    "case_strength": [
      "Diagnoseforsinkelse indikeret",
      "Kræft oplyst",
      "Dødsfald oplyst",
      "Hospital og hændelsesdato mangler"
    ],
    "information_quality": [
      "Diagnose og konsekvens kendt",
      "Diagnoseår kendt",
      "Hospital og hændelsesdato mangler"
    ],
    "commercial_value": [
      "Dødsfald kan indikere højere økonomisk værdi",
      "Økonomisk tab er ikke dokumenteret endnu"
    ]
  },
  "confidence": 0.72
}
```
