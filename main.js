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

// arr should be an array of strings, all of which should be capitalized (first letter)
// returns an array of capitalized strings
function capitalizeArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = capitalize(arr[i])
    }
    return arr
}



//  =================== Functions using customer objects ========================
// customer should be an object from the array customers" in customers.js
// Most of these return strings that will be added as textContent to html elements
// in the createCard function
function customerName(customer) {
    let components = [customer['name'].title + '.', customer['name'].first, customer['name'].last]
    components = capitalizeArray(components)
    return components.join(' ')
}

function customerLocation(customer) {
    let splitStreet = customer.location.street.split(' ')
    let splitCity = customer.location.city.split(' ')

    let street = capitalizeArray(splitStreet).join(' ')
    let city = capitalizeArray(splitCity).join(' ')
    let state = nameToAbbr(customer.location.state)
    let postcode = customer.location.postcode

    return `${street}'\n'${city}, ${state} ${postcode}`
}

function customerDOB(customer) {
    let dob = customer.dob.slice(0, 10)
    let dobDate = moment(dob).format('MMM Do, YYYY')
    return `DOB: ${dobDate}`
}

function customerSince(customer) {
    let reg = customer.registered.slice(0, 10)
    let regDate = moment(reg).format('MMM Do, YYYY')
    return `Customer since: ${regDate}`
}



// function createCard(customer) {
//     const card = createElement('div', ['card', 'flex'])
//     const img = createElement('img', ['face'])
//     img.src = customer['picture']
//     img.alt = `Profile picture of ${customer.}`
// }


