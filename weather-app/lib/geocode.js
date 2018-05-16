const httpClient = require('./http-client');

const googleApiKey = 'AIzaSyAYfLnZ5sJ_Pjg4qp4grhaqNSKWHSxqlQU';
const url = `https://maps.googleapis.com/maps/api/geocode/json?key=${googleApiKey}`;

const geoAddress = async (address) => {
  const response = await httpClient.get(`${url}&address=${encodeURIComponent(address)}`);

  const result = response.data.results[0];

  return {
    lat: result.geometry.location.lat,
    lng: result.geometry.location.lng
  };
};

module.exports = {
  geoAddress
};