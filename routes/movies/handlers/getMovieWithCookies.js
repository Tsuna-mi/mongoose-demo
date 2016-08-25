var Movie = require('../../../models/movie');

function getMovieWithCookies( req, res ) {

	// Find all movies that have a credit cookie.

	//Movie.find({ hasCreditCookie: true })
	Movie.findAllWithCreditCookies()
		.then(function(movies) {
			res.json(movies);
		})
		.catch(function(err) {
			console.log(err);
		})

}

module.exports = getMovieWithCookies