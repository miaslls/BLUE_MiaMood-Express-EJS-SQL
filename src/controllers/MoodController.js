'use strict';

const res = require('express/lib/response');
const Mood = require('../models/Mood');
let message = null;

const getAll = async (req, res) => {
    try {
        let moods = await Mood.findAll();
        moods.sort((a, b) => b.timestamp - a.timestamp);
        moods = formatMood(moods);

        res.render('allMoods', { moods, icon_list, mood_put: null, mood_delete: null, message });
    } catch (err) {
        res.redirect('/oops', { message });
        console.log(err);
    }
}

const getLatest = async (req, res) => {
    try {

        setTimeout(() => {
            message = null;
        }, 1000);

        const allMoods = await Mood.findAll();
        allMoods.sort((a, b) => b.timestamp - a.timestamp);
        let moods = allMoods.slice(0, 7);
        moods = formatMood(moods);

        res.render('index', { moods, icon_list, mood_put: null, mood_delete: null, message });
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
            res.render('index', { mood_put: mood, mood_delete: null, icon_list, message });
        } else {
            res.render('index', { mood_put: null, mood_delete: mood, icon_list, message });
        }
    } catch (err) {
        res.redirect('/oops');
        console.log(err);
    }
}

const newMood = (req, res) => {
    try {
        res.render('newMood', { icon_list, message });
    } catch (err) {
        res.redirect('/oops');
        console.log(err);
    }
}

const addMood = async (req, res) => {
    try {
        const mood = req.body;
        // validateInputs(mood);

        await Mood.create(mood);

        message = 'Mood CREATED';
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

        message = 'Mood UPDATED';
        res.redirect('/');
    } catch (err) {
        res.redirect('/oops');
        console.log(err);
    }
}

const remove = async (req, res) => {
    try {
        await Mood.destroy({ where: { createdat: req.params.id } });

        message = 'Mood DESTROYED';
        res.redirect('/');
    }
    catch (err) {
        res.redirect('/oops');
        console.log(err);
    }
}

// 📌 formatting

const formatMood = (moodList) => {

    for (let mood of moodList) {
        mood.formattedDate_text = formatMoodDate_text(mood);
        mood.formattedDate_title = formatMoodDate_title(mood);
        mood.formattedTime = formatMoodTime(mood);
    }
    return moodList;
}

const formatMoodDate_text = (mood) => {

    const year = mood.date.substr(0, 4);
    const month = mood.date.substr(5, 2);
    const day = mood.date.substr(8, 2);

    return `${day}.${month}.${year}`;
}

const formatMoodDate_title = (mood) => {

    const year = mood.date.substr(0, 4);
    const month = Number(mood.date.substr(5, 2));
    const day = Number(mood.date.substr(8, 2));
    const monthList = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'semptember', 'october', 'november', 'december'];

    return `${monthList[month - 1]} ${day}, ${year}`;
}

const formatMoodTime = (mood) => {

    let hours = Number(mood.time.substr(0, 2));
    const minutes = mood.time.substr(3, 2);
    const seconds = mood.time.substr(6, 2);
    let amPm = 'am';

    if (hours === 12) {
        amPm = 'pm';
    } else if (hours > 12) {
        hours -= 12;
        amPm = 'pm';
    }

    return hours.toString().padStart(2, '0') + ':' + minutes + ':' + seconds + amPm;
}

// 📌 validation

const validateInputs = (mood) => {

    const validate_mood_id = (!mood.mood_id || isNaN(mood.mood_id) || mood.mood_id < 0 || mood.mood_id > 6);
    const validateForEmpty = (!mood.icon) || (!mood.date) || (!mood.time);
    const validate_timestamp = (!mood.timestamp || isNaN(mood.timestamp) || mood.timestamp.toString().length !== 14);
    const validate_createdat = (!mood.createdat || isNaN(mood.createdat) || mood.createdat.toString().length !== 14);

    if ((!mood) || (validate_mood_id) || (validateForEmpty) || validate_timestamp || validate_createdat) {
        res.redirect('/oops');
    }
}

const oops = (req, res) => {
    res.render('oops', { message });
}

const icon_list = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];

module.exports = { oops, getAll, getLatest, getById, newMood, remove, addMood, update }