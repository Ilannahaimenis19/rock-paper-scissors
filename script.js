function getComputerChoice() {
    let computerChoice = Math.random(); // define valor alearório 

    if (computerChoice < 1/3) {
        return "rock";
    } else if (computerChoice < 2/3) {
        return "paper";
    } else { 
        return "scissors";
    } 
}
  

const displayPlayerScore = document.querySelector(".displayPlayerScore");
const displayComputerScore = document.querySelector(".displayComputerScore")

const button = document.querySelectorAll(".choice");

const roundResultMessage = document.querySelector(".roundResultMessage");

const displayPlayerChoice = document.querySelector(".displayPlayerChoice");
const displayComputerChoice = document.querySelector(".displayComputerChoice");

const result = document.querySelector(".result");

const resultMessage = document.querySelector(".resultMessage");

let playerScore = 0;
let computerScore = 0;

startGame()
        
function startGame() {
    playerScore = 0;
    computerScore = 0;

    displayPlayerChoice.textContent = ""; 
    displayComputerChoice.textContent = ""; 

    displayPlayerScore.textContent = playerScore;
    displayComputerScore.textContent = computerScore;

    roundResultMessage.textContent = "";  
    resultMessage.textContent = "";

    setChoicesEnabled(true);
}


function playRound(playerChoice, computerChoice) { 

    if (playerChoice === "rock" && computerChoice === "scissors") {
        displayPlayerScore.textContent = ++playerScore;
        return roundResultMessage.textContent = "You win! Rock beats Scissors";
    } else if (playerChoice === "rock" && computerChoice === "paper") {
        displayComputerScore.textContent = ++computerScore;
        return roundResultMessage.textContent = "You lose! Paper beats Rock";
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
        displayPlayerScore.textContent = ++playerScore;
        return roundResultMessage.textContent = "You win! Scissors beats Paper";
    } else if (playerChoice === "scissors" && computerChoice === "rock") {
        displayComputerScore.textContent = ++computerScore;
        return roundResultMessage.textContent = "You lose! Rock beats Scissors";
    } else if (playerChoice === "paper" && computerChoice === "rock") {
        displayPlayerScore.textContent = ++playerScore;
        return roundResultMessage.textContent = "You win! Paper beats Rock";
    } else if (playerChoice === "paper" && computerChoice === "scissors") {
        displayComputerScore.textContent = ++computerScore;
        return roundResultMessage.textContent = "You lose! Scissors beats Paper"; 
    } else return roundResultMessage.textContent = "It's a tie!"; 
}


button.forEach(button => 
    button.addEventListener("click", () => {
    const playerChoice = button.textContent.toLowerCase();
    const computerChoice = getComputerChoice();
        
    if (playerScore < 5 && computerScore < 5) {
        playRound(playerChoice, computerChoice);
    } 
    
    if (playerScore === 5 || computerScore === 5) {
        playerScore === 5 
        ? resultMessage.textContent = "Congratulations! You won the game!"
        : resultMessage.textContent = "Game over! The computer won the game!";    
        setChoicesEnabled(false);
        const resetButton = document.createElement("button");
        resetButton.textContent = "Play Again";
        result.appendChild(resetButton);
        resetButton.addEventListener("click", () => {
            startGame();
            resetButton.remove();
        })
    }

    displayPlayerChoice.textContent = playerChoice;
    displayComputerChoice.textContent = computerChoice;
    }));
 
    function setChoicesEnabled(on) {
    button.forEach(b => b.disabled = !on);
}

