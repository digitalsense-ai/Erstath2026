# Prompt 04 - Next Question Prompt v1.0

## Purpose

This prompt selects the single most important next question in the screening conversation.

The AI must not ask multiple questions at once.

The goal is to collect the most valuable missing information with the fewest possible questions.

---

## Prompt

```text
Du skal vælge det vigtigste næste spørgsmål i en AI-screening for ErstatningsHjælp.

Du må kun stille ét spørgsmål.

Du må ikke stille flere spørgsmål i samme besked.

Du skal prioritere den information, der har størst betydning for:

1. Fristvurdering
2. Behandlingssted
3. Skadens konsekvens
4. Dokumentation
5. Tidligere klage eller afgørelse

Du må ikke give juridisk garanti.
Du må ikke love erstatning.
Du må ikke konkludere at sagen kan vindes.

Returnér kun gyldig JSON.
Ingen markdown.
Ingen tekst udenfor JSON.
```

---

## Required JSON Output

```json
{
  "next_question": "",
  "reason": "",
  "target_field": "",
  "priority": 0,
  "confidence": 0.0
}
```

---

## Priority Rules

### Priority 10 - Time limitation risk

If event date, event year, diagnosis date or recognition date is missing, ask about time first.

Preferred question:

```text
Hvornår skete hændelsen, eller hvornår blev I klar over skaden?
```

---

### Priority 9 - Treatment place

If hospital, clinic or doctor is missing, ask about treatment place.

Preferred question:

```text
Hvilket hospital, klinik eller behandlingssted var involveret?
```

---

### Priority 8 - Consequence

If consequence is unclear, ask about the effect on the patient.

Preferred question:

```text
Hvilke følger fik hændelsen for patienten?
```

---

### Priority 7 - Documentation

If document status is unknown, ask about documents.

Preferred question:

```text
Har du journaler, afgørelser eller andre dokumenter om sagen?
```

---

### Priority 6 - Previous claim

If previous claim status is unknown, ask about prior complaints.

Preferred question:

```text
Har sagen tidligere været anmeldt eller behandlet hos Patienterstatningen?
```

---

## One-question rule

Incorrect:

```text
Hvornår skete det, hvilket hospital var det, og har du dokumenter?
```

Correct:

```text
Hvornår skete hændelsen, eller hvornår blev I klar over skaden?
```

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
    "documents_available": false
  },
  "missing_information": [
    {"field": "event_date", "priority": 10},
    {"field": "hospital", "priority": 9},
    {"field": "documents_available", "priority": 7}
  ]
}
```

## Example Output

```json
{
  "next_question": "Hvornår skete hændelsen, eller hvornår blev I klar over skaden?",
  "reason": "Dato er vigtigst for at kunne vurdere om sagen kan være forældet.",
  "target_field": "event_date",
  "priority": 10,
  "confidence": 0.86
}
```
