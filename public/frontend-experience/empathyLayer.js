(function () {
    const rules = [
        {
            words: ['død', 'døde', 'mistede', 'afdød'],
            text: 'Det gør mig meget ondt at høre. Tak fordi du fortæller det. Jeg hjælper dig roligt videre og stiller kun ét spørgsmål ad gangen.'
        },
        {
            words: ['kræft', 'cancer', 'tumor'],
            text: 'Det lyder som et alvorligt og belastende forløb. Jeg hjælper dig med at få overblik, ét skridt ad gangen.'
        },
        {
            words: ['barn', 'fødsel', 'gravid', 'baby'],
            text: 'Det lyder som noget, der kan være meget følsomt. Vi tager det roligt, ét spørgsmål ad gangen.'
        },
        {
            words: ['smerter', 'ondt', 'sygemeldt', 'arbejde'],
            text: 'Tak fordi du fortæller det. Det lyder som noget, der har påvirket din hverdag. Jeg hjælper dig roligt videre.'
        },
        {
            words: ['medicin', 'piller', 'bivirkning'],
            text: 'Tak. Medicinforløb kan være svære at overskue. Vi starter med det vigtigste og tager resten bagefter.'
        }
    ];

    function findEmpathyText(message) {
        const normalized = message.toLowerCase();
        const rule = rules.find((item) => item.words.some((word) => normalized.includes(word)));
        return rule ? rule.text : null;
    }

    function latestUserText() {
        const messages = document.querySelectorAll('.fe-message-user p');
        const latest = messages[messages.length - 1];
        return latest ? latest.textContent.trim() : '';
    }

    function improveAssistantMessage() {
        const userText = latestUserText();
        if (!userText) {
            return;
        }

        const empathyText = findEmpathyText(userText);
        if (!empathyText) {
            return;
        }

        const assistantMessages = document.querySelectorAll('.fe-message-ai p');
        const latestAssistant = assistantMessages[assistantMessages.length - 1];
        if (!latestAssistant || latestAssistant.dataset.empathyApplied === 'true') {
            return;
        }

        latestAssistant.textContent = empathyText;
        latestAssistant.dataset.empathyApplied = 'true';
    }

    function initEmpathyLayer() {
        const messageList = document.getElementById('messageList');
        if (!messageList) {
            return;
        }

        const observer = new MutationObserver(() => {
            window.setTimeout(improveAssistantMessage, 30);
        });

        observer.observe(messageList, { childList: true, subtree: true });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initEmpathyLayer);
    } else {
        initEmpathyLayer();
    }
})();
