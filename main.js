// type should be a type of html element, as a string
// classArr should be an array of strings to be used as HTML classes
function createElement(type, classArr) {
    const element = document.createElement(type)
    element.classList = classArr
    return element
}

// Returnas the element and h1 tag for the customer database to be displayed in
function createMain() {
    let container = createElement('div', ['flex', 'main'])
    let h1 = document.createElement('h1',['h1'])
    h1.textContent = "Customer Database"
    container.appendChild(h1)
    return container
}



function buildPage() {
    const body = document.querySelector('body')
    let container = createMain()
    body.appendChild(container)

}