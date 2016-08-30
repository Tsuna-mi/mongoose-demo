const Movie = process.getModel('movie');

function getMovieWithCookies( req, res ) {

	Movie.find({ hasCreditCookie: true })
		.then( (movies) => res.json(movies) )
		.catch( (err) => console.log(err) );

}

module.exports = getMovieWithCookies;