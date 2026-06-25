# Dokument 3 - Scoring Engine v2.0

Status: Updated for Enterprise Architecture Baseline
Domain: Decision / AI
Related: DEC-000 Decision Catalog, DEC-005 Routing Recommendation, DEC-007 Information Quality, DEC-008 Acceptance Policy Decision, DEC-009 Identity Gate, DEC-011 Document Readiness, PAT-003 Confirm Before Classify, PAT-009 Human Review Bridge

## Formål

Scoring Engine beregner interne scores, der kan bruges som input til screening, prioritering og routing.

Scoring Engine er ikke den endelige beslutningsmotor.

Scores skal bruges sammen med:

- confirmed facts
- inferred facts
- confidence levels
- information quality
- policy rules
- human review triggers
- routing decisions
- CRM handover requirements

Den officielle beslutningsmodel ligger nu i Decision Pack:

```text
decisions/DEC-000-decision-catalog.md
decisions/DEC-005-routing-recommendation.md
decisions/DEC-007-information-quality.md
decisions/DEC-008-acceptance-policy.md
```

---

## Grundprincipper

### AI må ikke selv opfinde point

Alle pointsatser og vægte skal komme fra en dokumenteret regelmodel.

### Score er input, ikke afgørelse

Scores må ikke alene føre til automatisk afvisning, MitID-flow eller dokumentkrav.

Scores skal fortolkes gennem Decision Pack og relevante policies.

### Confidence er obligatorisk

En score skal altid vurderes sammen med confidence og datakilde.

Eksempel:

```text
AI-inferred fact < user-confirmed fact < document-supported fact < human-reviewed fact
```

### Brugeren ser ikke raw scores

Raw scores er interne og må ikke vises direkte i den første brugeroplevelse.

User-facing beskeder skal følge:

```text
PAT-001 Speak Human, Store Structured
PAT-005 Explain Why
PAT-008 Respectful Guide-Away
```

---

# Score 1 - Case Strength

Maks score = 100.

Case Strength måler hvor stærk sagen umiddelbart ser ud baseret på de oplysninger, der findes på det aktuelle tidspunkt.

Case Strength er kun en foreløbig intern vurdering.

---

## Frister

| Regel | Point |
|---|---:|
| Muligvis indenfor relevant frist | +15 |
| Fristforhold uklart | +5 |
| Muligvis udenfor relevant frist | -20 |

Vigtigt:

Fristforhold må ikke alene føre til automatisk endelig afvisning uden policy og/eller human review, hvis der er usikkerhed.

---

## Skadetype

| Skadetype | Point |
|---|---:|
| Diagnoseforsinkelse | +25 |
| Fejldiagnose | +20 |
| Operationsrelateret skade | +20 |
| Medicinsk skade | +15 |
| Udstyrsskade | +20 |
| Infektion | +10 |
| Fødselsskade | +25 |
| Andet / uklart | +5 |

---

## Alvorlighed

| Konsekvens | Point |
|---|---:|
| Meget alvorligt forløb | +25 |
| Varige følger | +20 |
| Tab af erhvervsevne nævnt | +20 |
| Midlertidig skade | +10 |
| Konsekvens uklar | +5 |
| Ingen kendt skade | 0 |

Bemærk:

Bruger-facing sprog må ikke bruge rå kategorier fra denne tabel. Se Tone of Voice Guide.

---

## Dokumentation

| Dokumentation | Point |
|---|---:|
| Journal eller anden relevant dokumentation findes | +10 |
| Tidligere afgørelse nævnt | +15 |
| Faglig udtalelse nævnt | +10 |
| Behandlingssted har erkendt forhold | +25 |
| Dokumentation ukendt | +5 |
| Ingen dokumentation | 0 |

---

## Årsagssammenhæng

| Vurdering | Point |
|---|---:|
| Meget tydelig beskrivelse | +15 |
| Sandsynlig sammenhæng | +10 |
| Uklar sammenhæng | +5 |
| Ingen synlig sammenhæng | 0 |

---

## Case Strength kategorier

| Score | Intern kategori |
|---:|---|
| 85-100 | Very strong signal |
| 70-84 | Strong signal |
| 40-69 | Uncertain / review signal |
| 0-39 | Weak signal |

Disse kategorier er interne og må ikke vises direkte til brugeren.

---

# Score 2 - Information Quality

Maks score = 100.

Information Quality måler hvor meget brugbar information systemet har for at vælge næste skridt.

Den officielle beslutning om informationskvalitet er beskrevet i:

```text
decisions/DEC-007-information-quality.md
```

---

## Basisinformation

