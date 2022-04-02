'use strict';

navHint.innerText = 'mood/NEW';

const mood_id_input = document.getElementById('mood_id-input');
const icon_input = document.getElementById('icon-input');

const button = document.getElementById('addMood_btn');
const btn_icon = document.getElementById('btn_icon');

// 📌

const default_iconList = document.getElementsByClassName('mood-icon default');

for (let moodIcon of default_iconList) {

    moodIcon.addEventListener('click', () => {

        mood_id_input.value = moodIcon.id;
        icon_input.value = moodIcon.innerText;

        button.disabled = false;
        button.setAttribute('class', `mood_${moodIcon.id} btn_enabled`);
        btn_icon.innerText = moodIcon.innerText;
    });
}

// 📌

const date_input = document.getElementById('date-input');
const time_input = document.getElementById('time-input');

const today = new Date();

const year = today.getFullYear().toString().padStart(4, "0");
const month = (today.getMonth() + 1).toString().padStart(2, "0");
const day = today.getDate().toString().padStart(2, "0");

const date = `${year}-${month}-${day}`;

const hours = today.getHours().toString().padStart(2, "0");
const minutes = today.getMinutes().toString().padStart(2, "0");
const seconds = today.getSeconds().toString().padStart(2, "0");

const time = `${hours}:${minutes}:${seconds}`;

date_input.value = date;
time_input.value = time;

// 📌

const createdAt_input = document.getElementById('createdAt-input');
const timestamp_input = document.getElementById('timestamp-input');

createdAt_input.value = `${year}${month}${day}${hours}${minutes}${seconds}`;
timestamp_input.value = `${year}${month}${day}${hours}${minutes}${seconds}`;

date_input.addEventListener('input', (e) => {

    const newYear = (e.target.value).substr(0,4);
    const newMonth = (e.target.value).substr(5,2);
    const newDay = (e.target.value).substr(8,2);

    time_input.value = '00:00:00';

    timestamp_input.value = `${newYear}${newMonth}${newDay}000000`;
});

time_input.addEventListener('input', (e) => {

    const newHours = (e.target.value).substr(0,2);
    const newMinutes = (e.target.value).substr(3,2);
    const newSeconds = (e.target.value).substr(3,2);
    const selectedYear = (date_input.value).substr(0,4);
    const selectedMonth = (date_input.value).substr(5,2);
    const selectedDay = (date_input.value).substr(8,2);
    
    timestamp_input.value = `${selectedYear}${selectedMonth}${selectedDay}${newHours}${newMinutes}${newSeconds}`;
});



// 📌

const custom_iconList = document.getElementsByClassName('mood-icon custom');

for (let customIcon of custom_iconList) {

    customIcon.addEventListener('click', () => {

        icon_input.value = customIcon.innerText;
        btn_icon.innerText = customIcon.innerText;

    });
}