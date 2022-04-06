'use strict';

const getMoodStats = (moods) => {

    const moodStats = { 'sum': 0, 'average': 0, 'love':false, 'icon': '', '1': 0, '2': 0, '3': 0, '4':0, '5':0 }

    for (let mood of moods) {

        switch (mood.mood_id) {
            case 1: 
            moodStats['1']++;
            break;
            case 2: 
            moodStats['2']++;
            break;
            case 3: 
            moodStats['3']++;
            break;
            case 4: 
            moodStats['4']++;
            break;
            case 5: 
            moodStats['5']++;
            break;
            case 6: 
            moodStats.love = true
            break;
        }

        moodStats.sum += mood.mood_id;
    }
    
    const moodIcons = ['', '', '', '', ''];

    moodStats.average = Math.floor(moodStats.sum / 5);
    moodStats.icon = moodIcons[moodStats.average - 1];

    return moodStats;
    
}

module.exports = getMoodStats