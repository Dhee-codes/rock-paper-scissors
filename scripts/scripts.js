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
        ++shumanScore;
        message = "You win!";
    }
    return `${message}\nPlayer ${humanChoice} : Computer ${computerChoice}`;
}

function scores() {

}

function playGame() {
    const ROUNDS = 5;
    let game = 0;
    while (game < ROUNDS) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        console.log(playRound(humanChoice, computerChoice));
        game++;
    }
}

let humanScore = 0;
let computerScore = 0;

console.log(playGame());
