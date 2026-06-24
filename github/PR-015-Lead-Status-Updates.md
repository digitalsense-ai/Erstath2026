# PR-015 - Lead Status Updates

## Related issue

```text
#15 Sprint 2: Implement Lead Status Updates
```

---

# Goal

Implement controlled internal lead status updates.

This allows an authenticated internal user to move a lead through the MVP workflow without exposing unsupported future workflows.

---

# Endpoint

```http
PATCH /api/v1/leads/{lead}/status
```

---

# MVP-active statuses

```text
NEW
SCREENING
AWAITING_INFO
QUALIFIED
REVIEW
REJECTED
CLOSED
```

---

# Future-reserved statuses

These may exist in documentation or enums, but should not be active workflow choices in MVP 0.1 unless the related feature exists:

```text
MITID_PENDING
POA_PENDING
DOCUMENTS_PENDING
ACTIVE_CASE
```

---

# Suggested allowed transitions

```text
NEW -> SCREENING
SCREENING -> AWAITING_INFO
SCREENING -> QUALIFIED
SCREENING -> REJECTED
AWAITING_INFO -> SCREENING
AWAITING_INFO -> QUALIFIED
AWAITING_INFO -> REJECTED
QUALIFIED -> REVIEW
QUALIFIED -> CLOSED
REVIEW -> QUALIFIED
REVIEW -> REJECTED
REVIEW -> CLOSED
REJECTED -> CLOSED
```

The final transition rules can be simplified during implementation if needed.

---

# Request body

```json
{
  "status": "REVIEW"
}
```

Optional later:

```json
{
  "status": "REVIEW",
  "note": "Short internal note"
}
```

---

# Suggested implementation

Create or update:

```text
routes/api.php
app/Http/Controllers/Api/V1/LeadStatusController.php
app/Http/Requests/UpdateLeadStatusRequest.php
app/Services/Leads/LeadStatusService.php
```

The service should contain the transition rules rather than scattering status logic across controllers.

---

# Security requirements

- Endpoint must require authentication
- Public users must not update lead status
- Status value must be validated against canonical MVP values
- Future-reserved statuses must not be selectable unless implemented
- Invalid transitions should return a safe validation error
- Status update should be audit-log ready

---

# Acceptance criteria

- `PATCH /api/v1/leads/{lead}/status` exists
- Endpoint requires authenticated internal user
- Request validates allowed status values
- Unsupported future-reserved statuses are not accepted as active MVP transitions
- Invalid transitions are rejected safely
- Successful status update persists to the lead
- Response returns updated status and basic lead reference
- Audit hook or audit-ready structure is considered
- Feature test exists or is planned in Sprint 3

---

# References

```text
docs/05-crm-workflow.md
docs/08-api-specification.md
docs/18-architecture-governance.md
docs/20-data-dictionary-v2.md
docs/21-consistency-review.md
github/Epic-03-CRM.md
github/PR-010-Lead-Detail-API.md
github/PR-012-Internal-Authentication.md
github/PR-014-Lead-Detail-Page.md
```
