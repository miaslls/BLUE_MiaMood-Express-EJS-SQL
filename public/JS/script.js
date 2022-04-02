'use strict';

let navHint_byScreen = 'mood/LATEST';

// 📌 nav bar

const navHint = document.getElementById('nav_hint');
const navIconList = document.getElementsByClassName('nav_icon');

navHint.innerText = navHint_byScreen;

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

        navHint.innerText = navHint_byScreen;

    });
}