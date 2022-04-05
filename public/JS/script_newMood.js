'use strict';

const mood_idInput = document.getElementById('mood_idInput');
const iconInput = document.getElementById('iconInput');

const button = document.getElementById('addMoodBtn');
const btnIcon = document.getElementById('btnIcon');

// 📌

const defaultIconList = document.getElementsByClassName('moodIcon default');

for (let moodIcon of defaultIconList) {

    moodIcon.addEventListener('click', () => {

        mood_idInput.value = moodIcon.id;
        iconInput.value = moodIcon.innerText;

        button.disabled = false;
        button.setAttribute('class', `mood_${moodIcon.id} btnEnabled`);
        btnIcon.innerText = moodIcon.innerText;
    });
}

// 📌

const dateInput = document.getElementById('dateInput');
const timeInput = document.getElementById('timeInput');

const today = new Date();

const year = today.getFullYear().toString().padStart(4, "0");
const month = (today.getMonth() + 1).toString().padStart(2, "0");
const day = today.getDate().toString().padStart(2, "0");

const date = `${year}-${month}-${day}`;

const hours = today.getHours().toString().padStart(2, "0");
const minutes = today.getMinutes().toString().padStart(2, "0");
const seconds = today.getSeconds().toString().padStart(2, "0");

const time = `${hours}:${minutes}:${seconds}`;

dateInput.value = date;
timeInput.value = time;

// 📌

const createdatInput = document.getElementById('createdatInput');
const timestampInput = document.getElementById('timestampInput');

createdatInput.value = `${year}${month}${day}${hours}${minutes}${seconds}`;
timestampInput.value = `${year}${month}${day}${hours}${minutes}${seconds}`;

dateInput.addEventListener('input', (e) => {

    const newYear = (e.target.value).substr(0,4);
    const newMonth = (e.target.value).substr(5,2);
    const newDay = (e.target.value).substr(8,2);

    timeInput.value = '00:00:00';

    timestampInput.value = `${newYear}${newMonth}${newDay}000000`;
});

timeInput.addEventListener('input', (e) => {

    const newHours = (e.target.value).substr(0,2);
    const newMinutes = (e.target.value).substr(3,2);
    const newSeconds = (e.target.value).substr(3,2);
    const selectedYear = (dateInput.value).substr(0,4);
    const selectedMonth = (dateInput.value).substr(5,2);
    const selectedDay = (dateInput.value).substr(8,2);
    
    timestampInput.value = `${selectedYear}${selectedMonth}${selectedDay}${newHours}${newMinutes}${newSeconds}`;
});



// 📌

const customIconList = document.getElementsByClassName('moodIcon custom');

for (let customIcon of customIconList) {

    customIcon.addEventListener('click', () => {

        iconInput.value = customIcon.innerText;
        btnIcon.innerText = customIcon.innerText;

    });
}