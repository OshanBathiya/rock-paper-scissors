const inputBtns = document.querySelector("#inputBtns");
const displayRoundResult = document.querySelector("#displayRoundResult");
const displayHumanScore = document.querySelector("#displayHumanScore");
const displayComputerScore = document.querySelector("#displayComputerScore");
const displayWinner = document.querySelector("#displayWinner");
const winnerBox = document.querySelector("#winner-box");

let humanScore = 0;
let computerScore = 0;

inputBtns.addEventListener("click", (event) => {
    console.log(event);
    const roundResult = playRound(event.target.value, getComputerChoice());
    announceWinner(roundResult);
});

function getComputerChoice () {
    const randomNo = Math.random()*100;

    return (randomNo<100/3) ? "rock" : (randomNo<200/3) ? "paper" : "scissor";
}

function playRound (humanChoice, computerChoice) {
    switch (humanChoice) {
        case computerChoice:
            displayRoundResult.textContent = "It's a Draw!";
            return -1;
        
        case "rock":
            if (computerChoice === "scissor") {
                displayRoundResult.textContent = "You Win! Rock beats Scissor";
                return 1;
            } else {
                displayRoundResult.textContent = "You Lose! Paper beats Rock";
                return 0;
            }

        case "paper":
            if (computerChoice === "rock") {
                displayRoundResult.textContent = "You Win! Paper beats Rock";
                return 1;
            } else {
                displayRoundResult.textContent = "You Lose! Scissor beats Paper";
                return 0;
            }

        case "scissor":
            if (computerChoice === "paper") {
                displayRoundResult.textContent = "You Win! Scissor beats Paper";
                return 1;
            } else {
                displayRoundResult.textContent = "You Lose! Rock beats Scissor";
                return 0;
            }
        
        default:
            console.log("invalid input");
            return -2;
    }
}

function announceWinner (result) {
    if (humanScore >= 5 || computerScore >=5) {
        humanScore = 0;
        computerScore = 0;
        displayWinner.textContent = ""; 
        winnerBox.style.display = "none";
    }

    if (result === 1) {
        humanScore++;
    } else if (result === 0) {
        computerScore++;
    }
    
    displayHumanScore.textContent = "Your Score: " + humanScore;
    displayComputerScore.textContent = "My Score: " + computerScore;

    if (humanScore >= 5) {
        displayWinner.textContent = "You Won the Game!!";
        winnerBox.style.display = "block"; 
    }

    if (computerScore >= 5) {
        displayWinner.textContent = "You Lost the Game! Try again"; 
        winnerBox.style.display = "block"; 
    }

}