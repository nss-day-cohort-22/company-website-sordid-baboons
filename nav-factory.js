//created nav bar object
const home = {
    'name' : 'Home',
    'link' : "./index.html"
}

const products = {
    'name' : 'Products',
    'link' : "./products.html"
}

const contact = {
    'name' : 'Contact',
    'link' : "./contact.html"
}

const employees = {
    'name' : 'Employment',
    'link' : "./employees.html"
}

//create blank nav bar array
const navBar = [];

//create array of objects into navBar
navBar.push(home, products, contact, employees);

//pushing to local storage
const navBarString = JSON.stringify(navBar);
localStorage.setItem("navBar", navBarString);