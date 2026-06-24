# PR-010 - Lead Detail API

## Related issue

```text
#10 Sprint 2: Implement GET /api/v1/leads/{lead}
```

---

# Goal

Implement the internal API endpoint for retrieving one lead with enough structured information to power the CRM lead detail page.

This endpoint is internal and must require authentication.

---

# Endpoint

```http
GET /api/v1/leads/{lead}
```

---

# Must return

```text
lead overview
contact fields if available
status
case category
recommended action
scores
assessment summary
conversation messages
extracted entities
missing information
created_at
updated_at
```

---

# Must not return by default

```text
raw AI debug payloads
secret configuration
unnecessary internal metadata
future document content
```

---

# Suggested implementation

Create or update:

```text
routes/api.php
app/Http/Controllers/Api/V1/LeadController.php
app/Http/Resources/LeadDetailResource.php
```

The controller should load only the required relations.

Suggested relations:

```text
conversations
scores
entities
assessment
missingInformation
```

---

# Security requirements

- Endpoint must require authentication
- Public users must not access lead detail data
- Response must not expose raw debug payloads by default
- Use safe resources/transformers rather than returning full model dumps

---

# Acceptance criteria

- `GET /api/v1/leads/{lead}` exists
- Endpoint requires authenticated internal user
- Endpoint returns structured lead detail data
- Endpoint includes scores and assessment
- Endpoint includes conversation history
- Endpoint includes missing information
- Endpoint does not expose raw AI/debug payloads by default
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
