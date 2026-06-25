# DOC-023 - Tone of Voice Guide

Version: 1.0 Draft
Status: Draft
Owner: Product / Experience Architecture
Domain: Experience
Related: DOC-020 Experience Architecture, DOC-021 Digital First Conversation Flow, DOC-022 Conversation Patterns, ADR-000 Enterprise Architecture Principles

## Purpose

This document defines the tone of voice for Erstatningshjaelp.

The purpose is to ensure that all user-facing communication is calm, respectful, clear, honest and responsible.

The tone must support trust and clarity, especially because users may describe sensitive, uncertain or emotionally difficult situations.

## Tone Principles

### Calm

The platform should use calm and steady language.

Avoid dramatic, alarming or overly emotional wording.

### Clear

The platform should explain things in simple language.

Avoid technical terms, internal labels and unnecessary complexity.

### Respectful

The platform should acknowledge the user's situation without exaggerating, judging or minimizing.

### Honest About Uncertainty

The platform should be open about uncertainty.

Use language such as:

- based on what you have described
- it may be relevant to look further at this
- we need a little more information before we can guide you further

Avoid language that sounds final when the system is not certain.

### No False Promises

The platform must not promise a specific outcome.

Avoid statements that imply guaranteed acceptance, success or compensation.

### Human, Not Robotic

The platform should feel like a helpful assistant, not a form engine.

Use natural and direct language.

### Structured, Not Cold

The system may collect structured information, but the wording should not feel like raw data collection.

## Preferred Language Style

Use:

- short sentences
- one idea at a time
- everyday language
- gentle transitions
- clear next steps
- explanations before sensitive requests

Avoid:

- legal conclusions
- raw scores
- internal routing terms
- harsh rejection wording
- overly long paragraphs
- pressure-based language
- blame-oriented language

## User-Facing Words to Avoid

Avoid these words or phrases in the first conversation flow:

- rejected
- low score
- not qualified
- no case
- failed screening
- weak case
- invalid case
- case closed

Use softer and more precise alternatives.

## Preferred Alternatives

Instead of "rejected", use:

- based on the current information, it does not look like we can continue right now

Instead of "low score", use:

- we need more information before we can assess the next step

Instead of "not qualified", use:

- the information does not currently match the situations we normally help with

Instead of "no case", use:

- based on what you have shared, it may be difficult for us to help further right now

## Sensitive Situations

When users describe serious harm, death, children, cancer, long illness or strong uncertainty, the system should slow down and acknowledge the situation carefully.

The system should not use blunt labels when softer language is appropriate.

Use language such as:

- I am sorry you have had to go through this
- thank you for sharing this
- we understand this may be difficult to describe
- I will ask only what is needed right now

Avoid making assumptions about emotions.

Do not say the system understands exactly how the user feels.

## Empathy Reflection Tone

Empathy reflection should be:

- brief
- specific
- non-judgmental
- confirmable
- easy to correct

Example structure:

1. Thank the user for sharing
2. Reflect the main situation
3. Acknowledge if the situation appears serious or difficult
4. Ask the user to confirm or correct the understanding

## Asking Questions

Questions should be:

- short
- focused
- one at a time
- explained when sensitive
- possible to answer with uncertainty

Good question style:

- Do you know approximately when this happened?
- Is this about you or someone else?
- Do you have any documents related to this?

Avoid:

- long multi-part questions
- legal wording
- questions that blame the user
- repeated questions already answered

## Explaining Why

When asking for sensitive information, use a short reason.

Example:

"We ask this because the timing may affect which next step is relevant."

Example:

"We ask this because we need to know whether you are describing your own situation or helping someone else."

## Identity and Consent Tone

Identity and consent should only be introduced when relevant.

The tone should explain why the step is needed and how it helps protect the user and the process.

The system should not present identity verification as a generic next step before there is a clear reason.

## Guide-Away Tone

If the platform cannot continue, the tone should remain respectful.

A guide-away message should:

- thank the user
- explain the current limitation
- avoid final legal conclusions
- allow additional information if relevant
- provide a clear next step where possible

## Internal Versus External Language

Internal language may include:

- routing recommendation
- confidence
- score
- missing information
- review required

User-facing language should translate this into clear and respectful explanations.

Do not expose raw internal labels directly to the user.

## Tone Quality Checklist

Before user-facing copy is approved, check:

- Is it calm?
- Is it clear?
- Is it respectful?
- Does it avoid false promises?
- Does it avoid raw internal labels?
- Does it explain sensitive requests?
- Does it allow uncertainty?
- Does it give a clear next step?

## Governance

All user-facing copy in the first conversation, guided screening, routing, identity, consent, document request and guide-away flows should follow this guide.

Major tone changes should be reviewed against DOC-020 Experience Architecture and ADR-000 Enterprise Architecture Principles.
