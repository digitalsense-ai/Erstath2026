# ErstatningsHjælp

ErstatningsHjælp er et AI-baseret screenings- og CRM-system til vurdering og prioritering af potentielle patientskade- og erstatningssager.

Målet er ikke, at AI skal afgøre en sag juridisk. Målet er at bruge AI til at:

- modtage leads
- stille intelligente opfølgende spørgsmål
- udtrække relevante fakta
- beregne interne scores
- prioritere de bedste sager
- forberede sagsbehandlerens arbejde

Systemet skal fungere som en lead engine, hvor dårlige eller irrelevante sager filtreres tidligt fra, mens lovende sager sendes videre til MitID, fuldmagt, dokumentupload og manuel vurdering.

---

## Kerneidé

Traditionelt flow:

```text
Landing page
↓
Lang formular
↓
Manuel vurdering
```

ErstatningsHjælp-flow:

```text
Landing page
↓
Bruger fortæller kort hvad der skete
↓
AI stiller 3-5 intelligente spørgsmål
↓
System beregner 3 scores
↓
Kun lovende sager går videre
↓
MitID
↓
Fuldmagt
↓
Dokumentupload
↓
Sagsbehandler
```

---

## De 3 hovedscores

### 1. Case Strength Score

Måler hvor stærk sagen umiddelbart ser ud.

Eksempler:

- Er sagen inden for frister?
- Er der en tydelig skade?
- Er der mulig sammenhæng mellem behandling og skade?
- Er der varigt mén, dødsfald eller økonomisk tab?
- Findes der dokumentation?

### 2. Information Quality Score

Måler hvor meget brugbar information systemet har.

Eksempler:

- Dato kendt
- Hospital/behandlingssted kendt
- Skadetype kendt
- Konsekvenser beskrevet
- Dokumenter findes

### 3. Commercial Value Score

Måler om sagen er økonomisk interessant for virksomheden.

Eksempler:

- Forventet erstatning
- Varigt mén
- Tabt arbejdsfortjeneste
- Dødsfald/forsørgertab
- No cure no pay-egnethed

---

## Sagskategorier

| Kategori | Beskrivelse | Handling |
|---|---|---|
| A-sag | Meget lovende sag | Gå videre til MitID, fuldmagt og dokumenter |
| B-sag | Lovende, men mangler info | AI stiller flere spørgsmål eller beder om dokumenter |
| C-sag | Usikker sag | Manuel vurdering eller flere oplysninger |
| D-sag | Svag/irrelevant/forældet | Afvis venligt eller giv generel information |

---

## Foreslået teknologistak

- Laravel 12
- Livewire 3
- MySQL
- OpenAI API
- Laravel Breeze
- Hetzner VPS eller tilsvarende VPS

---

## Repository-struktur

```text
erstatningshjaelp/
│
├── docs/
│   ├── 01-database-blueprint.md
│   ├── 02-ai-engine.md
│   ├── 03-scoring-engine.md
│   ├── 04-conversation-engine.md
│   ├── 05-crm-workflow.md
│   ├── 06-domain-model.md
│   └── sprint-00.md
│
├── app/
├── database/
├── resources/
├── routes/
├── tests/
├── prompts/
└── README.md
```

Laravel-projektet placeres som udgangspunkt direkte i repo-roden, medmindre andet besluttes senere.

---

## Første MVP

Version 0.1.0 skal kun indeholde:

- Landing page
- AI screening chat
- JSON-output fra AI
- Lead gemmes i database
- 3 scores beregnes/gemmes
- Simpelt internt dashboard

Version 0.1.0 skal ikke indeholde:

- MitID
- Fuldmagt
- Journalanalyse
- Klagegenerator
- Automatisk erstatningsberegning

---

## Status flow

```text
NEW
↓
SCREENING
↓
AWAITING_INFO
↓
QUALIFIED
↓
MITID_PENDING
↓
POA_PENDING
↓
DOCUMENTS_PENDING
↓
REVIEW
↓
ACTIVE_CASE
↓
SUBMITTED
↓
DECISION
↓
CLOSED
```

---

## Sikkerhed og compliance

Dette projekt kan senere komme til at håndtere følsomme personoplysninger og helbredsoplysninger.

Derfor gælder følgende fra start:

- Ingen rigtige CPR-numre i kode, tests eller seed-data
- Ingen rigtige patientjournaler i repoet
- Ingen API-nøgler i GitHub
- `.env` må aldrig committes
- Brug kun dummy-data i udvikling
- Dokumenter og uploads skal opbevares sikkert udenfor public webroot

---

## Næste skridt

Start med `docs/sprint-00.md`.

Sprint 0 handler om at gøre projektet klar til udvikling:

1. færdiggøre repository-struktur
2. oprette Laravel-projekt
3. oprette basis-migrations
4. oprette Eloquent-modeller
5. oprette OpenAI-service skeleton
6. oprette første simple AI-screening endpoint

---

## Projektprincip

Byg småt først.

Første mål er ikke at bygge hele sagsmotoren.

Første mål er at bevise:

> Kan AI modtage en kort sagsbeskrivelse og returnere struktureret screening med scores, manglende oplysninger og næste bedste spørgsmål?

Hvis det virker, kan resten bygges ovenpå.
