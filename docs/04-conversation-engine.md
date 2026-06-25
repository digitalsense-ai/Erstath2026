# Dokument 4 - Conversation Engine v2.0

Status: Updated for Enterprise Architecture Baseline
Domain: Experience / AI / Decision
Related: DOC-020 Experience Architecture, DOC-021 Digital First Conversation Flow, DOC-022 Conversation Patterns, DOC-023 Tone of Voice Guide, DEC-001 Start Conversation, DEC-002 Empathy Reflection, DEC-003 Confirm Understanding, DEC-004 Smart Skip Decision, DEC-005 Routing Recommendation, PAT-001 through PAT-009

## Formål

Conversation Engine styrer den digitale første samtale.

Målet er ikke at efterligne en almindelig chatbot eller presse brugeren gennem en lang formular.

Målet er at:

- lade brugeren beskrive situationen med egne ord
- vise forståelse før der stilles mange spørgsmål
- bekræfte vigtig forståelse før klassifikation
- stille få og relevante spørgsmål
- undgå gentagelser
- strukturere information internt
- forberede beslutningsmotor og CRM-handover

Den officielle brugeroplevelse er nu beskrevet i:

```text
docs/experience/DOC-020-experience-architecture.md
docs/experience/DOC-021-digital-first-conversation-flow.md
docs/experience/DOC-022-conversation-patterns.md
docs/experience/DOC-023-tone-of-voice-guide.md
```

---

## Grundprincip

Conversation Engine skal følge dette princip:

```text
Speak Human, Store Structured
```

Brugeren skal opleve en enkel, respektfuld og menneskelig samtale.

Systemet må internt gemme strukturerede fakta, confidence, missing information, beslutningssignaler og CRM-handoverdata.

Brugeren må ikke eksponeres for raw tags, raw scores, routingkoder eller tekniske beslutningslabels.

---

## Hovedflow

Det officielle samtaleflow er:

```text
Start conversation
↓
Free text description
↓
Internal interpretation
↓
Empathy reflection
↓
User confirmation or correction
↓
Smart Skip question selection
↓
Guided screening
↓
Information quality decision
↓
Routing recommendation
↓
Human review when required
↓
Identity, consent or documents only when relevant
↓
CRM handover
```

Relevante beslutningskort:

```text
DEC-001 Start Conversation
DEC-002 Empathy Reflection
DEC-003 Confirm Understanding
DEC-004 Smart Skip Decision
DEC-005 Routing Recommendation
DEC-006 Human Review
DEC-007 Information Quality
DEC-013 CRM Assignment
```

---

## Step 1 - Free Text First

Brugeren skal starte med at beskrive situationen med egne ord.

Conversation Engine skal acceptere:

- ufuldstændige beskrivelser
- usikre oplysninger
- følelsesmæssigt svære beskrivelser
- almindeligt sprog uden juridiske termer

Brugeren skal ikke mødes af en lang formular som første trin.

Se:

```text
DEC-001 Start Conversation
PAT-001 Speak Human, Store Structured
PAT-002 Understanding Before Questioning
```

---

## Step 2 - Internal Interpretation

Systemet må internt identificere:

- hvem sagen handler om
- relation til berørt person
- hvad der skete
- hvornår det skete
- hvornår problemet blev opdaget
- konsekvens eller skade
- behandlingstype
- behandlingssted
- dokumentationssignaler
- tidligere afgørelse eller klage
- manglende oplysninger
- confidence levels
- sensitive context indicators

Denne fortolkning må ikke vises som rå AI-tags til brugeren.

---

## Step 3 - Empathy Reflection

Efter en meningsfuld første beskrivelse skal systemet vise en kort og rolig refleksion af, hvad det har forstået.

Formålet er at skabe tillid og sikre, at systemet ikke fortsætter på en misforståelse.

Refleksionen skal:

- takke brugeren for at dele informationen
- opsummere situationen i enkelt sprog
- undgå juridiske konklusioner
- undgå raw labels
- give brugeren mulighed for at bekræfte, rette eller tilføje

Se:

```text
DEC-002 Empathy Reflection
PAT-002 Understanding Before Questioning
PAT-003 Confirm Before Classify
```

---

## Step 4 - Confirm Understanding

Vigtige inferred facts bør bekræftes, før de bruges til routing eller policybeslutninger.

Brugeren skal kunne vælge:

```text
Yes, that is correct
No, I want to correct it
I want to add something
```

Internt skal systemet gemme:

- confirmed facts
- corrected facts
- inferred facts
- unresolved facts
- confidence levels
- source of fact

Se:

```text
DEC-003 Confirm Understanding
PAT-003 Confirm Before Classify
```

---

## Step 5 - Smart Skip Question Selection

Conversation Engine må ikke bare stille alle spørgsmål i en fast rækkefølge.

Inden hvert spørgsmål skal systemet vurdere:

- er svaret allerede kendt?
- er faktum bekræftet?
- er faktum kun inferred?
- er spørgsmålet nødvendigt nu?
- kan spørgsmålet vente?
- kræver emnet human review?

Mulige handlinger:

```text
ask_now
confirm_naturally
skip_already_known
skip_not_relevant
postpone_until_later
human_review
```

Se:

```text
DEC-004 Smart Skip Decision
PAT-004 Never Ask Twice
PAT-006 Smart Skip
```

---

## Step 6 - Guided Screening

Guided Screening skal stille ét fokuseret spørgsmål ad gangen.

