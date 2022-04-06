'use strict';

const routes = require('express').Router();
const MoodController = require('../controllers/MoodController');

// routes.get('/', MoodController.getLatest);
// routes.get('/allMoods', MoodController.getAll);
// routes.get('/newMood', MoodController.newMood);

// routes.get('/updateMood/:id', MoodController.updateMood);

// routes.get('/destroyMood/:id', MoodController.deleteMood);


routes.get('/', MoodController.getLatest);
routes.get('/allMoods', MoodController.getAll);
routes.get('/newMood', MoodController.newMood);
routes.post('/add', MoodController.addMood);

routes.get('/updateMood/:id', MoodController.updateMood);
routes.post('/update/:id', MoodController.update);

routes.get('/destroyMood/:id', MoodController.destroyMood);
routes.get('/destroy/:id', MoodController.destroy)

routes.get('/oops', MoodController.oops);

module.exports = routes;
