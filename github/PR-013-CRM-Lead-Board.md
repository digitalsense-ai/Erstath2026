# PR-013 - CRM Lead Board

## Related issue

```text
#13 Sprint 2: Create CRM Lead Board
```

---

# Goal

Create the first internal CRM lead board.

The board should allow an authenticated internal user to view and prioritize leads based on status, category, scores and recommended action.

---

# Route

```http
GET /crm/leads
```

---

# Must show

```text
lead id or uuid
status
case category
overall score
case strength score
information quality score
commercial value score
short summary
recommended action
created_at
updated_at
```

---

# Must support

```text
pagination
status filter
case category filter
recommended action filter
sorting by newest
sorting by score if practical
link to lead detail page
```

---

# Suggested implementation

Create or update:

```text
routes/web.php
app/Http/Controllers/Crm/LeadBoardController.php
resources/views/crm/leads/index.blade.php
```

If Livewire is selected, equivalent Livewire components may be used.

The UI approach should remain simple.

---

# Board priorities

The lead board should help internal users answer:

```text
Which leads are strongest?
Which leads need more information?
Which leads should be manually reviewed?
Which leads are rejected or closed?
```

---

# Security requirements

- Route must require authentication
- Public users must not access CRM pages
- Do not expose raw AI/debug payloads on the board
- Use only list-safe fields
- Do not show future actions as clickable options unless implemented

---

# Acceptance criteria

- `/crm/leads` route exists
- Route requires authenticated internal user
- Page lists leads in a readable table or board
- Page shows status, category, scores and recommended action
- Page supports basic filtering or links to filtered states
- Page links to lead detail page
- Page does not expose raw AI/debug payloads
- Uses dummy/test data only during development

---

# References

```text
docs/05-crm-workflow.md
docs/08-api-specification.md
docs/20-data-dictionary-v2.md
docs/21-consistency-review.md
github/Epic-03-CRM.md
github/PR-011-Lead-List-API.md
github/PR-012-Internal-Authentication.md
```