Spørgsmål skal prioriteres efter, hvad der er nødvendigt for næste beslutning, ikke efter hvad der findes i et gammelt spørgeskema.

Typiske informationsområder:

- timing eller periode
- hvem sagen vedrører
- relation
- behandlingsforløb
- konsekvens
- dokumentstatus
- tidligere klage eller afgørelse
- manglende nøgleoplysninger

Spørgsmål skal følge:

```text
PAT-005 Explain Why
PAT-007 One Thought Per Screen
DOC-023 Tone of Voice Guide
```

---

## Stop-regel

Den gamle regel om maks 8 spørgsmål kan stadig bruges som teknisk guardrail, men ikke som eneste beslutningspunkt.

Når systemet når grænsen, skal det vælge mellem:

```text
collect_more_information
human_review_required
routing_recommendation
crm_assignment
```

Det må ikke automatisk føre til reject eller qualified.

---

## Hurtig kvalificering

Hvis informationen tidligt er stærk og tilstrækkelig, skal systemet ikke stille unødvendige spørgsmål.

Men hurtig kvalificering betyder ikke automatisk MitID eller automatisk dokumentkrav.

Ny model:

```text
strong signals
↓
information quality check
↓
acceptance policy decision
↓
routing recommendation
↓
identity or document gate only when relevant
```

Se:

```text
DEC-007 Information Quality
DEC-008 Acceptance Policy Decision
DEC-009 Identity Gate
DEC-011 Document Readiness
```

---

## Spørgsmål efter sagstype

Conversation Engine kan stadig bruge sagstypebaserede spørgsmål, men kun hvis spørgsmålet er relevant og ikke allerede besvaret.

### Diagnoseforsinkelse

Mulige spørgsmål:

```text
When did the person first seek help?
When was the diagnosis made?
What diagnosis was involved?
```

### Operationsrelateret skade

Mulige spørgsmål:

```text
What operation was performed?
What happened afterwards?
Are the consequences still present?
```

### Medicinsk skade

Mulige spørgsmål:

```text
What medication was involved?
When did the reaction occur?
Are the consequences still present?
```

### Infektion

Mulige spørgsmål:

```text
When did the infection occur?
What treatment was given?
Did it have lasting consequences?
```

Disse spørgsmål skal vælges af Smart Skip-logikken og ikke stilles automatisk.

---

## Beslutningspunkter

De gamle A/B/C/D-beslutningspunkter er superseded som direkte brugerflow.

Conversation Engine må ikke direkte vælge:

```text
MITID_PENDING
DOCUMENTS_PENDING
REJECTED
```

Ny beslutningsmodel:

```text
conversation state
↓
information quality
↓
routing recommendation
↓
human review if needed
↓
identity / consent / document gates when relevant
↓
CRM assignment
```

Se:

```text
DEC-005 Routing Recommendation
DEC-006 Human Review
DEC-009 Identity Gate
DEC-010 Consent Gate
DEC-011 Document Readiness
DEC-013 CRM Assignment
```

---

## Guide Elsewhere

Hvis platformen ikke kan fortsætte, skal det ske respektfuldt.

Brugeren må ikke se rå labels som:

```text
REJECTED
low score
not qualified
no case
```

I stedet skal systemet følge:

```text
PAT-008 Respectful Guide-Away
DEC-012 Guide Elsewhere
DOC-023 Tone of Voice Guide
```

---

## Human Review Bridge

Conversation Engine skal kunne stoppe automatisk flow og sende til human review hvis:

- confidence er lav
- oplysninger er modstridende
- situationen er sensitiv eller alvorlig
- relation eller authorization er uklar
- der er mulig fristproblematik
- tidligere afgørelse nævnes
- policy kræver review

Se:

```text
DEC-006 Human Review
PAT-009 Human Review Bridge
```

---

## CRM Handover

Conversation Engine skal producere et struktureret CRM-handover.

Handover bør indeholde:

- original user description
- empathy reflection
- confirmation state
- confirmed facts
- inferred facts
- corrected facts
- unresolved facts
- missing information
- asked questions
- skipped questions
- postponed questions
- confidence levels
- information quality outcome
- routing recommendation
- review reason if relevant
- suggested next action
- user-facing message shown

Se:

```text
DEC-013 CRM Assignment
```

---

## Success Metrics

Gamle KPI'er bør opdateres til også at måle kvalitet og ansvarlighed.

| KPI | Mål |
|---|---:|
| Gennemsnitlige spørgsmål | Lavest muligt uden at skade kvalitet |
| Repeated question rate | Lav |
| Confirmation correction rate | Monitoreres |
| Completion rate | Høj |
| Human review precision | Høj |
| User confusion / drop-off | Lav |
| CRM handover completeness | Høj |
| Raw internal label exposure | 0 |

MitID-konvertering må ikke være primær KPI i første samtale, fordi identity gate kun skal vises når relevant.

---

## Audit Requirements

Conversation Engine skal logge:

- conversation state version
- prompts used
- user answers
- extracted facts
- confirmation states
- skipped questions and reasons
- decision cards invoked
- routing recommendation
- user-facing messages shown
- CRM handover snapshot

---

## Version 2 Future Work

Senere kan motoren udvides med:

```text
Adaptive Questioning Engine
```

Men dette kræver:

- policy review
- AI governance
- test coverage
- bias and quality review
- ADR if it materially changes decision behavior
