const fs = require('fs');
const _ = require('lodash');
const argv = require('yargs').argv;

const notes = require('./notes');

const command = argv._[0];

if(command === 'add') {
  notes.add(argv.title, argv.body, (err, note) => {
    if(err) {
      console.log(err);
    } else {
      console.log(`Note created: ${note.title} --- ${note.body}`);
    }
  });
} else if(command === 'read') {
  notes.get(argv.title);
} else if(command === 'remove') {
  notes.remove(argv.title);
} else if(command === 'list') {
  notes.getAll((err, notes) => console.log(notes));
} else {
  console.log('Command not recognized');
}