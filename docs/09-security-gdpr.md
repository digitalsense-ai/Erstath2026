# Dokument 9 - Security & GDPR v1.0

## Formål

Dette dokument beskriver de grundlæggende sikkerheds- og GDPR-principper for ErstatningsHjælp.

Projektet kan komme til at behandle meget følsomme oplysninger, herunder:

- helbredsoplysninger
- patientjournaler
- erstatningssager
- fuldmagter
- kontaktoplysninger
- potentielt CPR-oplysninger

Derfor skal sikkerhed og databeskyttelse tænkes ind fra starten.

Dette dokument er ikke juridisk rådgivning. Det er et teknisk og organisatorisk grundlag, som senere skal gennemgås af juridisk/GDPR-kompetence.

---

# Grundprincip

ErstatningsHjælp skal bygges efter dette princip:

```text
Indsaml mindst muligt
Gem sikkert
Adskil følsomme data
Log adgang
Slet når data ikke længere er nødvendig
```

---

# 1. Datatyper

## Almindelige personoplysninger

Eksempler:

```text
Navn
Email
Telefon
Adresse
```

## Følsomme oplysninger

Eksempler:

```text
Diagnose
Behandlingsforløb
Patientjournal
Helbredsskade
Dødsfald
Varigt mén
```

## Særligt kritiske oplysninger

Eksempler:

```text
CPR-nummer
MitID-identifikation
Fuldmagt
Journalfiler
Dokumenter med helbredsoplysninger
```

---

# 2. Dataindsamling i MVP

Version 0.1.0 bør kun indsamle det nødvendige for screening.

Tilladt i MVP:

```text
Kort sagsbeskrivelse
Eventuelt navn
Eventuelt email
Eventuelt telefon
AI entities
Scores
Mangelliste
AI-resumé
```

Ikke nødvendigt i MVP:

```text
CPR
MitID
Fuldmagt
Journaler
Lønsedler
Kvitteringer
```

Disse skal først indsamles senere, når sagen er kvalificeret.

---

# 3. Ingen følsomme data i GitHub

Der må aldrig committes:

```text
Rigtige patientjournaler
Rigtige CPR-numre
Rigtige helbredsoplysninger
Rigtige fuldmagter
API-nøgler
.env filer
Private dokumenter
Database dumps med persondata
```

Kun dummy-data må bruges i kode, tests og dokumentation.

---

# 4. Data minimization

Systemet skal kun spørge efter oplysninger, som er nødvendige for næste beslutning.

Eksempel:

Forkert:

```text
Indhent CPR, journal og fuldmagt før screening.
```

Korrekt:

```text
Indhent kort beskrivelse først.
Kvalificer sagen.
Indhent MitID, fuldmagt og dokumenter senere.
```

Dette matcher produktflowet:

```text
AI Screening
↓
Kvalificering
↓
MitID
↓
Fuldmagt
↓
Dokumenter
```

---

# 5. Consent & legal basis placeholder

Før produktion skal virksomheden afklare behandlingsgrundlag.

Der skal som minimum designes:

- samtykke til behandling af helbredsoplysninger
- privatlivspolitik
- cookiepolitik hvis relevant
- databehandleraftaler
- slettepolitik
- adgangspolitik

## Samtykkeflow

Samtykke bør indhentes før behandling af dybere helbredsdata og dokumenter.

Eksempel:

```text
Jeg giver ErstatningsHjælp tilladelse til at behandle mine oplysninger med henblik på vurdering af en mulig erstatningssag.
```

Samtykke skal logges med:

```text
lead_id
consent_type
consent_text_version
accepted_at
ip_address
user_agent
withdrawn_at
```

---

# 6. Access control

Adgang til systemet skal være rollebaseret.

## Roller

```text
Admin
Sagsbehandler
Rådgiver
Support
Developer
```

## Princip

```text
Least privilege
```

En bruger må kun have adgang til de data, der er nødvendige for brugerens arbejde.

---

# 7. Audit log

Alle væsentlige handlinger skal logges.

Eksempler:

