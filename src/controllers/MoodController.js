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
        let moods = await Mood.findAll({ order: [['timestamp', 'DESC']] });

        moods = formatMood(moods);

        res.render('allMoods', { moods, iconList });
    } catch (err) {
        res.redirect('/oops');
        console.log(err);
    }
}

const getLatest = async (req, res) => {
    try {

        let moods = await Mood.findAll({order: [['timestamp', 'DESC']], limit: 7});

        moods = formatMood(moods);

        const flashMessages = req.flash('info');
        const message = flashMessages[flashMessages.length - 1];

        res.render('index', { moods, iconList, message });
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

const updateMood = async (req,res) => {
    try {
        const mood_put = await Mood.findByPk(req.params.id);

        res.render('updateMood', { mood_put, iconList });
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

const deleteMood = async (req,res) => {
    try {
        const mood_delete = await Mood.findByPk(req.params.id);

        res.render('deleteMood', { mood_delete, iconList });
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

module.exports = { oops, getAll, getLatest, newMood, addMood, updateMood, update, deleteMood, remove }