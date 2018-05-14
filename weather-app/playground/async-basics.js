console.log('Starting app');

setTimeout(() => {
  console.log('Inside of callback');
}, 2000);

process.nextTick(() => {
  console.log('Next tick');
});

console.log('Finishing up');