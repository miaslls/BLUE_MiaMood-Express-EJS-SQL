'use strict';

const routes = require('express').Router();
const MoodController = require('../controllers/MoodController');

routes.get('/', MoodController.getLatest);
routes.get('/oops', MoodController.oops);
routes.get('/allMoods', MoodController.getAll);
routes.get('/newMood', MoodController.newMood);
routes.get('/getById/:id/:method', MoodController.getById);

routes.post('/add', MoodController.addMood);
routes.post('/update/:id', MoodController.update)

module.exports = routes;
