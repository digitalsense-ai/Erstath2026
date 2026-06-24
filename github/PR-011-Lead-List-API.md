# PR-011 - Lead List API

## Related issue

```text
#11 Sprint 2: Implement GET /api/v1/leads
```

---

# Goal

Implement the internal API endpoint for listing leads in the CRM.

The endpoint should support filtering, sorting and pagination so the CRM Lead Board can remain fast and useful as lead volume grows.

This endpoint is internal and must require authentication.

---

# Endpoint

```http
GET /api/v1/leads
```

---

# Must support

```text
pagination
filter by status
filter by case category
filter by recommended action
sort by created_at
sort by overall_score
basic search if practical
```

---

# Must return

```text
lead id or uuid
status
case_category
overall_score
case_strength
information_quality
commercial_value
summary
recommended_action
created_at
updated_at
```

---

# Must not return by default

```text
full conversation history
raw AI output
large debug payloads
future document content
unnecessary internal metadata
```

---

# Suggested implementation

Create or update:

```text
routes/api.php
app/Http/Controllers/Api/V1/LeadController.php
app/Http/Resources/LeadListResource.php
app/Http/Requests/LeadIndexRequest.php
```

The controller should use query filters rather than loading all leads into memory.

---

# Suggested query parameters

```text
?page=1
?status=QUALIFIED
?case_category=A
?recommended_action=manual_review
?sort=created_at
?direction=desc
```

---

# Security requirements

- Endpoint must require authentication
- Only internal users should access this endpoint
- Response should be list-safe and not include detailed conversation data
- Use API resources instead of returning full model dumps

---

# Acceptance criteria

- `GET /api/v1/leads` exists
- Endpoint requires authenticated internal user
- Endpoint returns paginated lead list
- Endpoint supports status filtering
- Endpoint supports case category filtering
- Endpoint supports recommended action filtering
- Endpoint supports safe sorting
- Endpoint does not expose raw AI/debug payloads
- Feature test exists or is planned in Sprint 3

---

# References

```text
docs/05-crm-workflow.md
docs/08-api-specification.md
docs/20-data-dictionary-v2.md
docs/21-consistency-review.md
github/Epic-03-CRM.md
```
