# Dokument 3 - Scoring Rules Engine v1.0

## Formål

AI må ikke selv opfinde point.

Alle point skal komme fra en central regelmotor.

Fordele:

- forklarbar AI
- kan justeres uden kodeændringer
- kan optimeres efter erfaring
- kan A/B-testes

---

# Score 1 - Case Strength

Maks score = 100.

Case Strength måler hvor stærk sagen umiddelbart ser ud fagligt og juridisk.

---

## Frister

| Regel | Point |
|---|---:|
| Indenfor 3 år fra erkendelse | +15 |
| Indenfor 10 år fra hændelse | +10 |
| Forældet | -100 |

Hvis sagen vurderes forældet:

```text
Automatisk D-sag
```

---

## Skadetype

| Skadetype | Point |
|---|---:|
| Diagnoseforsinkelse | +25 |
| Fejldiagnose | +20 |
| Operationsfejl | +20 |
| Medicinsk skade | +15 |
| Udstyrsskade | +20 |
| Infektion | +10 |
| Fødselsskade | +25 |
| Andet | +5 |

---

## Alvorlighed

| Konsekvens | Point |
|---|---:|
| Dødsfald | +25 |
| 100% mén | +25 |
| Varigt mén | +20 |
| Tab af erhvervsevne | +20 |
| Midlertidig skade | +10 |
| Ingen dokumenteret skade | 0 |

---

## Dokumentation

| Dokumentation | Point |
|---|---:|
| Journal findes | +10 |
| Tidligere afgørelse | +15 |
| Lægeudtalelse | +10 |
| Hospital erkender fejl | +25 |
| Ingen dokumentation | 0 |

---

## Årsagssammenhæng

| Vurdering | Point |
|---|---:|
| Meget tydelig | +15 |
| Sandsynlig | +10 |
| Uklar | +5 |
| Ingen synlig | 0 |

---

## Case Strength kategorier

| Score | Kategori |
|---:|---|
| 85-100 | A |
| 70-84 | B |
| 40-69 | C |
| 0-39 | D |

---

# Score 2 - Information Quality

Maks score = 100.

Information Quality måler hvor meget brugbar information systemet har.

---

## Basisinformation

| Felt | Point |
|---|---:|
| Hændelsesdato | 15 |
| Diagnose | 15 |
| Hospital | 15 |
| Konsekvens | 15 |
| Dokumentstatus | 10 |

---

## Supplerende oplysninger

| Felt | Point |
|---|---:|
| Diagnosedato | 10 |
| Behandlingstype | 5 |
| Tidligere klage | 5 |
| Tidligere afgørelse | 5 |
| Lægens navn | 5 |

---

## Information Quality kategorier

| Score | Status |
|---:|---|
| 80-100 | Komplet |
| 60-79 | God |
| 40-59 | Mangelfuld |
| 0-39 | Utilstrækkelig |

---

# Score 3 - Commercial Value

Maks score = 100.

Commercial Value måler om sagen er økonomisk interessant for virksomheden.

---

## Estimeret erstatning

| Beløb | Point |
|---|---:|
| Over 1.000.000 kr. | +40 |
| 500.000 - 1.000.000 kr. | +30 |
| 250.000 - 500.000 kr. | +20 |
| 100.000 - 250.000 kr. | +10 |
| Under 100.000 kr. | +5 |

---

## Skadetype bonus

| Faktor | Point |
|---|---:|
| Dødsfald | +20 |
| Forsørgertab | +20 |
| Varigt mén | +15 |
| Tabt erhvervsevne | +15 |
| Tabt arbejdsfortjeneste | +10 |

---

## Dokumentbonus

| Faktor | Point |
|---|---:|
| Tidligere medhold | +20 |
| Tidligere delvist medhold | +10 |

---

## Commercial Value kategorier

| Score | Status |
|---:|---|
| 80-100 | Meget attraktiv |
| 60-79 | Attraktiv |
| 40-59 | Middel |
| 0-39 | Lav |

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

---

# Endelig beslutningsmotor

## Auto-afvis

Hvis:

```text
Forældet
ELLER
Case Strength < 40
```

Handling:

```text
REJECTED
```

---

## AI fortsætter dialog

Hvis:

```text
Case Strength > 40
OG
Information Quality < 60
```

Handling:

```text
AWAITING_INFO
```

---

## Dokumentindhentning

Hvis:

```text
Case Strength > 70
OG
Information Quality > 60
OG
Commercial Value > 40
```

Handling:

```text
DOCUMENTS_PENDING
```

---

## MitID flow

Hvis:

```text
Case Strength > 80
OG
Information Quality > 70
OG
Commercial Value > 50
```

Handling:

```text
MITID_PENDING
```

---

# Version 2

Når systemet har 500-1000 historiske sager, kan der tilføjes:

```text
Historical Win Score
```

Eksempel:

```text
73 lignende sager
58 fik medhold
Win rate: 79%
```

Denne score kan senere bruges til at forbedre prioriteringsmotoren.
