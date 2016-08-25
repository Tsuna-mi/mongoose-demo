import Movie from '../../../models/movie';

function getMovieWithCookies( req, res ) {

	// Find all movies that have a credit cookie.

	//Movie.find({ hasCreditCookie: true })
	Movie.findAllWithCreditCookies()
		.then( (movies) => res.json(movies) )
		.catch( (err) => console.log(err) );

}

export default getMovieWithCookies;