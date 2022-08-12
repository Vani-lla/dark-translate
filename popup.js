let colorPicker = document.getElementById("colorpicker");

chrome.storage.sync.get('color', ({color}) => {
    colorPicker.setAttribute("value", color);
})

colorPicker.addEventListener("change", (event) => {
    chrome.storage.sync.set({"color": event.target.value});
})