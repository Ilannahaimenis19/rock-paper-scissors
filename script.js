function getComputerChoice() {
    let computerChoice = Math.random(); // define valor alearório 

    if (computerChoice < 1/3) {
        return "rock";
    } else if (computerChoice < 2/3) {
        return "paper";
    } else { 
        return "scissors";
    } // categoriza os valores em 3
}

function getHumanChoice() {
    let humanChoice = prompt("Input Rock, Paper or Scissors").toLowerCase() // pegar input do usuário
    
    switch (humanChoice) {
        case "rock":
            return "rock";
        case "paper":
            return "paper";
        case "scissors":
            return "scissors";
    }
        // retornar os valores rock, paper and scissors dependendo do que o usuário escrever.
}

function playGame() {
    //Definiu a função
    function playRound(humanChoice, computerChoice) { // chamar os valores de computerChoice e humanChoice 
        if (humanChoice === "rock" && computerChoice === "scissors") {
            ++humanScore
            return "You win! Rock beats Scissors";
        } else if (humanChoice === "rock" && computerChoice === "paper") {
            ++computerScore
            return "You lose! Paper beats Rock";
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            ++humanScore
            return "You win! Scissors beats Paper";
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            ++computerScore
            return "You lose! Rock beats Scissors";
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            ++humanScore
            return "You win! Paper beats Rock";
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            ++computerScore
            return "You lose! Scissors beats Paper"; // comparar os valores que são diferentes e retonar mensagem "venceu/perdeu"
        } else return "It's a tie!"; // mensagem de "empate" se os valores forem os mesmos
        }
    
    let humanScore = 0;
    let computerScore = 0;

    //chamou a função 1x 
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    console.log("Round 1:",playRound(humanChoice, computerChoice));
    console.log("Human chose:", humanChoice);
    console.log("Computer chose:", computerChoice);
    console.log("Human Score:", humanScore);
    console.log("Computer Score:", computerScore);

    //chamou a função 2x 
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    console.log("Round 2:",playRound(humanChoice, computerChoice));
    console.log("Human chose:", humanChoice);
    console.log("Computer chose:", computerChoice);
    console.log("Human Score:", humanScore);
    console.log("Computer Score:", computerScore);

    //chamou a função 3x 
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    console.log("Round 3:",playRound(humanChoice, computerChoice));
    console.log("Human chose:", humanChoice);
    console.log("Computer chose:", computerChoice);
    console.log("Human Score:", humanScore);
    console.log("Computer Score:", computerScore);

    //chamou a função 4x 
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    console.log("Round 4:",playRound(humanChoice, computerChoice));
    console.log("Human chose:", humanChoice);
    console.log("Computer chose:", computerChoice);
    console.log("Human Score:", humanScore);
    console.log("Computer Score:", computerScore);

    //chamou a função 5x 
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    console.log("Round 5:",playRound(humanChoice, computerChoice));
    console.log("Human chose:", humanChoice);
    console.log("Computer chose:", computerChoice);
    console.log("Human Score:", humanScore);
    console.log("Computer Score:", computerScore);

    if (humanScore > computerScore) {
        console.log("You win!");
    } else if (humanScore < computerScore) {
        console.log("You lose!")
    }   else if (humanScore === computerScore) {
        console.log("It's a tie!")
    }
}

playGame()
