const axios = require('axios');

const apiKey = '050e222b0f5453818ac0e432bb77c0ea';
const url = `https://api.darksky.net/forecast/${apiKey}?units=si`;

const getWeather = async (lat, lng) => {
  // const result = await axios
}