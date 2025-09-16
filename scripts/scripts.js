function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    let rounds = 0;

    function getComputerChoice() {
        let move = Math.floor(Math.random() * 3);
        let computerChoice = (move == 0) ? "Rock" : (move == 1) ? "Paper" : "Scissors";

        return computerChoice;
    }

    function playRound(humanChoice) {
        const computerChoice = getComputerChoice();
        rounds++;

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
    }

    document.querySelector(".rock").addEventListener("click", () => playRound("Rock"));
    document.querySelector(".paper").addEventListener("click", () => playRound("Paper"));
    document.querySelector(".scissors").addEventListener("click", () => playRound("Scissors"));
    // console.log(`Final Scores:\nPlayer: ${playerScore}\nComputer: ${computerScore}`);
}

playGame();