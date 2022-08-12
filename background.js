let color = '#b8860b';

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ color });
    console.log('Default background color set to %cgoldenrod', `color: ${color}`);
})