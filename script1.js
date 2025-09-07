let timer;
let isRunning = false;
let elapsedTime = 0; // in milliseconds
let startTime;

function updateTime() {
  const now = Date.now();
  elapsedTime = now - startTime + elapsedTime;
  startTime = now;

  const totalSeconds = Math.floor(elapsedTime / 1000);
  const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
  const seconds = String(totalSeconds % 60).padStart(2, '0');

  document.getElementById("display").textContent = `${hours}:${minutes}:${seconds}`;
}

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    startTime = Date.now();
    timer = setInterval(updateTime, 1000);
  }
}

function pauseTimer() {
  if (isRunning) {
    clearInterval(timer);
    isRunning = false;
  }
}

function resetTimer() {
  clearInterval(timer);
  isRunning = false;
  elapsedTime = 0;
  document.getElementById("display").textContent = "00:00:00";
  document.getElementById("laps").innerHTML = "";
}

function lapTime() {
  if (isRunning || elapsedTime > 0) {
    const lap = document.getElementById("display").textContent;
    const lapList = document.getElementById("laps");
    const lapItem = document.createElement("p");
    lapItem.textContent = `Lap: ${lap}`;
    lapList.appendChild(lapItem);
  }
}
