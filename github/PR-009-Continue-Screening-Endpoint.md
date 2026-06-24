# PR-009 - Continue Screening Endpoint

## Related issue

```text
#9 Sprint 1: Implement POST /api/v1/screening/{lead}/message
```

## Purpose

This pull request creates the endpoint that continues an existing screening conversation.

The endpoint should accept a new user message, update lead context, run the screening pipeline again and return the next relevant question or action.

---

# Scope

## This PR should include

```text
API route for continuing screening
Controller action
Request validation
Lead lookup
Conversation message storage
Context building
AiScreeningService integration
AiResponseValidator integration
LeadScoringService integration
Lead updates
Feature tests
```

## This PR should not include

```text
CRM pages
Authentication changes to public screening
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
POST /api/v1/screening/{lead}/message
```

---

# Expected behavior

The endpoint should:

```text
Receive a new user message
Validate the request
Load the existing lead
Build relevant screening context
Run the AI screening flow
Validate AI output
Update scores and assessment
Update missing information
Save assistant response or next question
Return structured response
```

---

# Status handling

The implementation should support workflow progression such as:

```text
SCREENING
AWAITING_INFO
QUALIFIED
REVIEW
REJECTED
```

Exact transitions can remain simple in MVP 0.1.

---

# Error handling

If AI output is invalid or the provider fails:

```text
Do not lose the user's message
Keep the application stable
Allow review fallback
Return a controlled response
Avoid exposing technical details
```

---

# Acceptance criteria

This PR is complete when:

- [ ] Endpoint exists
- [ ] Request validation exists
- [ ] Lead lookup works
- [ ] User message is saved
- [ ] Context is built from previous screening data
- [ ] AI service is called
- [ ] AI output is validated
- [ ] Scores and assessment are updated
- [ ] Missing information is updated
- [ ] Structured response is returned
- [ ] Missing lead returns not found response
- [ ] AI failure is handled safely
- [ ] Feature tests exist
- [ ] No secrets are committed
- [ ] No real personal data is committed

---

# Suggested PR title

```text
PR-009: Add continue screening endpoint
```

---

# Suggested PR description

```markdown
## Summary

Adds the endpoint used to continue an existing AI screening conversation.

## Related issue

Closes #9

## Includes

- Continue screening route
- Controller action
- Context building
- AI integration
- Assessment updates
- Feature tests

## Not included

- CRM UI
- Authentication changes
- Document upload
```

---

# Next step

After PR-009, Sprint 1 is fully represented by PR plans and implementation can proceed according to the MVP release plan.
