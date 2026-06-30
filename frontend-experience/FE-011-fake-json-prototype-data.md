# FE-011 - Fake JSON Prototype Data

Version: 1.0
Status: Active Draft
Scope: Fake data contract for frontend prototype

## Purpose

This document defines fake JSON data for the first frontend prototype.

The goal is to let frontend build and test the experience before backend and real AI are available.

## Data Rule

All examples are fictional.

Do not use real names, real CPR numbers, real hospital records, real journal text or identifiable patient cases.

## Prototype Data Principle

Fake JSON should look similar to future API responses, but it does not need to be final backend contract.

It should support:

```text
landing examples
first message submission
AI thinking
smart question
answer submission
result state
```

## Scenario List

```json
[
  {
    "id": "operation_injury_demo",
    "title": "Operation injury demo",
    "first_message": "Jeg fik en operation i knæet i 2023, og siden har jeg haft smerter og svært ved at arbejde."
  },
  {
    "id": "diagnosis_delay_demo",
    "title": "Diagnosis delay demo",
    "first_message": "Min sygdom blev først opdaget flere måneder senere, selvom jeg havde været til læge flere gange."
  },
  {
    "id": "complaint_without_injury_demo",
    "title": "Complaint without injury demo",
    "first_message": "Jeg blev behandlet dårligt i receptionen og ventede meget længe."
  }
]
```

## Landing Examples

```json
{
  "landing_examples": [
    "Jeg fik en operation, og siden har jeg haft smerter.",
    "Min sygdom blev først opdaget flere måneder senere.",
    "Jeg fik forkert medicin og blev meget syg.",
    "Mit barn kom til skade under fødslen."
  ]
}
```

## Fake Conversation Response - Operation Injury

```json
{
  "conversation_id": "demo_conversation_001",
  "state": "showing_question",
  "user_message": {
    "id": "msg_001",
    "role": "user",
    "content": "Jeg fik en operation i knæet i 2023, og siden har jeg haft smerter og svært ved at arbejde."
  },
  "ai_response": {
    "id": "msg_002",
    "role": "assistant",
    "acknowledgement": "Tak. Det hjælper mig med at forstå forløbet.",
    "question": {
      "id": "q_operation_date",
      "type": "approximate_date",
      "text": "Hvornår blev operationen udført cirka?",
      "helper_text": "Du kan fx skrive 2023, sidste sommer eller en præcis dato.",
      "allow_unknown": true
    }
  }
}
```

## Fake Answer Response - Operation Injury

```json
{
  "conversation_id": "demo_conversation_001",
  "state": "result",
  "answer": {
    "question_id": "q_operation_date",
    "content": "Det var i marts 2023."
  },
  "result": {
    "type": "human_review",
    "title": "Sagen bør gennemgås nærmere",
    "summary": "Ud fra det, du har fortalt, kan sagen være relevant at gennemgå nærmere.",
    "next_step": "En specialist bør se på oplysningerne og vurdere, hvad næste skridt er.",
    "primary_cta": "Fortsæt og opret sag",
    "secondary_cta": "Tilføj flere oplysninger"
  }
}
```

## Fake Conversation Response - Diagnosis Delay

```json
{
  "conversation_id": "demo_conversation_002",
  "state": "showing_question",
  "user_message": {
    "id": "msg_101",
    "role": "user",
    "content": "Min sygdom blev først opdaget flere måneder senere, selvom jeg havde været til læge flere gange."
  },
  "ai_response": {
    "id": "msg_102",
    "role": "assistant",
    "acknowledgement": "Tak. Jeg vil gerne forstå tidsforløbet lidt bedre.",
    "question": {
      "id": "q_first_contact_date",
      "type": "approximate_date",
      "text": "Hvornår kontaktede du første gang lægen om symptomerne?",
      "helper_text": "Du kan svare cirka, hvis du ikke husker datoen præcist.",
      "allow_unknown": true
    }
  }
}
```

## Fake Answer Response - Diagnosis Delay

```json
{
  "conversation_id": "demo_conversation_002",
  "state": "result",
  "answer": {
    "question_id": "q_first_contact_date",
    "content": "Det var omkring foråret 2021."
  },
  "result": {
    "type": "human_review",
    "title": "Tidsforløbet bør gennemgås nærmere",
    "summary": "Det, du beskriver, handler om et muligt forsinket forløb, hvor datoer og dokumenter kan være vigtige.",
    "next_step": "En specialist kan gennemgå oplysningerne og hjælpe med at vurdere sagen nærmere.",
    "primary_cta": "Fortsæt og opret sag",
    "secondary_cta": "Tilføj flere oplysninger"
  }
}
```

## Fake Conversation Response - Complaint Without Injury

```json
{
  "conversation_id": "demo_conversation_003",
  "state": "showing_question",
  "user_message": {
    "id": "msg_201",
    "role": "user",
    "content": "Jeg blev behandlet dårligt i receptionen og ventede meget længe."
  },
  "ai_response": {
    "id": "msg_202",
    "role": "assistant",
    "acknowledgement": "Tak. Jeg vil gerne forstå, om forløbet også havde en helbredsmæssig konsekvens.",
    "question": {
      "id": "q_health_consequence",
      "type": "yes_no_unknown",
      "text": "Fik forløbet konkrete konsekvenser for dit helbred?",
      "helper_text": "Fx forværring, smerter, ekstra behandling eller længere sygdomsforløb.",
      "allow_unknown": true
    }
  }
}
```

## Fake Answer Response - Complaint Without Injury

```json
{
  "conversation_id": "demo_conversation_003",
  "state": "result",
  "answer": {
    "question_id": "q_health_consequence",
    "content": "Nej, ikke en konkret skade. Jeg er bare utilfreds."
  },
  "result": {
    "type": "guide_away_carefully",
    "title": "Det kan være en anden type hjælp, du har brug for",
    "summary": "Ud fra det, du har skrevet lige nu, lyder det mest som en klage over forløbet og ikke en typisk patienterstatningssag.",
    "next_step": "Hvis der også var en konkret helbredsmæssig skade, kan du tilføje det her.",
    "primary_cta": "Tilføj flere oplysninger",
    "secondary_cta": "Se andre muligheder"
  }
}
```

## Internal Fields Not For Customer UI

Prototype may include these internally later, but do not show to user:

```json
{
  "internal": {
    "case_type": "surgical_injury",
    "confidence": "medium",
    "reason_codes": ["TYPE_SURGERY_SIGNAL", "CONSEQUENCE_WORK_IMPACT"],
    "review_priority": "medium"
  }
}
```

## Frontend Mapping

```text
state: showing_question -> render SmartQuestionState
state: result -> render ResultState
result.type: human_review -> human review next-step card
result.type: guide_away_carefully -> guide-away card
```

## Acceptance Criteria

Fake JSON data is accepted when:

```text
frontend can run prototype without backend
three demo paths are supported
no real data exists
response shape is close to expected API thinking
internal values are not shown to customer
```

## References

- FE-010-prototype-flow.md
- FE-008-smart-question-state.md
- FE-009-result-state.md
- docs/ai-case-brain/BRAIN-024-fake-ai-brain-scenarios.md
