require('angular/angular');
var angular = window.angular;

var notesApp = angular.module('notesApp', []);
require('./notes/notes')(notesApp);
