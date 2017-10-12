const retrievedPicsDB = JSON.parse(localStorage.getItem("picsDataBase")); //get the data stored in browser
let landingHTML = document.getElementById("landing"); //target area to send HTML

// for (let arr in retrievedPicsDB) {
//     let currentArray = retrievedPicsDB[arr]
//     for (var obj = 0; obj < currentArray.length; obj++) {
//         var currentObject = currentArray[obj];
//         landingHTML.innerHTML += `
//         <section class="imageCard">
//             <h3 class="picsH1">${currentObject.animal}</h3>
//             <img class="celebImg" src="${currentObject.picURL}" alt="${currentObject.alt}" height="100" width="150">
//             <figcaption class="celebCaption">${currentObject.caption}</figcaption>

//         </section>
//         `
//     }
// }
let randomObject = retrievedPicsDB.pics[Math.ceil((Math.random() * retrievedPicsDB.pics.length) - 1)];//returnes one of the three image objects when the page is refreshed
landingHTML.innerHTML += `
        <section class="imageCard">
           <h3 class="picsH1">${randomObject.animal}</h3>
           <img class="celebImg" src="${randomObject.picURL}" alt="${randomObject.alt}" height="100" width="150">
           <figcaption class="celebCaption">${randomObject.caption}</figcaption>

       </section>
         `;
