const storedLocations = JSON.parse(localStorage.getItem("locations"));
const locationEl = document.getElementById("location");


for (let i = 0; i < storedLocations.length; i++) {
    let location = storedLocations[i];
    
    locationEl.innerHTML += `
    <section class="location-${location.location_type}">
        <h3 class="location-name">${location.name}</h3>
        <iframe src="${location.location_url}" width="400" height="300" frameborder="0" style="border:0" allowfullscreen class="location-map"></iframe>
        <p class="location-address">${location.address}<br>${location.city}, ${location.country}<p>
        <p class="location-phone"><b>Phone:</b> ${location.phone}</p>
    </section>
    `
}

const contactEl = document.getElementById("contact-us");

contactEl.innerHTML += `
<section>
    <p class="main-email"><b>Email: </b>${headquarters.email}</p>
    <p class="main-fax"><b>Fax: </b>${headquarters.fax}</p>
</section>
`