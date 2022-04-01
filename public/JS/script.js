'use stric';

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

// const testList = [{date: '2022-03-01', time: '10:10:00'}, {date: '2022-03-01', time: '10:15:00'}, {date: '2022-03-01', time: '10:20:00'}, {date: '2022-03-02', time: '10:11:00'}, {date: '2022-04-01', time: '10:17:00'}, {date: '2022-03-02', time: '10:05:00'}];

// testList.sort((a, b) => a.time - b.time);
// testList.sort((a, b) => a.date - b.date);

// console.log(testList);

// const testList = [{timestamp: 202203011010}, {timestamp: 202203011015}, {timestamp: 202203011020}, {timestamp: 202203021011}, {timestamp: 202204011017}, {timestamp: 202203021005}]

// testList.sort((a, b) => b.timestamp - a.timestamp);

// console.log(testList);


