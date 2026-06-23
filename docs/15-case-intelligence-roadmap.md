# Dokument 15 - Case Intelligence Roadmap v1.0

## Formål

Dette dokument beskriver den langsigtede AI-roadmap for ErstatningsHjælp.

Hvor MVP'en handler om AI-screening, handler Case Intelligence Roadmap om hvordan platformen senere kan udvikle sig til et stærkt beslutnings- og sagsforberedelsesværktøj.

Målet er ikke at erstatte sagsbehandleren.

Målet er at give sagsbehandleren bedre overblik, hurtigere analyse og bedre prioritering.

---

# Grundprincip

AI skal bruges som assistent.

AI må ikke være endelig juridisk beslutningstager.

```text
AI analyserer
AI strukturerer
AI foreslår
AI forklarer

Mennesket vurderer
Mennesket godkender
Mennesket kommunikerer juridisk
```

---

# Intelligence Roadmap Overview

```text
V1 - Screening Intelligence
V2 - Document Intelligence
V3 - Timeline Intelligence
V4 - Drafting Intelligence
V5 - Similar Case Intelligence
V6 - Win Probability Engine
V7 - Autonomous Case Assistant
```

---

# V1 - Screening Intelligence

## Formål

Første AI-niveau.

Brugeren skriver kort hvad der skete, og AI hjælper med at forstå om sagen bør undersøges nærmere.

## Funktioner

- Entity extraction
- Case Strength Score
- Information Quality Score
- Commercial Value Score
- Missing information
- Next best question
- A/B/C/D category
- AI summary

## Output

```text
Lead category
Scores
Next question
Missing information
Internal summary
```

## Værdi

- Reducerer manuel screening
- Prioriterer stærke leads
- Afviser svage sager mere effektivt
- Øger konvertering ved at spørge om det vigtigste først

## Status

Dette er MVP-fokus.

---

# V2 - Document Intelligence

## Formål

AI analyserer uploadede dokumenter og hjælper sagsbehandler med overblik.

## Dokumenttyper

```text
Patientjournal
Afgørelse
Lægeudtalelse
Lønseddel
Kvittering
Fuldmagt
Korrespondance
```

## Funktioner

- Dokumentresumé
- Nøglepunkter
- Mulige beviser
- Manglende dokumenter
- Dokumentklassificering
- Dokumentkvalitet

## Output

```json
{
  "document_type": "journal",
  "summary": "",
  "key_findings": [],
  "possible_evidence": [],
  "missing_documents": [],
  "confidence": 0.0
}
```

## Værdi

- Sagsbehandler bruger mindre tid på at læse rå dokumenter
- Manglende bilag opdages tidligere
- Stærke beviser fremhæves

## Risiko

AI kan misforstå medicinske oplysninger.

Derfor skal dokumentanalyse altid markeres som foreløbig og kræve menneskelig gennemgang.

---

# V3 - Timeline Intelligence

## Formål

AI bygger en kronologisk tidslinje ud fra brugeroplysninger og dokumenter.

## Input

```text
Samtalehistorik
Entities
Journaler
Afgørelser
Dokumentresuméer
```

## Output

```text
2018-03-12 - Første kontakt til læge
2018-04-01 - Henvisning
2019-01-22 - Diagnose stillet
2019-03-10 - Operation
2020-08-15 - Klage indsendt
```

## Funktioner

- Automatisk datoekstraktion
- Sortering af hændelser
- Markering af usikre datoer
- Konflikt mellem oplysninger
- Frist-relevante begivenheder

## Værdi

- Giver hurtigt sagsoverblik
- Hjælper med fristvurdering
- Gør klageudkast lettere

---

# V4 - Drafting Intelligence

## Formål

AI hjælper med at skrive udkast til intern og ekstern kommunikation.

## Mulige udkast

```text
Internt sagsresumé
Klageudkast
Genoptagelsesanmodning
Bilagsoversigt
Spørgsmål til kunde
Spørgsmål til hospital/læge
```

## Vigtigt

Alle udkast skal godkendes af menneske før de sendes eller bruges juridisk.

## Output-eksempel

```text
Udkast til sagsresumé:
Sagen vedrører mulig diagnoseforsinkelse...
```

## Værdi