| Felt | Point |
|---|---:|
| Hændelsestidspunkt eller periode | 15 |
| Behandlingstype eller forløb | 15 |
| Behandlingssted | 15 |
| Konsekvens | 15 |
| Dokumentstatus | 10 |

---

## Supplerende oplysninger

| Felt | Point |
|---|---:|
| Diagnosedato eller erkendelsestidspunkt | 10 |
| Tidligere klage | 5 |
| Tidligere afgørelse | 5 |
| Relation til berørt person | 5 |
| Kontakt- eller opfølgningsoplysninger | 5 |

---

## Information Quality kategorier

| Score | Intern status |
|---:|---|
| 80-100 | Sufficient for many next steps |
| 60-79 | Usable but may need targeted follow-up |
| 40-59 | Missing important information |
| 0-39 | Insufficient for routing without more input or review |

---

# Score 3 - Commercial Value

Maks score = 100.

Commercial Value er en intern forretningsprioriteringsscore.

Den må ikke stå alene som accept- eller afvisningsgrundlag.

---

## Estimeret økonomisk signal

| Signal | Point |
|---|---:|
| Meget højt økonomisk potentiale | +40 |
| Højt potentiale | +30 |
| Middel potentiale | +20 |
| Lavere potentiale | +10 |
| Ukendt potentiale | +5 |

---

## Konsekvensbonus

| Faktor | Point |
|---|---:|
| Meget alvorligt forløb | +20 |
| Forsørgertab nævnt | +20 |
| Varige følger | +15 |
| Tabt erhvervsevne nævnt | +15 |
| Tabt arbejdsfortjeneste nævnt | +10 |

---

## Dokumentbonus

| Faktor | Point |
|---|---:|
| Tidligere positiv afgørelse nævnt | +20 |
| Tidligere delvist positiv afgørelse nævnt | +10 |

---

## Commercial Value kategorier

| Score | Intern status |
|---:|---|
| 80-100 | Very high commercial signal |
| 60-79 | High commercial signal |
| 40-59 | Medium commercial signal |
| 0-39 | Low commercial signal |

---

# Samlet Lead Score

Samlet Lead Score er ikke et simpelt gennemsnit.

Vægtet model:

```text
Case Strength       50%
Information Quality 20%
Commercial Value    30%
```

Formel:

```text
Lead Score =
(CaseStrength x 0.50)
+
(InformationQuality x 0.20)
+
(CommercialValue x 0.30)
```

Lead Score er et internt prioriteringssignal.

Lead Score må ikke alene føre til:

- automatisk endelig afvisning
- automatisk MitID-flow
- automatisk dokumentkrav
- endelig accept

---

# Fra Score til Decision

Den tidligere model, hvor score direkte kunne føre til `REJECTED`, `DOCUMENTS_PENDING` eller `MITID_PENDING`, er superseded.

Ny model:

```text
Scores
↓
Confidence
↓
Information Quality Decision
↓
Acceptance Policy Decision
↓
Routing Recommendation
↓
Human Review when needed
↓
CRM Assignment
```

Relevante beslutningskort:

```text
DEC-005 Routing Recommendation
DEC-006 Human Review
DEC-007 Information Quality
DEC-008 Acceptance Policy Decision
DEC-009 Identity Gate
DEC-011 Document Readiness
DEC-013 CRM Assignment
```

---

# Recommended Actions

Canonical internal recommendation values must be reconciled with Decision Pack.

Current decision-oriented outcomes:

```text
continue
collect_more_information
human_review_required
prepare_documents_later
identity_step_when_relevant
consent_step_when_relevant
guide_elsewhere_respectfully
crm_assignment
```

Legacy values such as `qualified`, `reject`, `MITID_PENDING` and `DOCUMENTS_PENDING` must not be used as direct user-facing outcomes.

They may remain as internal transitional states only if mapped clearly to the new decision model.

---

# Human Review Triggers

Scores should trigger human review when:

- Case Strength is high but confidence is low
- severity indicators are serious or sensitive
- important facts conflict
- deadline or timing is unclear
- prior decision is mentioned
- user relation or authorization is unclear
- policy requires review

See:

```text
decisions/DEC-006-human-review.md
patterns/PAT-009-human-review-bridge.md
```

---

# Audit Requirements

Each score calculation should store:

- score version
- input facts
- source of facts
- confidence level
- score components
- final internal score
- decision IDs that used the score
- user-facing message shown, if any

---

# Version 2 Future Work

Når systemet har tilstrækkeligt historisk materiale, kan der tilføjes:

```text
Historical Outcome Signal
```

Denne må kun bruges som internt prioriteringsinput og skal have særskilt governance, audit og bias-review.

Før historiske modeller aktiveres, skal der oprettes et særskilt ADR og AI policy.
