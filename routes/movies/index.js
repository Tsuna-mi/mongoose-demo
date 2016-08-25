var express = require("express");
var router = express.Router();

var getAll = require("./handlers/getAll")
var getMovie = require("./handlers/getMovie")
var getMovieWithCookies = require("./handlers/getMovieWithCookies")

router.get('/movies', getAll );
router.get('/movies/cookies', getMovieWithCookies );
router.get('/movie', getMovie );

module.exports = router;
