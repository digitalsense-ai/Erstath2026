# Sprint 00 - Project Foundation

## Goal

Prepare ErstatningsHjælp for development.

No business logic is built in Sprint 00.

The purpose is to establish architecture, project structure and development environment.

---

## Success Criteria

At the end of Sprint 00 we have:

- GitHub repository ready
- Documentation structure established
- Laravel project installed
- Database configured
- Core migrations created
- Core Eloquent models created
- OpenAI service skeleton created
- Local development guide documented

---

## Repository Tasks

- [ ] Create docs directory
- [ ] Create prompts directory
- [ ] Create architecture documentation
- [ ] Create README
- [ ] Create contribution guidelines

---

## Laravel Tasks

- [ ] Install Laravel 12
- [ ] Configure environment
- [ ] Configure MySQL
- [ ] Install Breeze
- [ ] Verify local startup

---

## Database Tasks

Create initial migrations:

- [ ] leads
- [ ] lead_conversations
- [ ] lead_scores
- [ ] lead_entities
- [ ] lead_assessments
- [ ] lead_missing_information
- [ ] lead_documents

---

## Model Tasks

Create Eloquent models:

- [ ] Lead
- [ ] ConversationMessage
- [ ] LeadScore
- [ ] LeadEntity
- [ ] LeadAssessment
- [ ] MissingInformation
- [ ] Document

---

## AI Tasks

- [ ] OpenAI service abstraction
- [ ] JSON response parser
- [ ] AI screening endpoint
- [ ] Prompt folder structure

---

## Frontend Tasks

- [ ] Landing page
- [ ] Chat component
- [ ] Score display component
- [ ] Internal dashboard placeholder

---

## Deliverable

Version 0.1.0 foundation ready.

The system should be capable of:

1. Receiving a short case description.
2. Sending it to AI.
3. Receiving structured JSON.
4. Storing lead data.
5. Displaying scores.

No MitID, fullmagt, journal analysis or claim generation is included in Sprint 00.

Those features belong to later milestones.
