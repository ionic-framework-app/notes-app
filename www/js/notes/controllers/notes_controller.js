module.exports = function(app) {
  app.controller('NotesController', ['$http', '$ionicModal', function($http, $ionicModal){
    var server = 'http://' + SERVER_ADDRESS + '/api/notes';
    var handleError = function(res) {
      console.log(res);
    };
    this.notes = [
      { title: 'Note #1', noteBody: 'First test note.'},
      { title: 'Note #2', noteBody: 'Second test note.'}
    ];

    this.getAll = function() {
      $http.get(server)
        .then(function(res){
          this.notes = res.data
        }.bind(this), function(res){
          console.log(res);
        }.bind(this));
    }.bind(this);

    this.createNote = function(note) {
      $http.post(server,note)
      .then(function(res){
        this.notes.push(res.data);
        this.newNote = null;
      }.bind(this), handleError)
    }.bind(this);

    this.deleteNote = function(note) {
      $http.delete(server + '/' + note._id)
        .then(function(res){
          this.notes.splice(this.notes.indexOf(note), 1);
        }.bind(this), handleError)
    }
  }])
};

//     $scope.update = function(note) {
//       note.editing = false;
//       $http.put('/api/notes/' + note._id, note)
//         .then(function(res) {
//           console.log('Update successful.');
//         }, function(err) {
//           $scope.errors.push('Could not update.');
//           console.log(err.data);
//         });
//     };
