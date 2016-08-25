var mongoose = require( 'mongoose' );
mongoose.Promise = global.Promise;
var db = mongoose.connection;

db.on('error',function (err) {
  console.log('Mongoose default connection error: ' + err);
});

// When the connection is disconnected
db.on('disconnected', function () {
  console.log('Mongoose default connection disconnected');
});

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', function() {
  db.close(function () {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});

module.exports.connect = function( dbURI, callback ) {

	// When the connection to DB is done
	db.on('connected', function () {
	  console.log('Mongoose default connection open to ' + dbURI);
	  callback();
	});

	db.open(dbURI);

};