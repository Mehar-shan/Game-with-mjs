// import prompt and random int
import PromptSync from "prompt-sync";
import randominteger from "random-int";

// available choices 

const choices = ["rock","paper","scissors"]

// prompt and other input
let userPrompt="enter 0 for rock,1 for paper and 2 for scissor";
let outcomes = "Ready to play";
// computer choice 
const computerChoice = randominteger(0,2);
const computerChoiceName = choices[computerChoice];

// user choice 

const prompt = PromptSync();
const userChoice = prompt(userPrompt);
const userChoiceName = choices[userChoice];
if(userChoiceName === computerChoiceName){
    outcomes="Draw"
}
else if (computerChoiceName === "rock" && userChoice === "paper"){
    outcomes = "Player wins";
}
else if (computerChoiceName === "rock"  && userChoice === "scissor"){
    outcomes = "computer wins"
}
else if (computerChoiceName === "paper"  && userChoice === "rock"){
    outcomes = "computer wins"
}
else if (computerChoiceName === "paper"  && userChoice === "scissor"){
    outcomes = "player wins"
}
else if (computerChoiceName === "scissor"  && userChoice === "rock"){
    outcomes = "player wins"
}
else if (computerChoiceName === "scissor"  && userChoice === "paper"){
    outcomes = "computer wins"
}
console.log("computer chooses" + computerChoiceName);
console.log("user Chooses" + userChoiceName);
console.log (outcomes); 