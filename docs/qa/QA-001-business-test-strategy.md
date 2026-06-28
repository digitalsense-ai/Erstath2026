# QA-001 - Business Test Strategy

Version: 1.0 Draft
Status: Active
Owner: Product / QA / Engineering
Domain: QA / Business Test Strategy
Related: test-cases/TC-000-test-case-catalog.md, test-cases/TC-100-business-test-library-complete.md, docs/IMPLEMENTATION-MASTER-INDEX.md, docs/developer-handbook/DEV-008-testing-standards.md

## Purpose

Define how the Business Test Case Library should be used during MVP implementation.

The test cases are not automated tests by themselves. They are business-level expected behavior scenarios that should guide feature tests, service tests and manual QA.

## Test Sources

```text
test-cases/TC-000-test-case-catalog.md
test-cases/TC-001 to TC-100
```

## Test Groups

```text
TC-001 to TC-020   Basic intake flows
TC-021 to TC-040   Guide-away and weak-case flows
TC-041 to TC-060   Human review and uncertainty flows
TC-061 to TC-080   Missing information and Smart Skip flows
TC-081 to TC-100   Edge, privacy, audit and fallback flows
```

## Implementation Rule

For every sprint and issue, developers should:

```text
1. Identify related business test cases.
2. Map each relevant case to one or more automated tests where possible.
3. Use fake data only.
4. Verify the expected behavior.
5. Record any mismatch as a follow-up issue or documentation update.
```

## Suggested Mapping

```text
Conversation feature tests       TC-001 to TC-020, TC-061 to TC-080
Guide-away behavior tests        TC-021 to TC-040
Human review trigger tests       TC-041 to TC-060
Audit and fallback tests         TC-081 to TC-100
End-to-end regression test       TC-099
```

## Minimum Automated Test Baseline

The MVP should include automated tests for:

- conversation start
- message persistence
- fact extraction stub behavior
- missing information tracking
- Smart Skip duplicate-question prevention
- screening output validation
- decision result persistence
- human review trigger
- CRM handover snapshot
- audit log creation
- AI fallback handling

## Manual QA Baseline

Manual QA should verify:

- tone of voice
- user-facing explanations
- no harsh rejection language
- no final legal conclusion from AI
- one question at a time
- safe handling of uncertain or sensitive context

## Fake Data Rule

All automated and manual QA examples must use fake data only.

Do not use:

```text
real names
real emails
real CPR numbers
real case details
real medical records
production identifiers
copied real user messages
```

## Definition of Done

```text
business test strategy exists
test groups are mapped to implementation areas
automated test baseline is documented
manual QA baseline is documented
fake-data rule is documented
```