- Reducerer skrivearbejde
- Standardiserer kvalitet
- Gør nye medarbejdere mere effektive

## Risiko

AI må ikke skrive mere sikkert end fakta tillader.

Derfor skal drafting prompten bruge forsigtige formuleringer.

---

# V5 - Similar Case Intelligence

## Formål

Systemet kan finde lignende tidligere sager.

## Input

```text
Skadetype
Diagnose
Hospital
Tidsforløb
Konsekvens
Dokumentation
Tidligere udfald
```

## Output

```text
Lignende sager
Typiske udfald
Typiske mangler
Typiske stærke beviser
```

## Vigtigt

Similar cases må ikke bruges som garanti.

De skal bruges som intern inspiration og risikoindikator.

## Værdi

- Hurtigere vurdering
- Bedre erfaringsopsamling
- Bedre træning af nye sagsbehandlere

## Forudsætning

Kræver tilstrækkeligt historisk datagrundlag.

---

# V6 - Win Probability Engine

## Formål

Systemet estimerer sandsynlighed for positivt udfald baseret på historiske sager.

## Eksempel

```json
{
  "win_probability": 0.68,
  "confidence": 0.74,
  "similar_cases_count": 42,
  "main_positive_factors": [
    "Diagnoseforsinkelse",
    "Dødsfald",
    "Dokumenteret tidsforløb"
  ],
  "main_negative_factors": [
    "Uklare datoer",
    "Manglende journal"
  ]
}
```

## Vigtigt

Dette må først bygges når der findes et stort og struktureret datasæt.

Det må ikke præsenteres for kunden som garanti.

## Forudsætninger

```text
Mange historiske sager
Korrekt kategorisering
Kendte udfald
Kvalitetssikret datagrundlag
Juridisk/GDPR review
```

---

# V7 - Autonomous Case Assistant

## Formål

Langsigtet vision: AI fungerer som aktiv assistent for sagsbehandleren.

## Mulige funktioner

- Foreslå næste handling
- Advare om manglende dokumenter
- Foreslå deadlines
- Foreslå spørgsmål til kunden
- Forberede klageudkast
- Sammenligne med lignende sager
- Overvåge sager med inaktivitet

## Eksempel

```text
AI foreslår:
Denne sag mangler journal fra marts 2019 og afgørelsesdato fra Patienterstatningen.
Næste bedste handling er at bede kunden uploade afgørelsen.
```

## Menneskelig kontrol

Alle juridisk relevante handlinger skal godkendes af et menneske.

---

# Data maturity model

## Level 1 - Unstructured data

```text
Fritekst og dokumenter
```

## Level 2 - Structured lead data

```text
Entities, scores, categories
```

## Level 3 - Structured case data

```text
Timeline, documents, outcomes
```

## Level 4 - Learning data

```text
Similar cases, outcome patterns
```

## Level 5 - Predictive intelligence

```text
Win probability, value prediction, action recommendations
```

---

# AI governance principles

## 1. Explainability

AI-output skal kunne forklares.

## 2. Auditability

AI-kørsler skal kunne spores.

## 3. Human approval

Menneske godkender juridisk kommunikation.

## 4. Data minimization

AI skal kun modtage nødvendig data.

## 5. No guarantees

AI må aldrig love erstatning eller medhold.

---

# Roadmap priority

## Først

```text
V1 Screening Intelligence
```

## Derefter

```text
V2 Document Intelligence
V3 Timeline Intelligence
```

## Senere

```text
V4 Drafting Intelligence
V5 Similar Case Intelligence
```

## Langsigtet

```text
V6 Win Probability Engine
V7 Autonomous Case Assistant
```

---

# MVP boundary

Følgende er MVP:

```text
V1 Screening Intelligence
```

Følgende er ikke MVP:

```text
Document Intelligence
Timeline Intelligence
Drafting Intelligence
Similar Case Engine
Win Probability Engine
Autonomous Case Assistant
```

---

# Resultat

Case Intelligence Roadmap viser hvordan ErstatningsHjælp kan udvikle sig fra simpel AI-screening til en avanceret sagsintelligensplatform.

Den vigtigste regel er stadig:

```text
Start med screening.
Bevis værdien.
Byg intelligenslagene gradvist.
```
