// The Odin Project
// Rock Paper Scissors Game
// Written by: Nicholas Ronzel
// ----------------------------


// score initialization
let playerScore = 0;
let compScore = 0;
let round = 1;
const max_rounds = 5;

const btn = document.querySelectorAll('button');
const h3 = document.querySelector('h3');
const result = document.querySelector('h3.result');
const pScore = document.querySelector('p.playerScore');
const cScore = document.querySelector('p.cpuScore');
const reset = document.querySelector('.reset button');
const choices = document.querySelectorAll('.choice')

reset.addEventListener('click', resetScores);
// let winner = "";
// adds event listener on each button
btn.forEach((button)  => {
    button.addEventListener('click', () => {
        let playerSelection = button.value;
        let computerSelection = getComputerChoice();
        if (round <= max_rounds) {
            playRound(playerSelection, computerSelection);
        }
        
        // updates scores on screen with current score
        pScore.textContent = playerScore;
        cScore.textContent = compScore;

        checkWin();
    });
});

function checkWin() {
    if (playerScore === 5 || compScore === 5) {
        if (playerScore > compScore) {
            result.textContent = "Game Over: You Win!";
                playerWin();
                disableBtn();
            }else {
                result.textContent = "Game Over: CPU Wins! Better Luck Next Time..";
                cpuWin();
                disableBtn();
        }
    }
}

function disableBtn() {
    choices.forEach((btn) => {
        btn.disabled = true;
    })
}

function resetScores() {
    playerScore = 0;
    compScore = 0;
    pScore.textContent = 0;
    cScore.textContent = 0;
    h3.classList.remove('pWin');
    h3.classList.remove('cWin');
    result.textContent = "Choose an option";
    choices.forEach((btn) => {
        btn.disabled = false;
    })
}

function playerWin() {
    h3.classList.add('pWin');
}

function cpuWin() {
    h3.classList.add('cWin');
}

// Gets a random choice to use for the computers answer
function getComputerChoice() {
    const options = ["rock","paper","scissors"];
    return options[Math.floor(Math.random() * options.length)];
}

function playRound(playerSelection, computerSelection) {
    // let computerSelection = getComputerChoice();

    if (playerSelection === computerSelection) {
        result.textContent="Tie.";
    } 

    // if player selects rock and comp selects scissors, player wins, else loses
    else if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            playerScore += 1;
            result.textContent=`You Won! ${playerSelection} beats ${computerSelection}`;
        }else{
            compScore += 1;
            result.textContent=`You lost that round! CPU had ${computerSelection}`;
        }
    }

    // if player selects paper and comp selects rock, player wins, else loses
    else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            playerScore += 1;
            result.textContent=`You Won! ${playerSelection} beats ${computerSelection}`;
        }else{
            compScore += 1;
            result.textContent=`You lost that round! CPU had ${computerSelection}`;
        }
    }

    // if player selects scissors and comp selects paper, player wins, else loses
    else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            playerScore += 1;
            result.textContent=`You Won! ${playerSelection} beats ${computerSelection}`;
        }else{
            compScore += 1;
            result.textContent=`You lost that round! CPU had ${computerSelection}`;
        }
    }
}

function game() {
    // set the number of rounds
    const rounds = 5;

    // loops through "x" rounds and accumulates the results
    for (let i = 0; i < rounds; i++) {
        // playerSelection hardcoded for testing
        let playerSelection = "rock".toLowerCase(); // prompt("Rock Paper or Scissor? " ).toLowerCase();
        let computerSelection = getComputerChoice().toLowerCase();
        console.log(`Player: ${playerSelection} | Cpu: ${computerSelection}`);
        playRound(playerSelection, computerSelection);
    }
    
    // compares scores after the 5 rounds and console.logs the winner (or tie)
    if (playerScore > compScore) {
        console.log(`Player Wins! Player: ${playerScore} | Cpu: ${compScore}`);
    }
    else if (playerScore === compScore) {
        console.log(`The game is a tie! Player: ${playerScore} | Cpu: ${compScore} `);
    }else{
        console.log(`Player loses! Cpu: ${compScore} | Player: ${playerScore}`);
    }
}

game();