# Dokument 14 - Business Metrics & KPI Framework v1.0

## Formål

Dette dokument definerer de vigtigste forretningsmålinger for ErstatningsHjælp.

Målet er at kunne måle om platformen skaber værdi, ikke kun om teknikken virker.

KPI-frameworket skal hjælpe med at besvare:

```text
Får vi nok leads?
Kvalificerer AI de rigtige sager?
Hvor mange går videre til MitID?
Hvor mange bliver reelle kunder?
Hvad koster en screening?
Hvad er værdien pr. lead?
```

---

# 1. Funnel overview

Den centrale forretningstragt:

```text
Visitor
↓
Lead Started Screening
↓
Lead Completed Screening
↓
Qualified Lead
↓
MitID Completed
↓
Fuldmagt Signed
↓
Documents Uploaded
↓
Manual Review Approved
↓
Active Case
↓
Submitted Case
↓
Decision
↓
Revenue
```

---

# 2. Core KPI categories

KPI'er opdeles i fem grupper:

```text
Acquisition
Screening Quality
Conversion
Case Economics
Operations
```

---

# 3. Acquisition KPIs

## Website visitors

Antal besøgende på landing page.

```text
website_visitors
```

## Screening starts

Antal personer der starter AI-screening.

```text
screening_starts
```

## Visitor to screening rate

```text
screening_starts / website_visitors * 100
```

## Lead source

Hvor leads kommer fra:

```text
organic
paid_ads
referral
partner
social
unknown
```

## Cost per lead

```text
marketing_spend / screening_starts
```

---

# 4. Screening Quality KPIs

## Screening completion rate

Hvor mange der gennemfører AI-screeningen.

```text
completed_screenings / screening_starts * 100
```

## Average questions per screening

```text
sum(number_of_questions) / completed_screenings
```

Mål:

```text
Under 6 spørgsmål i gennemsnit
```

## AI valid JSON rate

Hvor ofte AI returnerer gyldig JSON.

```text
valid_ai_responses / total_ai_responses * 100
```

Mål:

```text
Over 98%
```

## AI manual review rate

Hvor ofte AI sender sagen til manuel gennemgang.

```text
manual_review_leads / completed_screenings * 100
```

For høj rate betyder at AI er for usikker.

For lav rate betyder risiko for at AI overkonkluderer.

---

# 5. Qualification KPIs

## Qualified lead rate

```text
qualified_leads / completed_screenings * 100
```

## A-case rate

```text
category_a_leads / completed_screenings * 100
```

## B-case rate

```text
category_b_leads / completed_screenings * 100
```

## Rejection rate

```text
category_d_leads / completed_screenings * 100
```

## Information quality average

```text
average(information_quality)
```

Bruges til at se om AI stiller de rigtige spørgsmål.

---

# 6. Conversion KPIs

## Qualified to MitID rate

```text
mitid_completed / qualified_leads * 100
```

## MitID to Fuldmagt rate

```text
power_of_attorney_signed / mitid_completed * 100
```

## Fuldmagt to Documents rate

```text
documents_uploaded / power_of_attorney_signed * 100
```

## Documents to Active Case rate

```text
active_cases / documents_uploaded * 100
```

## Lead to Active Case rate

```text
active_cases / screening_starts * 100
```

---

# 7. Case Economics KPIs

## Expected compensation value

Internt estimat for mulig erstatningsværdi.

```text
expected_compensation_value
```

## Expected revenue

Afhænger af forretningsmodel.

Eksempel no-cure-no-pay:

```text
expected_compensation_value * commission_rate
```

## Revenue per lead

```text
total_revenue / screening_starts
```

## Revenue per qualified lead

```text
total_revenue / qualified_leads
```

## Revenue per active case

```text
total_revenue / active_cases
```

## AI cost per lead

```text
total_ai_cost / screening_starts
```

## Gross margin per lead

