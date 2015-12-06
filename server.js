var mongoose = require('mongoose');
var express = require('express');
var app = express();

var notesRouter = require(__dirname + '/routes/notes_routes');

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/notes_database');

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  next();
});

app.use('/api', notesRouter);

app.use(function(req, res){
  res.status(404).send('could not find file');
});

app.listen(process.env.PORT || 3000, function() {
  console.log('server up');
})
