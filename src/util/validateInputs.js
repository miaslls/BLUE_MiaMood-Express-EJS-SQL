'use strict';

const validateInputs = (mood) => {

    const validate_mood_id = (!mood.mood_id || isNaN(mood.mood_id) || mood.mood_id < 0 || mood.mood_id > 6);
    const validateForEmpty = (!mood.icon) || (!mood.date) || (!mood.time);
    const validate_timestamp = (!mood.timestamp || isNaN(mood.timestamp) || mood.timestamp.toString().length !== 14);
    const validate_createdat = (!mood.createdat || isNaN(mood.createdat) || mood.createdat.toString().length !== 14);

    if ((!mood) || (validate_mood_id) || (validateForEmpty) || validate_timestamp || validate_createdat) {
        res.redirect('/oops');
    }
}

module.exports = validateInputs;