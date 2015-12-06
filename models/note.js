var mongoose = require('mongoose');

var noteSchema = mongoose.Schema({
  title: String,
  noteBody: String
});

var Note = module.exports.Note = mongoose.model('Note', noteSchema);
