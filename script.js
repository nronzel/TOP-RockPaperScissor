// The Odin Project
// Rock Paper Scissors Game
// Written by: Nicholas Ronzel
// ----------------------------
// ! BUG - need to click 'reset' twice to completely reset, not sure why
// ----------------------------

// score initialization
let playerScore = 0;
let compScore = 0;

const btn = document.querySelectorAll('button');
const h3 = document.querySelector('h3');
const result = document.querySelector('h3.result');
const pScore = document.querySelector('p.playerScore');
const cScore = document.querySelector('p.cpuScore');
const reset = document.querySelector('.reset');

console.log(h3);

reset.addEventListener('click', resetScores);

// adds event listener on each button
btn.forEach((button)  => {
    button.addEventListener('click', () => {
        let playerSelection = button.value;
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        
        // updates scores on screen with current score
        pScore.textContent = playerScore;
        cScore.textContent = compScore;

        if (playerScore >= 5 || compScore >= 5) {
            if (playerScore > compScore) {
                result.textContent = "Game Over: You Win!";
                playerWin();
            }else {
                result.textContent = "Game Over: CPU Wins! Better Luck Next Time..";
                cpuWin();
            }
        }
    });
});

function resetScores() {
    pScore.textContent = "";
    cScore.textContent = "";
    h3.classList.remove('pWin');
    h3.classList.remove('cWin');
    result.textContent = "";
}

function playerWin() {
    h3.classList.add('pWin');
    btn.disabled=true;
}

function cpuWin() {
    h3.classList.add('cWin');
    btn.disabled=true;
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
            result.textContent="You Won! Rock beats scissors!";
        }else{
            compScore += 1;
            result.textContent="You lost that round.";
        }
    }

    // if player selects paper and comp selects rock, player wins, else loses
    else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            playerScore += 1;
            result.textContent="You Won! Paper beats rock!";
        }else{
            compScore += 1;
            result.textContent="You lost that round.";
        }
    }

    // if player selects scissors and comp selects paper, player wins, else loses
    else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            playerScore += 1;
            result.textContent="You Won! Scissors beats paper!";
        }else{
            compScore += 1;
            result.textContent="You lost that round.";
        }
    }
}