let userScore = 0;
let compScore = 0;

let scoreBoardUserScore = document.querySelector("#userScore");
let scoreBoardCompScore = document.querySelector("#computerScore");



let msgBox = document.querySelector(".msg");

const choices = document.querySelectorAll(".choice");

function compChoice() {
    const choices = ["rock", "paper", "scissors"];
    let compChoiceIndex = Math.floor(Math.random() * 3);
    let compChoice = choices[compChoiceIndex];
    return compChoice;
}

function playGame( userChoice ){
    let user = userChoice;
    let comp = compChoice();
    result(user, comp);
}

function drawGame(){
    msgBox.innerText = "Game Draw! Play Again";
    msgBox.style.backgroundColor = "black";
}

function result(user, comp){
    if(user === comp){
        drawGame();
    }else if(user == "rock"){
        if(comp == "paper"){
            compWin();
        }else{
            userWin();
        }
    }else if(user == "paper"){
        if(comp == "rock"){
            userWin();
        }else{
            compWin();
        }
    }else{
        if(comp == "paper"){
            userWin();
        }else{
            compWin();
        }
    }
}


function userWin(){
    userScore++;
    msgBox.innerText = "You Won!";
    msgBox.style.backgroundColor = "green";
    scoreBoardUserScore.innerText = userScore;
}


function compWin(){
    compScore++;
    msgBox.innerText = "You loose!";
    msgBox.style.backgroundColor = "red";
    scoreBoardCompScore.innerText = compScore;
}


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    }
    )
}
);
