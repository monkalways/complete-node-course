const fs = require('fs');
const _ = require('lodash');
const { promisify } = require("es6-promisify");

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

const notesFile = 'notes-data.json';

const fetchNotes = async () => {
  const data = await readFile(notesFile);
  try {
    return JSON.parse(data);
  } catch(err) {
    return [];
  }
};

const saveNotes = async (notes) => {
  await writeFile(notesFile, JSON.stringify(notes));
};

const add = async (title, body) => {
  const notes = await fetchNotes();

  if(notes.filter(note => note.title === title).length > 0) {
    throw new Error(`Note with title "${title}" already exists`);
  }

  note = { title, body };
  notes.push(note);
  saveNotes(notes);
  
  return note;
};

const getAll = async () => fetchNotes();

const get = async (title) => {
  const notes = await fetchNotes();
  return notes.find(note => note.title === title);
};

const remove = async (title) => {
  const notes = await fetchNotes();
  const removedNotes = _.remove(notes, note => note.title === title);
  await saveNotes(notes);
  return removedNotes;
}

module.exports = { add, getAll, get, remove };