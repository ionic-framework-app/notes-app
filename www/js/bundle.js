/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	// Ionic Starter App

	// angular.module is a global place for creating, registering and retrieving Angular modules
	// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
	// the 2nd parameter is an array of 'requires'
	var angular = window.angular;
	var notesApp = angular.module('starter', ['ionic']);

	notesApp.config(['$httpProvider', function($http) {
	  $http.defaults.useXDomain = true;
	}]);

	__webpack_require__(1)(notesApp);

	notesApp.run(['$ionicPlatform', function($ionicPlatform) {
	  $ionicPlatform.ready(function() {
	    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
	    // for form inputs)
	    if(window.cordova && window.cordova.plugins.Keyboard) {
	      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
	    }
	    if(window.StatusBar) {
	      StatusBar.styleDefault();
	    }
	  });
	}]);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(app) {
	  __webpack_require__(2)(app);
	};


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(app) {

	  app.controller('NotesController', ['$http', '$ionicModal', function($http, $ionicModal){
	    var server = 'http://' + ("10.0.2.15:3000") + '/api/notes';
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
	        }.bind(this), handleError)
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
	    }.bind(this);

	    this.updateNote = function(note) {
	      note.editing = false;
	      $http.put(server + '/' + note._id, note)
	        .then(function(res){
	          // console.log('Update/PUT complete.');
	        }.bind(this), handleError)
	    }.bind(this);

	    this.edit = function(note) {
	      this.orig = angular.copy(note);
	      note.editing = true;
	    }.bind(this);

	    this.cancelEdit = function(note) {
	        angular.copy(this.orig, note);
	        note.editing = false;
	    }.bind(this);

	  }])
	};


/***/ }
/******/ ]);