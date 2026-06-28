# QA-001 - Business Test Implementation Guide

Version: 1.0 Draft
Status: Active
Owner: Product / QA / Engineering
Domain: QA / Business Test Cases
Related: test-cases/TC-000-test-case-catalog.md, test-cases/TC-100-business-test-library-complete.md, docs/IMPLEMENTATION-MASTER-INDEX.md, docs/developer-handbook/DEV-008-testing-standards.md

## Purpose

Explain how the Business Test Case Library should be used during MVP implementation.

The test cases are business-level scenarios. They should guide automated feature tests, manual QA and sprint acceptance.

## Completed Test Library

```text
TC-000 to TC-100
```

## Test Groups

```text
TC-001 to TC-020   Basic intake flows
TC-021 to TC-040   Guide-away and weak-case flows
TC-041 to TC-060   Human review and uncertainty flows
TC-061 to TC-080   Missing information and Smart Skip flows
TC-081 to TC-100   Edge, privacy, audit and fallback flows
```

## How Engineering Should Use the Library

For each sprint:

```text
1. Identify relevant issue files.
2. Identify matching business test cases.
3. Convert selected cases into feature or service tests.
4. Use fake data only.
5. Verify expected facts, missing information, next step and audit behavior.
6. Record gaps as follow-up issues.
```

## Suggested Test Mapping

```text
Conversation Engine          TC-001 to TC-020, TC-061 to TC-080
Guide-away behavior          TC-021 to TC-040
Human Review                 TC-041 to TC-060
Smart Skip                   TC-061 to TC-080
Privacy and audit            TC-081 to TC-100
Fallback handling            TC-084 to TC-090, TC-096 to TC-098
End-to-end regression        TC-099
```

## Minimum MVP QA Gate

Before MVP release, the team should confirm:

```text
critical intake cases pass
weak-case guide-away cases pass
human review trigger cases pass
missing information cases pass
Smart Skip cases pass
privacy request cases pass
audit event cases pass
fallback cases pass
end-to-end regression case passes
```

## Manual QA Format

For each manual QA run, record:

```text
test case id
scenario result
observed behavior
expected behavior
pass/fail
notes
follow-up issue if needed
```

## Automation Guidance

Not every business test case must become a separate automated test immediately.

Prioritize automation for:

```text
state transitions
fact extraction boundaries
missing information tracking
decision next step behavior
human review triggers
audit events
fallback behavior
end-to-end regression
```

## Definition of Done

```text
QA guide exists
business test groups are mapped to implementation areas
MVP QA gate is documented
manual QA format is documented
automation priorities are documented
```
