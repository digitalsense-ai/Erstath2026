# Dokument 5 - CRM & Workflow Engine v2.0

Status: Updated for Enterprise Architecture Baseline
Domain: Case / CRM / Decision
Related: DEC-005 Routing Recommendation, DEC-006 Human Review, DEC-007 Information Quality, DEC-008 Acceptance Policy Decision, DEC-009 Identity Gate, DEC-010 Consent Gate, DEC-011 Document Readiness, DEC-013 CRM Assignment, PAT-009 Human Review Bridge

## Formål

CRM & Workflow Engine er bindeleddet mellem brugerens digitale første samtale, beslutningsmotoren og de mennesker, der skal arbejde med leads.

CRM skal ikke kun vise scores.

CRM skal vise et struktureret beslutningsgrundlag:

- original user description
- empathy reflection
- confirmed facts
- inferred facts
- unresolved facts
- missing information
- confidence levels
- scores
- routing recommendation
- review reasons
- identity gate outcome
- consent gate outcome
- document readiness state
- suggested next action
- user-facing message shown

CRM skal sikre:

- ingen leads bliver glemt
- usikre eller følsomme leads kan reviewes af mennesker
- sagsbehandlere kan se hvorfor systemet anbefaler næste skridt
- interne brugere kan skelne mellem confirmed og inferred facts
- alle væsentlige beslutninger kan spores

---

## Overordnet MVP 0.1 Workflow

MVP 0.1 workflow er nu:

```text
Lead created
↓
Digital first conversation
↓
Empathy reflection
↓
Guided screening
↓
Information quality decision
↓
Routing recommendation
↓
Human review when required
↓
CRM assignment
↓
Internal follow-up
```

Avancerede flows som MitID, fuldmagt, dokumentupload, aktiv sagsbehandling og ekstern indsendelse er ikke MVP 0.1 aktive flows.

De må gerne være future-reserved, men de må ikke drive den første implementering.

---

# Lead Pipeline v2.0

## NEW

Lead er netop oprettet.

Handling:

```text
Start digital first conversation
```

CRM gemmer:

- entry point
- timestamp
- initial status

Relateret beslutning:

```text
DEC-001 Start Conversation
```

---

## SCREENING

Brugeren er i digital første samtale eller guided screening.

Systemet gemmer:

- conversation state
- original user description
- extracted facts
- inferred facts
- confirmed facts
- missing information
- asked questions
- skipped questions
- confidence levels

Relaterede beslutninger:

```text
DEC-002 Empathy Reflection
DEC-003 Confirm Understanding
DEC-004 Smart Skip Decision
```

---

## AWAITING_INFO

Systemet mangler oplysninger, der er nødvendige for næste beslutning.

Denne status betyder ikke afvisning.

Den betyder:

```text
More information is needed before routing can continue.
```

CRM skal vise:

- missing information
- why it is needed
- next recommended question
- whether the missing information is critical or optional

Relateret beslutning:

```text
DEC-007 Information Quality
```

---

## REVIEW

Lead kræver menneskelig vurdering før næste skridt.

Review kan skyldes:

- low confidence
- sensitive context
- serious indicators
- contradictory information
- unclear timing
- unclear relation or authorization
- previous decision mentioned
- policy-required review

CRM skal vise:

- review reason
- confirmed facts
- inferred facts
- unresolved facts
- confidence levels
- user-facing message shown
- suggested reviewer action

Relaterede beslutninger:

```text
DEC-006 Human Review
PAT-009 Human Review Bridge
```

---

## QUALIFIED

Lead har nok information og routing signaler til at fortsætte til næste interne eller senere processuelle trin.

QUALIFIED betyder ikke automatisk MitID, dokumentupload eller aktiv sag.

Det betyder:

```text
The lead is ready for the next appropriate route.
```

Næste route kan være:

- internal follow-up
- human review
- document readiness later
- identity gate later
- consent gate later

Relaterede beslutninger:

```text
DEC-005 Routing Recommendation
DEC-008 Acceptance Policy Decision
DEC-013 CRM Assignment
```

---

## REJECTED / GUIDE ELSEWHERE

MVP kan have intern status `REJECTED`, men bruger-facing sprog må ikke være hårdt eller endeligt.

Anbefalet intern betegnelse i nye flows:

```text
GUIDE_ELSEWHERE
```

CRM skal vise:

- guide-away reason
- policy reference
- confidence level
- missing information if relevant
- whether user may add information
- user-facing message shown

Relaterede dokumenter:

```text
DEC-012 Guide Elsewhere
PAT-008 Respectful Guide-Away
DOC-023 Tone of Voice Guide
```

---

## CLOSED

Lead er lukket administrativt.

CRM skal gemme:

