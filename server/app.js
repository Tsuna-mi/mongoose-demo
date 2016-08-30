const express = require('express');
const morgan = require('morgan');
const models = require('./models');
const routes = require('./routes/movies');
const bodyParser = require('body-parser');

let app = express();

app.use( morgan('dev') );
app.use( bodyParser.json() ); // support json encoded bodies
app.use( bodyParser.urlencoded({ extended: true }) ); // support encoded bodies
app.use('/', routes);

module.exports = app;