const httpClient = require('./http-client');

const apiKey = '050e222b0f5453818ac0e432bb77c0ea';
const url = `https://api.darksky.net/forecast/${apiKey}`;

const get = async (lat, lng) => {
  const response = await httpClient.get(`${url}/${lat},${lng}?units=si`);
  return response.data.currently;
};

module.exports = {
  get
};