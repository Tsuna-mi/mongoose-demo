const Movie = process.getModel('movie');

function addMovie( req, res ) {

	console.log(req.body)
	console.log(req.body.movie)
	let isThereMovie = req.body && req.body.movie;
	if (!isThereMovie) res.send("No movie to add!")

	let thorDocData = req.body.movie;
	let thor = new Movie(thorDocData);

	thor.save()
		.then( data => res.json(data) )
		.catch( (err) =>  console.log(err) );

}

module.exports = addMovie;

// 	var thorDocData = {
// 		  title: 'Superman vs Batman',
// 		  rating: 'PG-13',
// 		  releaseYear: '2015', // Notice the use of a String rather than a Number - Mongoose will automatically convert this for us.
// 		  hasCreditCookie: true
// 	}