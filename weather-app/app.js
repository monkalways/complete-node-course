const yargs = require('yargs');

const geocode = require('./lib/geocode');

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
    const result = await geocode.geoAddress(argv.address);
    console.log(JSON.stringify(result, null, 2));
  } catch(error) {
    console.log(error.message);
  }
}

run();

