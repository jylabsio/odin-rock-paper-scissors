

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
