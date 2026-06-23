# Dokument 8 - API Specification v1.0

## Formål

Dette dokument beskriver de første API-endpoints for ErstatningsHjælp.

API'et skal gøre det muligt at koble:

```text
Frontend
↓
Laravel backend
↓
AI Screening Engine
↓
Database
↓
CRM
```

Dokumentet er skrevet som implementeringsgrundlag for Laravel-udvikling.

---

# API-principper

## Format

Alle endpoints returnerer JSON.

## Versionering

Første version bruger:

```text
/api/v1
```

Eksempel:

```http
POST /api/v1/screening/start
```

## Fejlformat

Alle fejl bør følge samme struktur:

```json
{
  "success": false,
  "message": "Validation failed",
  "errors": {
    "message": ["The message field is required."]
  }
}
```

## Success-format

Standard successtruktur:

```json
{
  "success": true,
  "data": {}
}
```

---

# 1. Start Screening

## Endpoint

```http
POST /api/v1/screening/start
```

## Formål

Starter en ny screening og opretter et lead.

## Request

```json
{
  "message": "Min mor fik ikke diagnosticeret kræft i tide og døde senere.",
  "first_name": "",
  "last_name": "",
  "email": "",
  "phone": ""
}
```

Kontaktfelter er frivillige i første MVP.

## Backend handling

1. Opret Lead med status `SCREENING`
2. Gem brugerens første besked i `lead_conversations`
3. Send besked til AI Screening Engine
4. Gem AI response
5. Gem entities
6. Gem scores
7. Gem missing information
8. Returnér næste spørgsmål

## Response

```json
{
  "success": true,
  "data": {
    "lead_id": 123,
    "lead_uuid": "uuid-value",
    "status": "SCREENING",
    "summary": "Mulig diagnoseforsinkelse ved kræft. Dødsfald oplyst. Hospital og datoer mangler.",
    "scores": {
      "case_strength": 75,
      "information_quality": 30,
      "commercial_value": 60,
      "overall_score": 62
    },
    "case_category": "B",
    "recommended_action": "collect_more_information",
    "next_question": "Hvornår blev kræften diagnosticeret?",
    "confidence": 0.72
  }
}
```

---

# 2. Continue Screening Conversation

## Endpoint

```http
POST /api/v1/screening/{lead}/message
```

## Formål

Tilføjer en ny brugerbesked til en eksisterende screening.

## Request

```json
{
  "message": "Kræften blev diagnosticeret i 2019."
}
```

## Backend handling

1. Find lead
2. Gem ny brugerbesked
3. Send samlet relevant kontekst til AI
4. Opdater entities
5. Opdater scores
6. Opdater missing information
7. Gem AI svar
8. Returnér næste handling eller spørgsmål

## Response

```json
{
  "success": true,
  "data": {
    "lead_id": 123,
    "status": "AWAITING_INFO",
    "scores": {
      "case_strength": 78,
      "information_quality": 45,
      "commercial_value": 60,
      "overall_score": 66
    },
    "case_category": "B",
    "recommended_action": "collect_more_information",
    "next_question": "Hvilket hospital eller hvilken klinik var involveret?",
    "missing_information": [
      {"field": "hospital", "priority": 10},
      {"field": "documents_available", "priority": 7}
    ],
    "confidence": 0.78
  }
}
```

---

# 3. Get Lead

## Endpoint

```http
GET /api/v1/leads/{lead}
```

## Formål

Henter et lead med samtale, scores, entities, mangler og AI-vurdering.

## Response

```json
{
  "success": true,
  "data": {
    "id": 123,
    "uuid": "uuid-value",
    "status": "SCREENING",
    "contact": {
      "first_name": "",
      "last_name": "",
      "email": "",
      "phone": ""
    },
    "scores": {
      "case_strength": 78,
      "information_quality": 45,
      "commercial_value": 60,
      "overall_score": 66
    },
    "entities": {
      "diagnosis": "kræft",
      "injury_type": "diagnose_delay",
      "hospital": "",
      "death": true
    },
    "missing_information": [
      {"field": "hospital", "priority": 10, "resolved": false}
    ],
    "assessment": {
      "summary": "Mulig diagnoseforsinkelse ved kræft. Dødsfald oplyst.",
      "recommendation": "collect_more_information"
    },
    "conversation": [
      {
        "role": "user",
        "message": "Min mor fik ikke diagnosticeret kræft i tide og døde senere.",
        "created_at": "2026-06-23T12:00:00Z"
      },
      {
        "role": "assistant",
        "message": "Hvornår blev kræften diagnosticeret?",
        "created_at": "2026-06-23T12:00:03Z"
      }
    ]
  }
}
```

