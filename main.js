// ===========  Build the page ======================

// Returns the element and h1 tag for the customer database to be displayed in
function createMain() {
    let container = createElement('div', ['flex', 'main'])
    let h1 = document.createElement('h1', ['h1'])
    h1.textContent = "Customer Database"
    container.appendChild(h1)
    return container
}



// ========== Helper functions ============================

// type should be a type of html element, as a string
// classArr should be an array of strings to be used as HTML classes
function createElement(type, classArr) {
    const element = document.createElement(type)
    element.classList = classArr
    return element
}

// returns a string with the first character capitalized
function capitalize(string) {
    if (string.length === 1) {
        return string[0].toUpperCase()
    }
    else {
        return string[0].toUpperCase() + string.slice(1)
    }
}




//  =================== Functions using customer objects ========================
// customer should be an object from the array customers" in customers.js
function customerName(customer) {
    let components = [customer['name'].title + '.', customer['name'].first, customer['name'].last]
    for (let i = 0; i < components.length; i++) {
        components[i] = capitalize(components[i])
    }
    return components.join(' ')
}

function customerLocation (customer) {

}

// function createCard(customer) {
//     const card = createElement('div', ['card', 'flex'])
//     const img = createElement('img', ['face'])
//     img.src = customer['picture']
//     img.alt = `Profile picture of ${customer.}`
// }


