var Movie = require('../../../models/movie');

function addMovie( thorDocData ) {

	var thor = new Movie(thorDocData);

	thor.save()
		.then(function(addedMovie) {
		  console.dir( addedMovie ) ;
		})
		.catch(function(err) {
			console.log(err);
		})

}

module.exports = addMovie;

// 	var thorDocData = {
// 		  title: 'Superman vs Batman',
// 		  rating: 'PG-13',
// 		  releaseYear: '2015', // Notice the use of a String rather than a Number - Mongoose will automatically convert this for us.
// 		  hasCreditCookie: true
// 	}
