const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');


const newYears = '1 Jan 2024';

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days.toLocaleString(undefined, { minimumIntegerDigits: 2 });
    hoursEl.innerHTML = hours.toLocaleString(undefined, { minimumIntegerDigits: 2 });;
    minutesEl.innerHTML = minutes.toLocaleString(undefined, { minimumIntegerDigits: 2 });;
    secondsEl.innerHTML = seconds.toLocaleString(undefined, { minimumIntegerDigits: 2 });;

    console.log(days, hours, minutes, seconds);
}

// initial call
countdown();
setInterval(countdown, 1000);

