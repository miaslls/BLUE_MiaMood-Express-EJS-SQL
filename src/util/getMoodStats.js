'use strict';

const getMoodStats = (moods) => {

    const moodStats = { 'count': 0, 'sum': 0, 'average': 0, 'love': false, 'icon': '', '1': 0, '2': 0, '3': 0, '4': 0, '5': 0 }

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
                moodStats.love = true;
                break;
        }

        if (mood.mood_id > 0 && mood.mood_id < 6) {

            moodStats.count++;
            moodStats.sum += mood.mood_id;
        }
    }

    
    moodStats.average = Math.round(moodStats.sum / moodStats.count);
    
    if (moodStats.love === true) { moodStats.average++ } // love is a bonus ❤
    
    const moodIcons = ['', '', '', '', ''];
    moodStats.icon = moodIcons[moodStats.average - 1];

    console.log(moodStats); // 🐞

    return moodStats;
}

module.exports = getMoodStats