// 2. write the logic to get the computer choice

function get_computer_choice(){
    const choices = ['rock', 'paper', 'scissors'];
    const random_index = Math.floor(Math.random() * choices.length);
    const random_element = choices[random_index];
    console.log(random_element);
}

// get_computer_choice();

