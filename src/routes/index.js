const express = require('express');
const router = express.Router();
const actorsRouter = require('./actors.router');
const directorsRouter = require('./directors.router');
const genresRouter = require('./genres.router');
const moviesRouter = require('./movies.router');
const { setMoviesGenres, setMoviesActors } = require('../controllers/movies.controllers');


// colocar las rutas aquí
router.use(actorsRouter);
router.use(directorsRouter);
router.use(genresRouter);
router.use(moviesRouter);
router.use(setMoviesGenres);
router.use(setMoviesActors)


module.exports = router;