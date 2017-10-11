const retrievedPicsDB = JSON.parse(localStorage.getItem("picsDataBase")); //get the data stored in browser
let landingHTML = document.getElementById("landing"); //target area to send HTML

for (let arr in retrievedPicsDB) {
    let currentArray = retrievedPicsDB[arr]
    for (var obj = 0; obj < currentArray.length; obj++) {
        var currentObject = currentArray[obj];
        landingHTML.innerHTML += `
        <section class="imageCard">
            <h3 class="picsH1">${currentObject.animal}</h3>
            <img class="celebImg" src="${currentObject.picURL}" alt="${currentObject.alt}" height="100" width="150">
            <figcaption class="celebCaption">${currentObject.caption}</figcaption>

        </section>
        `
    }
}
