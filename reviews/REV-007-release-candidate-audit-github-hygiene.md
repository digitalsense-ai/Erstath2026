# REV-007 - Release Candidate Audit GitHub Hygiene

Version: 1.0
Status: Active Draft
Owner: Product / Engineering / Delivery
Scope: GitHub repository workflow and governance hygiene

## Purpose

This document reviews GitHub hygiene for the ErstatningsHjaelp repository.

The goal is to identify repository-level files, rules and workflows that should exist before multi-developer implementation work begins.

## Repository Snapshot

Observed repository metadata:

```text
repository: digitalsense-ai/Erstath2026
default branch: main
visibility: public
permissions available: admin/maintain/push/pull/triage
approx repository size: 1016 KB
```

## Hygiene Principle

Because the repository is public, the project must be stricter about:

```text
fake data only
no real patient information
no secrets
clear contribution rules
review discipline
safe examples
traceable implementation
```

## Current Strengths

The repository already has strong documentation entry points:

```text
README.md
docs/IMPLEMENTATION-MASTER-INDEX.md
handoff/HANDOFF-000-index.md
```

It also has strong implementation guidance:

```text
AI Case Brain
Rulebook
UX Pack
Domain Knowledge Pack
API Readiness Pack
MVP Start Pack
Developer Handbook
Business Test Case Library
Backlog and Sprints
```

## GitHub Hygiene Checklist

## README

Status: strong

Notes:

README links to:

```text
Implementation Master Index
Handoff Pack
AI Case Brain
Rulebook
UX Pack
first implementation flow
business test cases
```

Recommendation:

Keep README short and directional. Do not turn it into a full specification.

## CONTRIBUTING.md

Status: missing or not yet verified

Recommended content:

```text
how to work from issues
branch naming
commit message style
fake-data-only rule
no secrets rule
documentation update rule
test requirement
PR checklist
```

Severity: high

Why:

A public repo with patient-compensation examples needs explicit contribution rules.

## CODEOWNERS

Status: missing or not yet verified

Recommended owners:

```text
/docs/ Product or project owner
/docs/ai-case-brain/ AI owner
/docs/rulebook/ AI/domain owner
/docs/ux/ UX/product owner
/docs/domain/ Domain/product owner
/backlog/ Product owner
/sprints/ Product/engineering owner
/handoff/ Delivery owner
```

Severity: medium

Why:

CODEOWNERS helps protect critical specification documents from unreviewed changes.

## LICENSE

Status: missing or not yet verified

Severity: medium

Why:

Repository is public. License status should be explicit.

Recommendation:

Decide whether the repo should be open-source licensed or remain public without reuse permission. Add LICENSE or clarify proprietary status.

## SECURITY.md

Status: missing or not yet verified

Severity: high

Recommended content:

```text
no real patient data
no secrets
how to report security issues
sensitive data handling
public repo warning
responsible disclosure contact later
```

## Pull Request Template

Status: missing or not yet verified

Recommended checklist:

```text
linked issue
scope is limited
tests added or updated
no real patient data
no secrets
contracts updated if API changed
UX docs checked if frontend changed
AI/Rulebook checked if AI behavior changed
```

Severity: high before multi-developer work

## Issue Templates

Status: missing or not yet verified

Recommended templates:

```text
feature.md
bug.md
documentation.md
audit-finding.md
implementation-task.md
```

Severity: medium

## Labels

Status: not verified

Recommended label taxonomy:

```text
type:feature
type:bug
type:docs
type:audit
type:test
type:security
area:backend
area:frontend
area:ai
area:ux
area:domain
area:crm
area:database
area:devops
priority:critical
priority:high
priority:medium
priority:low
status:blocked
status:ready
status:needs-review
```

Severity: medium

## Milestones

Status: not verified

Recommended milestones:

```text
Sprint 000 - Foundation
Sprint 001 - Data Model
Sprint 002 - Conversation + Screening
Sprint 003 - Decision Engine
Sprint 004 - CRM + Human Review
Sprint 005 - Security + Testing
```

Severity: medium

## Branch Protection

Status: not verified

Recommended protection for main:

```text
require pull request before merge
require review for protected paths later
require status checks when CI exists
prevent force push
require linear history optional
```

Severity: high before multi-developer work

## GitHub Actions

Status: likely not ready until Laravel baseline exists

Recommended later workflows:

```text
php tests
pint or code style
static analysis later
frontend build later
markdown link check later
secret scanning expectation
```

Severity: low now, high after Laravel baseline

## Public Repository Risk

Severity: high

The repository is public, so examples and test data must remain fictional.

Required guardrails:

```text
CONTRIBUTING fake-data rule
SECURITY data warning
PR template data checklist
business test examples fictional only
no copied real journal text
no screenshots with real patient data
```

## Recommended Hygiene Files To Add

Add or verify:

```text
CONTRIBUTING.md
SECURITY.md
.github/pull_request_template.md
.github/ISSUE_TEMPLATE/feature.md
.github/ISSUE_TEMPLATE/bug.md
.github/ISSUE_TEMPLATE/documentation.md
.github/ISSUE_TEMPLATE/audit-finding.md
.github/CODEOWNERS
```

License decision:

```text
LICENSE or proprietary notice
```

## Hygiene Findings

## Finding G1 - Public Repo Requires Explicit Safety Files

Severity: high

Add SECURITY.md and CONTRIBUTING.md before broad collaboration.

## Finding G2 - PR Template Should Enforce No Real Data

Severity: high

Every PR should require confirmation that no real patient data or secrets are included.

## Finding G3 - CODEOWNERS Should Protect Spec Packs

Severity: medium

Critical packs should require review from relevant owner roles.

## Finding G4 - Branch Protection Should Be Enabled Before Multiple Developers

Severity: high

Main branch should not be freely changed once coding begins.

## Finding G5 - CI Can Wait Until Laravel Baseline Exists

Severity: low now

GitHub Actions should be added once the application structure exists.

## GitHub Hygiene Score

```text
README quality                         95
Entry point quality                    95
Contribution rules                     60
Security policy                        55
PR workflow                            60
Issue workflow                         65
Branch protection readiness            65
Label/milestone taxonomy               70
Public repo data safety                75
Overall GitHub hygiene                 72
```

## Recommended Next Actions

Before multi-developer implementation:

```text
1. Add CONTRIBUTING.md.
2. Add SECURITY.md.
3. Add PR template with no-real-data checklist.
4. Add issue templates.
5. Add CODEOWNERS or owner-role placeholder.
6. Decide license/proprietary notice.
7. Configure labels and milestones in GitHub UI.
8. Enable branch protection once Laravel baseline begins.
```

## Conclusion

GitHub documentation entry points are strong, but workflow hygiene should be improved before implementation scales beyond a very small controlled group.

This is the main current weakness in the repository.

## References

- REV-004-release-candidate-audit-plan.md
- REV-005-release-candidate-audit-initial-findings.md
- README.md
- docs/IMPLEMENTATION-MASTER-INDEX.md
