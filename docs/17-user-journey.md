# Dokument 17 - User Journey v1.0

## Formål

Dette dokument beskriver brugerrejsen i ErstatningsHjælp fra første besøg til potentiel aktiv sag.

Dokumentet binder sammen:

```text
Frontend
AI Screening
CRM
MitID
Fuldmagt
Dokumenter
Sagsbehandler
```

Målet er at sikre, at produktet ikke kun er teknisk korrekt, men også forståeligt og trygt for brugeren.

---

# Grundprincip

Brugeren skal ikke mødes af en lang formular først.

Brugeren skal først opleve værdi.

Derfor starter rejsen med:

```text
Fortæl kort hvad der skete
```

og ikke med:

```text
CPR
MitID
Fuldmagt
Journalupload
```

---

# Overordnet brugerrejse

```text
1. Landing page
2. Kort sagsbeskrivelse
3. AI screening
4. AI stiller opfølgende spørgsmål
5. AI vurderer om sagen bør gå videre
6. Kontaktoplysninger indsamles
7. MitID hvis kvalificeret
8. Fuldmagt
9. Dokumentupload
10. Intern review
11. Aktiv sag
12. Indsendelse / videre behandling
13. Afgørelse / afslutning
```

---

# Journey stage 1 - Landing page

## Brugerens mål

Brugeren vil hurtigt forstå:

```text
Kan jeg måske have en sag?
Kan jeg få hjælp?
Koster det noget at starte?
Er det sikkert?
```

## Sideindhold

Landing page bør forklare:

- hvad ErstatningsHjælp gør
- at brugeren kan starte med en kort beskrivelse
- at AI-screeningen er foreløbig
- at der ikke loves erstatning
- at følsomme dokumenter ikke skal uploades med det samme

## Call to action

```text
Fortæl kort hvad der skete
```

---

# Journey stage 2 - First screening input

## Brugerinput

Brugeren skriver frit:

```text
Min mor fik ikke diagnosticeret kræft i tide og døde senere.
```

## Systemhandling

```text
Lead oprettes
Besked gemmes
AI screening starter
Entities udtrækkes
Scores beregnes
Næste spørgsmål vælges
```

## Brugeroplevelse

Brugeren skal hurtigt få en relevant reaktion.

Eksempel:

```text
Tak. For at kunne vurdere næste skridt er det vigtigste først at forstå tidsforløbet.
Hvornår blev diagnosen stillet, eller hvornår blev I klar over skaden?
```

---

# Journey stage 3 - AI follow-up questions

## Princip

AI stiller ét spørgsmål ad gangen.

Ikke:

```text
Hvornår skete det, hvilket hospital var det, har du dokumenter, og har du klaget før?
```

Men:

```text
Hvornår skete hændelsen, eller hvornår blev I klar over skaden?
```

## Prioritering

AI spørger først om:

```text
1. Dato/frister
2. Behandlingssted
3. Konsekvens
4. Dokumentation
5. Tidligere klage/afgørelse
```

## Maksimalt antal spørgsmål

MVP bør som udgangspunkt stille højst:

```text
3-5 spørgsmål
```

Senere maksimum:

```text
8 spørgsmål
```

Hvis sagen stadig er uklar efter dette, sendes den til manuel review eller afsluttes forsigtigt.

---

# Journey stage 4 - AI qualification

## Mulige resultater

Efter kort screening kan sagen lande i:

```text
A - stærk sag
B - mulig sag, mere info nødvendig
C - usikker sag, manuel review
D - svag eller ikke relevant sag
```

## Brugerbesked for A/B

Eksempel:

```text
Ud fra dine oplysninger ser sagen ud til at være relevant at undersøge nærmere. Næste skridt er, at vi indsamler lidt flere oplysninger, så en medarbejder kan gennemgå sagen.
```

## Brugerbesked for C

Eksempel:

```text
Sagen kræver en nærmere vurdering, fordi nogle oplysninger stadig er uklare. Vi kan sende den til manuel gennemgang, hvis du ønsker det.
```

## Brugerbesked for D

Eksempel:

```text
Ud fra de oplysninger du har givet, ser det ikke umiddelbart ud til, at sagen passer til det vi kan hjælpe med lige nu. Det er dog ikke en juridisk afgørelse.
```

---

# Journey stage 5 - Contact information

## Hvornår spørges der?

Kontaktoplysninger bør først indsamles efter brugeren har fået en relevant AI-reaktion.

Ikke som første trin.

## Felter

```text
Navn
Email
Telefon
```

## Formål

```text
Gem screening
Kontakt brugeren
Følge op på kvalificeret sag
```

---

# Journey stage 6 - MitID

## Hvornår bruges MitID?

