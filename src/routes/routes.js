'use strict';

const routes = require('express').Router();
const MoodController = require('../controllers/MoodController');
const Mood = require('../models/Mood');

routes.get('/', MoodController.getAll);
routes.get('/newMood', MoodController.newMood);
routes.post('/add', MoodController.addMood);

module.exports = routes;