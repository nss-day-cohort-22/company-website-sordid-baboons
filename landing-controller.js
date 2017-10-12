const retrievedPicsDB = JSON.parse(localStorage.getItem("picsDataBase")); //get the pic data stored in browser
const retrievedCouponsDB = JSON.parse(localStorage.getItem("couponsDataBase")); //get the coupon data stored in browser

let landingHTML = document.getElementById("landing"); //target area to send HTML



let addHTML = function() {//writes HMTL to targeted area
let randomObject = retrievedPicsDB.pics[Math.ceil((Math.random() * retrievedPicsDB.pics.length) - 1)];//returnes one of the three image objects 
let randomCoupon = retrievedCouponsDB.coupon[Math.ceil((Math.random() * retrievedCouponsDB.coupon.length) - 1)];//returnes one of the coupon objects

  landingHTML.innerHTML = `
  <section class="imageCard">
    <div class="welcomeDiv">    
        <h1 class="landingHeadline">The Circle of Life needs a happy ending</h1>
        <h2 class="landingSubHeadline">...and it begins with you</h2>
        <article class="welcomeText">Are you a celebrity who has run out of things to buy? Maybe you’re just a terrible person with too much money.  No matter where you find yourself, if you have money, we have your endangered animal.</article>
    </div>
   <div class="celebCard">    
        <h1 class="picsH1">We got ${randomObject.animal}!</h1>
            <img class="celebImg" src="${randomObject.picURL}" alt="${randomObject.alt}" height="100" width="150">
            <figcaption class="celebCaption">${randomObject.caption}</figcaption>
    </div>
    <div class="coupon">
       <h2>${randomCoupon.name}</h3>
       <h3>${randomCoupon.text}</h3>
       <p>${randomCoupon.subtext}</p>
       <a id="CTA" href="./products.html">Shop Now!</a>
    </div>
  </section>
          `;
}

addHTML();//writes initial HTML without the 8 sec period that will start below -- otherwise you'll be waiting 8 sec when the page loads
window.setInterval(addHTML, 8000);//rewrites targeted HTML with randomly calculated object information from the DB every 8 sec


