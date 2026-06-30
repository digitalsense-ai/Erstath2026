# DOMAIN-009 - Case Examples

Version: 1.0
Status: Active Draft
Scope: Fake case examples for domain understanding and testing

## Purpose

This document provides fake case examples for ErstatningsHjaelp.

The examples help align AI Case Brain, Rulebook, UX, QA and future demo data.

## Data Rule

All examples are fictional.

Do not use real names, CPR numbers, real journal text or identifiable real patient cases.

## Important Limitation

These examples are screening examples only.

They do not show final legal outcomes and must not be used as proof that similar real cases will succeed or fail.

## Example 1 - Diagnosis Delay With Worsened Disease

## User Message

```text
Min mor var hos lægen flere gange med mavesmerter og vægttab. Hun blev først sendt videre mange måneder senere, og så viste det sig at være kræft. Sygdommen havde nået at sprede sig.
```

## Likely Signals

```text
case_domain: patient_injury
case_type: diagnosis_delay
injury_type: worsened_disease
consequence: severe_permanent_consequence or death if stated later
important_dates: first_contact_date, diagnosis_date
needed_documents: journal_note, referral, scan_result, pathology_result
human_review: likely
```

## Good Next Question

```text
Hvornår kontaktede hun første gang lægen om symptomerne?
```

## Example 2 - Surgical Injury

## User Message

```text
Jeg fik en operation i knæet og har siden haft nedsat funktion og stærke smerter. Jeg kan ikke arbejde som før.
```

## Likely Signals

```text
case_domain: patient_injury
case_type: surgical_error or surgical_injury_signal
injury_type: physical_injury
consequence: loss_of_work_capacity, pain_or_symptoms
important_dates: operation date
needed_documents: operation_report, medical_record, sick leave or income documents later
```

## Good Next Question

```text
Hvornår blev operationen udført?
```

## Example 3 - Medication Reaction

## User Message

```text
Jeg fik udskrevet medicin, som jeg reagerede meget voldsomt på. Jeg havde tidligere fortalt, at jeg ikke kunne tåle den type medicin.
```

## Likely Signals

```text
case_domain: patient_injury
case_type: medication_injury
injury_type: medication_reaction
consequence: unknown until described
needed_documents: medication_list, prescription_record, journal_note
```

## Good Next Question

```text
Hvilken medicin var der tale om?
```

## Example 4 - Infection After Operation

## User Message

```text
Efter min operation fik jeg en infektion i såret og måtte indlægges igen. Jeg har stadig problemer efter det.
```

## Likely Signals

```text
case_domain: patient_injury
case_type: infection
injury_type: infection
consequence: hospitalisation_or_readmission, pain_or_symptoms, possible permanent consequence
needed_documents: operation_report, discharge_summary, hospital_letter
```

## Good Next Question

```text
Hvornår opstod infektionen efter operationen?
```

## Example 5 - Lack Of Follow-Up On Scan

## User Message

```text
Jeg fik lavet en scanning, men ingen fulgte op på svaret. Først senere fandt de ud af, at der var noget alvorligt.
```

## Likely Signals

```text
case_domain: patient_injury
case_type: lack_of_follow_up or diagnosis_delay
injury_type: worsened_disease
needed_documents: scan_result, journal_note, referral
important_dates: scan date, result date, diagnosis date
```

## Good Next Question

```text
Hvornår blev scanningen lavet?
```

## Example 6 - Birth-Related Injury

## User Message

```text
Under fødslen reagerede de ikke på barnets hjertelyd, og vores barn fik en alvorlig skade.
```

## Likely Signals

```text
case_domain: patient_injury
case_type: birth_injury
injury_type: birth_related_injury
consequence: severe_permanent_consequence if lasting serious impact
human_review: likely high priority
needed_documents: birth_record, hospital_record
```

## Good Next Question

```text
Hvornår fandt fødslen sted?
```

## Example 7 - Service Complaint Without Injury

## User Message

```text
Jeg blev behandlet dårligt i receptionen og måtte vente meget længe. Jeg vil gerne klage.
```

## Likely Signals

```text
case_domain: patient_complaint
case_type: out_of_scope_for_compensation unless consequence is added
injury_type: no_specific_injury
consequence: no_specific_consequence
route: ask consequence question before guide-away
```

## Good Next Question

```text
Fik ventetiden eller forløbet konkrete konsekvenser for dit helbred?
```

## Example 8 - General Medical Advice Request

## User Message

```text
Jeg har ondt i brystet. Hvad tror du det kan være?
```

## Likely Signals

```text
case_domain: general_medical_question
route: guide-away from compensation screening with safe wording
```

## UX Note

The system should not diagnose or give treatment instructions.

## Example 9 - Prior Decision Mentioned

## User Message

```text
Jeg har allerede fået afslag fra Patienterstatningen, men jeg mener de har overset noget vigtigt i journalen.
```

## Likely Signals

```text
case_domain: patient_injury or procedural review needed
previous_decision: yes
needed_documents: previous_decision, medical_record
human_review: likely
```

## Good Next Question

```text
Hvornår fik du afgørelsen?
```

## Example 10 - Vague First Message

## User Message

```text
Kan I hjælpe mig med erstatning?
```

## Likely Signals

```text
case_domain: unclear
information_quality: low
route: continue_conversation
```

## Good Next Question

```text
Hvad handler sagen kort om?
```

## Example Use In QA

These examples can be used for:

```text
fake AI scenarios
prompt tests
smart question tests
UX prototype
caseworker training
future demo mode
```

## References

- DOMAIN-003-common-case-patterns.md
- docs/ai-case-brain/BRAIN-024-fake-ai-brain-scenarios.md
- docs/rulebook/RULEBOOK-090-smart-question-rules.md
- docs/ux/UX-013-prototype-flow.md
