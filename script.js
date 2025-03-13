let humanScore = 0;
let computerScore = 0;

function getComputerChoice () {
    const randomNo = Math.random()*100;

    return (randomNo<100/3) ? "rock" : (randomNo<200/3) ? "paper" : "scissor";
}

function getHumanChoice () {
    let choice = window.prompt("What is your choice?");

    return choice.toLocaleLowerCase();
}

function playRound (humanChoice, computerChoice) {
    switch (humanChoice) {
        case computerChoice:
            console.log("It's a Draw!");
            return -1;
        
        case "rock":
            if (computerChoice === "scissor") {
                console.log("You Win! Rock beats Scissor");
                return 1;
            } else {
                console.log("You Lose! Paper beats Rock");
                return 0;
            }
            console.log("DID i reach here??")

        case "paper":
            if (computerChoice === "rock") {
                console.log("You Win! Paper beats Rock");
                return 1;
            } else {
                console.log("You Lose! Scissor beats Paper");
                return 0;
            }

        case "scissor":
            if (computerChoice === "paper") {
                console.log("You Win! Scissor beats Paper");
                return 1;
            } else {
                console.log("You Lose! Rock beats Scissor");
                return 0;
            }
        
        default:
            console.log("invalid input");
            return -2;
    }
}
const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();

console.log("humanSelection: " + humanSelection);
console.log("computerSelection: " + computerSelection);

console.log(playRound(humanSelection, computerSelection));

console.log("humanScore: " + humanScore);
console.log("computerScore: " + computerScore);