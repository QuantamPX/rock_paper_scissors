// 2. write the logic to get the computer choice

const choices = ['rock', 'paper', 'scissors'];



// get_computer_choice();

function get_computer_choice(){
    const random_index = Math.floor(Math.random() * choices.length);
    const random_element = choices[random_index];
    //console.log(random_element);
    return random_element;
}

//get_human_choice();

function get_human_choice(){
    //const choices = ['rock', 'paper', 'scissors'];
    let human_input = window.prompt("Rock, Paper, or Scissors?");
    return human_input;
}


// declare player score variables (global)

let human_score = 0;
let computer_score = 0;

//scissors beat paper 
//rock beats scissors 
//paper beats rock 

const beats  = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
};

function play_round(human_choice, computer_choice){
    const user_input = human_choice.toLowerCase(); // case-insensitive input
    if(user_input === computer_choice){
        console.log("Tie!");
    }
    else if(beats[user_input] === computer_choice){
        console.log(`You won! ${user_input} beats ${computer_choice}.`);
        human_score++;
        console.log(`Current score: You: ${human_score} Computer: ${computer_score}`);
    }
    else{
        console.log(`You lose! ${computer_choice} beats ${user_input}`);
        computer_score++;
        console.log(`Current score: You: ${human_score} Computer: ${computer_score}`);
    }
    if(computer_score == 5 || human_score == 5){
        console.log("Game over!")
    }
}

const human_selection = get_human_choice();
const computer_selection = get_computer_choice();

play_round(human_selection, computer_selection);