var Movie = require('../models/movie');

function findWithCookie() {

	// Find all movies that have a credit cookie.

	//Movie.find({ hasCreditCookie: true })
	Movie.findAllWithCreditCookies()
		.then(function(err, moviesFound) {
			if (err) return console.error(err);
			console.log( moviesFound.length + " movies found!" );
			console.dir( moviesFound );
		});

}

module.exports = findWithCookie