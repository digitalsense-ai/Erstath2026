# 32 - Digital First Conversation Flow

## Status

Flow integration document.

This document connects the recent architecture decisions into one coherent user flow:

- Digital Førstesamtale
- Empathy Engine
- AI Guided Screening
- Smart Skip
- Acceptance & Routing
- MitID Gate
- Respectful exit / guide elsewhere

The purpose is to ensure that the user journey and GitHub documentation reflect the same product direction.

---

## 1. Product framing

The first user journey should not be treated as a form and not as a generic chatbot.

It should be treated as:

```text
Digital Førstesamtale
```

The purpose is to:

1. understand the person
2. understand the event
3. identify whether ErstatningsHjælp may be able to help
4. route the user responsibly
5. explain the next step clearly

Scoring is an internal result, not the user's experience.

---

## 2. High-level flow

```text
Landing page
↓
Free text story
↓
Empathy reflection
↓
User confirms or corrects
↓
Smart Skip + guided screening
↓
Core facts collected
↓
Scores calculated
↓
Acceptance Policy applied
↓
Routing decision
↓
GO / GO_AFTER_DOCUMENTS / NEEDS_REVIEW / COLLECT_MORE_INFORMATION / GUIDE_ELSEWHERE
↓
MitID only when justified
```

---

## 3. Step 1 - Free text story

User-facing goal:

```text
I can explain what happened in my own words.
```

Suggested text:

```text
Beskriv med dine egne ord hvad der skete.
Du behøver ikke kende alle detaljer endnu.
```

System goal:

- collect initial story
- infer first entities
- identify severity triggers
- prepare empathy reflection

Stored data:

```text
lead.initial_description
lead_conversations
lead_entities
lead_tags
```

---

## 4. Step 2 - Empathy reflection

User-facing goal:

```text
The system has understood me.
```

The system should not show raw tags by default.

Instead, it should reflect the situation carefully.

Example:

```text
Tak fordi du delte det.

Vi forstår det sådan, at din mor muligvis ikke blev diagnosticeret i tide, og at sygdomsforløbet desværre endte med, at hun gik bort.

Har vi forstået situationen korrekt?
```

User options:

```text
[Ja, det er korrekt]
[Nej, ret det]
[Jeg vil tilføje noget]
```

Architecture principles:

- Understanding Before Questioning
- Confirm Before Classify
- Speak Human, Store Structured
- Respect Emotional Context

---

## 5. Step 3 - Smart Skip

Before showing the next screen, the system should ask:

```text
Do we already know this with high confidence?
```

If yes, do not ask again.

Example:

User wrote:

```text
Min mor døde af kræft.
```

System likely knows:

```text
relation = parent
death = true
condition = cancer
```

Do not ask:

```text
Hvem handler sagen om?
Lever personen stadig?
```

Instead, confirm naturally if needed:

```text
Vi forstår det sådan, at sagen handler om din mor. Er det korrekt?
```

Architecture principle:

```text
Never Ask Twice
```

---

## 6. Step 4 - Guided screening core questions

The system should collect only what matters now.

Core areas:

```text
1. Who experienced the treatment or injury?
2. When did it happen / when was it discovered?
3. What went wrong?
4. What consequences followed?
5. Has there been a previous case or decision?
6. What documentation exists?
```

These should use click choices where possible and free text only when needed.

Always include:

```text
Ved ikke
```

where uncertainty is realistic.

---

## 7. Step 5 - Scoring

Internal scoring should use:

- Case Strength
- Information Quality
- Commercial Value
- AI Confidence
- Understanding Confidence
- Documentation Confidence

Important distinction:

```text
AI inferred fact
<
user confirmed fact
<
uploaded evidence
<
human reviewed fact
```

Scoring should not be shown to the user as raw numbers during the first conversation.

---

## 8. Step 6 - Acceptance Policy

After scoring, the system applies the Acceptance Policy.

This is not purely AI.

AI provides the basis.
The business policy decides the routing.

Inputs:

- scores
- confidence
- severity
- relation
- documentation
- prior case status
- limitation risk
- policy override rules

---

## 9. Step 7 - Routing decision

Allowed outcomes:

```text
GO
GO_AFTER_DOCUMENTS
NEEDS_REVIEW
COLLECT_MORE_INFORMATION
GUIDE_ELSEWHERE
```

### GO

User proceeds to MitID.

### GO_AFTER_DOCUMENTS

User is asked to provide documentation or confirm document status before full progression.

### NEEDS_REVIEW

User is routed to manual/internal review.

### COLLECT_MORE_INFORMATION

User receives a few targeted follow-up questions.

### GUIDE_ELSEWHERE

User is respectfully guided away from ErstatningsHjælp's service scope, with options to add more information first.

---

## 10. MitID Gate

MitID should only be shown for:

```text
GO
GO_AFTER_DOCUMENTS when identity is required for the next step
```

MitID should never be used as a generic continuation step.

Recommended wording:

```text
Vi tror, at vi muligvis kan hjælpe dig videre.

For at kunne fortsætte skal vi nu bekræfte din identitet med MitID. Det gør vi for at sikre, at vi behandler oplysningerne korrekt og kan hjælpe dig videre på en tryg måde.
```

---

## 11. Respectful guide elsewhere flow

If routing outcome is GUIDE_ELSEWHERE, the system must not make a harsh rejection.

Avoid:

```text
Du har ingen sag.
```

Use:

```text
Tak fordi du har delt dit forløb.

Ud fra de oplysninger vi har nu, ser det desværre ikke ud til, at sagen umiddelbart opfylder de kriterier, vi normalt arbejder med.

Hvis der er vigtige oplysninger eller dokumenter, som vi ikke har fået med, kan du stadig tilføje dem.
```

Options:

```text
[Tilføj flere oplysninger]
[Jeg har dokumenter]
[Se andre muligheder]
```

Principle:

```text
Leave the user better than we found them.
```

---

## 12. CRM handover

Every routed lead should include:

```text
routing_outcome
routing_reason
score_snapshot
confidence_snapshot
policy_rules_triggered
missing_information
user_confirmed_facts
empathy_reflection
user_confirmation_status
```

This allows caseworkers to understand why the lead was routed without reconstructing the full conversation.

---

## 13. Audit trail

Every Decision Gate result should be auditable.

Minimum audit fields:

```text
lead_id
routing_outcome
scores_snapshot
policy_rules_triggered
ai_confidence
understanding_confidence
missing_information
user_confirmed_facts
decision_timestamp
```

---

## 14. Success criteria

This flow is successful if:

- users understand why MitID appears
- low-probability users are guided respectfully
- serious cases are not auto-rejected too early
- fewer unnecessary questions are asked
- CRM receives clear routing reasons
- every user leaves with more clarity than when they began

---

## 15. Implementation implication

The implementation should not hard-code:

```text
screening complete → MitID
```

It should implement:

```text
screening complete → Decision Gate → routing outcome → next step
```

This is the central flow change.
