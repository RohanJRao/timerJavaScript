let timerInterval;
let minutes = 0;
let seconds = 0;

function startTimer() {
    timerInterval = setInterval(updateTimer, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function resetTimer() {
    clearInterval(timerInterval); //clear the interval
    minutes = 0; //reset the values
    seconds = 0;
    updateTimerDisplay();
}

function updateTimer() {
    seconds++; //for every 1000ms increment the seconds variable value
    if (seconds === 60) { //when it is 60 reset seconds variable and start incrementing the minutes
        minutes++;
        seconds = 0;
    }
    updateTimerDisplay(); //update the display after value is updated
}

//function to update the display
function updateTimerDisplay() {
    const timerMinutes = document.querySelector('.timerMinutes');
    const timerSeconds = document.querySelector('.timerSeconds');
    timerMinutes.textContent = String(minutes).padStart(2, '0');
    timerSeconds.textContent = String(seconds).padStart(2, '0');
}
