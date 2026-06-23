# Dokument 16 - Project Review v1.0

## Formål

Dette dokument samler status efter designfasen for ErstatningsHjælp.

Målet er at svare på:

- Hvad har vi bygget af grundlag?
- Hvad er stærkt?
- Hvad mangler?
- Hvad er risikabelt?
- Hvad er MVP?
- Hvad skal ikke bygges endnu?
- Hvad skal ServerAdmin eller udvikler bygge først?

Dette dokument markerer overgangen fra:

```text
Designfase
↓
Implementeringsfase
```

---

# 1. Kort projektbeskrivelse

ErstatningsHjælp er en AI-understøttet platform til indledende screening, prioritering og håndtering af potentielle patientskade- og erstatningssager.

Første version skal ikke være et fuldt juridisk sagsbehandlingssystem.

Første version skal bevise denne kernefunktion:

```text
Kan AI forstå en kort sagsbeskrivelse,
udtrække relevante fakta,
beregne interne scores,
stille næste bedste spørgsmål,
og hjælpe med at prioritere sagen?
```

---

# 2. Hvad er færdigdesignet?

## Produkt og forretning

- CRM Workflow
- MVP Roadmap
- Business Metrics & KPI Framework
- Case Intelligence Roadmap

## AI

- AI Engine
- Prompt Pack v1.0
- Scoring Engine
- Conversation Engine
- AI Cost & Operations Model

## Teknisk arkitektur

- Database Blueprint
- Domain Model
- API Specification
- Data Dictionary
- Laravel Build Queue

## Compliance og kvalitet

- Security & GDPR
- Testing Strategy
- ServerAdmin Handoff
- Sprint 00

---

# 3. Største styrker

## 3.1 Klar MVP-afgrænsning

Projektet har en tydelig første version:

```text
AI Screening MVP
```

Det betyder, at projektet ikke forsøger at bygge alt på én gang.

## 3.2 AI er opdelt i specialiserede funktioner

AI-laget er ikke designet som én stor chatbot.

Det er opdelt i:

```text
Entity Extraction
Score Engine
Next Question Engine
Summary Engine
Case Category Engine
```

Dette gør systemet lettere at teste, debugge og forbedre.

## 3.3 MitID placeres efter screening

MitID er ikke første trin.

Det er vigtigt for konvertering.

Brugeren skal først opleve værdi, før der kræves identifikation.

## 3.4 Scoring er struktureret

Der er defineret tre scores:

```text
Case Strength
Information Quality
Commercial Value
```

Dette giver en mere nuanceret vurdering end én samlet score.

## 3.5 GDPR er tænkt ind tidligt

Projektet har tidligt defineret:

- data minimization
- ingen følsomme data i GitHub
- sikker filopbevaring
- samtykke
- audit log
- pseudonymisering
- adgangskontrol

## 3.6 Udviklingskø er klar

Laravel Build Queue giver en konkret rækkefølge for implementering.

---

# 4. Største risici

## 4.1 Juridisk risiko

Projektet arbejder tæt på juridisk rådgivning og helbredsdata.

Risiko:

```text
At kommunikationen opfattes som juridisk garanti eller advokatrådgivning.
```

Mitigation:

- AI må ikke love erstatning
- AI må ikke konkludere ansvar
- Alle juridiske tekster skal godkendes af menneske
- Juridisk setup skal afklares før produktion

---

## 4.2 GDPR og helbredsdata

Helbredsoplysninger er følsomme.

Risiko:

```text
At systemet indsamler eller gemmer mere data end nødvendigt.
```

Mitigation:

- Kort screening først
- Ingen journaler i MVP
- Ingen CPR i MVP
- Samtykke før dybere behandling
- Sikker storage senere

---

## 4.3 AI-hallucinationer

AI kan gætte eller formulere sig for sikkert.

Risiko:

```text
At AI opfinder fakta eller overvurderer sagen.
```

Mitigation:

- JSON schema validation
- Prompt-regler mod at opfinde fakta
- Confidence score
- Manual review ved usikkerhed
- Deterministisk ScoringService

---

## 4.4 Kommerciel model er ikke endeligt afklaret

Der er endnu ikke valgt endelig betalingsmodel.

Muligheder:

```text
No cure no pay
Fast pris
Hybrid
Abonnement for rådgivere
```

Mitigation:

- Afklar model før lancering
- Juridisk review af no-cure-no-pay
- KPI-framework kan understøtte flere modeller

---

## 4.5 For bred MVP

Der er risiko for at bygge for meget tidligt.

Mitigation:

MVP må kun handle om:

```text
Screening
Lead storage
Scores
Next question
Basic CRM view
```

Ikke dokumentanalyse, klagegenerator eller win probability.

---

# 5. MVP scope

## Skal være med i MVP 0.1.0

```text
Landing page
Screening start endpoint
Conversation endpoint
AI Screening Service
Prompt loading
Lead database
Conversation storage
Entity storage
Score storage
Missing information
AI summary
A/B/C/D category
Basic CRM list
Lead detail page
Basic tests
```

