const express = require('express');
const addMovie = require('./handlers/addMovie');
const getAll = require('./handlers/getAll');
const getMovie = require('./handlers/getMovie');
const getMovieWithCookies = require('./handlers/getMovieWithCookies');

let router = express.Router();

router.get('/movies', getAll );
router.get('/movies/cookies', getMovieWithCookies );
router.get('/movie', getMovie );

router.post('/movie', addMovie );

module.exports = router;