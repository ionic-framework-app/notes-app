module.exports = function(app) {
  app.controller('NotesController', ['$http', '$ionicModal', function($http, $ionicModal){
    var server = 'http://' + SERVER_ADDRESS + '/api/notes';
    var handleError = function(res) {
      console.log(res);
    };
    this.notes = [];

    this.getAll = function() {
      $http.get(server)
        .then(function(res){
          this.notes = res.data
        }.bind(this), function(res){
          console.log(res);
        }.bind(this), handleError)
    }.bind(this);

    this.createNote = function(note) {
      $http.post(server, note)
      .then(function(res){
        this.notes.push(res.data);
        this.newNote = null;
      }.bind(this), handleError)
    }.bind(this);

    this.updateNote = function(note) {
      note.editing = false;
      $http.put(server + '/' + note._id, note)
        .then(function(res) {
          console.log(res);
        }.bind(this), handleError)
    }.bind(this);

    this.deleteNote = function(ninja) {
      this.notes.splice(this.notes.indexOf(note), 1);
      $http.delete(server + '/' + note._id)
        .then(function(res) {
          console.log(res);
        }.bind(this), handleError)
    }.bind(this);
  });
};
