const fs = require('fs');
const _ = require('lodash');
const yarg = require('yargs');

const notes = require('./notes-promise');

const titleOptions = {
  describe: 'Note title',
  demand: true,
  alias: 't'
};

const bodyOptions = {
  describe: 'Note title',
  demand: true,
  alias: 't'
};

const argv = yarg
  .command('add', 'Add a new note', {
    title: titleOptions,
    body: bodyOptions
  })
  .command('list', 'List all notes')
  .command('read', 'Read a note', {
    title: titleOptions
  })
  .command('remove', 'Remove a note', {
    title: titleOptions
  })
  .help()
  .argv;

const command = argv._[0];

const run = async () => {

  try {
    if (command === 'add') {
      const note = await notes.add(argv.title, argv.body);
      console.log(`Note created: "${note.title}" --- "${note.body}"`);
    } else if (command === 'read') {
      const note = await notes.get(argv.title);
      if(note) {
        console.log(`Note found: "${note.title}" --- "${note.body}"`);
      } else {
        console.log(`Note not found: "${argv.title}"`);
      }
    } else if (command === 'remove') {
      const removedNotes = await(notes.remove(argv.title));
      if(removedNotes.length > 0) {
        console.log(`Note removed: "${argv.title}"`);
      } else {
        console.log(`Note not found: "${argv.title}"`);
      }
    } else if (command === 'list') {
      console.log(await notes.getAll());
    } else {
      console.log('Command not recognized');
    }
  } catch (err) {
    console.log(err);
  }

}

run();