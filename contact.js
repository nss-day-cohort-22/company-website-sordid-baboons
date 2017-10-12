
//Location Objects, headquarter object has email and fax
//Headquarters: Djibouti City, Djibouti
const headquarters = {
  "name": "Circle of Life Headquarters",
  "location_type": "headquarters",
  "address": "892 Dark Alley",
  "city": "Djibouti City",
  "country": "Djibouti",
  "phone": "(253)(12) 646257",
  "location_url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15635.212212233675!2d43.13895586032281!3d11.565971998163796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x162300cfde391eb3%3A0xa12a9a3a7d2821ac!2sDjibouti!5e0!3m2!1sen!2sus!4v1507817063735",
  "email": "endangered@circleoflife.com",
  "fax": "(253)(36) 326437"
};

//Retail Location 1: Roswell, NM-
const retail_1 = {
  "name": "Circle of Life (retail store)",
  "location_type": "retail",
  "address": "999 Alien Way",
  "city": "Roswell, NM",
  "country": "United States",
  "phone": "555-762-2437",
  "location_url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.191770016133!2d-104.53130388537085!3d33.418244358321274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86e26ef74eca882d%3A0xaf6c4874b707b69f!2sRoswell!5e0!3m2!1sen!2sus!4v1507817500103"
};

//Retail Location 2: Tokyo, Japan-
const retail_2 = {
  "name": "Circle of Life (retail store)",
  "location_type": "retail",
  "address": "1 Obsure Avenue",
  "city": "Tokyo",
  "country": "Japan",
  "phone": "(81)(3) 396-842",
  "location_url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1619.572415771258!2d139.74037161243473!3d35.72265644603204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188da54126bd99%3A0x5c5a95ee3011f10b!2zSmFwYW4sIOOAkjExMi0wMDExIFTFjWt5xY0tdG8sIEJ1bmt5xY0ta3UsIFNlbmdva3UsIDIgQ2hvbWXiiJIxMeKIkjksIOOCpOODs-ODmuODquOCouODq-OCrOODvOODh-ODsw!5e0!3m2!1sen!2sus!4v1507818467605"
};

const locationList = [];

locationList.push(headquarters, retail_1, retail_2);

// stringify to store to local storage
const locationString = JSON.stringify(locationList);
localStorage.setItem("locations", locationString);



