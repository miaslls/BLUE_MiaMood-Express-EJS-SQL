'use strict';

// 📌 nav bar hover

const navHint = document.getElementById('navHint');
const navIconList = document.getElementsByClassName('navIcon');

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

// 📌 mood options hover

const moodOptions = document.getElementsByClassName('moodOptions');
const moodContainer = document.getElementsByClassName('moodContainer');

for (let i = 0; i < moodContainer.length; i++) {
    moodContainer[i].addEventListener('mouseenter', () => {
        moodOptions[i].setAttribute('class', 'moodOptions visible');
    });
}

for (let i = 0; i < moodContainer.length; i++) {
    moodContainer[i].addEventListener('mouseleave', () => {
        moodOptions[i].setAttribute('class', 'moodOptions');
    });
}
