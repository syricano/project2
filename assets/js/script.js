// Declaring constants & possible choices

var choices = ["rock", "paper", "scissors"];
var result = document.getElementById("result");
var playerSelection = document.getElementById("p-display");
var computerSelection = document.getElementById("c-display");
var playerScore = 0; // Initialize player score
var computerScore = 0; // Initialize computer score
var playerChoice;
const rulesBtn = document.querySelector(".rules-button");
const resetBtn = document.querySelector("#reset");
// Add event listeners to the set player choices:

document.getElementById("rock").addEventListener("click", function () {
    setPlayerChoice("rock");
});
document.getElementById("paper").addEventListener("click", function () {
    setPlayerChoice("paper");
});
document.getElementById("scissor").addEventListener("click", function () {
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
    var computerChoice = choices[Math.floor(Math.random() * choices.length)];
    computerSelection.innerHTML = `Computer chose: ${computerChoice}`;
    return computerChoice;
}

/** Main Run game function */
function runGame() {
    // Set computer choice before comparing
    var computerChoice = setComputerChoice();
    /** Cases */
    // Case 1: 
    if (playerChoice === computerChoice) {
        result.innerHTML = "Same same";
    } else if (
        // Case 2:
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        result.innerHTML = "You Win";
        playerScore++; // Increment player's score
        document.getElementById("player-score").innerHTML = playerScore; // Update player's score display
    } else {
        // Case 3    
        result.innerHTML = "Computer Wins";
        computerScore++; // Increment computer's score
        document.getElementById("computer-score").innerHTML = computerScore; // Update computer's score display
    }
    // Update result with aria-live region
    result.setAttribute("aria-live", "assertive");
}

/** Set Share button */
var shareV = document.getElementById("shareBtn");
shareV.addEventListener("click", shareMe);

function shareMe() {
    var shareIt = {
        text: "I'm playing a Rock, Paper, Scissor Game",
        url: window.location.href
    };
    if (navigator.share) {
        navigator.share(shareIt);
    } else {
        // Fallback for browsers that don't support the Web Share API
        alert("Sorry, your browser does not support sharing. You can manually copy and share the URL.");
    }
}


// function to show/disappear rules span  
function rulesOnOff() {
    var popup = document.getElementById("rules-spaner");
    popup.classList.toggle("show");
}
rulesBtn.addEventListener("click", rulesOnOff);
resetBtn.addEventListener("click", reload);


// Reload function
function reload() {
    location.reload();
}