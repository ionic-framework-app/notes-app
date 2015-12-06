var express = require('express');
var bodyParser = require('body-parser');
var Note = require(__dirname + '/../models/note').Note;

var notesRouter = module.exports = express.Router();

notesRouter.get('/notes', function(req, res){
  Note.find({}, function(err, data){
    res.json(data);
  });
});

notesRouter.get('/notes/:id', function(req, res){
  Note.find({_id: req.params.id}, function(err, data){
    res.json(data);
  });
});

notesRouter.post('/notes', bodyParser.json(), function(req, res){
  var newNote = new Note(req.body);
  newNote.save(function(err, data){
    if (err) throw err;
    res.json(data);
  });
});

notesRouter.put('notes/:id', bodyParser.json(), function(req, res){
  var noteData = req.body;
  Note.update({_id: req.params.id}. noteData, function(err){
    if (err) throw err;
    res.json({msg: 'Note Updated!'});
  });
});

notesRouter.delete('/notes/:id', function(req, res) {
  Note.remove({_id: req.params.id}, function(err) {
    if (err) throw err;
    res.json({msg: 'success'});
  });
});
