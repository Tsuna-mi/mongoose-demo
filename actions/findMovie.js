var Movie = require('../models/movie');

function findMovie( movieTitle ) {

	// Find a single movie by name.
	Movie.findOne({ title: movieTitle })
		.then(function(err, movieFound) {
			if (err) return console.error(err);
			console.dir(movieFound);
		});

}

module.exports = findMovie