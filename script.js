let time = 10 * 60; // 10 minutes in seconds
const timerElement = document.getElementById("timer");

function updateTimer() {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  timerElement.textContent =
    `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  if (time > 0) {
    time--;
  } else {
    clearInterval(timerInterval);
    timerElement.textContent = "Time's up!";
  }
}

updateTimer();
const timerInterval = setInterval(updateTimer, 1000);
