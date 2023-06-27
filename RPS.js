const player = document.querySelector('.player');
const computer = document.querySelector('.computer');

const resultText = document.querySelector('#result-text')

const reset = document.querySelector('.reset')

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

reset.addEventListener('click', () => {
    resultText.textContent = "YOU vs. COMPUTER. FIRST TO FIVE WINS.";
    computer.textContent = "0"
    player.textContent = "0";
    playerWins = 0;
    computerWins = 0;
})

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3)
    if (choice === 0) {
        return "Rock"
    }
    else if (choice === 1) {
        return "Paper"
    }
    else {
        return "Scissors"
    }
}

function play(computer, player) {
    newComputer = computer.toLowerCase()
    newPlayer = player.toLowerCase()
    let result = 0;
    if (newComputer === newPlayer) {
        return 2;
    }
    if (newPlayer === "rock") {
        if (newComputer === "paper") {
            result += 0
        }
        else {
            result += 1
        }
    }
    else if (newPlayer === "paper") {
        if (newComputer === "scissors") {
            result += 0
        }
        else {
            result += 1
        }
    }
    else {
        if (newComputer === "rock") {
            result += 0
        }
        else {
            result += 1
        }
    }
    return result
}

let result = 0;
let playerWins = 0;
let computerWins = 0;
let round = 0;
let text = "";


    rock.addEventListener('click', () => {
        let computerChoice = getComputerChoice();
        result = play(computerChoice, "rock");
        if (result === 0) {
            computerWins += 1
            round += 1
            text = "You lose this round! " + computerChoice + " beats rock"
        }
        if (result === 1) {
            playerWins += 1
            round += 1
            text = "You win this round! Rock beats " + computerChoice
        }
        if (result === 2) {
            text = "It's a tie!"
        }
        computer.textContent = String(computerWins);
        player.textContent = String(playerWins);
        if (playerWins === 5) {
            resultText.textContent = "YOU WIN!";  
        }
        if (computerWins === 5) {
            resultText.textContent = "YOU LOSE!";
        }
        resultText.textContent = text;
    });
    paper.addEventListener('click', function(e) {
        let computerChoice = getComputerChoice();
        result = play(computerChoice, "paper");
        if (result === 0) {
            computerWins += 1
            round += 1
            text = "You lose this round! " + computerChoice + " beats paper"
        }
        if (result === 1) {
            playerWins += 1
            round += 1
            text = "You win this round! Paper beats " + computerChoice
        }
        if (result === 2) {
            text = "It's a tie!"
        }
        computer.textContent = String(computerWins);
        player.textContent = String(playerWins);
        if (playerWins === 5) {
            resultText.textContent = "YOU WIN!";
        }
        if (computerWins === 5) {
            resultText.textContent = "YOU LOSE!";
        }
        resultText.textContent = text;
    });
    scissors.addEventListener('click', function(e) {
        let computerChoice = getComputerChoice();
        result = play(computerChoice, "scissors");
        if (result === 0) {
            computerWins += 1
            round += 1
            text = "You lose this round! " + computerChoice + " beats scissors"
        }
        if (result === 1) {
            playerWins += 1
            round += 1
            text = "You win this round! Scissors beats " + computerChoice
        }
        if (result === 2) {
            text = "It's a tie!"
        }
        computer.textContent = String(computerWins);
        player.textContent = String(playerWins);
        if (playerWins === 5) {
            resultText.textContent = "YOU WIN!";
        }
        if (computerWins === 5) {
            resultText.textContent = "YOU LOSE!";
        }
        resultText.textContent = text;
    });