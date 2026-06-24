# MVP 0.1 Milestone - AI Screening & CRM

## Milestone name

```text
MVP 0.1 - AI Screening & CRM
```

## Purpose

This milestone defines the first working version of ErstatningsHjælp.

The goal is not to build the full legal platform yet.

The goal is to prove that the system can:

```text
Collect a short case description
↓
Run AI screening
↓
Extract structured case information
↓
Calculate lead scores
↓
Ask the next relevant question
↓
Save the lead
↓
Show the lead in an internal CRM
↓
Allow internal status handling
```

---

# Included Issues

## Sprint 0 - Foundation

```text
#1 Sprint 0.2: Install Laravel 12 project foundation
#2 Sprint 0.2: Create core database migrations
#3 Sprint 0.2: Create core Eloquent models
```

## Sprint 1 - AI Screening

```text
#4 Sprint 1: Create Prompt Repository
#5 Sprint 1: Create AiScreeningService
#6 Sprint 1: Create AI JSON Validator
#7 Sprint 1: Create LeadScoringService
#8 Sprint 1: Implement POST /api/v1/screening/start
#9 Sprint 1: Implement POST /api/v1/screening/{lead}/message
```

## Sprint 2 - CRM

```text
#10 Sprint 2: Implement GET /api/v1/leads/{lead}
#11 Sprint 2: Implement GET /api/v1/leads
#12 Sprint 2: Install internal authentication
#13 Sprint 2: Create CRM Lead Board
#14 Sprint 2: Create Lead Detail Page
#15 Sprint 2: Implement Lead Status Updates
```

---

# Delivery phases

## Phase 1 - Foundation

```text
#1
#2
#3
```

Expected result:

```text
Laravel runs locally
Database migrations work
Core models exist
```

---

## Phase 2 - AI Core

```text
#4
#5
#6
#7
```

Expected result:

```text
Prompts can be loaded
AI service can run
AI JSON can be validated
Scores can be calculated deterministically
```

---

## Phase 3 - Screening API

```text
#8
#9
```

Expected result:

```text
A user can start screening
A user can continue screening
Lead data is stored
Next question is returned
```

---

## Phase 4 - CRM

```text
#12
#10
#11
#13
#14
#15
```

Expected result:

```text
Internal user can log in
Internal user can list leads
Internal user can open lead detail page
Internal user can change lead status
```

---

# Milestone acceptance criteria

MVP 0.1 is complete when all of the following are true:

- [ ] Laravel project installs from clean clone
- [ ] `.env.example` contains required variables
- [ ] `.env` is not committed
- [ ] Database migrations run successfully
- [ ] Core Eloquent models exist
- [ ] PromptRepository works
- [ ] AiScreeningService works with mock or real provider
- [ ] AI JSON validation exists
- [ ] LeadScoringService calculates scores
- [ ] Screening start endpoint creates a lead
- [ ] Continue screening endpoint updates a lead
- [ ] Internal authentication protects CRM routes
- [ ] Lead list API works
- [ ] Lead detail API works
- [ ] CRM lead board works
- [ ] CRM lead detail page works
- [ ] Lead status can be updated
- [ ] No real personal data is committed
- [ ] No secrets or API keys are committed
- [ ] Basic feature tests exist for the main flow

---

# Main demo scenario

## Input

```text
Min mor fik ikke diagnosticeret kræft i tide og døde senere.
```

## Expected system behavior

```text
Lead is created
AI identifies possible diagnosis delay
AI asks about date/diagnosis timing
Scores are saved
Lead appears in CRM
Internal user can review lead
Internal user can update status
```

---

# Out of scope for this milestone

The following must not be added to MVP 0.1 unless explicitly approved later:

```text
MitID
Power of attorney signing
Document upload
Medical journal analysis
Complaint drafting
Automatic legal decision-making
Automatic submission to authorities
Similar case matching
Win probability engine
Production deployment
```

---

# Recommended GitHub milestone setup

If using GitHub milestones, create:

```text
Title: MVP 0.1 - AI Screening & CRM
Description: First working AI screening and internal CRM MVP.
Issues: #1-#15
```

---

# Release decision

MVP 0.1 should be considered ready for internal demo when:

```text
A complete dummy lead can move from public screening input to internal CRM review.
```

This is the core product proof.
