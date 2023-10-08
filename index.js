let currBalloonTile;
let timer = 0;
let score = 0;
let timerInterval = 0;
// let gameOver = false;

window.onload = function() {
    document.getElementById("startButton").addEventListener("click", startGame);

}

function setGame() {

    for (let i = 0; i < 9; i++) {
    let tile = document.createElement("div");
         tile.id = i.toString();
         tile.addEventListener("click", function() {
             handleTileClick(i);
         });
         document.getElementById("board").appendChild(tile);
  }
 }

let board = document.getElementById("board");

function handleTileClick(tileIndex) {
    let clickedTile = document.getElementById(tileIndex.toString());

    score++;
    document.getElementById("score").innerText = `Score: ${score}`;

    clickedTile.style.backgroundImage = "url('assets/singleBallonBlue.png')";

    if (score === 9) {
        alert(`Congratulations! You completed the game in ${timer} seconds.`);
        resetGame()
    }
    
}

function startGame() {
    setGame();
    clearInterval(timerInterval);
    currBalloonTile = null;

    timerInterval = setInterval(function() {
        timer++;
        document.getElementById("timer").innerText = `Time: ${timer}`;
    }, 1000);
}
function resetGame() {
     score = 0;
     timer = 0;
    clearInterval(timerInterval);

    document.getElementById("score").innerText = "Score: 0";
    document.getElementById("timer").innerText = "Time: 0";

    document.getElementById("board").innerHTML = "";
    
}

function setBalloon() {
    if (currBalloonTile) {
        currBalloonTile.innerHTML = "";
    }

    currBalloonTile = currBalloonTile || document.getElementById(getRandomTile());

    let balloon = document.createElement("img");
    balloon.src = "assets/singleBalloonBlue.png";

    let num = getRandomTile();
    if (currBalloonTile.id === num) {
        return;
    }
    currBalloonTile = document.getElementById(num);
    currBalloonTile.appendChild(balloon);
}

function getRandomTile() {
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}