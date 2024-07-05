let startTime;
let updatedTime;
let difference;
let tInterval;
let running = false;
let resetTime = false;

const display = document.querySelector('.display');
const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');

startStopBtn.addEventListener('click', () => {
    if (!running) {
        startTime = new Date().getTime();
        tInterval = setInterval(getShowTime, 1);
        running = true;
        startStopBtn.textContent = 'Pause';
    } else {
        clearInterval(tInterval);
        running = false;
        startStopBtn.textContent = 'Start';
    }
});

resetBtn.addEventListener('click', () => {
    clearInterval(tInterval);
    running = false;
    display.textContent = '00:00:00';
    startStopBtn.textContent = 'Start';
});

function getShowTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    display.textContent = hours + ':' + minutes + ':' + seconds;
}
