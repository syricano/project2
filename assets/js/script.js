// Declaring constants & possible choices

var choices = ["rock", "paper", "scissors"];
var result = document.getElementById("result");
var playerSelection = document.getElementById("p-display");
var computerSelection = document.getElementById("c-display");
var playerScore = 0; // Initialize player score
var computerScore = 0; // Initialize computer score

// Add event listeners to the set player choices:

document.getElementById("rock").addEventListener("click", function() {
    setPlayerChoice("rock");
});
document.getElementById("paper").addEventListener("click", function() {
    setPlayerChoice("paper");
});
document.getElementById("scissor").addEventListener("click", function() {
    setPlayerChoice("scissors");
});
/** Set player Choice function */
function setPlayerChoice(choice) {
    playerChoice = choice;
    playerSelection.innerHTML = `Player chose: ${choice}`;
    runGame();
}

/** Setting computer choice */
function setComputerChoice() {
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    computerSelection.innerHTML = `Computer chose: ${computerChoice}`;
    return computerChoice;
}

/** Main Run game function */
function runGame(){
    // Set computer choice before comparing
 var computerChoice = setComputerChoice();

}