---

# 4. List Leads

## Endpoint

```http
GET /api/v1/leads
```

## Formål

Viser leads i CRM-dashboard.

## Query params

```text
status
case_category
min_score
created_from
created_to
```

Eksempel:

```http
GET /api/v1/leads?status=SCREENING&min_score=70
```

## Response

```json
{
  "success": true,
  "data": [
    {
      "id": 123,
      "uuid": "uuid-value",
      "status": "SCREENING",
      "case_category": "B",
      "overall_score": 66,
      "case_strength": 78,
      "information_quality": 45,
      "commercial_value": 60,
      "summary": "Mulig diagnoseforsinkelse ved kræft.",
      "created_at": "2026-06-23T12:00:00Z"
    }
  ]
}
```

---

# 5. Update Lead Status

## Endpoint

```http
PATCH /api/v1/leads/{lead}/status
```

## Formål

Tillader intern medarbejder eller systemlogik at ændre status.

## Request

```json
{
  "status": "REVIEW"
}
```

## Tilladte statusser

```text
NEW
SCREENING
AWAITING_INFO
QUALIFIED
REJECTED
MITID_PENDING
POA_PENDING
DOCUMENTS_PENDING
REVIEW
ACTIVE_CASE
CLOSED
```

## Response

```json
{
  "success": true,
  "data": {
    "lead_id": 123,
    "status": "REVIEW"
  }
}
```

---

# 6. Upload Document

## Endpoint

```http
POST /api/v1/leads/{lead}/documents
```

## Formål

Uploader dokument til et lead.

Dette endpoint er ikke nødvendigt i første version 0.1.0, men defineres tidligt for roadmap.

## Request

Multipart form-data:

```text
file: uploaded file
document_type: journal
```

## Tilladte dokumenttyper

```text
journal
afgoerelse
loenseddel
kvittering
fuldmagt
andet
```

## Response

```json
{
  "success": true,
  "data": {
    "document_id": 55,
    "lead_id": 123,
    "document_type": "journal",
    "file_name": "journal.pdf"
  }
}
```

---

# 7. CRM Board

## Endpoint

```http
GET /api/v1/crm/board
```

## Formål

Returnerer leads grupperet efter status til Kanban-board.

## Response

```json
{
  "success": true,
  "data": {
    "SCREENING": [],
    "AWAITING_INFO": [],
    "QUALIFIED": [],
    "REVIEW": [],
    "ACTIVE_CASE": []
  }
}
```

---

# 8. AI Screening Debug Endpoint

## Endpoint

```http
POST /api/v1/debug/ai-screening
```

## Formål

Kun til lokal udvikling.

Tester AI-output uden at gemme data i databasen.

## Request

```json
{
  "message": "Min mor fik ikke diagnosticeret kræft i tide."
}
```

## Response

Returnerer rå AI JSON.

## Vigtigt

Dette endpoint må kun være aktivt i lokal udvikling.

```text
APP_ENV=local
```

---

# Auth strategy

## MVP

Første offentlige screening endpoint kan være uden login.

CRM endpoints skal kræve intern login.

## Senere

- brugerlogin
- MitID
- rollebaseret adgang
- audit log

---

# Første implementeringsrækkefølge

1. `POST /api/v1/screening/start`
2. `POST /api/v1/screening/{lead}/message`
3. `GET /api/v1/leads/{lead}`
4. `GET /api/v1/leads`
5. `GET /api/v1/crm/board`

Dokumentupload, MitID og fuldmagt kommer senere.

---

# Laravel controllers

Foreslåede controllers:

```php
Api\V1\ScreeningController
Api\V1\LeadController
Api\V1\DocumentController
Api\V1\CrmController
```

---

# Laravel services

Foreslåede services:

```php
AiScreeningService
LeadScoringService
ConversationFlowService
LeadWorkflowService
```

---

# Resultat

Når API Specification er implementeret, har projektet en klar kontrakt mellem frontend, backend, AI og CRM.
