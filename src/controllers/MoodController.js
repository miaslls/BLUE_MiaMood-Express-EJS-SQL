'use strict';

const res = require('express/lib/response');
const Mood = require('../models/Mood');
const formatMood = require('../util/formatMood');
const validateInputs = require('../util/validateInputs');

const oops = (req, res) => {
    res.render('oops');
}

const getAll = async (req, res) => {
    try {
        let moods = await Mood.findAll();
        moods.sort((a, b) => b.timestamp - a.timestamp);
        moods = formatMood(moods);

        res.render('allMoods', { moods, iconList, mood_put: null, mood_delete: null });
    } catch (err) {
        res.redirect('/oops');
        console.log(err);
    }
}

const getLatest = async (req, res) => {
    try {

        const allMoods = await Mood.findAll();
        allMoods.sort((a, b) => b.timestamp - a.timestamp);
        let moods = allMoods.slice(0, 7);
        moods = formatMood(moods);

        const flashMessages = req.flash('info');
        const message = flashMessages[flashMessages.length - 1];

        res.render('index', { moods, iconList, mood_put: null, mood_delete: null, message });
    } catch (err) {
        res.redirect('/oops');
        console.log(err);
    }
}

const getById = async (req, res) => {

    try {
        const method = req.params.method;
        const mood = await Mood.findByPk(req.params.id);

        if (method === 'put') {
            res.render('index', { mood_put: mood, mood_delete: null, iconList, message: null });
        } else {
            res.render('index', { mood_put: null, mood_delete: mood, iconList, message: null });
        }
    } catch (err) {
        res.redirect('/oops');
        console.log(err);
    }
}

const newMood = (req, res) => {
    try {
        res.render('newMood', { iconList });
    } catch (err) {
        res.redirect('/oops');
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
        res.redirect('/oops');
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
        res.redirect('/oops');
        console.log(err);
    }
}

const remove = async (req, res) => {
    try {
        await Mood.destroy({ where: { createdat: req.params.id } });
        req.flash('info', 'Mood DESTROYED');

        res.redirect('/');
    }
    catch (err) {
        res.redirect('/oops');
        console.log(err);
    }
}

// 📌

const iconList = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];

module.exports = { oops, getAll, getLatest, getById, newMood, remove, addMood, update }