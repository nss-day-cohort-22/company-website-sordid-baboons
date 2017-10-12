/*retreive history databse from local storage*/

const compHist = JSON.parse(localStorage.getItem("companyHistory"))

/* use an ID to define the location that html will be injected */

const histLocation = document.getElementById("hist")

/*iterate through the object and array of objects using for loops, and inject the data in them into the html*/

for (key in compHist) {
    let currentProp = compHist[key]
    console.log(currentProp)
    for (let i = 0; i < currentProp.length; i++) {
        let currentHist = currentProp[i]
        console.log(currentHist)
        histLocation.innerHTML += `<h2>${currentHist.one}</h2>
        <ul class="histUl"><li class="histLi">${currentHist.two}</li>
        <li class="histLi">${currentHist.three}</li></ul>`
        
    }
}



