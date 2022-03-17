const request = require("request");
const URL = `https://api.thecatapi.com/v1/breeds/search?q=${process.argv[2]}`;

request(URL, function(error, response, body) {
  if (error) return console.log("Request failed");
  if (body.length === 2) return console.log("breed name is not found");
  const data = JSON.parse(body);
  console.log(data[0].description);
});
