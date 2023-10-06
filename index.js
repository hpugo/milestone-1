let score = 0;
        let timer = 0;
        let timerInterval;

        function setGame() {
            let board = document.getElementById("board");

            for (let i = 0; i < 9; i++) {
                let tile = document.createElement("div");
                tile.className = "tile";
                tile.id = i.toString();
                tile.addEventListener("click", function() {
                    handleTileClick(i);
                });
                document.getElementById("board").appendChild(tile);
            }
        }

        function handleTileClick(tileIndex) {
            let clickedTile = document.getElementById(tileIndex.toString());

            score++;
            document.getElementById("score").innerText = `Score: ${score}`;

            clickedTile.style.backgroundImage = "url('assets/POP!.png')";

            if (score === 9) {
                clearInterval(timerInterval);

                alert(`Congratulations! You completed the game in ${timer} seconds.`);
            }
        }

        function startGame() {
            setGame();

            timerInterval = setInterval(function() {
                timer++;
                document.getElementById("timer").innerText = `Time: ${timer}`;
            }, 1000);
        }

startGame();
