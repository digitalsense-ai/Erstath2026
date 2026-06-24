# 21 - Consistency Review

## Purpose

This document reviews consistency across the MVP 0.1 planning package for ErstatningsHjælp.

It focuses on alignment between:

- architecture documents
- database blueprint
- AI prompts
- API specification
- CRM workflow
- GitHub issues
- PR plans
- README and handoff documents

The goal is to identify naming conflicts, enum drift, unclear scope boundaries and implementation risks before coding starts.

---

# 1. Overall conclusion

The project is broadly consistent and ready for implementation.

However, a few areas should be tightened before or during PR-001 to PR-009:

```text
Recommended action enum values
Lead status values
Raw AI output storage policy
Future-only fields vs MVP-active fields
Issue numbering and duplicate cleanup
README project counts
```

None of these block implementation, but they should be resolved early to avoid confusion.

---

# 2. Consistency score

| Area | Status | Risk |
|---|---|---|
| Core product flow | Consistent | Low |
| AI role | Consistent | Low |
| Scoring formula | Consistent | Low |
| Case categories | Consistent | Low |
| Conversation principle | Consistent | Low |
| API direction | Mostly consistent | Medium |
| Database model | Mostly consistent | Medium |
| Recommended actions | Needs cleanup | Medium |
| Lead statuses | Needs cleanup | Medium |
| Security scope | Consistent | Low |
| MVP boundaries | Consistent | Low |
| GitHub issue backlog | Mostly consistent | Low/Medium |

---

# 3. Core product flow

## Reviewed flow

```text
Landing page
↓
User writes a short description
↓
AI screens the input
↓
AI asks follow-up questions one at a time
↓
System calculates scores
↓
Lead is categorized
↓
Internal CRM review
```

## Finding

The core flow is consistent across the main documents.

## Recommendation

Keep this flow frozen for MVP 0.1.

Do not add additional onboarding steps before the public screening flow is implemented.

---

# 4. AI role

## Finding

The AI role is consistently described as supportive, not decisive.

AI may:

```text
summarize
extract facts
identify missing information
suggest next question
suggest category
suggest recommended action
```

AI may not:

```text
make final decision
promise outcome
automatically submit anything
replace internal review
```

## Recommendation

Preserve this language in all user-facing and internal documentation.

The CRM should show AI output as a recommendation, not as a final decision.

---

# 5. Scoring model

## Confirmed formula

```text
overall_score =
(case_strength * 0.50)
+
(information_quality * 0.20)
+
(commercial_value * 0.30)
```

## Finding

The scoring formula is consistent in the newer architecture documents.

## Recommendation

LeadScoringService should be treated as the source of truth for official score calculation.

AI may suggest scores, but official calculation should be deterministic where possible.

---

# 6. Case categories

## Confirmed categories

```text
A
B
C
D
```

## Finding

The category model is consistent.

Older references to `unknown` may exist in validator planning, but `unknown` should not be treated as a final case category.

## Recommendation

Use this rule:

```text
Final stored case_category: A, B, C, D
Temporary validation fallback: unknown only inside AI validation/error handling
```

This means `unknown` can exist internally as a safe fallback, but not as the intended final business classification.

---

# 7. Recommended action enum

## Values found during planning

Different documents and issues have mentioned values such as:

```text
reject
collect_more_information
request_documents
manual_review
mitid_flow
qualified
unknown
```

## Problem

This is the most important enum drift found in the planning set.

If prompts, validators, API responses and CRM labels do not use the same values, implementation will become messy.

## Recommended MVP 0.1 canonical values

```text
collect_more_information
manual_review
qualified
reject
```

## Optional internal fallback

```text
unknown
```

`unknown` should only be used internally when AI output cannot be trusted or validated.

## Out-of-scope for MVP 0.1 as active actions

```text
request_documents
mitid_flow
```

These may be future actions, but should not drive MVP 0.1 user flow unless explicitly approved.

## Required updates

When implementation starts, align these files:

```text
prompts/01-screening-system-prompt.md
prompts/03-score-engine-prompt.md
prompts/06-case-category-prompt.md
docs/08-api-specification.md
docs/12-data-dictionary.md
docs/20-data-dictionary-v2.md
Issue #6 or related validator task
PR-006 AI JSON Validator plan
```

---

# 8. Lead status values

## Values currently proposed

Data Dictionary v2 lists:

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

## Problem

Some statuses are future-oriented and may not be active in MVP 0.1.

If all are implemented immediately, the system may appear more advanced than it is.

## Recommended MVP-active statuses

```text
NEW
SCREENING
AWAITING_INFO
QUALIFIED
REJECTED
REVIEW
CLOSED
```

## Future-reserved statuses

```text
MITID_PENDING
POA_PENDING
DOCUMENTS_PENDING
ACTIVE_CASE
```

## Recommendation

Document future-reserved statuses clearly in code comments or enum documentation.

MVP controllers should not transition into future-reserved statuses unless the related flow has been implemented.

---

# 9. Database vs API mapping

## Finding

