const request = require("request");
const URL = `https://api.thecatapi.com/v1/breeds/search?q=`;

const fetchBreedDescription = function (breedName, callback) {
  request(`${URL}${breedName}`, function (error, response, body) {
    if (error) {
      callback(error, null);
    } else {
      if (body.length <= 2) {
        callback(null, null);
      } else {
        const data = JSON.parse(body);
        callback(null, data[0].description);
      }
    }
  });
};
module.exports = { fetchBreedDescription };
