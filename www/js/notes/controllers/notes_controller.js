module.exports = function(app) {
  app.controller('NotesController', ['$http', function($http){
    var server = 'http://' + SERVER_ADDRESS + '/api/notes';
    var handleError = function(res) {
      console.log(res);
    };
    this.notes = [];
    this.orig = {};

    this.getAll = function() {
      $http.get(server)
        .then(function(res){
          this.notes = res.data
        }.bind(this), function(res){
          console.log(res);
        }.bind(this));
    }.bind(this);

    this.createNote = function(note) {
      $http.post(server, note)
      .then(function(res){
        this.notes.push(res.data);
        this.newNote = null;
      }.bind(this), handleError)
    }.bind(this);

    this.deleteNote = function(note) {
      $http.delete(server + '/' + note._id, note)
        .then(function(res){
          this.notes.splice(this.notes.indexOf(note), 1);
        }.bind(this), handleError)
    }

    this.updateNote = function(note) {
      note.editing = false;
      $http.put(server + '/' + note._id, note)
        .then(function(res){
          console.log('Update/PUT successful.');
        }.bind(this), handleError)
    }.bind(this);

    this.edit = function(note) {
      this.orig.title = note.title;
      this.orig.noteBody = note.noteBody;
      note.editing = true;
      console.log('Edit saved.');
    };

    this.cancelEdit = function(note) {
      note.title = this.orig.title;
      note.noteBody = this.orig.noteBody;
      note.editing = false;
      console.log('Edit cancelled.');
    };

  }])
};

