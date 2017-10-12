let calledInventory = JSON.parse(localStorage.getItem("inventory"))

// const productElement = document.getElementByClass("productSection");

const animalElement = document.getElementsByClassName("animal")[0];

// Execute a for loop that will iterate over the arrays
for (let i = 0; i < inventory.length; i++) {
    
    // Get a reference to the current item in the bands array
      
    let currentAnimal = inventory[i];

    

    animalElement.innerHTML += 
        `<h2>${currentAnimal.name}</h2>
        <img src=${currentAnimal.img} class="img">
        <ul class='list'>
            <li>Species: <i>${currentAnimal.species}</i></li>
            <li>Price: ${currentAnimal.price}</li>
            <li>Stock: ${currentAnimal.stock}</li>
        </ul>`;
}