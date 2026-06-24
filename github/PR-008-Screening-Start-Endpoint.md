# PR-008 - Screening Start Endpoint

## Related issue

```text
#8 Sprint 1: Implement POST /api/v1/screening/start
```

## Purpose

This pull request creates the first public screening endpoint for MVP 0.1.

The endpoint should start a new screening conversation, create a lead, run the AI screening flow and return the next relevant question or action.

---

# Scope

## This PR should include

```text
API route for screening start
Screening controller action
Request validation
Lead creation
First conversation message storage
AiScreeningService integration
AiResponseValidator integration
LeadScoringService integration
Persistence of screening result
Safe error handling
Feature tests
```

## This PR should not include

```text
Continue conversation endpoint
CRM pages
Authentication requirement for public screening
Document upload
MitID
Power of attorney
Production deployment
Real personal data
Secrets
```

---

# Endpoint

```text
POST /api/v1/screening/start
```

---

# Expected behavior

The endpoint should:

```text
Receive a short user message
Validate the request
Create a new lead
Save the first user message
Run the AI screening pipeline
Validate structured AI output
Calculate or confirm scores
Save relevant screening data
Return a safe structured response
```

---

# Error handling

If AI output is invalid or the provider fails, the endpoint should handle the failure safely.

Expected behavior:

```text
Do not expose technical error details to the user
Keep the application stable
Mark the lead for review if needed
Return a controlled response
Log only safe operational details
```

---

# Acceptance criteria

This PR is complete when:

- [ ] Endpoint exists
- [ ] Request validation exists
- [ ] Valid request creates a lead
- [ ] First user message is saved
- [ ] AI screening service is called
- [ ] AI output is validated
- [ ] Scores are calculated or confirmed
- [ ] Screening data is saved
- [ ] Safe response is returned
- [ ] Invalid request returns validation error
- [ ] AI failure is handled safely
- [ ] Feature tests exist
- [ ] No secrets are committed
- [ ] No real personal data is committed

---

# Suggested PR title

```text
PR-008: Add screening start endpoint
```

---

# Suggested PR description

```markdown
## Summary

Adds the public endpoint for starting a new AI screening flow.

## Related issue

Closes #8

## Includes

- Screening start route
- Controller action
- Request validation
- Lead creation
- AI pipeline integration
- Safe failure handling
- Feature tests

## Not included

- Continue conversation endpoint
- CRM UI
- Authentication changes
```

---

# Next PR

```text
PR-009 - Continue Screening Endpoint
Related issue: #9
```
