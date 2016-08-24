var mongoose = require( 'mongoose' );

var movieSchemaDefinition = {
	  title: { type: String },
	  rating: String,
	  releaseYear: Number,
	  hasCreditCookie: Boolean
	}

var movieSchema = new mongoose.Schema(movieSchemaDefinition);

movieSchema.statics.findAllWithCreditCookies = function(callback) {
	return this.find({ hasCreditCookie: true });
};


// Compile a 'Movie' model using the movieSchema as the structure.
// Mongoose also creates a MongoDB collection called 'Movies' for these documents.
var Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;