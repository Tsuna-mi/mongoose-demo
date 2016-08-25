const Movie = process.getModel('movie');

function getMovie( req, res ) {

	let title;
	if (req.query && req.query.title) title = req.query.title;

	// Find a single movie by name.
	Movie.findOne({ title })
		.then( (movieFound) => {

			if (movieFound) {
				res.json(movieFound);
			}
			else {
				res.send('Movie not found!');
			}

		})
		.catch( (err) => console.log(err) );


}

export default getMovie;