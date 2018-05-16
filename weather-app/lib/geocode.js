const axios = require('axios');

const httpProxyOptions = {
  host: 'proxy.police.edmonton.ab.ca',
  port: 8080
};

const geoAddress = async (address) => {
  const response = await axios.get(`http://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}`, {
    proxy: httpProxyOptions 
  });

  const result = response.data.results[0];

  return {
    lat: result.geometry.location.lat,
    lng: result.geometry.location.lng
  };
};

module.exports = {
  geoAddress
};