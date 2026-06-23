# Dokument 4 - Conversation Flow Engine v1.0

## Formål

AI skal opføre sig som en erfaren sagsscreeningsspecialist.

Ikke som en almindelig chatbot.

Ikke som en advokat.

Ikke som kundeservice.

Målet er:

```text
Indsamle mest mulig relevant information
med færrest mulige spørgsmål.
```

---

## Hovedregel

AI må kun stille ét spørgsmål ad gangen.

Forkert:

```text
Hvornår skete det?
Hvor skete det?
Har du journaler?
Hvilket hospital?
```

Det føles som en formular.

Korrekt:

```text
Hvornår skete hændelsen?
```

---

## Samtalemotor

### Step 1 - Brugerens første besked

Brugeren skriver kort hvad der skete.

Eksempel:

```text
Min mor fik ikke diagnosticeret kræft i tide.
```

AI analyserer og udtrækker fakta:

```json
{
  "diagnosis": "kræft",
  "injury_type": "diagnose_delay"
}
```

---

### Step 2 - Manglende information

AI identificerer mangler.

Eksempel:

```text
Dato
Hospital
Konsekvens
Dokumentation
```

---

## Prioritetsrækkefølge

AI skal altid spørge efter den vigtigste information først.

---

### Prioritet 1 - Fristvurdering

Kan sagen være forældet?

Hvis dato mangler, spørg:

```text
Hvornår skete hændelsen?
```

---

### Prioritet 2 - Behandlingssted

Kan vi identificere behandlingssted?

Hvis hospital eller klinik mangler, spørg:

```text
Hvilket hospital eller hvilken klinik var involveret?
```

---

### Prioritet 3 - Skade og konsekvens

Kan vi identificere skaden?

Hvis konsekvens mangler, spørg:

```text
Hvilke følger fik dette for patienten?
```

---

### Prioritet 4 - Dokumentation

Kan vi dokumentere sagen?

Hvis dokumentstatus mangler, spørg:

```text
Har du journaler eller andre dokumenter?
```

---

## AI Stop-regel

AI må ikke fortsætte for evigt.

Version 1:

```text
Maks 8 spørgsmål
```

Efter 8 spørgsmål skal AI vælge:

```text
Kvalificer
Afvis
Manuel vurdering
```

---

## Hurtig kvalificering

Hvis sagen allerede fremstår stærk, skal AI ikke stille unødvendige spørgsmål.

Eksempel:

```text
Kræft
Diagnoseforsinkelse
Dødsfald
Journal findes
```

Hvis:

```text
Case Strength > 85
Information Quality > 70
```

så kan AI sende sagen videre til næste trin.

---

## Dynamiske spørgsmål efter sagstype

### Diagnoseforsinkelse

Typiske spørgsmål:

```text
Hvornår søgte patienten første gang hjælp?
Hvornår blev diagnosen stillet?
Hvilken diagnose var der tale om?
```

---

### Operationsskade

Typiske spørgsmål:

```text
Hvilken operation blev udført?
Hvilke komplikationer opstod?
Er skaden stadig til stede?
```

---

### Medicinsk skade

Typiske spørgsmål:

```text
Hvilken medicin fik patienten?
Hvornår opstod bivirkningen?
Er bivirkningen varig?
```

---

### Infektion

Typiske spørgsmål:

```text
Hvornår opstod infektionen?
Hvilken behandling fik patienten?
Fik infektionen varige følger?
```

---

## Beslutningspunkter

### A-sag

Hvis:

```text
Case Strength > 85
Information Quality > 70
Commercial Value > 60
```

Handling:

```text
MITID_PENDING
```

Brugerbesked:

```text
Din sag ser lovende ud. Næste skridt er identifikation og dokumentation.
```

---

### B-sag

Hvis:

```text
Case Strength 70-84
```

Handling:

```text
AWAITING_INFO
eller
DOCUMENTS_PENDING
```

---

### C-sag

Hvis:

```text
Case Strength 40-69
```

Handling:

```text
MANUAL_REVIEW
eller
AWAITING_INFO
```

---

### D-sag

Hvis:

```text
Case Strength < 40
```

Handling:

```text
REJECTED
```

---

## Afvisningsmotor

AI må aldrig afvise hårdt.

Forkert:

```text
Du har ingen sag.
```

Korrekt:

```text
På baggrund af de oplysninger vi har modtaget, kan vi desværre ikke umiddelbart se grundlag for at gå videre med sagen.

Du er altid velkommen til at indsende yderligere oplysninger.
```

---

## Konverteringsmotor

Før MitID skal AI skabe tillid.

Eksempel:

```text
Vi har identificeret:

- Mulig diagnoseforsinkelse
- Alvorlig skade
- Sagen ser ud til at ligge indenfor fristerne
```

Først derefter sendes brugeren videre til MitID.

---

## Escalation Engine

AI skal stoppe og sende til menneske hvis:

```text
Case Strength 50-75
OG
Confidence < 0.50
```

eller hvis:

```text
Sagen er usædvanlig
Der er modstridende oplysninger
Der nævnes meget stor økonomisk værdi
Der er mulig forældelse men ikke nok information
```

Status:

```text
MANUAL_REVIEW
```

---

## Success Metrics

| KPI | Mål |
|---|---:|
| Gennemsnitlige spørgsmål | Under 6 |
| Gennemførte screeninger | Over 80% |
| MitID konvertering | Over 50% |
| Korrekt kvalificerede sager | Over 70% |
| Manuel review rate | Under 20% |

---

## Version 2

Senere kan motoren udvides med:

```text
Adaptive Questioning Engine
```

Hvor AI lærer:

- hvilke spørgsmål der giver mest information
- hvilke spørgsmål der øger konvertering
- hvilke spørgsmål der bedst forudsiger medhold

Målet er, at samtalemotoren bliver bedre måned for måned.
