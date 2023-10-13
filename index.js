let startTime;
let score = 0;
let timerInterval = 0;
let tileStates = {};
let currentLevel = 1;

let timerSound = new Audio('assets/audio/3secCD.mp3');
let gameEndSound = new Audio('assets/audio/GameEnd.mp3');

timerSound.load();
gameEndSound.load();

window.onload = function () {
  document.getElementById("startButton").addEventListener("click", startCountdown);
};

function setGame() {
  for (let i = 0; i < 9; i++) {
    let tile = document.createElement("div");
    tile.id = i.toString();
    tile.addEventListener("click", function () {
      handleTileClick(i);
    });
    document.getElementById("board").appendChild(tile);
  }

  setBalloons();
}

function handleTileClick(tileIndex) {
  let clickedTile = document.getElementById(tileIndex.toString());

  if (tileStates[tileIndex]) {
    return;
  }

  score++;
  document.getElementById("score").innerText = `Score: ${score}`;

  let balloonClickSound = new Audio('assets/audio/POPsound.mp3');
  balloonClickSound.volume = 0.5;

  balloonClickSound.addEventListener('loadeddata', function() {
    balloonClickSound.currentTime = 0.25;
    balloonClickSound.play();
  });

  clickedTile.style.backgroundImage = "url('assets/POP!.png')";

  tileStates[tileIndex] = true;

  if (score === 9) {
    gameEndSound.play();
    
    let endTime = new Date().getTime();
    let elapsedTime = (endTime - startTime) / 1000; 
    alert(`Congratulations! You completed the game in ${elapsedTime.toFixed(3)} seconds.`);
    resetGame();
  }
}

function startCountdown() {
    document.getElementById("startButton").disabled = true;
  
    resetGame();
  
    let count = 3;
    document.getElementById("timer").innerText = count;
  
    timerSound.play();
  
    let countdownInterval = setInterval(function () {
      count--;
      document.getElementById("timer").innerText = count;
  
      if (count === 0) {
        clearInterval(countdownInterval);
        document.getElementById("timer").innerText = "Go!";
  
        setTimeout(function () {
          document.getElementById("startButton").disabled = false;
          startGame();
        }, 1000);
      }
    }, 1000);
  }

function startGame() {
    resetGame();
  
    setGame();
    clearInterval(timerInterval);
    score = 0; 
    document.getElementById("score").innerText = `Score: ${score}`;
    tileStates = {};
    currentLevel = 1;
  
    startTime = new Date().getTime();
  
    timerInterval = setInterval(function () {
      let currentTime = new Date().getTime();
      let elapsedTime = (currentTime - startTime) / 1000; 
      document.getElementById("timer").innerText = `Time: ${elapsedTime.toFixed(3)}`;
    }, 50);
  }
  
  function resetGame() {
    clearInterval(timerInterval);
    timerSound.pause();
    timerSound.currentTime = 0;
    document.getElementById("timer").innerText = "Time: 0";
    document.getElementById("board").innerHTML = "";
  }
  
  
let levelPatterns = {
  1: ["assets/singleBalloonBlue.png"],
};

function setBalloons() {
  let patterns = levelPatterns[currentLevel] || levelPatterns[1];

  for (let i = 0; i < 9; i++) {
    let tile = document.getElementById(i.toString());
    tile.style.backgroundImage = "none";
    let balloonSrc = patterns[0];
    tile.style.backgroundImage = `url('${balloonSrc}')`;
  }
}
