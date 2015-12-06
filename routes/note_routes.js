var express = require('express');
var bodyParser = require('body-parser');
var Notes = require(__dirname + '/../models/note');
var handleServerError = require(__dirname + '/../lib/handle_server_error');

var notesRouter = module.exports = exports = express.Router();

notesRouter.get('/notes', function(req, res) {
  Notes.find({}, function(err, data) {
    if (err) return handleServerError(err, res);
    res.json(data);
  });
});

notesRouter.post('/notes', bodyParser.json(), function(req, res) {
  var newNotes = new Notes(req.body);
  newNotes.save(function(err, data) {
    if (err) return handleServerError(err, res);
    res.json(data);
  });
});

notesRouter.put('/notes/:id', bodyParser.json(), function(req, res) {
  var notesData = req.body;
  delete notesData._id;
  Notes.update({_id: req.params.id}, notesData, function(err) {
    if (err) return handleServerError(err, res);
    res.json({msg: 'Update succssful!'});
  });
});

notesRouter.delete('/notes/:id', function(req, res) {
  Notes.remove({_id: req.params.id}, function(err) {
    if (err) return handleServerError(err, res);
    res.json({msg: 'Delete successful!'});
  });
});
