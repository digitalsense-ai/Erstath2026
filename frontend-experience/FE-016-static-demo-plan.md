# FE-016 - Static Demo Plan

Version: 1.2
Status: Active Draft

## Purpose

Create a browser-visible prototype that can run without Laravel.

## Goal

A viewer should be able to open one URL and try the first experience on mobile or desktop.

## Demo URL

Expected GitHub Pages URL:

```text
https://digitalsense-ai.github.io/Erstath2026/
```

If the page is not visible yet, run the workflow manually once:

```text
Actions -> Frontend Demo Pages -> Run workflow
```

## Included states

- landing
- typing welcome
- first text input
- thinking state
- one follow-up question
- result card

## Current implementation

A GitHub Pages workflow has been added:

```text
.github/workflows/pages-frontend-demo.yml
```

The workflow builds a static site by copying:

```text
resources/views/frontend-experience/intake.blade.php
public/frontend-experience/app.css
public/frontend-experience/app.js
public/frontend-experience/fakeConversationData.js
```

into a temporary `_site` folder.

It also replaces Laravel `asset(...)` references with relative static paths.

## Automatic publishing

The workflow now runs on:

```text
manual workflow dispatch
push to main when frontend demo files change
```

Frontend-related paths:

```text
resources/views/frontend-experience/**
public/frontend-experience/**
frontend-experience/**
.github/workflows/pages-frontend-demo.yml
```

## Expected demo behavior

When GitHub Pages is enabled for GitHub Actions, the workflow can publish the prototype as a static site.

The demo should show:

- first landing screen
- animated AI welcome
- rotating examples
- free text input
- fake AI response
- one smart question
- result card
- mobile and desktop responsive layout

## Test checklist

Open the demo URL and test:

- page loads on desktop
- page loads on mobile
- AI welcome text appears
- example text appears in the input area
- button is disabled before typing
- button becomes active after a short message
- submitting shows AI thinking
- one follow-up question appears
- answer can be submitted
- result card appears
- scenario switcher works

## Manual step

GitHub Pages may need to be enabled in repository settings:

```text
Settings -> Pages -> Build and deployment -> Source: GitHub Actions
```

After that, run:

```text
Actions -> Frontend Demo Pages -> Run workflow
```

## Build note

Use the existing frontend assets from `public/frontend-experience` and publish them as static files.

## Safety rule

The static demo must use fictional demo content only.
