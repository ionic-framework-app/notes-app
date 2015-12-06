var express = require('express');
var bodyParser = require('body-parser');
var Note = require(__dirname + '/../models/note');
var handleServerError = require(__dirname + '/../lib/handle_server_error');

var notesRouter = module.exports = exports = express.Router();

notesRouter.get('/notes', function(req, res) {
  Note.find({}, function(err, data) {
    if (err) return handleServerError(err, res);
    res.json(data);
  });
});

notesRouter.post('/notes', bodyParser.json(), function(req, res) {
  var newNote = new Note(req.body);
  newNote.save(function(err, data) {
    if (err) return handleServerError(err, res);
    res.json(data);
  });
});

notesRouter.put('/notes/:id', bodyParser.json(), function(req, res) {
  var noteData = req.body;
  delete noteData._id;
  Note.update({_id: req.params.id}, noteData, function(err) {
    if (err) return handleServerError(err, res);
    res.json({msg:'Update successful!'});
  });
});

notesRouter.delete('/notes/:id', function(req, res) {
  Note.remove({_id: req.params.id}, function(err) {
    if (err) return handleServerError(err, res);
    res.json({msg:'Delete successful!'});
  });
});