The planned database and API are mostly aligned.

## Main risk

The API may expose too much internal structure if it returns raw assessment or raw AI data.

## Recommendation

Public API responses should return only:

```text
lead_uuid
status
safe summary if needed
scores if appropriate
case_category
recommended_action
next_question
```

Internal CRM API may return more detail, but should still avoid exposing raw debug payloads by default.

---

# 10. AI output storage

## Finding

Several documents allow storing `raw_ai_output` for debugging.

This is useful, but can become risky if stored long-term or shown in CRM.

## Recommendation

Use this policy:

```text
Validated structured fields = official system data
Raw AI output = optional debug data
Raw AI output should be short-lived or disabled in production later
Raw AI output should not be shown as primary CRM content
```

This should be reflected in:

```text
docs/09-security-gdpr.md
docs/20-data-dictionary-v2.md
PR-005 AiScreeningService
PR-006 AI JSON Validator
```

---

# 11. Conversation principle

## Finding

The one-question-at-a-time principle is consistent.

## Risk

Prompts may accidentally ask multiple questions in one response.

## Recommendation

AiResponseValidator or prompt tests should check that `next_question` does not contain multiple unrelated questions where practical.

This is already reflected in the AI JSON Validator issue and should remain in scope.

---

# 12. CRM workflow

## Finding

CRM flow is consistent:

```text
Lead board
Lead detail
Scores
Summary
Missing information
Status update
```

## Recommendation

CRM should not expose advanced future workflows as clickable actions until those flows exist.

For example, future-reserved statuses can be visible as roadmap concepts, but should not be selectable in MVP unless implemented.

---

# 13. Security and compliance alignment

## Finding

Sprint 4 created a consistent security/compliance planning set:

```text
Audit logging
Permissions
Consent tracking
Retention
Security review
Sensitive data handling
Operational security
```

## Recommendation

Do not implement all of these fully before the core MVP works.

Instead:

```text
Plan now
Implement minimum safe foundation during early code sprints
Expand after public screening and CRM are working
```

---

# 14. GitHub issue backlog

## Finding

Issue #16 was a duplicate AI JSON Validator task and has been closed as duplicate.

The active backlog should treat:

```text
#1-#15 = Sprint 0-2
#17-#23 = Sprint 3
#24-#30 = Sprint 4
```

## Recommendation

Do not reuse #16 in roadmap numbering.

If a duplicate #31 exists for CI workflow, close it as duplicate of #23 before implementation tracking begins.

---

# 15. PR plans vs Issues

## Finding

PR plans currently exist for PR-001 to PR-009.

These cover:

```text
Foundation
Database
Models
Prompts
AI service
Validator
Scoring service
Screening start endpoint
Screening continue endpoint
```

## Gap

There are no detailed PR plans yet for CRM implementation issues #10-#15.

## Recommendation

Do not create more PR plans immediately unless ServerAdmin wants them.

But if work continues before coding, create:

```text
PR-010 Lead Detail API
PR-011 Lead List API
PR-012 Internal Authentication
PR-013 CRM Lead Board
PR-014 Lead Detail Page
PR-015 Lead Status Updates
```

This is optional, not blocking.

---

# 16. README and status counts

## Finding

The README has been updated several times as the project grew.

Counts may become stale as new documents and issues are added.

## Recommendation

Before implementation starts, update README with the latest status:

```text
Documents: 21+
Prompts: 6
Epics: 8
Issues: 30 active/planned plus closed duplicate #16
PR plans: 9
Implementation: Not started
```

If more documents are added, update this count again.

---

# 17. Handoff document

## Finding

The handoff document was updated before docs 19-21 existed.

## Recommendation

Update `docs/serveradmin-handoff-plan.md` to include:

```text
docs/19-architecture-review-final.md
docs/20-data-dictionary-v2.md
docs/21-consistency-review.md
```

This ensures ServerAdmin sees the latest final review documents.

---

# 18. Implementation guardrails

Before PR-001 starts, developers should follow these guardrails:

```text
Do not add new MVP features
Do not change scoring formula
Do not change case categories
Do not expose raw AI output publicly
Do not implement future-reserved flows as active flows
Do not use real personal data in tests
Do not commit secrets
```

---

# 19. Required cleanup list

## Must fix before or during early implementation

```text
Align recommended_action enum
Clarify MVP-active vs future-reserved lead statuses
Ensure AI validator allows only canonical values
Ensure public API does not expose debug payloads
Update README counts
Update ServerAdmin handoff with docs 19-21
```

## Nice to fix

```text
Create PR plans #010-#015 for CRM
Add explicit enum table to API specification
Add retention notes to test fixture docs
Add security checklist link to PR templates later
```

---

# 20. Final recommendation

The planning package is strong and mostly consistent.

The project should not add more product scope before implementation starts.

The next best actions are:

```text
Update README
Update ServerAdmin handoff
Optionally create PR plans #010-#015
Then start PR-001 when ServerAdmin is ready
```

Final verdict:

```text
Ready for implementation with minor consistency cleanup required.
```
