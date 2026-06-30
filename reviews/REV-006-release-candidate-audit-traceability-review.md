# REV-006 - Release Candidate Audit Traceability Review

Version: 1.0
Status: Active Draft
Owner: Product / Engineering / Delivery
Scope: Cross-pack traceability review

## Purpose

This document reviews traceability across the main implementation packs in ErstatningsHjaelp.

The goal is to verify that implementation can move from business intent to backend, AI, UX, tests and staff workflow without gaps or conflicting terminology.

## Traceability Principle

Every important implementation behavior should be traceable through:

```text
business intent
architecture
backlog or sprint
API or database specification
JSON contract
AI Case Brain
Rulebook
UX
Domain Knowledge
test case
```

Not every document needs to link to every other document, but critical implementation flows must not depend on hidden assumptions.

## Reviewed Packs

Primary packs reviewed conceptually:

```text
README.md
docs/IMPLEMENTATION-MASTER-INDEX.md
handoff/HANDOFF-000-index.md
docs/ai-case-brain/BRAIN-000-ai-case-brain-index.md
docs/rulebook/RULEBOOK-000-index.md
docs/ux/UX-000-ux-index.md
docs/domain/DOMAIN-000-index.md
docs/api/API-READINESS-003-first-vertical-slice-plan.md
docs/mvp-start/MVP-START-003-first-feature-test-plan.md
test-cases/TC-000-test-case-catalog.md
```

## Traceability Map - First Vertical Slice

Expected first slice:

```text
User starts intake
↓
POST /api/v1/conversations
↓
Conversation stored
↓
Fake AI provider returns structured signals
↓
AI Case Brain evaluates
↓
One smart question is selected
↓
Validated JSON is returned
↓
Feature test confirms behavior
```

Traceability status:

```text
business intent: covered
API readiness: covered
AI Case Brain: covered
Rulebook: covered
UX Pack: covered
Domain Knowledge: covered
MVP start pack: covered
business test cases: covered
```

Assessment:

```text
READY
```

## Traceability Map - Smart Question

Required behavior:

```text
ask one useful question at a time
prioritise missing critical facts
avoid repeated questions
accept approximate answers
use user-safe wording
store internal reason codes
```

Mapped documents:

```text
docs/ai-case-brain/BRAIN-013-smart-question-rules.md
docs/rulebook/RULEBOOK-090-smart-question-rules.md
docs/ux/UX-002-conversation-flow.md
docs/ux/UX-003-screen-by-screen-specification.md
docs/ux/UX-009-microcopy-and-tone-of-voice.md
docs/domain/DOMAIN-007-time-limit-reference.md
```

Assessment:

```text
READY
```

Risk:

Developers may expose internal reason codes or ask multiple questions if frontend does not follow UX Pack.

Recommendation:

Add automated feature/API tests that assert only one next question is returned for first slice.

## Traceability Map - Routing

Routing targets:

```text
continue_conversation
request_documents
human_review
onboarding_later
guide_away
```

Mapped documents:

```text
docs/ai-case-brain/BRAIN-003-routing-model.md
docs/ai-case-brain/BRAIN-018-brain-output-model.md
docs/rulebook/RULEBOOK-100-routing-rules.md
docs/ux/UX-012-notification-and-status-patterns.md
docs/ux/UX-015-handoff-to-frontend.md
```

Assessment:

```text
READY WITH TEST REQUIREMENT
```

Risk:

Routing labels must remain identical across backend, frontend and test expectations.

Recommendation:

Define route targets as backend enums and reuse them in API resources/tests.

## Traceability Map - Human Review

Required behavior:

```text
human review can be triggered by low confidence, serious unclear case, conflicting info, prior decision or staff override
review priority is internal
customer sees careful non-final wording
staff sees reason codes and review notes
```

Mapped documents:

```text
docs/ai-case-brain/BRAIN-014-human-review-escalation-rules.md
docs/rulebook/RULEBOOK-110-human-review-rules.md
docs/ux/UX-010-caseworker-crm-ux.md
docs/ux/UX-011-human-review-workspace.md
docs/contracts/CONTRACT-007-human-review-contract.md
```

Assessment:

```text
READY FOR LATER SPRINT
```

Risk:

Human review workspace is well-defined, but not first-slice implementation. It should not block Sprint 000.

Recommendation:

Keep human review UI as placeholder until backend route and CRM data model exist.

## Traceability Map - Guide-Away

Required behavior:

```text
guide away carefully
avoid final rejection language
allow additional information
human review overrides guide-away when needed
```

Mapped documents:

