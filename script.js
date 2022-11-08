// Gets a random choice to use for the computers answer
function getComputerChoice() {
    const options = ['rock','paper','scissors'];
    let choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}



