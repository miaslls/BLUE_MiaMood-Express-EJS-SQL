'use strict';

const res = require('express/lib/response');
const Mood = require('../models/Mood');
const { formatMood, formatMoods } = require('../util/formatMoods');
const validateInputs = require('../util/validateInputs');

const getLatest = async (req, res) => {
    try {

        const today = new Date();

        const year = today.getFullYear().toString().padStart(4, "0");
        const month = (today.getMonth() + 1).toString().padStart(2, "0");
        const day = today.getDate().toString().padStart(2, "0");

        const dateToday = `${year}-${month}-${day}`;

        let moods = await Mood.findAll({ order: [['timestamp', 'DESC']], where: { date: dateToday } });

        console.log(moods[0]); // 🐞

        if (!moods[0]) {
            res.render('noMood');
        } else {

            formatMoods(moods);

            const flashMessages = req.flash('info');
            const message = flashMessages[flashMessages.length - 1];

            res.render('index', { moods, message });
        }
    } catch (err) {
        res.render('/oops');
        console.log(err);
    }
}

const getAll = async (req, res) => {
    try {
        let moods = await Mood.findAll({ order: [['timestamp', 'DESC']] });

        formatMoods(moods);

        res.render('allMoods', { moods, iconList });
    } catch (err) {
        res.render('/oops');
        console.log(err);
    }
}

const newMood = (req, res) => {
    try {
        res.render('newMood', { iconList });
    } catch (err) {
        res.render('/oops');
        console.log(err);
    }
}

const addMood = async (req, res) => {
    try {
        const mood = req.body;
        validateInputs(mood);

        await Mood.create(mood);
        req.flash('info', 'Mood CREATED');

        res.redirect('/');
    } catch (err) {
        res.render('/oops');
        console.log(err);
    }
}

const updateMood = async (req, res) => {
    try {
        let mood_put = await Mood.findByPk(req.params.id);

        formatMood(mood_put);

        res.render('updateMood', { mood_put, iconList });
    } catch (err) {
        res.render('/oops');
        console.log(err);
    }
}

const update = async (req, res) => {
    try {
        const mood = req.body;

        await Mood.update(mood, { where: { createdat: req.params.id } });
        req.flash('info', 'Mood UPDATED');

        res.redirect('/');
    } catch (err) {
        res.render('/oops');
        console.log(err);
    }
}

const destroyMood = async (req, res) => {
    try {
        const mood_delete = await Mood.findByPk(req.params.id);

        formatMood(mood_delete);

        res.render('destroyMood', { mood_delete, iconList });
    } catch (err) {
        res.render('/oops');
        console.log(err);
    }
}

const destroy = async (req, res) => {
    try {
        await Mood.destroy({ where: { createdat: req.params.id } });
        req.flash('info', 'Mood DESTROYED');

        res.redirect('/');
    }
    catch (err) {
        res.render('/oops');
        console.log(err);
    }
}

// 📌

const iconList = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];

module.exports = { getAll, getLatest, newMood, addMood, updateMood, update, destroyMood, destroy }