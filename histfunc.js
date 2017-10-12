const compHist = JSON.parse(localStorage.getItem("companyHistory"))

const histLocation = document.getElementById("hist")

for (key in compHist) {
    let currentProp = compHist[key]
    console.log(currentProp)
    for (let i = 0; i < currentProp.length; i++) {
        let currentHist = currentProp[i]
        console.log(currentHist)
        histLocation.innerHTML += `<h1>${currentHist.one}</h1>
        <ul class="histUl"><li class="histLi">${currentHist.two}</li>
        <li class="histLi">${currentHist.three}</li></ul>`
        
    }
}

