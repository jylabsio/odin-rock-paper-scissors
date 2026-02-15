
// Scores

let humanScore = 0;
let computerScore =0;


// Get Computer Choice

function getComputerChoice() {

    let randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        return "rock";
    }
    else if (randomNumber === 1) {
        return "paper";
    }
    else {
        return "scissors";
    }

}

console.log(getComputerChoice());




// Get Human Choice : Pop Up Box

function getHumanChoice() {
return prompt("Choose rock, paper, or scissors:")

}

console.log(getHumanChoice());



// Play One Round

function playRound(humanChoice, computerChoice) {

humanChoice = humanChoice.toLowerCase();

if (humanChoice === computerChoice) {
console.log("it's a tie!");
}

else if (
(humanChoice === "rock" && computerChoice === "scissors") ||
(humanChoice === "paper" && computerChoice === "rock") ||
(humanChoice === "scissors" && computerChoice === "paper")
)
{
humanScore++;
console.log("You win!" + humanChoice + " beats " + computerChoice);
}
else {
computerScore++;
console.log("You lose!" + computerChoice + " beats " + humanChoice);
}

}




const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

console.log("human", humanScore)
console.log("computer", computerScore);





