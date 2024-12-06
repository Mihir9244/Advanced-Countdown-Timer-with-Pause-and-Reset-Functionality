let timer;
let remainingTime;
let isPaused = false;
let isRunning = false;

document.getElementById('startBtn').addEventListener('click', function () {
    const secondsInput = document.getElementById('secondsInput').value;
    if (!isRunning && secondsInput) {
        remainingTime = parseInt(secondsInput);
        startTimer();
        isRunning = true;
    }
});

document.getElementById('pauseBtn').addEventListener('click', function () {
    if (isRunning && !isPaused) {
        clearInterval(timer);
        isPaused = true;
    } else if (isRunning && isPaused) {
        startTimer();
        isPaused = false;
    }
});

document.getElementById('resetBtn').addEventListener('click', function () {
    clearInterval(timer);
    document.getElementById('display').innerHTML = '00:00';
    document.getElementById('secondsInput').value = '';
    isRunning = false;
    isPaused = false;
});

function startTimer() {
    timer = setInterval(function () {
        if (remainingTime > 0) {
            remainingTime--;
            displayTime(remainingTime);
        } else {
            clearInterval(timer);
            isRunning = false;
            alert('Time is up!');
        }
    }, 1000);
}

function displayTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    document.getElementById('display').innerHTML = 
        `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}
