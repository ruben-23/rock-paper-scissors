
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

function playGame() {

    humanScore = 0;
    computerScore = 0;

    for(let i=0; i<5; ++i) {
        
        console.log(`------------------- ROUND ${i+1} -------------------`);

        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        console.log(playRound(humanChoice, computerChoice));
        
    }

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
    
    function playRound(humanChoice, computerChoice){

        console.log(`Your choice: ${humanChoice}\nComputer choice: ${computerChoice}`)

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

}


playGame();