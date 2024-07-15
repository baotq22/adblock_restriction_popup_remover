function removeElementsByClassName(className) {
    const elements = document.querySelectorAll(`${className}`);
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

removeElementsByClassName('fc-ab-root');
removeCSSProperties('body', ['overflow']);