
function getComputerChoice() {

    let choices = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random() * 10 % 3);

    return choices[index];
}


function getHumanChoice() {

    while(true){
        
        let choice = prompt("Enter your choice (rock, paper, scissors): ");

        if (choice !== null){

            choice = choice.toLowerCase();

            if (
                choice !== "rock" &&
                choice !== "paper" &&
                choice !== "scissors" ) {
                    console.log("Please enter a valid choice (rock, paper, scissors)")
            } else {
                return choice;
            }
           
        } else {
          
            console.log("Please enter a valid choice (rock, paper, scissors)");
        }
    }
}

humanScore = 0;
computerScore = 0;

function playRound(humanChoice, computerChoice){

    if (humanChoice === computerChoice){
        return `It's a tie!`
    } else if ( 
        humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissors" && computerChoice == "paper" ) {
            humanScore++;
            return `You win! ${humanChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}`;
    }

}

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();

