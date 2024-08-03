
function getComputerChoice() {

    let choices = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random() * 10 % 3);

    return choices[index];
}


function getHumanChoice() {

    let userChoice = prompt("Enter your choice (rock, paper, scissors): ");

    if(userChoice === null){
        console.log("Please enter a valid choice.");
    }
    else if (
        userChoice !== "rock" &&
        userChoice !== "paper" &&
        userChoice !== "scissors" ) {
            console.log("Please enter a valid choice (rock, paper, scissors)")
    } else {
        return userChoice;
    }
}

humanScore = 0;
computerSscore = 0;
