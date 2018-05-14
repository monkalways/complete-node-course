const fs = require('fs');
const _ = require('lodash');

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

const notesFile = 'notes-data.json';

const fetchNotes = (callback) => {
  let err = null, 
      notes;
  fs.readFile(notesFile, (err, data) => {
    if(err) {
      err = err;
      notes = [];
    }
    try {
      notes = JSON.parse(data);
    } catch(err) {
      notes = [];
    }
    callback(err, notes);
  });
};

const saveNotes = notes => {
  fs.writeFile(notesFile, JSON.stringify(notes), err => {
    if(err) {
      throw err;
    }
  });
};

const add = (title, body, callback) => {
  fetchNotes((err, notes) => {

    let note;

    if(err) {
      err = err;
    }

    if(notes.filter(note => note.title === title).length > 0) {
      err = `Note with title "${title}" already exists`;
    } else {
      note = { title, body };
      notes.push(note);
      saveNotes(notes);
    }
  
    callback(err, note);
  });
};

const getAll = (callback) => fetchNotes(callback);

const get = (title) => {
  console.log('Getting one note', title);
};

const remove = (title) => {
  console.log('Removing one note', title);
}

module.exports = { add, getAll, get, remove };