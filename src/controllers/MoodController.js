'use strict';

const Mood = require('../models/Mood');

const getAll = async (req, res) => {
    try {
        const allMoods = await Mood.findAll();

        allMoods.sort((a, b) => b.timestamp - a.timestamp);
        let latestMoods = allMoods.slice(0, 5);

        for (let mood of latestMoods) {
            const year = mood.date.substr(0, 4);
            const month = mood.date.substr(5, 2);
            const day = mood.date.substr(8, 2);

            mood.formattedDate_text = day + '.' + month + '.' + year;

            const dayNum = Number(day);
            const monthNum = Number(month);
            const monthList = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'semptember', 'october', 'november', 'december'];

            mood.formattedDate_title = monthList[monthNum - 1] + ' ' + dayNum + ', ' + year;

            let hours = Number(mood.time.substr(0, 2));
            const minutes = mood.time.substr(3,2);
            const seconds = mood.time.substr(6,2);
            let amPm = 'am';

            if (hours === 12) {
                amPm = 'pm';
            } else if (hours > 12) {
                hours -= 12;
                amPm = 'pm';
            }

            mood.formattedTime = hours.toString().padStart(2,'0') + ':' + minutes + ':' + seconds +amPm;
        }

        res.render('index', { latestMoods, mood_put: null, mood_del: null });
    } catch (err) {
        res.status(500).send({ err: err.message });
        console.log(err);
    }
}

const newMood = (req, res) => {
    try {

        const icon_list =  ["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];

        res.render('newMood', { icon_list });
    } catch (err) {
        res.status(500).send({ err: err.message });
        console.log(err);

    }
}

const addMood = async (req, res) => {
    try {
        const mood = req.body;

        if (!mood) {
            return res.redirect('/newMood');
        }

        await Mood.create(mood);
        res.redirect('/');

    } catch (err) {
        res.status(500).send({ err: err.message });
        console.log(err);
    }
}




module.exports = { getAll, newMood, addMood }