function changeBackgroundImage() {
    var targetDiv = document.querySelector('#board > div');
    if (targetDiv) {
        targetDiv.style.backgroundImage = 'url("assets/POP!.png")'; // Replace 'new-background.jpg' with the path to your new image
    } else {
        console.log('Target div not found');
    }
}

var timer;
var ele = document.getElementById('timer');

(function(){
    var sec = 0;
    timer= setInterval(()=>{
        ele.innerHTML='00:' +sec;
        sec ++;
    }, 1000)
})


function popBalloon() {
    score++;
    document.getElementById('score-value').innerText = score;
    this.remove();
}

function updateTimer() {
    if (timerValue > 0) {
        timerValue--;
        document.getElementById('timer-value').innerText = timerValue;
        createBalloon(); // Create a new balloon every second
        setTimeout(updateTimer, 1000);
    } else {
        alert('Game Over! Your score is ' + score);
        resetGame();
    }
}
