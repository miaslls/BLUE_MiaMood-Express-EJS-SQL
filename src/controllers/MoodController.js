'use strict';

const Mood = require('../models/Mood');

const getAll = async (req, res) => {
    try {
        const allMoods = await Mood.findAll();
        res.render('index', { allMoods });
    } catch (err) { // 👁‍🗨
        res.status(500).send({ err: err.message });
        console.log(err);
    }
}

const newMood = (req, res) => {
    try {
        res.render('newMood');
    } catch (err) {
        res.status(500).send({ err: err.message });
        console.log(err);

    }
}

const addMood = async (req, res) => {
    try {
        const mood = req.body;
        const allMoods = await Mood.findAll();

        for (let dbMood of allMoods) {
            if (mood.timestamp === dbMood.timestamp) {
                mood.timestamp = (Number(mood.timestamp) + 0.1).toString();
            }
        }

        if (!mood) {
            return res.redirect('/newMood');
        }

        await Mood.create(mood);
        res.redirect('/');

    } catch (err) {
        res.status(500).send({ err: err.message });
    }
}

module.exports = { getAll, newMood, addMood }