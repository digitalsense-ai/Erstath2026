# 31 - Acceptance and Routing Architecture

## Status

Architecture candidate for the MitID decision gate and post-screening routing model.

This document defines how ErstatningsHjælp should decide whether a user continues to MitID, is asked for more information, is routed to manual review, or is respectfully guided elsewhere.

This is one of the most important business and trust decisions in the platform.

---

## 1. Core principle

MitID should not be treated as the next default step.

MitID should only appear after the system has made a responsible routing decision.

The correct concept is therefore not:

```text
Screening → MitID
```

The correct concept is:

```text
Screening → Decision Gate → Routing → MitID / Documents / Review / Guide Elsewhere
```

---

## 2. Why this matters

MitID is a high-friction and high-trust step.

The user should only be asked to identify themselves when the system can honestly explain why it is necessary.

Example:

```text
Vi tror, at vi muligvis kan hjælpe dig videre. Derfor vil vi nu bede dig bekræfte din identitet med MitID, så vi kan fortsætte behandlingen af sagen.
```

This is much stronger than asking for MitID too early.

---

## 3. Decision Gate

The Decision Gate is the point after initial screening where the system decides the responsible next step.

It uses:

- Case Strength
- Information Quality
- Commercial Value
- AI Confidence
- Applicant relation
- Severity
- Documentation status
- Previous case status
- Business acceptance policy
- Trust and experience principles

The Decision Gate must never be a raw score threshold only.

---

## 4. Routing outcomes

The first version should support these routing outcomes:

```text
GO
GO_AFTER_DOCUMENTS
NEEDS_REVIEW
COLLECT_MORE_INFORMATION
GUIDE_ELSEWHERE
```

---

## 5. GO

Use when the case appears strong enough and sufficiently clear to proceed.

Typical condition:

```text
High Case Strength
High or acceptable Information Quality
Acceptable Commercial Value
No obvious blocking issue
```

User-facing direction:

```text
Vi tror, at vi muligvis kan hjælpe dig videre.

Næste skridt er, at du bekræfter din identitet med MitID, så vi kan fortsætte behandlingen af sagen.
```

Next step:

```text
MitID → Consent → Authorization → Document collection
```

---

## 6. GO_AFTER_DOCUMENTS

Use when the case appears promising, but documentation is needed before full progression.

Typical condition:

```text
High or medium-high Case Strength
Information Quality incomplete
Documentation missing or unclear
```

User-facing direction:

```text
Ud fra det du har fortalt, kan sagen være relevant at se nærmere på.

Før vi kan vurdere den mere sikkert, vil vi gerne vide, om du har journaler, afgørelser eller andre dokumenter.
```

Next step:

```text
Document readiness → optional MitID depending on document access need
```

Important:

Lack of documents must not automatically reject a promising case.

---

## 7. NEEDS_REVIEW

Use when the system is uncertain or the case is sensitive, complex, or potentially valuable but unclear.

Typical condition:

```text
Medium Case Strength
Low confidence
Unusual case type
Child case
Death case with uncertainty
Previous rejection or appeal
Complex relation or authorization issue
```

User-facing direction:

```text
Vi kan ikke vurdere sagen sikkert ud fra oplysningerne alene.

Derfor vil sagen kræve en nærmere gennemgang, før vi kan sige, om vi kan hjælpe videre.
```

Next step:

```text
Internal review queue
```

Important policy:

Certain cases should never be auto-rejected:

- death cases
- child cases
- severe permanent injury
- unclear but potentially serious cases
- prior decisions that may involve reopening

---

## 8. COLLECT_MORE_INFORMATION

Use when the case might be relevant, but the system lacks basic facts.

Typical missing facts:

- what happened
- when it happened
- where treatment took place
- what consequence occurred
- whether documentation exists

User-facing direction:

```text
Vi mangler nogle få oplysninger, før vi kan vurdere, hvad næste skridt bør være.
```

Next step:

```text
Guided questions / click choices / free-text clarification
```

---

## 9. GUIDE_ELSEWHERE

Use when the case appears unlikely to fit the service's acceptance criteria.

This must be handled respectfully.

Do not write:

```text
Du har ingen sag.
```

Write:

```text
Tak fordi du har delt dit forløb.

Ud fra de oplysninger vi har nu, ser det desværre ikke ud til, at sagen umiddelbart opfylder de kriterier, vi normalt arbejder med.

Hvis der er vigtige oplysninger eller dokumenter, som vi ikke har fået med, kan du stadig tilføje dem.
```

