# PR-014 - Lead Detail Page

## Related issue

```text
#14 Sprint 2: Create Lead Detail Page
```

---

# Goal

Create the internal CRM lead detail page.

The page should give an authenticated internal user a clear, structured view of one lead without requiring them to read raw AI output.

---

# Route

```http
GET /crm/leads/{lead}
```

---

# Must show

```text
lead overview
status
case category
recommended action
scores
assessment summary
conversation history
extracted entities
missing information
created_at
updated_at
```

Optional if available:

```text
contact fields
internal notes later
safe audit events later
```

---

# Must not show by default

```text
raw AI debug payloads
secret configuration
large internal metadata
future document content
```

---

# Suggested implementation

Create or update:

```text
routes/web.php
app/Http/Controllers/Crm/LeadDetailController.php
resources/views/crm/leads/show.blade.php
```

If Livewire is selected, equivalent Livewire components may be used.

The UI should stay simple and readable.

---

# Suggested page sections

```text
Header: Lead id, status, category, score
Summary: AI-generated structured summary
Scores: case strength, information quality, commercial value, overall
Recommended action: canonical MVP action value with human-friendly label
Conversation: user and assistant messages
Missing information: what still needs to be clarified
Entities: structured facts extracted from screening
Actions: link back to lead board, status update controls later
```

---

# Security requirements

- Route must require authentication
- Public users must not access lead details
- Do not expose raw AI/debug payloads by default
- Do not show future actions as active controls unless implemented
- Use safe display formatting for user-provided text

---

# Acceptance criteria

- `/crm/leads/{lead}` route exists
- Route requires authenticated internal user
- Page shows lead overview
- Page shows scores and case category
- Page shows assessment summary
- Page shows conversation history
- Page shows missing information
- Page links back to CRM lead board
- Page does not expose raw AI/debug payloads by default
- Uses dummy/test data only during development

---

# References

```text
docs/05-crm-workflow.md
docs/08-api-specification.md
docs/20-data-dictionary-v2.md
docs/21-consistency-review.md
github/Epic-03-CRM.md
github/PR-010-Lead-Detail-API.md
github/PR-012-Internal-Authentication.md
github/PR-013-CRM-Lead-Board.md
```
