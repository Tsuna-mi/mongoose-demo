var mongoose = require('mongoose');
var express = require('express');

var db = require('./db');

var routes = require('./routes/movies')

var app = express();

var PORT =  process.env.PORT || 3005;
var dbURI = 'mongodb://localhost/test';

app.use('/', routes);

db.connect(dbURI, function () {

  app.listen( PORT, function() {
		console.log("Listening on port " + PORT);
	});

});