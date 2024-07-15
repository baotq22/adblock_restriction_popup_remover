document.getElementById('removeElements').addEventListener('click', () => {
    const className = 'fc-ab-root';
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            func: removeElementsByClassName,
            args: [className]
        });
    });
});

document.getElementById('removeCSSProperties').addEventListener('click', () => {
    const elementSelector = 'body';
    const props = 'overflow'
    const properties = props.split(',');
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            func: removeCSSProperties,
            args: [elementSelector, properties]
        });
    });
});

function removeElementsByClassName(className) {
    const elements = document.querySelectorAll(`.${className}`);
    elements.forEach(element => {
        element.remove();
    });
}

function removeCSSProperties(elementSelector, properties) {
    const elements = document.querySelectorAll(elementSelector);
    elements.forEach(element => {
        properties.forEach(property => {
            element.style.removeProperty(property);
        });
    });
}

// document.getElementById('removeElements').addEventListener('click', () => {
//     const className = document.getElementById('className').value;
//     chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//         chrome.scripting.executeScript({
//             target: { tabId: tabs[0].id },
//             func: removeElementsByClassName,
//             args: [className]
//         });
//     });
// });

// document.getElementById('removeCSSProperties').addEventListener('click', () => {
//     const elementSelector = document.getElementById('elementSelector').value;
//     const properties = document.getElementById('cssProperties').value.split(',');
//     chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//         chrome.scripting.executeScript({
//             target: { tabId: tabs[0].id },
//             func: removeCSSProperties,
//             args: [elementSelector, properties]
//         });
//     });
// });

// function removeElementsByClassName(className) {
//     const elements = document.querySelectorAll(`.${className}`);
//     elements.forEach(element => {
//         element.remove();
//     });
// }

// function removeCSSProperties(elementSelector, properties) {
//     const elements = document.querySelectorAll(elementSelector);
//     elements.forEach(element => {
//         properties.forEach(property => {
//             element.style.removeProperty(property);
//         });
//     });
//     console.log(elements)
// }

