var Movie = require('../models/movie');

function findAll() {

	// Find all movies.
	Movie.find()
		.then( function(err, movies) {
			if (err) return console.error(err);
			console.log ("data found!!")
			console.dir(movies);
		})

}

module.exports = findAll