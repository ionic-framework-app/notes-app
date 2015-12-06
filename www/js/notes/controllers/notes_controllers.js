var angular = window.angular;
module.exports = function(app) {
  app.controller('NotesController', ['$scope', '$http', function($scope, $http) {
    $scope.notes = [];
    $scope.errors = [];
    $scope.newNote = null;

    $scope.getAll = function() {
      $http.get('/api/notes')
        .then(function(res) {
          $scope.notes = res.data;
        }, function(err) {
          console.log(err.data);
        });
    };

    $scope.create = function(note) {
      $http.post('/api/notes', note)
        .then(function(res) {
          $scope.notes.push(res.data);
          $scope.newNote = null;
        }, function(err) {
          console.log(err.data)
        });
    };

    $scope.update = function(note) {
      note.editing = false;
      $http.put('/api/notes/' + note._id, note)
        .then(function(res) {
          console.log('Update successful.');
        }, function(err) {
          $scope.errors.push('Could not update.');
          console.log(err.data);
        });
    };

    $scope.delete = function(note) {
      $scope.notes.splice($scope.note.indexOf(note), 1);
      $http.delete('/api/notes/' + note._id)
        .then(function(res) {
          console.log('Note deleted.');
        }, function(err) {
          console.log(err.data);
          $scope.errors.push('Could not delete.');
          $scope.getAll();
        });
    };
  }]);
};
