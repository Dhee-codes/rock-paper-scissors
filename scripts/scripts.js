function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    let rounds = 5;

    const playerScoreEl = document.querySelector("#player-score");
    const computerScoreEl = document.querySelector("#computer-score");
    const roundsEl = document.querySelector("#rounds");
    const resultMessage = document.querySelector("#result-message");

    const playerImg = document.querySelector(".choice-container-player");
    const computerImg = document.querySelector(".choice-container-computer");

    const playerLabel = playerImg.nextElementSibling;
    const computerLabel = computerImg.nextElementSibling;

    playerImg.style.display = "none";
    computerImg.style.display = "none";

    function getComputerChoice() {
        const moves = ["Rock", "Paper", "Scissors"];
        return moves[Math.floor(Math.random() * 3)];
    }

    function updateImages(playerChoice, computerChoice) {
        playerImg.src = `assets/images/choices/${playerChoice}.svg`;
        playerImg.alt = `${playerChoice} hand sign`;
        playerLabel.textContent = playerChoice;

        computerImg.src = `assets/images/choices/${computerChoice}.svg`;
        computerImg.alt = `${computerChoice} hand sign`;
        computerLabel.textContent = computerChoice;

        playerImg.style.display = "block";
        computerImg.style.display = "block";
    }

    function playRound(humanChoice) {
        if (rounds === 0) return;

        const computerChoice = getComputerChoice();
        updateImages(humanChoice, computerChoice);

        let result;
        if (humanChoice === computerChoice) {
            result = "It's a tie!";
        } else if (
            (humanChoice === "Rock" && computerChoice === "Scissors") ||
            (humanChoice === "Paper" && computerChoice === "Rock") ||
            (humanChoice === "Scissors" && computerChoice === "Paper")
        ) {
            playerScore++;
            result = "You Win!";
        } else {
            computerScore++;
            result = "You Lose!";
        }

        rounds--;
        roundsEl.textContent = rounds;
        playerScoreEl.textContent = playerScore;
        computerScoreEl.textContent = computerScore;
        resultMessage.textContent = `${result} You chose ${humanChoice}, Computer chose ${computerChoice}.`;

        if (rounds === 0) {
            endGame();
        }
    }

    function endGame() {
        let finalMessage;
        if (playerScore > computerScore) finalMessage = "You won the game!";
        else if (playerScore < computerScore) finalMessage = "Computer won the game!";
        else finalMessage = "It's a tie game!";

        resultMessage.textContent = `${finalMessage} Final Scores — Player: ${playerScore}, Computer: ${computerScore}.`;

        document.querySelectorAll(".choice-button").forEach(btn => {
            btn.disabled = true;
        });

        document.querySelector("#play-again").style.display = "inline-block";
    }

    function resetGame() {
        playerScore = 0;
        computerScore = 0;
        rounds = 5;

        playerScoreEl.textContent = playerScore;
        computerScoreEl.textContent = computerScore;
        roundsEl.textContent = rounds;
        resultMessage.textContent = "Make your move!";
        playerImg.src = "";
        computerImg.src = "";
        playerLabel.textContent = "";
        computerLabel.textContent = "";
        playerImg.style.display = "none";
        computerImg.style.display = "none";

        document.querySelectorAll(".choice-button").forEach(btn => {
            btn.disabled = false;
        });

        document.querySelector("#play-again").style.display = "none";
    }

    document.querySelector("#rock").addEventListener("click", () => playRound("Rock"));
    document.querySelector("#paper").addEventListener("click", () => playRound("Paper"));
    document.querySelector("#scissors").addEventListener("click", () => playRound("Scissors"));
    document.querySelector("#play-again").addEventListener("click", resetGame);
}

playGame();
