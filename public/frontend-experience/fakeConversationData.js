window.EH_PROTOTYPE_DATA = {
    landingExamples: [
        'Jeg fik en operation, og siden har jeg haft smerter.',
        'Min sygdom blev først opdaget flere måneder senere.',
        'Jeg fik forkert medicin og blev meget syg.',
        'Mit barn kom til skade under fødslen.'
    ],
    scenarios: [
        {
            id: 'operation_injury_demo',
            title: 'Operation',
            firstMessage: 'Jeg fik en operation i knæet i 2023, og siden har jeg haft smerter og svært ved at arbejde.',
            acknowledgement: 'Tak. Det hjælper mig med at forstå forløbet.',
            question: {
                id: 'q_operation_date',
                type: 'approximate_date',
                text: 'Hvornår blev operationen udført cirka?',
                helperText: 'Du kan fx skrive 2023, sidste sommer eller en præcis dato.',
                allowUnknown: true
            },
            demoAnswer: 'Det var i marts 2023.',
            result: {
                type: 'human_review',
                title: 'Sagen bør gennemgås nærmere',
                summary: 'Ud fra det, du har fortalt, kan sagen være relevant at gennemgå nærmere.',
                nextStep: 'En specialist bør se på oplysningerne og vurdere, hvad næste skridt er.',
                primaryCta: 'Fortsæt og opret sag',
                secondaryCta: 'Tilføj flere oplysninger'
            }
        },
        {
            id: 'diagnosis_delay_demo',
            title: 'Forsinket diagnose',
            firstMessage: 'Min sygdom blev først opdaget flere måneder senere, selvom jeg havde været til læge flere gange.',
            acknowledgement: 'Tak. Jeg vil gerne forstå tidsforløbet lidt bedre.',
            question: {
                id: 'q_first_contact_date',
                type: 'approximate_date',
                text: 'Hvornår kontaktede du første gang lægen om symptomerne?',
                helperText: 'Du kan svare cirka, hvis du ikke husker datoen præcist.',
                allowUnknown: true
            },
            demoAnswer: 'Det var omkring foråret 2021.',
            result: {
                type: 'human_review',
                title: 'Tidsforløbet bør gennemgås nærmere',
                summary: 'Det, du beskriver, handler om et muligt forsinket forløb, hvor datoer og dokumenter kan være vigtige.',
                nextStep: 'En specialist kan gennemgå oplysningerne og hjælpe med at vurdere sagen nærmere.',
                primaryCta: 'Fortsæt og opret sag',
                secondaryCta: 'Tilføj flere oplysninger'
            }
        },
        {
            id: 'complaint_without_injury_demo',
            title: 'Klage uden skade',
            firstMessage: 'Jeg blev behandlet dårligt i receptionen og ventede meget længe.',
            acknowledgement: 'Tak. Jeg vil gerne forstå, om forløbet også havde en helbredsmæssig konsekvens.',
            question: {
                id: 'q_health_consequence',
                type: 'yes_no_unknown',
                text: 'Fik forløbet konkrete konsekvenser for dit helbred?',
                helperText: 'Fx forværring, smerter, ekstra behandling eller længere sygdomsforløb.',
                allowUnknown: true
            },
            demoAnswer: 'Nej, ikke en konkret skade. Jeg er bare utilfreds.',
            result: {
                type: 'guide_away_carefully',
                title: 'Det kan være en anden type hjælp, du har brug for',
                summary: 'Ud fra det, du har skrevet lige nu, lyder det mest som en klage over forløbet og ikke en typisk patienterstatningssag.',
                nextStep: 'Hvis der også var en konkret helbredsmæssig skade, kan du tilføje det her.',
                primaryCta: 'Tilføj flere oplysninger',
                secondaryCta: 'Se andre muligheder'
            }
        }
    ]
};
