import express from 'express';
import addMovie from './handlers/addMovie';
import getAll from './handlers/getAll';
import getMovie from './handlers/getMovie';
import getMovieWithCookies from './handlers/getMovieWithCookies';

let router = express.Router();

router.get('/movies', getAll );
router.get('/movies/cookies', getMovieWithCookies );
router.get('/movie', getMovie );

router.post('/movie', addMovie );

export default router;