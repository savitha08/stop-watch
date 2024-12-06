let minutes = 0,
  seconds = 0,
  milliseconds = 0;
let timerInterval;
let isRunning = false;

const display = document.getElementById("display");
const startBtn = document.getElementById("start-btn");
const pauseBtn = document.getElementById("pause-btn");
const resetBtn = document.getElementById("reset-btn");

// Update the display
function updateDisplay() {
  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = seconds.toString().padStart(2, "0");
  const formattedMilliseconds = milliseconds.toString().padStart(3, "0");

  display.textContent = `${formattedMinutes}:${formattedSeconds}:${formattedMilliseconds}`;
}

// Start the timer
function startTimer() {
  if (isRunning) return;
  isRunning = true;

  timerInterval = setInterval(() => {
    milliseconds += 10;
    if (milliseconds >= 1000) {
      milliseconds = 0;
      seconds++;
    }
    if (seconds >= 60) {
      seconds = 0;
      minutes++;
    }
    updateDisplay();
  }, 10);

  startBtn.disabled = true;
  pauseBtn.disabled = false;
  resetBtn.disabled = false;
}

// Pause the timer
function pauseTimer() {
  isRunning = false;
  clearInterval(timerInterval);

  startBtn.disabled = false;
  pauseBtn.disabled = true;
}

// Reset the timer
function resetTimer() {
  isRunning = false;
  clearInterval(timerInterval);

  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  updateDisplay();

  startBtn.disabled = false;
  pauseBtn.disabled = true;
  resetBtn.disabled = true;
}

// Event Listeners
startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);

// Initialize the display
updateDisplay();
