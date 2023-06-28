const player = document.querySelector('.player');
const computer = document.querySelector('.computer');

const resultText = document.querySelector('#result-text')

const reset = document.querySelector('.reset')

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

let playerWins = 0;
let computerWins = 0;
let text = "";

rock.addEventListener('click', function rockCall() {
    let computerChoice = getComputerChoice();
    play(computerChoice, "ROCK");
    computer.textContent = String(computerWins);
    player.textContent = String(playerWins);
});

paper.addEventListener('click', function paperCall() {
    let computerChoice = getComputerChoice();
    play(computerChoice, "PAPER");
    computer.textContent = String(computerWins);
    player.textContent = String(playerWins);
});

scissors.addEventListener('click', function scissorsCall() {
    let computerChoice = getComputerChoice();
    play(computerChoice, "SCISSORS");
    computer.textContent = String(computerWins);
    player.textContent = String(playerWins);
});

reset.addEventListener('click', function reset() {
    resultText.textContent = "YOU vs. COMPUTER. FIRST TO FIVE WINS.";
    computer.textContent = "0"
    player.textContent = "0";
    playerWins = 0;
    computerWins = 0;
})

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3)
    if (choice === 0) {
        return "ROCK"
    }
    else if (choice === 1) {
        return "PAPER"
    }
    else {
        return "SCISSORS"
    }
}

function play(computer, player) {
    if (computerWins >= 5 || playerWins >= 5) {
        resultText.textContent = "PRESS NEW GAME TO PLAY AGAIN";
        return;
    }

    let outcome = "";
    let winner = player;
    let loser = computer;

    if (computer === player) {
        resultText.textContent = "It's a tie!";
    }

    else {
        if (player === "ROCK") {
            if (computer === "PAPER") {
                computerWins += 1;
                winner = computer;
                loser = player;
            }
            else {
                playerWins += 1;
            }
        }
        else if (player === "PAPER") {
            if (computer === "SCISSORS") {
                computerWins += 1;
                winner = computer;
                loser = player;
            }
            else {
                playerWins += 1;
            }
        }
        else {
            if (computer === "ROCK") {
                computerWins += 1;
                winner = computer;
                loser = player;
            }
            else {
                playerWins += 1;
            }
        }

        if (winner == computer) {
            outcome = "LOSE"
        }
        else {
            outcome = "WIN"
        }

        text = "YOU " + outcome + " THIS ROUND! " + winner + " BEATS " + loser + "!";
        resultText.textContent = text;
    }
    if (playerWins === 5) {
        resultText.textContent = "YOU WIN!";
    }
    if (computerWins === 5) {
        resultText.textContent = "YOU LOSE!";
    }
}