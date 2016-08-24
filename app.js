var mongoose = require('mongoose');

var addMovie = require('./actions/addMovie');

var findAll = require('./actions/findAll');
var findMovie = require('./actions/findMovie');
var findWithCookie = require('./actions/findWithCookie');

var db = mongoose.connection;

db.on('error', console.error);
db.once('open', function() {

	// ---- Create your schemas and models here. ----

	var thorDocData = {
		  title: 'Superman vs Batman',
		  rating: 'PG-13',
		  releaseYear: '2015', // Notice the use of a String rather than a Number - Mongoose will automatically convert this for us.
		  hasCreditCookie: true
	}

	//addMovie(thorDocData);
	//findAll();
	//findMovie('Spiderman');
	findWithCookie();


});

mongoose.connect('mongodb://localhost/test');