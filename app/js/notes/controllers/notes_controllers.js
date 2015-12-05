module.exports = function(app) {
  app.controller('NotesController', ['$scope', '$http', function($scope, $http) {
    $scope.note = [];
    $scope.errors = [];
    $scope.newNote = null;

    $scope.getAll = function() {
      $http.get('/api/notes')
        .then(function(res) {
          $scope.note = res.data;
        }, function(err) {
          console.log(err.data);
        });
    };

    $scope.create = function(note) {
      $http.post('/api/notes', note)
        .then(function(res) {
          $scope.note.push(res.data);
          $scope.newNote = null;
        }, function(err) {
          console.log(err.data)
        });
    };

    $scope.update = function(note) {
      note.editing = false;
      $http.put('/api/notes/' + note._id, note)
        .then(function(res) {
          console.log('this note has a been modified');
        }, function(err) {
          $scope.errors.push('could not get note ' + note.title + ' Note Land');
          console.log(err.data);
        });
    };

    $scope.remove = function(note) {
      $scope.note.splice($scope.note.indexOf(note), 1);
      $http.delete('/api/notes/' + note._id)
        .then(function(res) {
          console.log('note deleted');
        }, function(err) {
          console.log(err.data);
          $scope.errors.push('could not delete note: ' + note.name);
          $scope.getAll();
        });
    };
  }]);
};