MitID kommer først efter kvalificering.

Ikke før den første AI-screening.

## Trigger

```text
case_category = A
```

eller stærk B-sag med nok information.

## Brugerbesked

```text
Din sag ser relevant ud at undersøge nærmere. For at vi kan gå videre, skal vi bekræfte din identitet med MitID.
```

## Formål

```text
Identifikation
Sikker kundetilknytning
Forberedelse til fuldmagt og dokumenter
```

---

# Journey stage 7 - Consent and power of attorney

## Samtykke

Før dybere behandling af helbredsoplysninger og dokumenter skal brugeren acceptere relevant samtykke.

## Fuldmagt

Fuldmagt kræves før ErstatningsHjælp kan handle eller indhente oplysninger på brugerens vegne.

## Brugeroplevelse

Forklar tydeligt:

```text
Hvad brugeren giver tilladelse til
Hvorfor det er nødvendigt
Hvordan det kan trækkes tilbage
```

---

# Journey stage 8 - Document upload

## Hvornår?

Først efter sagen er kvalificeret og brugeren har accepteret relevant samtykke.

## Dokumenttyper

```text
Journal
Afgørelse
Lønseddel
Kvittering
Fuldmagt
Andet
```

## Brugeroplevelse

Upload skal være guidet.

Eksempel:

```text
Vi mangler især journal eller afgørelse, hvis du har det. Du kan også fortsætte uden dokumenter, og vi kontakter dig senere.
```

---

# Journey stage 9 - Internal review

## Hvad sker internt?

Sagsbehandler ser:

```text
AI summary
Scores
Conversation
Entities
Missing information
Documents
Recommended action
```

## Mulige beslutninger

```text
Godkend som aktiv sag
Bed om flere oplysninger
Afvis høfligt
Send til juridisk vurdering
```

---

# Journey stage 10 - Active case

## Når lead bliver sag

Lead konverteres til case.

CRM-status ændres til:

```text
ACTIVE_CASE
```

## Brugeroplevelse

Brugeren får besked om:

```text
Sagen er nu taget videre til behandling.
Vi kontakter dig hvis vi mangler oplysninger.
```

---

# Journey stage 11 - Submission and decision

## Senere version

Når sagsgrundlaget er klart, kan sagen forberedes til:

```text
Patienterstatningen
Genoptagelse
Anden relevant instans
```

## Ikke MVP

Automatisk indsendelse er ikke del af første MVP.

---

# Conversion risk points

## 1. Landing page

Risiko:

```text
Brugeren forstår ikke værdien
```

Løsning:

```text
Kort forklaring og lav friktion
```

## 2. First input

Risiko:

```text
Brugeren ved ikke hvad de skal skrive
```

Løsning:

```text
Eksempler under tekstfeltet
```

## 3. AI questions

Risiko:

```text
For mange spørgsmål
```

Løsning:

```text
Ét spørgsmål ad gangen og maks 3-5 i MVP
```

## 4. Contact info

Risiko:

```text
Brugeren vil ikke give kontaktoplysninger
```

Løsning:

```text
Spørg først efter AI har givet værdi
```

## 5. MitID

Risiko:

```text
Høj friktion
```

Løsning:

```text
Kun efter kvalificering og tydelig forklaring
```

## 6. Documents

Risiko:

```text
Brugeren har ikke dokumenterne klar
```

Løsning:

```text
Tillad fortsæt senere og vis tydelig mangelliste
```

---

# MVP user journey

MVP 0.1.0 bør kun dække:

```text
Landing page
First input
AI questions
AI qualification
Contact information
Basic CRM visibility
```

Ikke:

```text
MitID
Fuldmagt
Document upload
Active case flow
Submission
Decision tracking
```

---

# UX copy principles

## Vær forsigtig

Brug:

```text
Sagen ser relevant ud at undersøge nærmere
```

Undgå:

```text
Du har en stærk erstatningssag
```

## Vær tydelig

Forklar hvorfor der spørges.

## Vær tryghedsskabende

Brugeren kan være i en sårbar situation.

## Vær ærlig

AI-screening er foreløbig og ikke en juridisk afgørelse.

---

# User journey success metrics

## MVP metrics

```text
Landing page conversion
Screening start rate
Screening completion rate
Average questions per screening
Contact info completion rate
Qualified lead rate
Manual review rate
```

## Later metrics

```text
MitID conversion
Fuldmagt conversion
Document upload completion
Review approval rate
Active case conversion
```

---

# Resultat

User Journey v1.0 sikrer, at ErstatningsHjælp bygges med brugerens oplevelse i centrum.

Den vigtigste beslutning er:

```text
Start med lav friktion.
Giv værdi først.
Bed om følsomme oplysninger senere.
```
