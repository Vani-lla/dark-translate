chrome.storage.local.get('color', ({color}) => {
    document.documentElement.style.setProperty('--highlight-color', color)
    document.documentElement.style.setProperty('--highlight-color12', `${color}1f`)
    document.documentElement.style.setProperty('--highlight-color30', `${color}4d`)
})

chrome.storage.onChanged.addListener((changes) => {
    for (let [key, { oldValue, newValue }] of Object.entries(changes)) {
        document.documentElement.style.setProperty('--highlight-color', newValue)
        document.documentElement.style.setProperty('--highlight-color12', `${newValue}1f`)
        document.documentElement.style.setProperty('--highlight-color30', `${newValue}4d`)
    }
})

const stylesheet = document.styleSheets[0];
const path = chrome.runtime.getURL("images/pencil.png");
const cssRule = `canvas { cursor: url('${path}') 0 10, auto !important; }`;

stylesheet.insertRule(cssRule, stylesheet.cssRules.length);