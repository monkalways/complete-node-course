const axios = require('axios');
const yargs = require('yargs');

const httpProxyOptions = {
  host: 'proxy.police.edmonton.ab.ca',
  port: 8080
};

const argv = yargs
  .options({
    address: {
      demand: true,
      alias: 'a',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

console.log(argv);

axios.get(`http://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(argv.address)}`, {
    proxy: httpProxyOptions 
  })
  .then(response => {
    const result = response.data.results[0];
    console.log(`Formatted Address: ${result.formatted_address}`);
    console.log(`Latitude: ${result.geometry.location.lat}`);
    console.log(`Longitude: ${result.geometry.location.lng}`);
  })
  .catch(error => {
    console.log(error);
  });
