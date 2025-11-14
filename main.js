// 2. write the logic to get the computer choice

function get_computer_choice(){
    const choices = ['rock', 'paper', 'scissors'];
    const random_index = Math.floor(Math.random() * choices.length);
    const random_element = choices[random_index];
    //console.log(random_element);
}

// get_computer_choice();

function get_human_choice(){
    const choices = ['rock', 'paper', 'scissors'];
    let human_choice = window.prompt("Rock, Paper, or Scissors? ");
    return human_choice;
}

//get_human_choice();

// declare player score variables (global)

let human_score = 0;
let computer_score = 0;




