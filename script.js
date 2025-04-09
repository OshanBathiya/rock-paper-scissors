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

function playGame () {
    let humanScore = 0;
    let computerScore = 0;
    let computerSelection;
    let humanSelection;

    for (i=0; i<5; i++) {
        computerSelection = getComputerChoice();
        humanSelection = getHumanChoice();
        
        console.log("Your Selection: " + humanSelection);
        console.log("Computer's Selection: " + computerSelection);
    
        const result = playRound(humanSelection, computerSelection);
    
        if (result === 1) {
            humanScore++;
        } else if (result === 0) {
            computerScore++;
        } else {
            continue;
        } 
    }
    
    console.log("Your Score: " + humanScore);
    console.log("Computer's Score: " + computerScore);

    if (humanScore === computerScore) {
        console.log("It's a draw!!");
    } else if (humanScore > computerScore) {
        console.log("You Win the Game!!") 
    } else {
        console.log("You Lost the Game! Try again");
    }
}

const playerChoice = document.querySelector("#playerBtn");

playerChoice.addEventListener("click", (event) => {
    playRound(event.target.value, getComputerChoice());
});