document.addEventListener("LoadDOM", () => {
    const charCount = document.getElementById("characters");
    const wpmDisplay = document.getElementById("wpm");
    const reset = document.getElementById("reset");

    chrome.storage.local.get(['characters', 'startTIme'], (data) => {
        const now = new Date().getTime();
        const elapsedMinutes = (now - data.startTime) / 60000;
        const wpm = elapsedMinutes > 0 ? Math.round(data.characters / 5 / elapsedMinutes) : 0;

        wpmDisplay.textContent = `WPM: ${wpm}`;
        charCount.textContent = `Characters Typed: ${data.characters}`;

    })

    chrome.storage.local.set('reset', () => {
        chrome.storage.local.set({ characters: 0, startTime: new Date().getTime() });
        wpmDisplay.textContent = 'WPM: 0';
        charDisplay.textContent = 'Characters Typed: 0';
    })
})