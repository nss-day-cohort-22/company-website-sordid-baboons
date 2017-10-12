const retrievedPicsDB = JSON.parse(localStorage.getItem("picsDataBase")); //get the data stored in browser
let landingHTML = document.getElementById("landing"); //target area to send HTML

let addHTML = function() {
  let randomObject = retrievedPicsDB.pics[Math.ceil((Math.random() * retrievedPicsDB.pics.length) - 1)];//returnes one of the three image objects when the page is refreshed
  
  landingHTML.innerHTML = `
  <section class="imageCard">
    <div class="welcomeDiv">    
        <h1 class="landingHeadline">Test</h1>
        <article class="welcomeText">Are you a celebrity who has run out of things to buy? Maybe you’re just a terrible person with too much money.  No matter where you find yourself, if you have money, we have your endangered animal.</article>
    </div>
   <div class="celebCard">    
        <h3 class="picsH1">${randomObject.animal}</h3>
            <img class="celebImg" src="${randomObject.picURL}" alt="${randomObject.alt}" height="100" width="150">
            <figcaption class="celebCaption">${randomObject.caption}</figcaption>
    </div>
  </section>
          `;
}

addHTML();
window.setInterval(addHTML, 8000);


