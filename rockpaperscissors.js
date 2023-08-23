/*

Randomly generate "Rock", "Paper", or "Scissors" for computer
Prompt: Take input from users - make sure it's case insensitive
Make function to compare playerHand vs computerHand
There are three conditions
if playerHand is rock && computerHand is paper = you lose
if playerHand is rock && computerHand is rock = draw
if playerHand is rock && computerHand is scissors = you won

*/ 

// 1. Give hand to computer 
// const computerHand = getComputerHand();
function getcomputerHand() {
    let randomNum = Math.floor(Math.random() * 3)
    
    if (randomNum == 0) {
        return "paper"
    } else if (randomNum == 1) {
        return "rock"
    } else {
        return "scissors"
    }
}
const computerHand = getcomputerHand()

// 2. Take input from users
const playerHand = prompt("Please choose between rock or paper or scissors").toLowerCase();

// 3. Compare Hand
function compareHand() {
    if (computerHand == playerHand) {
        return "Tie";
    } else if (
        (computerHand == "paper" && playerHand == "rock") ||
        (computerHand == "rock" && playerHand == "scissors") ||
        (computerHand == "scissors" && playerHand == "paper")
    ) {
        return "computer won"
    } else {
        return "human won"
    }
}

// 4. Show result
console.log(compareHand())
