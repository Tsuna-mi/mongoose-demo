import Movie from '../../../models/movie';

function getAll( req, res ) {

	// Find all movies.
	Movie.find()
		.then( ( movies) => res.json(movies) )
		.catch( (err) => console.log(err) );

}

export default getAll;