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
    let result = 0
    if (newComputer === newPlayer) {
        return 2
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
        if (computer === "scissors") {
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

function game() {
    let playerWins = 0
    let computerWins = 0
    let userChoice = ""
    let computerChoice = ""
    let round = 1
    while (playerWins != 5 && computerWins != 5) {
        console.log("Round " + round + ":")
        userChoice = prompt("Make your pick...: ")
        computerChoice = getComputerChoice()
        let result = play(computerChoice, userChoice)
        if (result === 0) {
            computerWins += 1
            round += 1
            console.log("You lose this round! " + computerChoice + " beats " + userChoice)
        }
        if (result === 1) {
            playerWins += 1
            round += 1
            console.log("You win this round! " + userChoice + " beats " + computerChoice)
        }
        if (result === 2) {
            console.log("It's a tie!")
        }
        console.log("Current Score: YOU: " + playerWins + ", COMPUTER: " + computerWins)
    }
    
    if (playerWins > computerWins) {
        console.log("YOU WIN THE GAME")
    }
    else {
        console.log("YOU LOSE THE GAME")
    }
}