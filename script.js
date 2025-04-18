
const display = document.getElementById("stopwatch");
const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");

let seconds = 0;
let interval = null;


function formatTime(sec) {
    const hrs = Math.floor(sec / 3600);
    const mins = Math.floor((sec % 3600) / 60);
    const secs = sec % 60;
    return `${pad(hrs)} : ${pad(mins)}: ${pad(secs)}`;
}

function pad(num) {
    return num < 10 ? "0" + num : num;
}

function updateDisplay() {
    display.textContent = formatTime(seconds);
}


function startTimer() {
    if (interval) return; 
    interval = setInterval(() => {
        seconds++;
        updateDisplay();
    }, 1000);
}


function stopTimer() {
    clearInterval(interval);
    interval = null;
}


function resetTimer() {
    stopTimer();
    seconds = 0;
    updateDisplay();
}


startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);


updateDisplay();
