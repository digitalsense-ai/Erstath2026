window.EH_PROTOTYPE_DATA = {
    landingExamples: [
        'Jeg er i tvivl om, om noget gik galt under min behandling.',
        'Min sygdom blev først opdaget flere måneder senere.',
        'Jeg fik medicin og blev meget syg bagefter.',
        'Jeg ved ikke, om jeg har en sag, men jeg vil gerne forstå det.'
    ],
    empathyRules: [
        {
            keywords: ['død', 'døde', 'mistede', 'afdød', 'begravelse'],
            message: 'Det gør mig meget ondt at høre. Tak fordi du fortæller det. Jeg stiller kun nogle få spørgsmål ad gangen, så vi kan forstå forløbet roligt.'
        },
        {
            keywords: ['kræft', 'cancer', 'tumor'],
            message: 'Det lyder som et alvorligt og belastende forløb. Jeg hjælper dig med at få styr på tidsforløbet ét skridt ad gangen.'
        },
        {
            keywords: ['barn', 'fødsel', 'gravid', 'baby'],
            message: 'Det lyder som noget, der kan være meget følsomt. Jeg hjælper dig roligt videre og stiller kun ét spørgsmål ad gangen.'
        },
        {
            keywords: ['smerter', 'ondt', 'arbejde', 'sygemeldt'],
            message: 'Tak. Det lyder som noget, der har påvirket din hverdag. Jeg vil først forstå, hvornår det begyndte.'
        },
        {
            keywords: ['medicin', 'piller', 'bivirkning'],
            message: 'Tak. Medicinforløb kan være svære at overskue. Jeg hjælper dig med at starte med det vigtigste.'
        }
    ],
    defaultAcknowledgement: 'Tak fordi du fortæller det. Jeg hjælper dig med at få overblik, ét spørgsmål ad gangen.',
    scenarios: [
        {
            id: 'operation_injury_demo',
            title: 'Operation',
            firstMessage: 'Jeg fik en operation i knæet i 2023, og siden har jeg haft smerter og svært ved at arbejde.',
            acknowledgement: 'Tak. Det lyder som noget, der har påvirket din hverdag. Jeg vil først forstå, hvornår det begyndte.',
            question: {
                id: 'q_operation_date',
                type: 'approximate_date',
                text: 'Hvornår blev operationen udført cirka?',
                helperText: 'Du kan fx skrive 2023, sidste sommer eller en præcis dato. Det behøver ikke være helt nøjagtigt.',
                allowUnknown: true
            },
            demoAnswer: 'Det var i marts 2023.',
            result: {
                type: 'human_review',
                title: 'Sagen bør gennemgås nærmere',
                summary: 'Ud fra det, du har fortalt, kan sagen være relevant at se nærmere på.',
                nextStep: 'Næste skridt er at samle lidt flere oplysninger, så en specialist kan vurdere forløbet mere roligt og grundigt.',
                primaryCta: 'Fortsæt stille og roligt',
                secondaryCta: 'Tilføj flere oplysninger'
            }
        },
        {
            id: 'diagnosis_delay_demo',
            title: 'Forsinket diagnose',
            firstMessage: 'Min sygdom blev først opdaget flere måneder senere, selvom jeg havde været til læge flere gange.',
            acknowledgement: 'Tak. Det kan være frustrerende, når man føler, at et forløb trak ud. Jeg vil gerne forstå tidsforløbet lidt bedre.',
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
                nextStep: 'En specialist kan gennemgå oplysningerne og hjælpe med at vurdere, hvad der er relevant at gøre nu.',
                primaryCta: 'Fortsæt stille og roligt',
                secondaryCta: 'Tilføj flere oplysninger'
            }
        },
        {
            id: 'complaint_without_injury_demo',
            title: 'Klage uden skade',
            firstMessage: 'Jeg blev behandlet dårligt i receptionen og ventede meget længe.',
            acknowledgement: 'Tak. Det er forståeligt, at sådan et forløb kan fylde. Jeg vil gerne finde ud af, om det også handler om en helbredsmæssig skade.',
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
                nextStep: 'Hvis der også var en konkret helbredsmæssig skade, kan du tilføje det her. Så kan vi se på det igen.',
                primaryCta: 'Tilføj flere oplysninger',
                secondaryCta: 'Se andre muligheder'
            }
        }
    ]
};
