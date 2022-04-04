'use strict';

// 📌 nav bar

const navHint = document.getElementById('nav_hint');
const navIconList = document.getElementsByClassName('nav_icon');

for (let icon of navIconList) {

    icon.addEventListener('mouseenter', () => {

        switch (icon.id) {
            case 'latestMoods':
                navHint.innerText = 'mood/LATEST';
                break;
            case 'calendar':
                navHint.innerText = 'mood/byDATE';
                break;
            case 'allMoods':
                navHint.innerText = 'mood/ALL';
                break;
            case 'newMood':
                navHint.innerText = 'mood/NEW';
        }
    });

    icon.addEventListener('mouseleave', () => {

        navHint.innerText = '';

    });
}

// 📌 mood options

const moodOptions = document.getElementsByClassName('mood_options');
const moodContainer = document.getElementsByClassName('mood_container');

for (let i = 0; i < moodContainer.length; i++) {
    moodContainer[i].addEventListener('mouseenter', () => {
        moodOptions[i].setAttribute('class', 'mood_options visible');
    });
}

for (let i = 0; i < moodContainer.length; i++) {
    moodContainer[i].addEventListener('mouseleave', () => {
        moodOptions[i].setAttribute('class', 'mood_options');
    });
}
