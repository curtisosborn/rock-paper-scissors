let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");
const resetButton_p = document.getElementById("reset")

function getComputerChoice() {
    const choices = ["r", "p", "s"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    else return "Scissor";
}

function win(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice)
    userScore++;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You win!!`;
    userChoice_div.classList.add('green-glow');
    setTimeout(function(){userChoice_div.classList.remove("green-glow")}, 300);
}

function lose(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice)
    compScore++;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `${convertToWord(userChoice)} does not beat ${convertToWord(computerChoice)}. You are a loser!!`;
    userChoice_div.classList.add('red-glow');
    setTimeout(function(){userChoice_div.classList.remove("red-glow")}, 300);
}

function draw(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice)
    result_p.innerHTML = "It's a draw.  Try again."
    userChoice_div.classList.add('blue-glow');
    setTimeout(function(){userChoice_div.classList.remove("blue-glow")}, 300);
}

function resetGame() {
    const resetSelect_div = document.getElementById("reset-button");
    userScore = 0;
    compScore = 0;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = "The computer is awaiting your move.";
    resetSelect_div.classList.add('reset-glow');
    setTimeout(function() {resetSelect_div.classList.remove('reset-glow')}, 300);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "ps":
        case "rp":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

function main(){
    rock_div.addEventListener('click', function(){
        game("r");
    })
    
    paper_div.addEventListener('click', function(){
        game("p");
    })
    
    scissor_div.addEventListener('click', function(){
        game("s");
    })

    resetButton_p.addEventListener('click', function(){
        resetGame();
    })
}

main();
