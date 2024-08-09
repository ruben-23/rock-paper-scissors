
function getComputerChoice() {

    let choices = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random() * 10 % 3);

    return choices[index];
}

humanScore = 0;
computerScore = 0;

let humanChoice;
let computerChoice = getComputerChoice();

const choices = document.querySelector(".choices");
const buttons = choices.querySelectorAll("button");
const result = document.querySelector(".result");

const para1 = document.createElement("p");
const para2 = document.createElement("p");
const para3 = document.createElement("p");

buttons.forEach( (button) => {

    button.addEventListener("click", () => {
        humanChoice = button.textContent.toLowerCase();
        playRound(humanChoice, computerChoice);
    });

} );

function playRound(humanChoice, computerChoice){


    para1.textContent = `Your choice: ${humanChoice}`
    para2.textContent = `Computer choice: ${computerChoice}`;

    if (humanChoice === computerChoice){
        para3.textContent = `It's a tie!`
    } else if ( 
        humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissors" && computerChoice == "paper" ) {
            humanScore++;
            para3.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        para3.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
    }

    result.appendChild(para1);
    result.appendChild(para2);
    result.appendChild(para3);

}

function playGame() {

    console.log(`------------------- FINAL RESULT -------------------`);
    console.log(`Your score: ${humanScore}\nComputer score: ${computerScore}`);
    
    if (humanScore === computerScore){
        console.log("Game ended! It's a tie!")
    }
    else if(humanScore > computerScore){
        console.log("Game ended! You won!");
    } else {
        console.log("Game ended! You lost!");
    }
    
   

}


// playGame();