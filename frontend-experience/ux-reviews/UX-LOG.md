# UX Log

Version: 0.2  
Status: Active  
Purpose: Capture, prioritise and track UX observations across the complete ErstatningsHjælp journey.

---

## How to use this log

Each observation should have:

- A unique ID
- Module or journey stage
- Observation
- User impact
- Recommended action
- Priority
- Status

Priority levels:

- **P0** — Legal, consent, trust or critical flow issue
- **P1** — High-value improvement with clear user impact
- **P2** — Useful optimisation or polish
- **P3** — Experiment or future idea

Status values:

- Open
- In review
- Planned
- Implemented
- Rejected

---

# Active observations

| ID | Module | Observation | User impact | Recommended action | Priority | Status |
|---|---|---|---|---|---|---|
| UX-001 | Landing | The first story entered on the landing page must carry into the conversation. | Repeating the story creates immediate frustration and breaks the core promise. | Preserve the initial story and acknowledge it in the first response. | P0 | Implemented in prototype |
| UX-002 | Landing | The primary CTA must not imply a formal case or client relationship. | The user may believe they are committing before understanding the service. | Keep wording such as “Start min vurdering”. | P0 | Implemented in prototype |
| UX-003 | Landing | The user needs a clearer explanation of what happens after clicking the CTA. | Uncertainty may reduce conversion. | Add a short three-step explanation near the CTA. | P1 | Implemented in prototype |
| UX-004 | Landing | Trust information may appear too late in the page. | Users with health-related cases may hesitate before starting. | Place concise privacy, technology and human-review reassurance close to the first CTA. | P1 | Implemented in prototype |
| UX-005 | Conversation | The system must prove it understood before asking too many follow-up questions. | The flow may feel like an interrogation rather than help. | Use short understanding confirmations throughout the conversation. | P1 | Implemented in prototype |
| UX-006 | Conversation | One question at a time should remain a hard interaction rule. | Multiple questions increase cognitive load and incomplete answers. | Enforce a single primary question per turn. | P1 | Implemented in prototype |
| UX-007 | Conversation | Internal scores and technical reasoning must never be shown directly. | Scores may create false certainty or confusion. | Translate internal screening into plain-language explanations. | P0 | Implemented in prototype |
| UX-008 | Conversation | The living summary should clearly separate facts, user statements and system assumptions. | Users may accept an incorrect inference as fact. | Label uncertain or inferred information and make it easy to correct. | P0 | Open |
| UX-009 | Conversation | The typing state must be reassuring but not theatrical. | Long or technical waiting states can reduce trust. | Use short status text such as “Vi samler det, du har fortalt”. | P2 | Implemented in prototype |
| UX-010 | Screening | Current result wording was slightly too cautious in some variants. | The user may not feel there is enough reason to continue. | Use stronger but careful wording: “Der er flere forhold, som gør sagen værd at undersøge nærmere.” | P1 | Implemented in preferred version |
| UX-011 | Screening | The best final result should combine warmth, explanation and momentum. | A single early variant did not provide all three. | Use the preferred combined screening version. | P1 | Implemented |
| UX-012 | Screening | The result should explicitly show what supports continuing. | Users need to understand why the recommendation was made. | Show 2–4 plain-language factors based on known information. | P1 | Implemented |
| UX-013 | Screening | The result must also show what remains uncertain. | Without uncertainty, the result may sound like a promise. | Add a short “Det skal stadig afklares” section. | P0 | Implemented |
| UX-014 | Screening | A correction path is required before the user continues. | Incorrect facts may influence the screening outcome. | Add “Ret noget i min opsummering” as a visible secondary action. | P0 | Implemented |
| UX-015 | Screening | The CTA should create momentum without sounding commercial. | Sales-like wording could reduce trust. | Continue testing “Lad os få sagen i mål” against “Fortsæt og gør sagen klar”. | P2 | In review |
| UX-016 | Screening | Uncertain and declined routes were not fully prototyped. | The experience was incomplete for users who did not receive a positive route. | Build manual-review, more-information and respectful-decline variants. | P1 | Implemented in prototype |
| UX-017 | Case creation | The flow must continue as an assisted experience rather than a form. | A sudden form experience causes an emotional drop after screening. | Keep ErstatningsHjælp present and introduce each practical task conversationally. | P1 | Implemented in prototype |
| UX-018 | Case creation | Consent was initially placed too early. | Early legal content interrupts momentum before the user understands the remaining work. | Keep consent near the end, immediately before data and document processing. | P1 | Implemented |
| UX-019 | Case creation | Documents must not be uploaded, stored or analysed before consent. | This creates legal, privacy and trust risk. | Permit local file selection only; process after explicit consent. | P0 | Implemented in prototype |
| UX-020 | Case creation | Consent checkboxes must never be pre-selected. | Pre-selection undermines valid consent. | Keep all legal consent choices unchecked by default. | P0 | Implemented |
| UX-021 | Case creation | The distinction between file selection and upload must be understandable. | Users may believe their files have already been sent. | Show “Valgt lokalt – endnu ikke sendt eller analyseret”. | P0 | Implemented in prototype |
| UX-022 | Case creation | Document results must be presented as suggestions, not unquestionable facts. | Automated extraction may be wrong. | Use wording such as “Vi tror, dette er…” and allow corrections. | P0 | Implemented in prototype |
| UX-023 | Case creation | The flow should not require all documents before case creation. | Users without immediate document access may abandon. | Clearly allow “upload later” and create a personalised checklist. | P1 | Implemented in prototype |
| UX-024 | Case creation | The exact moment the user becomes a client is not fully resolved. | Ambiguity can create legal and expectation problems. | Resolve the business/legal rule and align all wording. | P0 | Open business decision |
| UX-025 | Case creation | The final screen should distinguish “case created” from “case accepted”. | The user may assume representation or success is guaranteed. | Use status wording such as “Klar til gennemgang”. | P0 | Implemented in prototype |
| UX-026 | Case creation | The right-side progress may still make the experience feel like eight separate form pages. | The user may perceive the flow as more work than it is. | Test simpler milestone groups instead of eight numbered steps. | P2 | Open |
| UX-027 | Case creation | Save-and-resume reassurance is currently conceptual rather than functional. | Users may worry about losing progress. | Add visible draft-save confirmation and a resume path in later prototypes. | P1 | Open |
| UX-028 | Cross-module | The transition from the selected Module 3 result to Module 4 was not linked as one live route. | The prototype felt like separate demonstrations. | Link the preferred Module 3 page directly to Module 4. | P1 | Implemented |
| UX-029 | Cross-module | Visual language differs slightly between modules. | Product continuity may feel weaker than intended. | Standardise header, authorship, typography, spacing and side panels. | P2 | In review |
| UX-030 | Cross-module | The product voice needed one documented standard. | Tone may drift across pages and future contributors. | Maintain the voice and authorship guide. | P1 | Implemented |
| UX-031 | Cross-module | The complete journey lacked one single test entry point. | End-to-end testing was unnecessarily difficult. | Maintain one end-to-end prototype index. | P1 | Implemented |
| UX-032 | Accessibility | Keyboard flow and focus states have not been reviewed. | Some users may be unable to complete the journey efficiently. | Perform keyboard-only review and add visible focus states. | P1 | Open |
| UX-033 | Accessibility | Mobile reading and action placement need real-device review. | Sticky elements or long cards may cause friction on small screens. | Test the full flow on common mobile widths and adjust accordingly. | P1 | Open |
| UX-034 | Analytics | The prototypes do not yet define event names for every key transition. | Later testing may lack comparable conversion data. | Align UI actions with the analytics events in the blueprints. | P2 | Open |
| UX-035 | User testing | The flow has not yet been tested against distinct user confidence levels. | A confident user may succeed while an uncertain user gets stuck. | Test three personas: confident, uncertain, and vulnerable/complex. | P1 | Planned |

