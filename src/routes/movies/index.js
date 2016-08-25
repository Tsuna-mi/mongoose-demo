import express from 'express';
import getAll from './handlers/getAll';
import getMovie from './handlers/getMovie';
import getMovieWithCookies from './handlers/getMovieWithCookies';

let router = express.Router();

router.get('/movies', getAll );
router.get('/movies/cookies', getMovieWithCookies );
router.get('/movie', getMovie );

export default router;