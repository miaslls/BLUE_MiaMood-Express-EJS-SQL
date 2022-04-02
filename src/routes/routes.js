'use strict';

const routes = require('express').Router();
const MoodController = require('../controllers/MoodController');

routes.get('/', MoodController.getLatest);
routes.get('/oops', MoodController.oops);
routes.get('/allMoods', MoodController.getAll);
routes.get('/newMood', MoodController.newMood);
routes.post('/add', MoodController.addMood);

module.exports = routes;
