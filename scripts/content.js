let charactersTyped = 0;

chrome.storage.local.get(['characters', 'startTime'], (data) => {
  if (!data.startTime) {
    chrome.storage.local.set({ startTime: new Date().getTime() });
  }
  charactersTyped = data.characters || 0;
});

document.addEventListener('keypress', (e) => {
  if (e.key.length === 1) {
    charactersTyped++;
    chrome.storage.local.set({ characters: charactersTyped });
  }
});