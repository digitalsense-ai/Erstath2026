# Dokument 5 - CRM & Workflow Engine v1.0

## Formål

Dette dokument beskriver hvordan et lead bevæger sig gennem virksomheden fra første besked til afsluttet sag.

CRM & Workflow Engine er bindeleddet mellem AI-systemet og de mennesker, der skal arbejde med sagerne.

Systemet skal sikre:

- ingen leads bliver glemt
- de bedste sager prioriteres først
- sagsbehandlerne arbejder effektivt
- AI overtager rutinearbejde
- alle sager har tydelig status

---

## Overordnet workflow

```text
Lead
↓
AI Screening
↓
Kvalificering
↓
MitID
↓
Fuldmagt
↓
Dokumenter
↓
Sagsvurdering
↓
Aktiv sag
↓
Patienterstatningen
↓
Afgørelse
↓
Afsluttet
```

---

# Lead Pipeline

## NEW

Lead er netop oprettet.

Eksempel:

```text
Min mor fik ikke diagnosticeret kræft i tide.
```

Handling:

```text
AI Screening starter
```

---

## SCREENING

AI gennemfører interview.

Systemet gemmer:

- samtale
- entities
- scores
- mangelliste
- AI-resumé

Status:

```text
SCREENING
```

---

## AWAITING_INFO

AI mangler vigtige oplysninger for at kunne kvalificere sagen.

Eksempler:

- hændelsesdato mangler
- hospital mangler
- konsekvens mangler
- dokumentation ukendt

Handling:

```text
AI stiller næste vigtigste spørgsmål
```

---

## QUALIFIED

Sagen opfylder minimumskrav.

Eksempel:

```text
Case Strength: 82
Information Quality: 74
Commercial Value: 71
```

Handling:

```text
Send til MitID eller dokumentindhentning
```

---

## REJECTED

Automatisk eller manuel afvisning.

Typiske årsager:

```text
Forældet
Ingen konkret skade
Ingen synlig årsagssammenhæng
For lav commercial value
```

Lead gemmes stadig til statistik og læring.

---

# Onboarding Pipeline

## MITID_PENDING

Bruger skal identificeres.

Mål:

```text
Bekræft identitet
```

---

## POA_PENDING

Fuldmagt mangler.

Mål:

```text
Digital underskrift
```

---

## DOCUMENTS_PENDING

Dokumenter mangler.

Systemet viser:

```text
Mangler:
- Journal
- Afgørelse
- Kvitteringer
- Lønsedler
```

---

# AI Document Engine

Når dokumenter uploades, skal AI senere kunne lave:

```text
Dokumentoversigt
Mangelliste
Tidslinje
Sagsresumé
```

Efter dokumentanalyse flyttes sagen til:

```text
REVIEW
```

---

# REVIEW Queue

Nu kommer første menneskelige vurdering.

Sagsbehandler ser:

```text
Lead Score: 84
Case Strength: 88
Information Quality: 77
Commercial Value: 69
```

Samt:

```text
AI-resumé
AI-tidslinje
Mangelliste
Dokumentstatus
Anbefalet handling
```

---

## Beslutninger i REVIEW

### Godkend

```text
ACTIVE_CASE
```

### Flere oplysninger

```text
REQUEST_MORE_INFO
```

### Afvis

```text
REJECTED
```

---

# ACTIVE_CASE

Nu er det en reel kundesag.

Nye felter:

| Felt | Beskrivelse |
|---|---|
| ansvarlig rådgiver | Sagsansvarlig medarbejder |
| oprettelsesdato | Dato for aktiv sag |
| forventet værdi | Estimeret erstatningsværdi |
| provision | Forventet indtjening |
| prioritet | Intern prioritet |

---

# Case Board

CRM bør bygges som et Kanban-board.

Kolonner:

```text
NEW
SCREENING
AWAITING_INFO
QUALIFIED
MITID_PENDING
POA_PENDING
DOCUMENTS_PENDING
REVIEW
ACTIVE_CASE
SUBMITTED
DECISION
CLOSED
```

---

# Dashboard

Forsiden for medarbejdere skal vise:

```text
Leads i dag
Nye A-sager
Nye B-sager
Konverteringsrate
MitID rate
Dokumentrate
Aktive sager
Sager til review
```

---

# Prioritetsmotor

Alle sager får en intern prioritet.

Formel:

```text
Priority Score =
Lead Score
+
Commercial Value Bonus
+
Urgency Bonus
```

Eksempel:

| Sag | Score |
|---|---:|
| Kræft + dødsfald | 97 |
| Operationsfejl | 83 |
| Medicinsk skade | 68 |

CRM viser automatisk de vigtigste sager øverst.

---

# SLA Engine

Systemet måler svartider.

Eksempel:

| Status | Maks tid |
|---|---:|
| NEW | 1 time |
| QUALIFIED | 24 timer |
| REVIEW | 48 timer |
| ACTIVE_CASE | 5 dage |

Hvis frist overskrides:

```text
Systemet opretter intern påmindelse
```

---

# Økonomimotor

På hver sag vises:

```text
Forventet erstatning
Forventet provision
Forventet profit
```

Eksempel:

```text
Forventet erstatning: 450.000 kr.
Provision: 20%
Forventet omsætning: 90.000 kr.
```

---

# Fremtidig Version 2

Når systemet har historiske sager, kan der tilføjes:

## Win Probability Engine

```text
73 lignende sager
58 fik medhold
Win rate: 79%
```

## Case Similarity Engine

AI finder lignende tidligere sager og viser dem til rådgiveren.

---

# Resultat

Når CRM & Workflow Engine er implementeret, har systemet en komplet intern proces fra første lead til aktiv sag.

Dette dokument er grundlaget for:

- CRM dashboard
- statuslogik
- prioriteringsmotor
- sagsbehandlerens arbejdsgang
- fremtidig rapportering