- final internal status
- reason
- timestamp
- responsible user or automated process
- audit trail

---

# Future Reserved Pipeline

Følgende statuses er future-reserved og må ikke aktiveres i MVP 0.1 uden særskilt arkitektur og backlog:

```text
MITID_PENDING
POA_PENDING
DOCUMENTS_PENDING
ACTIVE_CASE
SUBMITTED
DECISION
```

Disse skal senere styres af:

```text
DEC-009 Identity Gate
DEC-010 Consent Gate
DEC-011 Document Readiness
future Identity Architecture
future Document Architecture
future Case Architecture
```

---

# CRM Assignment

CRM Assignment styres af:

```text
DEC-013 CRM Assignment
```

Hver lead skal have:

- current status
- routing recommendation
- routing reason
- next action
- review flag
- review reason
- assigned queue
- priority
- missing information

Mulige queues i MVP 0.1:

```text
New Leads
Screening In Progress
Awaiting Information
Human Review
Qualified Leads
Guide Elsewhere / Closed Review
```

---

# CRM Lead Detail View

Lead detail bør vise følgende sektioner:

## 1. User Story

- original user description
- empathy reflection
- confirmation status

## 2. Facts

- confirmed facts
- inferred facts
- corrected facts
- unresolved facts
- source of each fact
- confidence level

## 3. Screening

- asked questions
- skipped questions
- postponed questions
- answers
- missing information

## 4. Scores

- case_strength
- information_quality
- commercial_value
- lead_score
- score version

Scores skal vises som interne signaler, ikke som endelige beslutninger.

## 5. Decisions

- information quality outcome
- routing recommendation
- acceptance policy outcome
- human review decision
- identity gate outcome if evaluated
- consent gate outcome if evaluated
- document readiness state if evaluated
- CRM assignment decision

## 6. Audit

- decision ids invoked
- timestamps
- user-facing messages shown
- AI output validation result
- reviewer actions

---

# Priority Engine

Priority Score kan stadig eksistere som intern sorteringsmekanisme.

Men prioritet skal ikke kun være Lead Score.

Ny model:

```text
Priority Score =
lead_score signal
+ urgency signal
+ review need signal
+ severity signal
+ missing information urgency
```

Priority Score skal være et internt arbejdsredskab.

Det må ikke bruges alene til guide-away, kvalificering eller endelig beslutning.

---

# SLA Engine

CRM bør måle svartider på kritiske queues.

Eksempel:

| Queue | Maks tid |
|---|---:|
| New Leads | 1 time |
| Human Review | 24-48 timer |
| Awaiting Information | afhænger af brugerrespons |
| Qualified Leads | 24 timer |

Hvis frist overskrides:

```text
System creates internal reminder
```

---

# Dashboard

Dashboard bør vise:

```text
New leads today
Screenings started
Screenings completed
Leads awaiting information
Leads requiring human review
Qualified leads
Guide-away outcomes
Average questions per screening
Repeated question rate
CRM handover completeness
```

MVP dashboard bør ikke primært styres af MitID-rate, da identity gate kun skal vises når relevant.

---

# Human Review Queue

Human Review Queue skal give medarbejderen tydeligt beslutningsgrundlag.

Minimumsdata:

- review reason
- risk or uncertainty reason
- confirmed facts
- inferred facts
- missing information
- scores
- routing recommendation
- suggested next action
- conversation summary
- user-facing message shown

Medarbejder kan vælge:

```text
continue
collect_more_information
guide_elsewhere_respectfully
mark_qualified
close
```

Disse actions skal senere formaliseres i Policy Pack og backlog.

---

# AI Document Engine

AI Document Engine er future scope.

MVP 0.1 må gerne registrere document readiness state, men aktiv dokumentupload og dokumentanalyse er ikke MVP 0.1.

Se:

```text
DEC-011 Document Readiness
```

---

# Økonomimotor

Commercial Value og økonomiske estimater kan bruges internt til prioritering.

I MVP 0.1 bør økonomimotoren være simpel og ikke overstyre review, confidence eller policy.

Fremtidige økonomiske beregninger kræver særskilt policy og governance.

---

# Audit Requirements

CRM skal kunne auditere:

- status changes
- routing decisions
- human review decisions
- user-facing messages
- AI validation results
- score versions
- assigned queues
- reviewer actions

---

# Resultat

Når CRM & Workflow Engine v2.0 er implementeret, har systemet en intern arbejdsflade, hvor AI og beslutningsmotor ikke står alene.

Sagsbehandlere får et struktureret, forklarligt og auditérbart grundlag for at arbejde videre med leads.

Dette dokument er grundlaget for:

- CRM lead board
- CRM lead detail page
- lead status logic
- human review queue
- decision handover
- internal prioritization
- future case workflow
