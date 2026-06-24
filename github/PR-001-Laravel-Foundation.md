# PR-001 - Laravel Foundation

## Related issue

```text
#1 Sprint 0.2: Install Laravel 12 project foundation
```

## Purpose

This pull request installs the base Laravel project and verifies that the application can run locally from a clean clone.

This is the first implementation pull request for MVP 0.1.

---

# Scope

## This PR should include

```text
Laravel 12 application installed in repository root
Composer dependencies defined
Example environment file present
Git ignore rules verified
Basic local run instructions
Application key generation works locally
Application can start locally
```

## This PR should not include

```text
Database migrations
Eloquent models
AI services
CRM routes
Authentication
Deployment setup
MitID
Document upload
Production server changes
Real secrets
Real personal data
```

Keep this PR small and focused.

---

# Expected developer workflow

The developer should install Laravel carefully so existing planning documents are not overwritten.

Expected local verification:

```text
Install PHP dependencies
Create local environment file from the example file
Generate application key
Start Laravel development server
Open the app in browser
```

---

# Files likely changed

Expected Laravel files may include:

```text
app/
bootstrap/
config/
database/
public/
resources/
routes/
storage/
tests/
artisan
composer.json
composer.lock
example environment file
git ignore file
phpunit.xml
vite config
package.json
```

Existing documentation files must remain intact.

---

# Environment example requirements

The environment example file should contain placeholder configuration only.

It should include placeholders for:

```text
Application name
Application environment
Application URL
Database connection
Database host
Database name
Database username
AI provider model settings
AI budget or logging settings
```

Never commit a real local environment file.

Never commit real API keys.

---

# Acceptance criteria

This PR is complete when:

- [ ] Laravel project exists in repository root
- [ ] Dependency installation works
- [ ] Example environment file exists
- [ ] Real local environment file is ignored by Git
- [ ] Application key generation works locally
- [ ] Laravel development server starts locally
- [ ] Existing docs and GitHub planning files are preserved
- [ ] No secrets are committed
- [ ] No real personal data is committed

---

# Manual review checklist

Reviewer should verify:

- Laravel was installed cleanly
- Existing docs were not deleted
- Real local environment file is not included
- Example environment file contains placeholders only
- App can boot locally
- No unnecessary features were added

---

# Suggested PR title

```text
PR-001: Install Laravel foundation
```

---

# Suggested PR description

```markdown
## Summary

Installs the Laravel foundation for ErstatningsHjælp MVP 0.1.

## Related issue

Closes #1

## Includes

- Laravel base application
- Composer setup
- Example environment file
- Verified local boot flow

## Not included

- Database migrations
- AI services
- CRM
- Authentication

## Test

The application has been installed, configured with a local environment file, assigned an application key, and started locally.
```

---

# Next PR

After this PR is merged, continue with:

```text
PR-002 - Core Database Migrations
Related issue: #2
```
