const request = require('request');


const breedSearch = process.argv[2];
const URL = `https://api.thecatapi.com/v1/breeds/search?q=${breedSearch}`;

request(URL, function(error, response, body) {
  if (error) {
    console.log("There was an error, check your url");
    return;
  }
  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log("Breed not found.");
    return;
  }
  console.log(data[0].description);
});