const axios = require('axios');

const httpProxyOptions = {
  host: 'proxy.police.edmonton.ab.ca',
  port: 8080
};

const get = async (url) => {
  return await axios.get(url, httpProxyOptions);
};

module.exports = {
  get
};