# QA-001 - Business Test Case Implementation Guide

Version: 1.0 Draft
Status: Active
Owner: Product / QA / Engineering
Domain: Quality Assurance
Related: test-cases/TC-000-test-case-catalog.md, test-cases/TC-100-business-test-library-complete.md, docs/IMPLEMENTATION-MASTER-INDEX.md

## Purpose

Explain how the Business Test Case Library should be used during MVP implementation.

The business test cases define expected product behavior. They are not automated tests by themselves, but they should guide manual QA, feature tests and regression tests.

## Test Case Library

The completed library covers:

```text
TC-001 to TC-020   Basic intake flows
TC-021 to TC-040   Guide-away and weak-case flows
TC-041 to TC-060   Human review and uncertainty flows
TC-061 to TC-080   Missing information and Smart Skip flows
TC-081 to TC-100   Edge, privacy, audit and fallback flows
```

## Implementation Rule

For every feature implemented, engineering should identify which business test cases apply.

If a feature cannot be mapped to at least one business test case, confirm whether:

```text
the feature is outside MVP scope
or
a new test case is needed
or
the feature should be postponed
```

## Sprint Usage

For each sprint:

```text
1. Read the sprint issues.
2. Identify relevant business test cases.
3. Convert the most important cases into feature tests where possible.
4. Use remaining cases for manual QA.
5. Record gaps as follow-up issues.
6. Do not use real personal data in tests.
```

## Mapping Guidance

### Conversation Features

Use cases from:

```text
TC-001 to TC-020
TC-061 to TC-080
TC-084 to TC-087
```

### Guide-away Features

Use cases from:

```text
TC-021 to TC-040
```

### Human Review Features

Use cases from:

```text
TC-041 to TC-060
```

### Audit and Fallback Features

Use cases from:

```text
TC-081 to TC-100
```

## Automated Test Priority

The first automated tests should cover:

```text
conversation starts
message is stored
facts are extracted as unconfirmed
missing information is tracked
Smart Skip avoids duplicate questions
invalid AI output is rejected
human review can be triggered
handover context can be generated
important actions create audit events
```

## Manual QA Priority

Manual QA should focus on:

```text
tone of voice
respectful guide-away
user boundary handling
one-question-at-a-time behavior
complex uncertainty flows
fallback user experience
```

## Fake Data Rule

All tests must use fictional examples only.

Do not use:

```text
real names
real emails
real case stories
real provider records
real personal identifiers
production data
```

## Definition of Done

```text
QA implementation guide exists
business test groups are mapped to implementation areas
automated test priorities are listed
manual QA priorities are listed
fake-data rule is documented
```
