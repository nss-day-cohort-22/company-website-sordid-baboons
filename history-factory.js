/* objects to store history data*/

let theBeggining = {
    "one": "<center>Where did the <i>Circle of Life</i> begin?</center>",
    "two": "Many companies start away from the eye of public. However, our story began during an event considered to be historic and magical by many present day scholars. You may know it as that scene in <i>The Lion King</i> where Rafiki holds up baby Simba on top of the rock.",
    "three": "Our founder saw the attention gandered by young Simba, and quickly realized there was money to be made by selling rare and endangered animals"
}

let theComeUp = {
    "one": "In the mid 1990's we developed a flawless business model",
    "two": "We executed that business model, and we became freaking <strong>millionaires</strong>. People got <i>really</i> upset we became millionaires by selling rare and endangered animals.",
    "three": "We talked it out with the cops and PETA, and everything is cool now."
}

let whereWeAreNow = {
    "one": "The Future is Limitless",
    "two": "Our company's rich history is seasoned with tales of heroism and adventure. We are as much a family as we are profiteering animal smugglers.",
    "three": "Our business model still thrives. We are commited to leading our industry in both innovation and performance."
}

/* store those objects into an array inside of another object*/

let ourHistory = {
    "history": [theBeggining, theComeUp, whereWeAreNow]
}

/*store the object to local storage after stringifying it with JSON*/

let companyHistory = JSON.stringify(ourHistory)
localStorage.setItem("companyHistory", companyHistory)
