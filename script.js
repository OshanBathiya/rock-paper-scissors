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
            break;
        
        case "rock":
            if (computerChoice === "scissor") {
                console.log("You Win! Rock beats Scissor");
                humanScore++;
            } else {
                console.log("You Lose! Paper beats Rock");
                humanScore++;
            }
            break;

        case "paper":
            if (computerChoice === "rock") {
                console.log("You Win! Paper beats Rock");
                humanScore++;
            } else {
                console.log("You Lose! Scissor beats Paper");
                humanScore++;
            }
            break;

        case "scissor":
            if (computerChoice === "paper") {
                console.log("You Win! Scissor beats Paper");
                humanScore++;
            } else {
                console.log("You Lose! Rock beats Scissor");
                humanScore++;
            }
            break;
        
        default:
            console.log("invalid input");
    }
}
const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();

console.log("humanSelection: " + humanSelection);
console.log("computerSelection: " + computerSelection);

playRound(humanSelection, computerSelection)

console.log("humanScore: " + humanScore);
console.log("computerScore: " + computerScore);