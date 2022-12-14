// The Odin Project
// Rock Paper Scissors Game
// Written by: Nicholas Ronzel
// ----------------------------

// score initialization
let playerScore = 0;
let compScore = 0;

let round = 1;
const max_rounds = 5;

// const btn = document.querySelectorAll("button");
const h3 = document.querySelector("h3");
const result = document.querySelector("h3.result");
const pScore = document.querySelector("p.playerScore");
const cScore = document.querySelector("p.cpuScore");
const reset = document.querySelector(".reset button");
const choices = document.querySelectorAll(".choice");

reset.onclick = resetScores;

function checkWin() {
  if (playerScore === max_rounds || compScore === max_rounds) {
    if (playerScore > compScore) {
      result.textContent = "Game Over: You Win!";
      playerWin();
      disableBtn();
    } else {
      result.textContent = "Game Over: CPU Wins! Better Luck Next Time..";
      cpuWin();
      disableBtn();
    }
  }
}

function disableBtn() {
  choices.forEach((btn) => {
    btn.disabled = true;
  });
}

function resetScores() {
  playerScore = 0;
  compScore = 0;
  pScore.textContent = 0;
  cScore.textContent = 0;
  h3.classList.remove("pWin");
  h3.classList.remove("cWin");
  result.textContent = "Choose an option";
  choices.forEach((btn) => {
    btn.disabled = false;
  });
}

function playerWin() {
  h3.classList.add("pWin");
}

function cpuWin() {
  h3.classList.add("cWin");
}

// Gets a random choice to use for the computers answer
function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * options.length)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    result.textContent = "Tie.";
  } else if (playerSelection === "rock") {
    if (computerSelection === "scissors") {
      playerScore += 1;
      result.textContent = `You Won! ${playerSelection} beats ${computerSelection}`;
    } else {
      compScore += 1;
      result.textContent = `You lost that round! CPU had ${computerSelection}`;
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      playerScore += 1;
      result.textContent = `You Won! ${playerSelection} beats ${computerSelection}`;
    } else {
      compScore += 1;
      result.textContent = `You lost that round! CPU had ${computerSelection}`;
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "paper") {
      playerScore += 1;
      result.textContent = `You Won! ${playerSelection} beats ${computerSelection}`;
    } else {
      compScore += 1;
      result.textContent = `You lost that round! CPU had ${computerSelection}`;
    }
  }
}

function game() {
  // adds event listener on each button
  choices.forEach((button) => {
    button.addEventListener("click", () => {
      let playerSelection = button.value;
      let computerSelection = getComputerChoice();
      if (round <= max_rounds) {
        playRound(playerSelection, computerSelection);
      }
      pScore.textContent = playerScore;
      cScore.textContent = compScore;
      checkWin();
    });
  });
  for (let i = 0; i < max_rounds; i++) {
    playRound();
  }
}

game()
resetScores()