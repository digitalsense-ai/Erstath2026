(function () {
    const data = window.EH_PROTOTYPE_DATA || { landingExamples: [], scenarios: [] };
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const state = {
        selectedScenarioId: document.getElementById('frontend-experience')?.dataset.initialScenario || 'operation_injury_demo',
        firstMessage: '',
        currentQuestion: null,
        currentAnswer: '',
        result: null,
        userStartedTyping: false,
        welcomeComplete: false
    };

    const elements = {
        aiTypingWelcome: document.getElementById('aiTypingWelcome'),
        exampleTyping: document.getElementById('exampleTyping'),
        firstMessageForm: document.getElementById('firstMessageForm'),
        firstMessage: document.getElementById('firstMessage'),
        startButton: document.getElementById('startButton'),
        inputHelper: document.getElementById('inputHelper'),
        conversationSection: document.getElementById('conversationSection'),
        messageList: document.getElementById('messageList'),
        thinkingState: document.getElementById('thinkingState'),
        answerForm: document.getElementById('answerForm'),
        questionText: document.getElementById('questionText'),
        questionHelper: document.getElementById('questionHelper'),
        answerInputMount: document.getElementById('answerInputMount'),
        unknownButton: document.getElementById('unknownButton'),
        resultCard: document.getElementById('resultCard'),
        resultTitle: document.getElementById('resultTitle'),
        resultSummary: document.getElementById('resultSummary'),
        resultNextStep: document.getElementById('resultNextStep'),
        resultPrimary: document.getElementById('resultPrimary'),
        resultSecondary: document.getElementById('resultSecondary'),
        scenarioSelect: document.getElementById('scenarioSelect')
    };

    function getScenario() {
        return data.scenarios.find((scenario) => scenario.id === state.selectedScenarioId) || data.scenarios[0];
    }

    function sleep(ms) {
        return new Promise((resolve) => window.setTimeout(resolve, ms));
    }

    async function typeText(target, text, options = {}) {
        if (!target) {
            return;
        }

        const speed = options.speed || 24;
        target.textContent = '';

        if (prefersReducedMotion || options.instant) {
            target.textContent = text;
            return;
        }

        for (const char of text) {
            if (options.stopWhenTyping && state.userStartedTyping) {
                target.textContent = text;
                return;
            }
            target.textContent += char;
            await sleep(speed);
        }
    }

    function createWelcomeLine(text) {
        const line = document.createElement('div');
        line.className = 'fe-ai-message-line';
        const bubble = document.createElement('span');
        bubble.className = 'fe-ai-message-bubble';
        line.appendChild(bubble);
        elements.aiTypingWelcome.appendChild(line);
        return bubble;
    }

    async function runWelcomeTyping() {
        const messages = [
            'Hej 👋',
            'Jeg ved godt, det kan være svært at vide, hvor man skal starte.',
            'Skriv bare et par sætninger.',
            'Jeg stiller de rigtige spørgsmål bagefter.'
        ];

        elements.aiTypingWelcome.innerHTML = '';

        if (prefersReducedMotion) {
            messages.forEach((message) => {
                const bubble = createWelcomeLine(message);
                bubble.textContent = message;
            });
            state.welcomeComplete = true;
            rotateExamples();
            return;
        }

        for (const message of messages) {
            if (state.userStartedTyping) {
                break;
            }
            const bubble = createWelcomeLine(message);
            await typeText(bubble, message, { speed: 20, stopWhenTyping: true });
            await sleep(450);
        }

        state.welcomeComplete = true;
        await sleep(700);
        rotateExamples();
    }

    async function rotateExamples() {
        if (!elements.exampleTyping || state.userStartedTyping) {
            return;
        }

        for (const example of data.landingExamples) {
            if (state.userStartedTyping) {
                elements.exampleTyping.textContent = '';
                return;
            }

            await typeText(elements.exampleTyping, example, { speed: 25, stopWhenTyping: true });
            await sleep(1600);
            if (!prefersReducedMotion) {
                elements.exampleTyping.textContent = '';
                await sleep(300);
            }
        }

        if (!state.userStartedTyping) {
            rotateExamples();
        }
    }

    function updateStartButton() {
        const value = elements.firstMessage.value.trim();
        const canSubmit = value.length >= 12;
        elements.startButton.disabled = !canSubmit;
        elements.inputHelper.textContent = canSubmit
            ? 'Det er nok til at starte. Du kan altid tilføje mere senere.'
            : '2-3 sætninger er nok til at starte.';
    }

    function renderScenarioSelect() {
        if (!elements.scenarioSelect) {
            return;
        }

        elements.scenarioSelect.innerHTML = '';
        data.scenarios.forEach((scenario) => {
            const option = document.createElement('option');
            option.value = scenario.id;
            option.textContent = scenario.title;
            elements.scenarioSelect.appendChild(option);
        });
        elements.scenarioSelect.value = state.selectedScenarioId;
    }

    function addMessage(role, content) {
        const message = document.createElement('article');
        message.className = `fe-message fe-message-${role}`;

        const name = document.createElement('div');
        name.className = 'fe-message-name';
        name.textContent = role === 'user' ? 'Du' : 'AI';

        const body = document.createElement('p');
        body.textContent = content;

        message.appendChild(name);
        message.appendChild(body);
        elements.messageList.appendChild(message);
    }

    function resetConversation() {
        state.currentQuestion = null;
        state.currentAnswer = '';
        state.result = null;
        elements.messageList.innerHTML = '';
        elements.thinkingState.hidden = true;
        elements.answerForm.hidden = true;
        elements.resultCard.hidden = true;
    }

    function scrollToConversation() {
        elements.conversationSection.hidden = false;
        elements.conversationSection.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' });
    }

    async function submitFirstMessage(event) {
        event.preventDefault();
        const scenario = getScenario();
        const message = elements.firstMessage.value.trim();

        if (message.length < 12) {
            elements.inputHelper.textContent = 'Skriv bare lidt mere om, hvad der skete - så hjælper vi dig videre.';
            elements.firstMessage.focus();
            return;
        }

        state.firstMessage = message;
        resetConversation();
        scrollToConversation();
        addMessage('user', message);

        elements.thinkingState.hidden = false;
        await sleep(prefersReducedMotion ? 100 : 1100);
        elements.thinkingState.hidden = true;

        addMessage('assistant', scenario.acknowledgement);
        renderQuestion(scenario.question);
    }

    function renderQuestion(question) {
        state.currentQuestion = question;
        elements.questionText.textContent = question.text;
        elements.questionHelper.textContent = question.helperText || '';
        elements.answerInputMount.innerHTML = '';
        elements.unknownButton.hidden = !question.allowUnknown;

        let input;
        if (question.type === 'yes_no_unknown') {
            input = document.createElement('select');
            input.innerHTML = '<option value="">Vælg svar</option><option>Ja</option><option>Nej</option><option>Jeg er ikke sikker</option>';
        } else {
            input = document.createElement('input');
            input.type = 'text';
            input.placeholder = question.type === 'approximate_date'
                ? 'Fx marts 2023 eller cirka 3 år siden'
                : 'Skriv dit svar her';
        }

        input.id = 'questionAnswer';
        input.name = 'questionAnswer';
        input.className = 'fe-answer-input';
        input.setAttribute('aria-describedby', 'questionHelper');
        elements.answerInputMount.appendChild(input);

        elements.answerForm.hidden = false;
        input.focus({ preventScroll: true });
    }

    async function submitAnswer(event, forcedAnswer) {
        if (event) {
            event.preventDefault();
        }

        const scenario = getScenario();
        const input = document.getElementById('questionAnswer');
        const answer = forcedAnswer || input?.value?.trim() || '';

        if (!answer) {
            input?.focus();
            return;
        }

        state.currentAnswer = answer;
        elements.answerForm.hidden = true;
        addMessage('user', answer);
        elements.thinkingState.hidden = false;
        await sleep(prefersReducedMotion ? 100 : 900);
        elements.thinkingState.hidden = true;
        renderResult(scenario.result);
    }

    function renderResult(result) {
        state.result = result;
        elements.resultTitle.textContent = result.title;
        elements.resultSummary.textContent = result.summary;
        elements.resultNextStep.textContent = result.nextStep;
        elements.resultPrimary.textContent = result.primaryCta;
        elements.resultSecondary.textContent = result.secondaryCta;
        elements.resultCard.hidden = false;
        elements.resultCard.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'center' });
    }

    function attachEvents() {
        elements.firstMessage.addEventListener('input', () => {
            state.userStartedTyping = true;
            elements.exampleTyping.textContent = '';
            updateStartButton();
        });

        elements.firstMessageForm.addEventListener('submit', submitFirstMessage);
        elements.answerForm.addEventListener('submit', submitAnswer);
        elements.unknownButton.addEventListener('click', () => submitAnswer(null, 'Jeg ved det ikke'));

        elements.scenarioSelect.addEventListener('change', (event) => {
            state.selectedScenarioId = event.target.value;
            const scenario = getScenario();
            elements.firstMessage.value = scenario.firstMessage;
            state.userStartedTyping = true;
            elements.exampleTyping.textContent = '';
            updateStartButton();
            resetConversation();
        });

        elements.resultSecondary.addEventListener('click', () => {
            elements.firstMessage.focus();
        });
    }

    function init() {
        renderScenarioSelect();
        attachEvents();
        updateStartButton();
        runWelcomeTyping();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
