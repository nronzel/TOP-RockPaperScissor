// The Odin Project
// Rock Paper Scissors Game
// Written by: Nicholas Ronzel
// ----------------------------
// TODO Input Verification
// ----------------------------

// let playerSelection = "";
const btn = document.querySelectorAll('button');
const result = document.querySelector('span.result');

btn.forEach((button)  => {
    button.addEventListener('click', () => {
        let playerSelection = button.value;
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    });
});

console.log(result);

let playerScore = 0;
let compScore = 0;

// Gets a random choice to use for the computers answer
function getComputerChoice() {
    const options = ["rock","paper","scissors"];
    return options[Math.floor(Math.random() * options.length)];
}

function playRound(playerSelection, computerSelection) {
    // let computerSelection = getComputerChoice();

    if (playerSelection === computerSelection) {
        console.log("Tie.");
        result.textContent="Tie.";
        return "Tie.";
    } 

    // if player selects rock and comp selects scissors, player wins, else loses
    else if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            console.log("Player Won! Rock beats scissors!");
            playerScore += 1;
            result.textContent="Player Won! Rock beats scissors!";
            return "Player Won! Rock beats scissosr!";
        }else{
            console.log("Player Lost..");
            compScore += 1;
            result.textContent="Player Lost..";
            return "Player Lost..";
        }
    }

    // if player selects paper and comp selects rock, player wins, else loses
    else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            console.log("Player Wins! Paper beats rock!");
            playerScore += 1;
            result.textContent="Player Wins! Paper beats rock!";
            return "Player Wins! Paper beats rock!";
        }else{
            console.log("Player Lost...");
            compScore += 1;
            result.textContent="Player Lost...";
            return "Player Lost...";
        }
    }

    // if player selects scissors and comp selects paper, player wins, else loses
    else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            console.log("Player Wins! Scissors beats paper!");
            playerScore += 1;
            result.textContent="Player Wins! Scissors beats paper!";
            return "Player Wins! Scissors beats paper!";
        }else{
            console.log("Player Lost....");
            compScore += 1;
            result.textContent="Player Lost....";
            return "Player Lost....";
        }
    }
}

// function game() {
//     // set the number of rounds
//     const rounds = 5;

//     // loops through "x" rounds and accumulates the results
//     for (let i = 0; i < rounds; i++) {
//         // playerSelection hardcoded for testing
//         let playerSelection = "rock".toLowerCase(); // prompt("Rock Paper or Scissor? " ).toLowerCase();
//         let computerSelection = getComputerChoice().toLowerCase();
//         console.log(`Player: ${playerSelection} | Cpu: ${computerSelection}`);
//         playRound(playerSelection, computerSelection);
//     }
    
//     // compares scores after the 5 rounds and console.logs the winner (or tie)
//     if (playerScore > compScore) {
//         console.log(`Player Wins! Player: ${playerScore} | Cpu: ${compScore}`);
//     }
//     else if (playerScore === compScore) {
//         console.log(`The game is a tie! Player: ${playerScore} | Cpu: ${compScore} `);
//     }else{
//         console.log(`Player loses! Cpu: ${compScore} | Player: ${playerScore}`);
//     }
// }

// game();