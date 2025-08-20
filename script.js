let time = 10 * 60; // 10 minutes in seconds
const timerElement = document.getElementById("timer");
const restartBtn = document.getElementById("restart");
let timerInterval;

function updateTimer() {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  timerElement.textContent =
    `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  if (time > 0) {
    time--;
  } else {
    clearInterval(timerInterval);
    timerElement.textContent = "⏰ Time's up!";
    timerElement.classList.remove("pulse");
    timerElement.style.color = "#FFD700";
  }
}

function startTimer() {
  clearInterval(timerInterval);
  time = 10 * 60;
  timerElement.style.color = "#fff";
  timerElement.classList.add("pulse");
  updateTimer();
  timerInterval = setInterval(updateTimer, 1000);
}

restartBtn.addEventListener("click", startTimer);

// Start automatically
startTimer();
