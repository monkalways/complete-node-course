process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'; // to fix the "cannot get local certificate" error

const axios = require('axios-https-proxy-fix'); // to fix axios' "cannot pass https traffic over http proxy" issue

const httpProxyOptions = {
  host: 'proxy.police.edmonton.ab.ca',
  port: 8080
};

const get = async (url) => {
  const response = await axios.get(url, {
    proxy: httpProxyOptions 
  });
  return response;
};

module.exports = {
  get
};