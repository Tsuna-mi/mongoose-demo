import express from 'express';
import morgan from 'morgan';
import db from './db';
import routes from './routes/movies';

let app = express();

let PORT =  process.env.PORT || 3006;
let dbURI = 'mongodb://localhost/test';

app.use( morgan('combined') );
app.use('/', routes);


db.connect(dbURI, () => {
	app.listen( PORT, () => console.log('Listening on port ' + PORT) );
});