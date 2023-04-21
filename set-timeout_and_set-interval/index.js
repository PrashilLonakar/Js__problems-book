currentTime = 0;

interval = setInterval(() => {
  VC();
}, 1000);

function pauseTimeLine() {
  clearInterval(interval);
}

function ST() {
  setTimeout(function () {
    currentTime = 20;
  }, 5000); //wait 2 seconds
}

function VC() {
  if (currentTime === 20) {
    console.log("Last Call", currentTime);
    pauseTimeLine();
  }
  console.log("always Call", currentTime);
}

ST();