```text
Lead oprettet
Lead åbnet
Status ændret
Dokument uploadet
Dokument downloadet
Fuldmagt oprettet
Samtykke accepteret
Samtykke trukket tilbage
AI-vurdering genereret
```

Audit log bør indeholde:

```text
user_id
lead_id
case_id
action
metadata
ip_address
created_at
```

---

# 8. File storage

Dokumenter må ikke ligge i public webroot.

Korrekt:

```text
storage/app/private/documents
```

Forkert:

```text
public/uploads
```

Filer bør kun kunne tilgås via autoriserede endpoints.

---

# 9. Encryption

Følgende bør krypteres eller beskyttes særligt:

```text
CPR
Journalfiler
Fuldmagter
MitID-relaterede data
Sensitive AI summaries
```

Databasefelter med høj følsomhed bør vurderes til feltkryptering.

Filer bør lagres krypteret eller på sikret storage med adgangskontrol.

---

# 10. Pseudonymisering

Hvor det er muligt, bør systemet bruge pseudonymisering.

Eksempel:

```text
lead_uuid bruges eksternt
intern database-id bruges kun internt
CPR opbevares adskilt fra sagsdata
```

Dette reducerer risikoen ved dataeksponering.

---

# 11. AI og databehandling

AI må kun modtage de oplysninger, der er nødvendige for opgaven.

## MVP

AI må modtage:

```text
Brugerens korte sagsbeskrivelse
Tidligere samtale i samme screening
Udtrukne entities
Mangelliste
```

AI bør ikke modtage i MVP:

```text
CPR
Fuld journal
Fuldmagt
Unødvendige identifikatorer
```

## AI logging

AI input og output bør logges til audit/debugging, men uden unødvendige personoplysninger.

Foreslået tabel senere:

```text
ai_runs
```

Felter:

```text
id
lead_id
provider
model
prompt_version
input_hash
input_json
output_json
tokens
cost
created_at
```

---

# 12. Retention & deletion

Der skal senere defineres slettefrister for:

```text
Afviste leads
Inaktive leads
Kvalificerede leads
Aktive sager
Uploadede dokumenter
AI logs
Audit logs
```

MVP-regel:

```text
Ingen produktionsdata uden slettepolitik.
```

---

# 13. Breach handling

Der skal senere laves procedure for databrud:

```text
Identificer hændelse
Stop lækage
Vurder risiko
Dokumentér hændelse
Informer relevante ansvarlige
Vurder anmeldelse til Datatilsynet
Vurder information til berørte personer
```

---

# 14. Development rules

Udviklingsmiljø skal bruge dummy-data.

```text
Ingen rigtige patienter
Ingen rigtige journaler
Ingen rigtige CPR-numre
Ingen produktionsdatabase lokalt
```

---

# 15. Production checklist

Før produktion skal følgende være på plads:

- [ ] Privatlivspolitik
- [ ] Samtykkeflow
- [ ] Databehandleraftaler
- [ ] Rollebaseret adgang
- [ ] Audit log
- [ ] Sikker dokumentstorage
- [ ] Backup
- [ ] Restore-test
- [ ] Slettepolitik
- [ ] Incident response plan
- [ ] Logging uden unødvendige persondata
- [ ] HTTPS
- [ ] Server hardening
- [ ] Adgangsstyring til server
- [ ] GDPR/juridisk review

---

# 16. Relevant GDPR reference points

Dette dokument bygger på følgende generelle GDPR-principper:

- Helbredsdata er en særlig kategori af personoplysninger.
- Behandling af særlige kategorier kræver særlig opmærksomhed og relevant behandlingsgrundlag.
- Pseudonymisering og kryptering er relevante tekniske sikkerhedsforanstaltninger.
- Sikkerhedsniveauet skal passe til risikoen.
- Data protection by design/default skal tænkes ind fra start.

Officiel reference:

```text
Regulation (EU) 2016/679 - General Data Protection Regulation
https://eur-lex.europa.eu/eli/reg/2016/679/oj
```

---

# Resultat

Dette dokument fastlægger de første sikkerheds- og GDPR-principper for ErstatningsHjælp.

Det skal bruges som teknisk kravdokument, men må ikke erstatte juridisk rådgivning.