---

## Må ikke være med i MVP 0.1.0

```text
MitID integration
Fuldmagt
Dokumentupload
Journalanalyse
Klagegenerator
Similar Case Engine
Win Probability Engine
Automatisk indsendelse
Automatisk juridisk vurdering
```

Disse moduler kommer senere.

---

# 6. Første tekniske mål

Det første demo-mål er:

```text
Bruger skriver:
"Min mor fik ikke diagnosticeret kræft i tide og døde senere."

Systemet:
1. Opretter lead
2. Gemmer besked
3. Udtrækker entities
4. Beregner scores
5. Gemmer assessment
6. Returnerer næste spørgsmål
7. Viser lead i CRM
```

Dette er vigtigere end alle avancerede features.

---

# 7. Første implementeringsrækkefølge

## Step 1 - Laravel foundation

- Installer Laravel
- Konfigurer miljø
- Sikr lokal opstart

## Step 2 - Database

- Migrations
- Models
- Relations

## Step 3 - Prompt loader

- Læs prompt-filer fra `/prompts`
- Test prompt loading

## Step 4 - AI service

- OpenAI integration
- JSON parsing
- Validation
- Safe failure handling

## Step 5 - Screening API

- Start screening
- Continue conversation
- Get lead

## Step 6 - Basic CRM

- Login
- Lead list
- Lead detail

## Step 7 - Tests

- Scoring tests
- API tests
- Prompt output tests

---

# 8. Hvad ServerAdmin skal gøre først

ServerAdmin skal ikke starte med MitID, deployment eller dokumentanalyse.

ServerAdmin skal starte med:

```text
Issue #1 - Install Laravel 12 project foundation
Issue #2 - Create core database migrations
Issue #3 - Create core Eloquent models
```

Derefter:

```text
PromptRepository
AiScreeningService
AiResponseValidator
LeadScoringService
```

---

# 9. Hvad vi bør afklare før offentlig lancering

## Juridisk

- Må virksomheden tage no-cure-no-pay?
- Skal der være advokatpartner?
- Hvordan må ydelsen markedsføres?
- Hvilke disclaimers skal bruges?

## GDPR

- Behandlingsgrundlag
- Samtykketekster
- Privatlivspolitik
- Databehandleraftaler
- Slettepolitik

## Forretning

- Prisstruktur
- Provision
- Kundevilkår
- Håndtering af afviste sager

## Drift

- Hosting
- Backup
- Monitoring
- Incident response
- Access control

---

# 10. Projektets vigtigste designbeslutninger

## Beslutning 1

AI-screening før MitID.

## Beslutning 2

AI må ikke træffe juridisk endelig afgørelse.

## Beslutning 3

Scoring deles i tre scores.

## Beslutning 4

Kun stærke eller interessante leads går videre.

## Beslutning 5

Dokumentanalyse er ikke MVP.

## Beslutning 6

Sagsbehandler har sidste ord.

## Beslutning 7

Ingen rigtige følsomme data i GitHub eller tests.

---

# 11. Definition of Design Phase Done

Designfasen kan betragtes som færdig når:

- [x] Database er beskrevet
- [x] API er beskrevet
- [x] AI flow er beskrevet
- [x] Prompts er beskrevet
- [x] CRM workflow er beskrevet
- [x] MVP roadmap er beskrevet
- [x] Security/GDPR er beskrevet
- [x] Teststrategi er beskrevet
- [x] Build queue er beskrevet
- [x] Data dictionary er beskrevet
- [x] KPI framework er beskrevet
- [x] Case intelligence roadmap er beskrevet

---

# 12. Definition of Implementation Ready

Projektet er klar til implementering når:

- [ ] Laravel foundation er installeret
- [ ] Migrations er oprettet
- [ ] Models er oprettet
- [ ] Prompt loader er oprettet
- [ ] AI service skeleton findes
- [ ] Første screening endpoint virker
- [ ] Basic CRM kan vise leads

---

# 13. Anbefalet næste skridt

Nu bør arbejdet skifte fra flere strategidokumenter til GitHub Issues og implementering.

Næste arbejde bør være:

```text
1. Opret resterende Sprint 1 og Sprint 2 issues
2. Få Laravel installeret
3. Implementer database
4. Implementer første AI screening endpoint
5. Test med dummy cases
```

---

# 14. Samlet vurdering

Projektet er stærkt designet og klar til teknisk opstart.

Den største risiko er ikke længere manglende arkitektur.

Den største risiko er at bygge for meget for tidligt.

Derfor skal første version holdes skarp:

```text
AI Screening
Lead storage
Scores
Next question
Basic CRM
```

Når denne kerne virker, kan resten bygges gradvist.

---

# Resultat

Project Review v1.0 afslutter designfasen og fastlægger næste retning:

```text
Stop med at udvide scope.
Start med at bygge MVP-kernen.
```