---

# Immediate sprint priorities

## P0 — Resolve before real user testing

- UX-008 — Separate facts from assumptions
- UX-024 — Define client relationship start

## P1 — Highest-value experience improvements

- UX-027 — Add save-and-resume reassurance
- UX-032 — Keyboard review
- UX-033 — Mobile review
- UX-035 — Test three user personas

## P2 — Product polish and measurement

- UX-015 — Review CTA wording
- UX-026 — Test simpler progress milestones
- UX-029 — Standardise the remaining visual details
- UX-034 — Define analytics events

---

# Next review session

Recommended focus:

1. Separate confirmed facts from assumptions in the living summary
2. Add visible save-and-resume behaviour to case creation
3. Run a keyboard and mobile review
4. Prepare three structured user-test scenarios

---

# Change log

## Version 0.2

- Added alternative screening routes for missing information, manual review and respectful decline
- Marked the preferred screening, direct Module 3 to Module 4 transition, shared voice and end-to-end entry point as implemented
- Updated the user-facing language from AI-led to ErstatningsHjælp-led communication
- Reduced the immediate open priorities to the remaining critical and high-value work

## Version 0.1

- Created initial UX log
- Added observations across landing, conversation, screening, case creation, accessibility, analytics and end-to-end continuity
- Prioritised immediate P0 and P1 work
