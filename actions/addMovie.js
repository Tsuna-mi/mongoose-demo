var Movie = require('../models/movie');

function addMovie( thorDocData ) {

	var thor = new Movie(thorDocData);

	thor.save()
		.then(function(err, addedMovie) {
		  if (err) return console.error(err);
		  console.dir( addedMovie._doc ) ;
		});

}

module.exports = addMovie;