```text
docs/ai-case-brain/BRAIN-015-guide-away-rules.md
docs/rulebook/RULEBOOK-120-guide-away-rules.md
docs/ux/UX-003-screen-by-screen-specification.md
docs/ux/UX-009-microcopy-and-tone-of-voice.md
docs/domain/DOMAIN-002-domain-language-and-boundaries.md
```

Assessment:

```text
READY
```

Risk:

Frontend or copy changes could accidentally sound final.

Recommendation:

Use UX-009 copy as source of truth for guide-away text.

## Traceability Map - Facts And Confirmation

Required behavior:

```text
AI-created facts are unconfirmed by default
facts can be user-provided, document-supported or staff-confirmed later
caseworker UI must show confirmation status
```

Mapped documents:

```text
docs/ai-case-brain/BRAIN-018-brain-output-model.md
docs/ux/UX-010-caseworker-crm-ux.md
docs/ux/UX-011-human-review-workspace.md
docs/domain/DOMAIN-010-glossary.md
```

Assessment:

```text
READY WITH DATABASE CHECK
```

Risk:

Database schema must support fact source/status clearly.

Recommendation:

During Sprint 001, verify fact tables include status/source fields matching contracts and CRM needs.

## Traceability Map - Domain Labels

Key internal label groups:

```text
case_domain
case_type
injury_type
consequence
route
confidence
review_priority
document_status
```

Mapped documents:

```text
docs/domain/DOMAIN-002-domain-language-and-boundaries.md
docs/domain/DOMAIN-003-common-case-patterns.md
docs/domain/DOMAIN-005-injury-types.md
docs/domain/DOMAIN-006-consequence-classification.md
docs/domain/DOMAIN-008-document-types.md
docs/rulebook/RULEBOOK-002-rule-id-and-versioning-standard.md
docs/ai-case-brain/BRAIN-018-brain-output-model.md
```

Assessment:

```text
MOSTLY READY
```

Risk:

Some labels may drift when implementation enums are created.

Recommendation:

Create backend enum files from the documented allowed values instead of inventing new strings.

## Traceability Map - Testing

Test sources:

```text
test-cases/TC-000-test-case-catalog.md
test-cases/TC-100-business-test-library-complete.md
docs/ai-case-brain/BRAIN-025-qa-and-test-matrix.md
docs/mvp-start/MVP-START-003-first-feature-test-plan.md
docs/ux/UX-014-usability-test-checklist.md
```

Assessment:

```text
READY
```

Risk:

Business tests and automated tests may diverge if not linked issue-by-issue.

Recommendation:

Each implementation issue should reference relevant TC IDs.

## Findings

## Finding T1 - First Slice Traceability Is Strong

Severity: note

The first vertical slice has clear traceability across API, AI, UX and tests.

## Finding T2 - Enum Discipline Is Important

Severity: medium

The project uses many structured labels. Implementation should centralise them as enums/constants.

## Finding T3 - Rulebook Must Not Replace MVP Rules Too Early

Severity: medium

Rulebook is broad and useful, but first implementation should start with BRAIN-020 first 50 MVP rules.

## Finding T4 - UX Copy Should Be Treated As Source Of Truth

Severity: medium

User-facing copy is safety-relevant. Implementation should not casually rewrite guide-away, human review or AI wording.

## Finding T5 - Fact Confirmation Status Needs Database Attention

Severity: medium

CRM UX and AI output model assume confirmation/source status. Sprint 001 should verify database alignment.

## Finding T6 - Domain Knowledge Is Well-Integrated

Severity: note

Domain Knowledge now supports AI, Rulebook and UX without acting as final legal decision logic.

## Traceability Score

```text
First vertical slice traceability      98
Smart question traceability            98
Routing traceability                   95
Human review traceability              92
Guide-away traceability                96
Fact/source traceability               90
Domain label traceability              92
Testing traceability                   94
Overall traceability                   94
```

## Recommendations

Before or during Sprint 000/Sprint 001:

```text
1. Create backend enums/constants for all route/domain/type/status labels.
2. Ensure first feature test asserts one next question only.
3. Keep customer-facing copy aligned with UX-009.
4. Verify fact source/status database fields during data model sprint.
5. Reference TC IDs in implementation issues and test names where practical.
```

## Conclusion

Traceability is strong enough to proceed with Laravel baseline and first vertical slice planning.

Main remaining traceability risk is implementation drift, not missing documentation.

## References

- REV-004-release-candidate-audit-plan.md
- REV-005-release-candidate-audit-initial-findings.md
- docs/IMPLEMENTATION-MASTER-INDEX.md
- docs/ai-case-brain/BRAIN-000-ai-case-brain-index.md
- docs/rulebook/RULEBOOK-000-index.md
- docs/ux/UX-000-ux-index.md
- docs/domain/DOMAIN-000-index.md
