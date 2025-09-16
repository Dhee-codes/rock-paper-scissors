function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function getComputerChoice() {
        let move = Math.floor(Math.random() * 3);
        let computerChoice = (move == 0) ? "Rock" : (move == 1) ? "Paper" : "Scissors";

        return computerChoice;
    }

    function playRound(humanChoice) {
        const computerChoice = getComputerChoice();

        let message;
        
        if (humanChoice === computerChoice) {
            message = "It's a tie!";
        } else if (
                    (humanChoice == "Rock" && computerChoice == "Scissors") ||
                    (humanChoice == "Paper" && computerChoice == "Rock") ||
                    (humanChoice == "Scissors" && computerChoice == "Paper")
                ) {
            humanScore++;
            message = "You Win!";
        } else {
            computerScore++;
            message = "You Lose!"
        }
        console.log(`${message}\nYou chose ${humanChoice} : Computer chose ${computerChoice}`);
    }

    document.querySelector(".rock").addEventListener("click", () => playRound("Rock"));
    document.querySelector(".paper").addEventListener("click", () => playRound("Paper"));
    document.querySelector(".scissors").addEventListener("click", () => playRound("Scissors"));
    
    // console.log(`Final Scores:\nPlayer: ${humanScore}\nComputer: ${computerScore}`);
}

playGame();