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


}

  /** Set Share button */
  var shareV=document.getElementById("share");
  shareV.addEventListener("click", shareMe);

  function shareMe() {
      let shareIt = {
          text: "I'm playing a Rock, Paper, Scissor Game",
          url: window.location.href
      };
  
      if (navigator.share) {
          navigator.share(shareIt)
            
      } else {
          // Fallback for browsers that don't support the Web Share API
          alert("Sorry, your browser does not support sharing. You can manually copy and share the URL.");
      }
  }