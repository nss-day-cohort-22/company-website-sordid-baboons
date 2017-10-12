
//Location Objects, headquarter object has email and fax
//Headquarters: Djibouti City, Djibouti
const headquarters = {
  "name": "Circle of Life Headquarters",
  "address": "892 Dark Alley",
  "city": "Djibouti City",
  "country": "Djibouti",
  "phone": "(253)(12) 646257",
  "email": "endangered@circleoflife.com",
  "fax": "(253)(36) 326437"
};

//Retail Location 1: Roswell, NM-
const retail_1 = {
  "name": "Circle of Life (retail store)",
  "address": "999 Alien Way",
  "city": "Roswell, NM",
  "country": "United States",
  "phone": "555-762-2437"
};

//Retail Location 2: Tokyo, Japan-
const retail_2 = {
  "name": "Circle of Life (retail store)",
  "address": "1 Obsure Avenue",
  "city": "Tokyo",
  "country": "Japan",
  "phone": "(81)(3) 396-842"
};

const locationList = [];

locationList.push(headquarters, retail_1, retail_2);

// stringify to store to local storage
const locationString = JSON.stringify(locationList);
localStorage.setItem("locations", locationString);



