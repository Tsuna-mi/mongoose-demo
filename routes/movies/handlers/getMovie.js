var Movie = require('../../../models/movie');

function getMovie( req, res ) {

	var movieTitle;
	if (req.query && req.query.title) movieTitle = req.query.title;
	console.log ("looking for " + movieTitle)
	// Find a single movie by name.
	Movie.findOne({ title: movieTitle })
		.then(function(movieFound) {
			if (movieFound) {
				res.json(movieFound);
			}
			else {
				res.send("Movie not found!");
			}

		})
		.catch(function(err) {
			console.log(err);
		})


}

module.exports = getMovie