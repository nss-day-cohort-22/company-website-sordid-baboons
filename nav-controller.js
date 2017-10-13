// get nav bar from local storage
const storedNavBar = JSON.parse(localStorage.getItem("navBar"));
const navEl = document.getElementById("nav");

//loop through nav array
for (let i = 0; i < storedNavBar.length; i++) {
    let currentNav = storedNavBar[i];

    navEl.innerHTML += `
    <li><a href="${currentNav.link}">${currentNav.name}</a></li>
    `
    
}