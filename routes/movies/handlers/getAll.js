var Movie = require('../../../models/movie');

function getAll( req, res ) {

	// Find all movies.
	Movie.find()
		.then( function( movies) {
			res.json(movies);
		})
		.catch(function(err) {
			console.log(err);
		})

}

module.exports = getAll