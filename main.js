// AUTHOR => github.com/rifatdinc
chrome.storage.sync.get('color', ({color}) => {
    document.documentElement.style.setProperty('--highlight-color', color)
    document.documentElement.style.setProperty('--highlight-color12', `${color}1f`)
    document.documentElement.style.setProperty('--highlight-color30', `${color}4d`)
})

chrome.storage.onChanged.addListener((changes) => {
    for (let [{ newValue }] of Object.entries(changes)) {
        document.documentElement.style.setProperty('--highlight-color', newValue)
        document.documentElement.style.setProperty('--highlight-color12', `${newValue}1f`)
        document.documentElement.style.setProperty('--highlight-color30', `${newValue}4d`)
    }
})