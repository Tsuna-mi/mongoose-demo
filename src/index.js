import express from 'express';
import morgan from 'morgan';
import db from './db';
import models from './models';
import routes from './routes/movies';
import bodyParser from 'body-parser';

let app = express();

let PORT =  process.env.PORT || 3006;
let dbURI = 'mongodb://localhost/test';

app.use( morgan('dev') );
app.use( bodyParser.json() ); // support json encoded bodies
app.use( bodyParser.urlencoded({ extended: true }) ); // support encoded bodies
app.use('/', routes);


db.connect(dbURI, () => {
	app.listen( PORT, () => console.log('Listening on port ' + PORT) );
});