'use strict';

const routes = require('express').Router();
const MoodController = require('../controllers/MoodController');

routes.get('/', MoodController.getLatest);
routes.get('/allMoods', MoodController.getAll);

routes.get('/newMood', MoodController.newMood);
routes.post('/add', MoodController.addMood);

routes.get('/updateMood/:id', MoodController.updateMood);
routes.post('/update/:id', MoodController.update);

routes.get('/deleteMood/:id', MoodController.deleteMood);
routes.get('/remove/:id', MoodController.remove)

routes.get('/oops', MoodController.oops);

module.exports = routes;
