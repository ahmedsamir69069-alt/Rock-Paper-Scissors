
let computerPoints = 0;
let humanPoints = 0;

function computerWins (){
    console.log("computer wins");
    computerPoints++;
    console.log (`coputer points = ${computerPoints}          humanpoints = ${humanPoints}`)
}

function humanWins(){
    console.log("human wins");
    humanPoints++;
    console.log (`coputer points = ${computerPoints}          humanpoints = ${humanPoints}`);
}

function draw (){
    console.log("draw");
    console.log (`coputer points = ${computerPoints}          humanpoints = ${humanPoints}`)
}

while(true){

//cumputer choise
let array = ["rock" , "paper" ,"scissor"];
let computerChoise = array[Math.floor(Math.random() * 3)];

let humanChoise = prompt("choise (rock paper scissor) to close the game click Cancel button");

if (humanChoise !== null){
    humanChoise = humanChoise.toLowerCase();
}
else{
    console.log("you closed the game the points now is rest to 0 to play again reload the page");
    break;
}

// game logic
if(humanChoise === "rock" && computerChoise === "paper"){
    computerWins();
}
else if(humanChoise === "rock" && computerChoise === "rock"){
    draw();
}
else if(humanChoise === "rock" && computerChoise === "scissor"){
    humanWins();
}
else if(humanChoise === "paper" && computerChoise === "paper"){
    draw()
}
else if(humanChoise === "paper" && computerChoise === "rock"){
    humanWins();
}
else if (humanChoise === "paper" && computerChoise === "scissor") {
    computerWins();
}
else if(humanChoise === "scissor" && computerChoise === "paper"){
    humanWins();
}
else if(humanChoise === "scissor" && computerChoise === "rock"){
    computerWins();
}
else if (humanChoise === "scissor" && computerChoise === "scissor"){
    draw();
}
else{
    console.log("This is not a choise in the rock paper scissor game");
}
}