Then provide options:

```text
[Tilføj flere oplysninger]
[Jeg har dokumenter]
[Se andre muligheder]
```

Only after the user has had a chance to correct or add information should the system guide elsewhere.

---

## 10. Possible external guidance

Depending on the case, the system may suggest general alternatives such as:

- patient guidance services
- public complaint channels
- independent legal advice
- patient organizations
- municipality or social support resources

This guidance must be neutral and non-legal unless reviewed and approved.

The system should not claim that another channel will accept the case.

---

## 11. Acceptance Policy

The system needs an explicit Acceptance Policy.

This policy defines which cases ErstatningsHjælp wants to work with and under what conditions.

A simple score-only model is not enough.

### Example policy draft

```text
85-100: GO
70-84: GO_AFTER_DOCUMENTS
50-69: NEEDS_REVIEW
0-49: GUIDE_ELSEWHERE or COLLECT_MORE_INFORMATION depending on missing data
```

But these thresholds must be adjusted by policy rules.

---

## 12. Policy override rules

Examples:

```text
If death is involved → never auto-reject.
If child is involved → route to manual review unless clearly simple.
If severe permanent injury is involved → never auto-reject on low documentation alone.
If previous rejection exists → consider reopening flow before rejection.
If limitation period is unclear → ask more before rejection.
If user relation is unclear → clarify before MitID.
```

These rules are essential to avoid rejecting potentially important cases too early.

---

## 13. Responsible Acceptance Rate

The business goal should not be maximum intake.

The better metric is:

```text
Responsible Acceptance Rate
```

This means:

- accept the right cases
- avoid accepting clearly unsuitable cases
- avoid rejecting serious cases too early
- treat rejected or redirected users respectfully
- leave every user with more clarity than before

This aligns with the project North Star:

```text
Every user should leave ErstatningsHjælp with more clarity and trust than when they began.
```

---

## 14. MitID gate wording

MitID should be introduced only when there is a clear reason.

Recommended wording:

```text
Vi tror, at vi muligvis kan hjælpe dig videre.

For at kunne fortsætte skal vi nu bekræfte din identitet med MitID. Det gør vi for at sikre, at vi behandler oplysningerne korrekt og kan hjælpe dig videre på en tryg måde.
```

Avoid:

```text
Log ind med MitID for at fortsætte.
```

because it does not explain why.

---

## 15. CRM impact

CRM should show:

- routing outcome
- reason for routing
- score snapshot
- confidence
- policy rules triggered
- missing information
- whether user was sent to MitID, documents, review, or external guidance

Example:

```text
Routing: NEEDS_REVIEW
Reason:
- Death involved
- Date unclear
- Possible diagnosis delay
- Documentation unknown
```

This prevents caseworkers from having to reconstruct why a lead was routed.

---

## 16. Audit impact

Every routing decision should be auditable.

Minimum audit data:

```text
lead_id
routing_outcome
scores_snapshot
policy_rules_triggered
ai_confidence
missing_information
user_confirmed_facts
decision_timestamp
```

This is important for trust, quality control, and future model improvement.

---

## 17. Future learning

When enough historical cases exist, routing can be improved using:

- human review outcomes
- accepted/rejected case results
- win rate
- compensation outcome
- similar case matching
- false positive and false negative analysis

However, early MVP routing should remain rule-based and explainable.

---

## 18. Testing requirements

Future tests should cover:

- high-score case routes to GO
- promising but undocumented case routes to GO_AFTER_DOCUMENTS
- uncertain serious case routes to NEEDS_REVIEW
- low-score case receives respectful GUIDE_ELSEWHERE flow
- death cases are not auto-rejected
- child cases trigger review rules
- unclear limitation period triggers more questions
- MitID is not shown before a valid routing decision
- CRM stores routing reasons
- audit log records routing data

---

## 19. Product conclusion

The MitID step is not just an authentication step.

It is a trust and business decision point.

Therefore, ErstatningsHjælp should implement an Acceptance & Routing Architecture before treating MitID as a default continuation step.

The key model is:

```text
Understand
↓
Score
↓
Apply acceptance policy
↓
Route responsibly
↓
Explain next step
```

This protects both the business and the user experience.
