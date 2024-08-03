
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



}

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();

