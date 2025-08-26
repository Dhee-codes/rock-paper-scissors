function getComputerChoice() {
    let move = Math.floor(Math.random() * 3);
    let computerChoice = (move == 0) ? "Rock" : (move == 1) ? "Paper" : "Scissors";

    return computerChoice;
}

function getHumanChoice() {
    let move = prompt("Make a choice, Rock, Paper or Scissors?: ");
    let humanChoice;
    move = move.toLowerCase();
    if (move == "rock" || move == "r") {
        humanChoice = "Rock";
    } else if (move == "paper" || move == "p") {
        humanChoice = "Paper";
    } else if (move == "scissors" || move == "s") {
        humanChoice = "Scissors"
    }

    return humanChoice;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {

        let message;
        
        if (humanChoice == computerChoice) {
            message = "It's a tie!";
        } else if (humanChoice == "Rock" && computerChoice == "Paper") {
            ++computerScore;
            message = "You lose!";
        } else if (humanChoice == "Rock" && computerChoice == "Scissors") {
            ++humanScore;
            message = "You win!";
        } else if (humanChoice == "Paper" && computerChoice == "Rock") {
            ++humanScore;
            message = "You win!";
        } else if (humanChoice == "Paper" && computerChoice == "Scissors") {
            ++computerScore;
            message = "You lose!";
        } else if (humanChoice == "Scissors" && computerChoice == "Rock") {
            ++computerScore;
            message = "You lose!";
        } else if (humanChoice == "Scissors" && computerChoice == "Paper") {
            ++humanScore;
            message = "You win!";
        }
        console.log(`${message}\nPlayer ${humanChoice} : Computer ${computerChoice}`);
    }
    
    const ROUNDS = 5;
    for (let i = 0; i < ROUNDS; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        console.log(playRound(humanChoice, computerChoice));
    }
    return `Final Scores:\nPlayer: ${humanScore}\nComputer: ${computerScore}`;
}

console.log(playGame());