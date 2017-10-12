const storedLocations = JSON.parse(localStorage.getItem("locations"));
const locationEl = document.getElementById("location");


for (let i = 0; i < storedLocations.length; i++) {
    let location = storedLocations[i];
    
    locationEl.innerHTML += `
    <section class="location">
        <h3>${location.name}</h3>
        <p>${location.address}<p>
        <p>${location.city}, ${location.country}<p>
        <p>Phone: ${location.phone}</p>
    </section>
    `
}

const contactEl = document.getElementById("contact-us");

contactEl.innerHTML += `
<section>
    <h4>Email: ${headquarters.email}</h4>
    <h4>Fax: ${headquarters.fax}</h4>
</section>
`