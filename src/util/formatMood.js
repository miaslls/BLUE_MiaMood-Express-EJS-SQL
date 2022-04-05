'use strict';

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

module.exports = formatMood;