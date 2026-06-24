# PR-012 - Internal Authentication

## Related issue

```text
#12 Sprint 2: Install internal authentication
```

---

# Goal

Add internal authentication for CRM and internal API routes.

Public screening endpoints must remain public, but CRM and lead management endpoints must require an authenticated internal user.

---

# Public endpoints

These should remain public:

```http
POST /api/v1/screening/start
POST /api/v1/screening/{lead}/message
```

---

# Protected endpoints and routes

These should require authentication:

```http
GET /api/v1/leads
GET /api/v1/leads/{lead}
PATCH /api/v1/leads/{lead}/status
GET /crm/*
```

---

# Suggested implementation options

Use a simple Laravel-compatible auth setup.

Possible options:

```text
Laravel Breeze
Laravel built-in auth scaffolding
simple session-based internal auth
```

The exact UI approach can be decided during implementation, but it must not change the API or CRM architecture.

---

# MVP roles

MVP should prepare for these roles:

```text
admin
caseworker
viewer
```

The first implementation may be simple, but should not block later role-based access control.

---

# Suggested files

```text
routes/web.php
routes/api.php
app/Http/Middleware
app/Models/User.php
database/migrations/*users*
resources/views/auth/* if Blade/Breeze is used
```

---

# Security requirements

- `.env` must not be committed
- Passwords must be hashed
- CRM routes must be protected
- Internal API routes must be protected
- Public screening routes must remain accessible
- Failed auth should not reveal sensitive system details
- Test users must use dummy data only

---

# Acceptance criteria

- Internal login exists or is scaffolded
- CRM routes require authentication
- Internal lead API endpoints require authentication
- Public screening endpoints remain public
- User model supports or can later support roles
- Basic auth tests exist or are planned in Sprint 3
- No real credentials are committed
- No secrets are committed

---

# References

```text
docs/05-crm-workflow.md
docs/08-api-specification.md
docs/09-security-gdpr.md
docs/20-data-dictionary-v2.md
docs/21-consistency-review.md
github/Epic-03-CRM.md
github/Epic-08-Security-Compliance-Hardening.md
```
