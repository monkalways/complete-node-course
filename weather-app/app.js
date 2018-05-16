const yargs = require('yargs');

const geocode = require('./lib/geocode');
const weather = require('./lib/weather');

const print = obj => console.log(JSON.stringify(obj, null, 2));

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

const run = async () => {
  try {
    const geocodingResult = await geocode.geoAddress(argv.address);
    print(geocodingResult);
    const weatherResult = await weather.get(geocodingResult.lat, geocodingResult.lng);
    print(weatherResult);
  } catch(error) {
    console.log(error.message);
  }
}

run();

