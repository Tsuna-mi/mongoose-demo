import mongoose from 'mongoose';

let movieSchemaDefinition = {
	title: { type: String },
	rating: String,
	releaseYear: Number,
	hasCreditCookie: Boolean
};

let movieSchema = new mongoose.Schema(movieSchemaDefinition);
let findWCookies = () => this.find({ hasCreditCookie: true }) ;

movieSchema.statics.findAllWithCreditCookies = findWCookies;

// Compile a 'Movie' model using the movieSchema as the structure.
// Mongoose also creates a MongoDB collection called 'Movies' for these documents.
let Movie = mongoose.model('Movie', movieSchema);

export default Movie;