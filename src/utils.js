export function element(name, attributes = null, events = null, ...children) {
    const el = document.createElement(name);

    for (let i = 0; i < children.length; i +=1) {
        if (attributes) {
            Object.keys(attributes).forEach((key) => {
                el.setAttribute(key, attributes[key]);
            });
        }
        
        if (events) {
            Object.keys(events).forEach((key) => {
                el.addEventListener(key, attributes[key]);
            });
        }

        if (typeof children[i] === 'string') {
            el.appendChilde(document.createTextNode(children[i]));
        } else {
            el.appendChild(children[i]);
        }
    }

    return el
}
