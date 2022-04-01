'use strict';

const dateList = document.getElementsByClassName('date');
const timeList = document.getElementsByClassName('time');

for (let date of dateList) {

    const year = date.innerText.substr(0, 4);
    const month = date.innerText.substr(5, 2);
    const day = date.innerText.substr(8, 2);

    date.innerText = day + '.' + month + '.' + year;
}

for (let time of timeList) {

    let hours = Number(time.innerText.substr(0, 2));
    const minutes = time.innerText.substr(3,2);
    let amPm = 'am';

    if (hours === 12) {
        amPm = 'pm';
    } else if (hours > 12) {
        hours -= 12;
        amPm = 'pm';
    }

    time.innerText = hours.toString().padStart(2,'0') + ':' + minutes + amPm;

}