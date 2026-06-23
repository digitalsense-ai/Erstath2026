# Dokument 7 - MVP Roadmap v1.0

## Formål

Dette dokument beskriver hvordan ErstatningsHjælp bygges trinvist fra idé til fungerende platform.

Målet er at undgå at bygge for meget for tidligt.

Projektet skal først bevise den vigtigste antagelse:

```text
Kan AI modtage en kort sagsbeskrivelse,
forstå den,
beregne relevante scores,
og stille næste bedste spørgsmål?
```

Hvis dette virker, kan resten af platformen bygges ovenpå.

---

# Version 0.1.0 - AI Screening MVP

## Formål

Byg den første fungerende screeningmotor.

## Funktioner

- Landing page
- Felt: Fortæl kort hvad der skete
- AI-analyse
- JSON-output
- Entity extraction
- 3 scores
- Missing information
- Next question
- Lead gemmes i database
- Simpelt internt dashboard

## Ikke inkluderet

- MitID
- Fuldmagt
- Dokumentupload
- Journalanalyse
- Klagegenerator
- Automatisk indsendelse

## Succeskriterium

Bruger skriver:

```text
Min mor fik ikke diagnosticeret kræft i tide og døde senere.
```

Systemet returnerer:

```json
{
  "case_strength": 82,
  "information_quality": 61,
  "commercial_value": 77,
  "case_category": "B",
  "recommended_action": "collect_more_information",
  "next_question": "Hvornår blev kræften diagnosticeret?"
}
```

---

# Version 0.2.0 - Qualification CRM

## Formål

Gøre screeningresultater brugbare internt.

## Funktioner

- CRM lead board
- Lead detail page
- Scorevisning
- Samtalehistorik
- Mangelliste
- AI-resumé
- Statusændring
- Manuel vurdering

## Succeskriterium

En medarbejder kan åbne et lead og se:

```text
Hvad brugeren har skrevet
AI's vurdering
3 scores
Manglende oplysninger
Anbefalet næste handling
```

---

# Version 0.3.0 - Digital Onboarding

## Formål

Få kvalificerede leads videre til identifikation og samtykke.

## Funktioner

- Brugeroprettelse
- MitID flow
- Samtykke til behandling af helbredsoplysninger
- Digital fuldmagt
- Status: MITID_PENDING
- Status: POA_PENDING

## Ikke inkluderet i første version

- Automatisk indsendelse til Patienterstatningen
- Fuld juridisk sagsstyring

---

# Version 0.4.0 - Document Center

## Formål

Gøre det muligt at indsamle og organisere dokumenter.

## Funktioner

- Dokumentupload
- Dokumenttyper
- Sikker filopbevaring
- Mangelliste
- Dokumentstatus
- Intern dokumentoversigt

## Dokumenttyper

```text
Journal
Afgørelse
Lønseddel
Kvittering
Fuldmagt
Andet
```

---

# Version 0.5.0 - AI Document Summary

## Formål

AI hjælper sagsbehandleren med at forstå dokumenter hurtigere.

## Funktioner

- AI dokumentresumé
- Tidslinje
- Mangelliste
- Nøglepunkter
- Mulige bevispunkter

## Vigtigt

AI må ikke træffe endelig juridisk afgørelse.

AI skal kun forberede sagsbehandlerens arbejde.

---

# Version 0.6.0 - Case Management

## Formål

Konvertere kvalificerede leads til rigtige sager.

## Funktioner

- Case oprettelse
- Case status
- Ansvarlig rådgiver
- Timeline
- Tasks
- Intern prioritet
- Økonomiestimat

---

# Version 0.7.0 - Claim Drafting Assistant

## Formål

AI kan hjælpe med at skrive udkast.

## Funktioner

- Klageudkast
- Genoptagelsesanmodning
- Bilagsliste
- Sagsresumé til rådgiver

## Vigtigt

Alle udkast skal godkendes af menneske før brug.

---

# Version 1.0.0 - Complete MVP Platform

## Formål

Første kommercielt brugbare platform.

## Funktioner

- AI screening
- Lead CRM
- Digital onboarding
- Dokumentcenter
- AI-resumé
- Case management
- Intern prioritering
- Basal økonomimotor

---

# Prioriteringsprincip

Byg i denne rækkefølge:

```text
Screening først
CRM derefter
Onboarding derefter
Dokumenter derefter
AI dokumentanalyse derefter
Klagegenerator til sidst
```

Grunden er, at screeningmotoren er forretningens kerne.

Hvis screeningmotoren ikke virker, giver de senere moduler mindre værdi.

---

# Nuværende næste skridt

Projektet er nu klar til Sprint 0.2.

Sprint 0.2 handler om:

1. Laravel foundation
2. Core migrations
3. Core models
4. OpenAI service layer
5. Screening endpoint
6. Prompt files
7. Basic dashboard skeleton