```text
revenue_per_lead - ai_cost_per_lead - support_cost_per_lead - marketing_cost_per_lead
```

---

# 8. Case Outcome KPIs

## Submitted case rate

```text
submitted_cases / active_cases * 100
```

## Decision received rate

```text
decisions_received / submitted_cases * 100
```

## Positive outcome rate

```text
positive_decisions / decisions_received * 100
```

Positive decisions include:

```text
Medhold
Delvist medhold
Forlig
Genoptagelse med positiv ændring
```

## Rejection after active case rate

```text
rejected_after_review / active_cases * 100
```

Hvis denne er høj, kvalificerer AI eller sagsbehandler for mange svage sager.

---

# 9. Operational KPIs

## Time to first AI response

```text
average(seconds from user message to AI response)
```

## Time to qualification

```text
average(time from screening_start to qualified)
```

## Time in manual review

```text
average(time from manual_review to decision)
```

## Caseworker workload

```text
active_leads_per_caseworker
manual_reviews_per_day
```

## SLA breach rate

```text
sla_breached_items / total_items * 100
```

---

# 10. Suggested dashboard sections

## Executive dashboard

```text
Leads this week
Qualified leads
Active cases
Expected revenue
Revenue realized
AI cost
Conversion rate
```

## Screening dashboard

```text
AI valid JSON rate
Average questions
Manual review rate
A/B/C/D distribution
Average scores
```

## Case dashboard

```text
Active cases
Submitted cases
Decisions
Positive outcomes
Expected compensation
Expected revenue
```

## Operations dashboard

```text
Review queue
SLA breaches
Average response time
Caseworker workload
AI failures
```

---

# 11. Minimum MVP metrics

For MVP 0.1.0 bør vi som minimum gemme:

```text
screening_started_at
screening_completed_at
number_of_questions
case_category
case_strength
information_quality
commercial_value
overall_score
recommended_action
ai_cost_estimate
ai_success
```

---

# 12. Metrics events

Senere kan systemet bruge event tracking.

Eksempler:

```text
screening.started
screening.message_sent
screening.ai_response_received
screening.completed
lead.qualified
lead.rejected
mitid.started
mitid.completed
poa.signed
document.uploaded
case.created
case.submitted
decision.received
```

---

# 13. Business questions to answer monthly

Hver måned bør ledelsen kunne svare på:

```text
Hvor mange leads fik vi?
Hvor kom de fra?
Hvor mange var stærke?
Hvor mange blev til kunder?
Hvor meget kostede AI?
Hvor meget kostede marketing?
Hvilke sagstyper giver bedst værdi?
Hvilke sagstyper bør vi afvise hurtigere?
Hvor mange sager krævede manuel review?
Er AI blevet bedre eller dårligere?
```

---

# 14. Red flag metrics

## High AI cost per lead

Mulig årsag:

```text
For lange prompts
For meget conversation context
For dyr model
For mange retries
```

## High D-case rate

Mulig årsag:

```text
Forkert marketing
For bred landing page
For mange irrelevante leads
```

## Low MitID conversion

Mulig årsag:

```text
Brugeren er ikke overbevist
For tidlig MitID request
Uklart value proposition
Teknisk friktion
```

## High manual review rate

Mulig årsag:

```text
Prompts er for usikre
Scoring rules er uklare
Brugere giver for lidt information
AI mangler bedre spørgsmål
```

---

# 15. Definition of Done

KPI framework er klar til MVP når:

- [ ] Lead status timestamps kan gemmes
- [ ] Scores gemmes struktureret
- [ ] Case category gemmes
- [ ] AI cost estimate gemmes
- [ ] Screening completion kan måles
- [ ] CRM kan vise antal leads pr. status
- [ ] Dashboard kan vise A/B/C/D fordeling

---

# Resultat

Business Metrics & KPI Framework gør ErstatningsHjælp målbar.

Produktet skal ikke kun bygges.

Det skal løbende kunne måles, forbedres og styres som forretning.
