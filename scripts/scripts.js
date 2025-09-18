function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    let rounds = 5;

    function getComputerChoice() {
        let move = Math.floor(Math.random() * 3);
        let computerChoice = (move == 0) ? "Rock" : (move == 1) ? "Paper" : "Scissors";

        return computerChoice;
    }

    function playRound(humanChoice) {

        if (rounds === 0) return;

        const computerChoice = getComputerChoice();
        rounds--;

        let result;
        
        if (humanChoice === computerChoice) {
            result = "It's a tie!";
        } else if (
                    (humanChoice == "Rock" && computerChoice == "Scissors") ||
                    (humanChoice == "Paper" && computerChoice == "Rock") ||
                    (humanChoice == "Scissors" && computerChoice == "Paper")
                ) {
            playerScore++;
            result = "You Win! ";
        } else {
            computerScore++;
            result = "You Lose! "
        }

        document.querySelector("#rounds").textContent = rounds;
        document.querySelector("#player-score").textContent = playerScore;
        document.querySelector("#computer-score").textContent = computerScore;

        document.querySelector("#result-message").textContent = `${result} You chose ${humanChoice} and the computer chose ${computerChoice}`;

        if (rounds === 0) {
            let finalMessage;

            if (playerScore > computerScore) finalMessage = "You won the game!";
            else if (playerScore < computerScore) finalMessage = "Computer won the game!";
            else finalMessage = "It's a tie game!";
            document.querySelector("#result-message").textContent = ` ${finalMessage} Final Scores: Player: ${playerScore} Computer: ${computerScore}`;
        }
    }

    document.querySelector(".rock").addEventListener("click", () => playRound("Rock"));
    document.querySelector(".paper").addEventListener("click", () => playRound("Paper"));
    document.querySelector(".scissors").addEventListener("click", () => playRound("Scissors"));

    function resetGame() {
        playerScore = 0;
        computerScore = 0;
        rounds = 5;

        document.querySelector("#rounds").textContent = rounds;
        document.querySelector("#player-score").textContent = playerScore;
        document.querySelector("#computer-score").textContent = computerScore;
        document.querySelector("#result-message").textContent = "Make your move!";
    }

    document.querySelector("#play-again").addEventListener("click", resetGame);
}

playGame();