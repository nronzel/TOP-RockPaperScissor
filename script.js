// The Odin Project
// Rock Paper Scissors Game
// Written by: Nicholas Ronzel

// Gets a random choice to use for the computers answer
function getComputerChoice() {
    const options = ["rock","paper","scissors"];
    let compChoice = options[Math.floor(Math.random() * options.length)];
    return compChoice;
}

// Plays one round of the game
function playRound(playerSelection, computerSelection) {

    console.log(playerSelection);
    console.log(computerSelection);
    
    if (playerSelection === computerSelection) {
        console.log("Tie.")
    } 
    else if (playerSelection == "rock") {
        if (computerSelection == "scissors") {
            console.log("Player Won! Rock beats scissors!");
        }else{
            console.log("Player Lost..");
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            console.log("Player Wins! Paper beats rock!");
        }else{
            console.log("Player Lost...");
        }
//     } else if (playerSelection == "scissors") {
//         if (computerSelection == "paper") {
//             console.log("Player Wins! Scissors beats paper!");
//         }else{
//             console.log("Player Lost....");
//         }
    } 
}

let playerSelection = "paper";
let computerSelection = getComputerChoice();

playRound(playerSelection, computerSelection);


// single round of RPS:
// function that takes computers choice and players choice
// rock beats scissors
// paper beats rock
// scissors beats paper
// if playerchoice = computerchoice
// print "game is draw"
// else if playerchoice = rock & computerchoice = scissors
// print player wins
// else if playerchoice = paper 
// print 
