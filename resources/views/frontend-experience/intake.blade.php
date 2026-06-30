<!doctype html>
<html lang="da">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>ErstatningsHjælp - Gratis indledende vurdering</title>
    <meta name="description" content="Fortæl kort hvad der er sket. Du behøver ikke kende reglerne - vi hjælper dig videre ét spørgsmål ad gangen.">
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=inter:400,500,600,700,800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="{{ asset('frontend-experience/app.css') }}">
</head>
<body>
    <div id="frontend-experience" class="fe-app" data-initial-scenario="operation_injury_demo">
        <header class="fe-header" aria-label="Top navigation">
            <a class="fe-logo" href="/intake" aria-label="ErstatningsHjælp forside">
                <span class="fe-logo-mark">EH</span>
                <span>ErstatningsHjælp</span>
            </a>

            <nav class="fe-nav" aria-label="Sekundær navigation">
                <a href="#how-it-works">Sådan virker det</a>
                <a href="#faq">FAQ</a>
            </nav>
        </header>

        <main>
            <section class="fe-hero" data-state="landing">
                <div class="fe-hero-main">
                    <p class="fe-eyebrow">Gratis indledende vurdering</p>
                    <h1>Fortæl os kort, hvad der er sket</h1>
                    <p class="fe-lead">Du behøver ikke kende reglerne eller have dokumenter klar. Skriv med dine egne ord - vi hjælper dig videre ét spørgsmål ad gangen.</p>

                    <div class="fe-ai-welcome" aria-live="polite">
                        <div class="fe-ai-label">
                            <span class="fe-ai-dot"></span>
                            AI hjælper dig i gang
                        </div>
                        <div id="aiTypingWelcome" class="fe-ai-message"></div>
                    </div>

                    <form id="firstMessageForm" class="fe-input-card" novalidate>
                        <label for="firstMessage">Hvad skete der?</label>
                        <div class="fe-textarea-wrap">
                            <textarea id="firstMessage" name="firstMessage" rows="7" autocomplete="off" placeholder=""></textarea>
                            <div id="exampleTyping" class="fe-example-typing" aria-hidden="true"></div>
                        </div>
                        <p id="inputHelper" class="fe-helper">2-3 sætninger er nok til at starte.</p>
                        <div class="fe-actions">
                            <button id="startButton" class="fe-button fe-button-primary" type="submit" disabled>Start gratis vurdering</button>
                            <span class="fe-action-note">Det tager typisk 5-10 minutter.</span>
                        </div>
                    </form>
                </div>

                <aside class="fe-trust-card" aria-label="Tryg start">
                    <p class="fe-card-kicker">Tryg start</p>
                    <h2>Ingen formular først</h2>
                    <ul>
                        <li>Du kan starte uden dokumenter.</li>
                        <li>Du skriver med dine egne ord.</li>
                        <li>AI stiller ét spørgsmål ad gangen.</li>
                        <li>En specialist kan gennemgå sagen.</li>
                    </ul>
                </aside>
            </section>

            <section id="conversationSection" class="fe-conversation" hidden>
                <div class="fe-conversation-layout">
                    <div class="fe-conversation-main">
                        <p class="fe-eyebrow">Din samtale</p>
                        <div id="messageList" class="fe-message-list"></div>

                        <div id="thinkingState" class="fe-message fe-message-ai" hidden>
                            <div class="fe-message-name">AI</div>
                            <div class="fe-thinking">
                                <span></span><span></span><span></span>
                            </div>
                            <p>Jeg gennemgår din beskrivelse og finder det vigtigste næste spørgsmål.</p>
                        </div>

                        <form id="answerForm" class="fe-question-card" hidden novalidate>
                            <div class="fe-ai-label">
                                <span class="fe-ai-dot"></span>
                                Næste spørgsmål
                            </div>
                            <h2 id="questionText"></h2>
                            <p id="questionHelper" class="fe-helper"></p>
                            <div id="answerInputMount"></div>
                            <div class="fe-question-actions">
                                <button class="fe-button fe-button-primary" type="submit">Fortsæt</button>
                                <button id="unknownButton" class="fe-button fe-button-secondary" type="button">Jeg ved det ikke</button>
                            </div>
                        </form>

                        <section id="resultCard" class="fe-result-card" hidden aria-live="polite">
                            <p class="fe-card-kicker">Næste skridt</p>
                            <h2 id="resultTitle"></h2>
                            <p id="resultSummary"></p>
                            <p id="resultNextStep"></p>
                            <div class="fe-actions">
                                <button id="resultPrimary" class="fe-button fe-button-primary" type="button"></button>
                                <button id="resultSecondary" class="fe-button fe-button-secondary" type="button"></button>
                            </div>
                        </section>
                    </div>

                    <aside class="fe-progress-card">
                        <p class="fe-card-kicker">Fremdrift</p>
                        <h2>Ét spørgsmål ad gangen</h2>
                        <p>Du kan svare cirka, hvis du ikke kender det præcise svar.</p>
                        <div class="fe-scenario-switcher">
                            <label for="scenarioSelect">Prototype-scenarie</label>
                            <select id="scenarioSelect"></select>
                        </div>
                    </aside>
                </div>
            </section>

            <section id="how-it-works" class="fe-steps">
                <p class="fe-eyebrow">Sådan fungerer det</p>
                <h2>En enkel start - uden lang formular</h2>
                <div class="fe-step-grid">
                    <article>
                        <span>1</span>
                        <h3>Fortæl hvad der skete</h3>
                        <p>Start med nogle få sætninger. Du behøver ikke skrive perfekt.</p>
                    </article>
                    <article>
                        <span>2</span>
                        <h3>AI stiller næste spørgsmål</h3>
                        <p>Systemet spørger kun om det vigtigste næste skridt.</p>
                    </article>
                    <article>
                        <span>3</span>
                        <h3>Specialist kan gennemgå sagen</h3>
                        <p>Hvis sagen virker relevant, kan en person se nærmere på oplysningerne.</p>
                    </article>
                </div>
            </section>

            <section id="faq" class="fe-faq">
                <p class="fe-eyebrow">FAQ</p>
                <h2>Ofte stillede spørgsmål</h2>
                <details>
                    <summary>Skal jeg have dokumenter klar?</summary>
                    <p>Nej. Du kan starte med din egen beskrivelse. Dokumenter kan være relevante senere.</p>
                </details>
                <details>
                    <summary>Skal jeg kende reglerne?</summary>
                    <p>Nej. Systemet hjælper dig med at forklare sagen trin for trin.</p>
                </details>
                <details>
                    <summary>Er det en endelig vurdering?</summary>
                    <p>Nej. Den første oplevelse er en indledende screening og næste-skridt-hjælp.</p>
                </details>
            </section>
        </main>
    </div>

    <script src="{{ asset('frontend-experience/fakeConversationData.js') }}"></script>
    <script src="{{ asset('frontend-experience/app.js') }}"></script>
</body>
</html>
