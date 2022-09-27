let rock = "Rock";
let papper = "Papper";
let scissors = "Scissors";
let wins = 0;
let playerSelection;
const btnrock = document.getElementById('btn1');
const btnpapper = document.getElementById('btn2');
const btnscissors = document.getElementById('btn3');

btnrock.addEventListener('click', () => {

  playerSelection = rock;
  console.log(playerSelection);
  let lel =getComputerChoice();
  console.log(lel);
  let resultround= playRound(playerSelection, lel);
  console.log(resultround);
});

btnpapper.addEventListener('click', () => {

  playerSelection = papper;
  console.log(playerSelection);

  game();
});

btnscissors.addEventListener('click', () => {

  playerSelection = scissors;
  console.log(playerSelection);

  game();
});



function getComputerChoice() {

  let min = Math.ceil(0);
  let max = Math.floor(2);
  let random = Math.floor(Math.random() * (max - min + 1) + min); 

  if (random == 0)
  {
    return rock;
  }
  if (random == 1){
    return papper;
  }
  if (random == 2){
    return scissors;
  }
}




function playRound(playerSelection,pcChoice) {


  if(pcChoice == rock && playerSelection == papper) {
    wins++;
    return "Player Wins!";
  }

  else if (pcChoice == rock && playerSelection == scissors) {
    return "Player Loses!"
  }

  else if (pcChoice == scissors && playerSelection == rock){ wins++; return "Player Wins!"}

  else if (pcChoice == scissors && playerSelection == papper){return "Player Loses!"}

  else if (pcChoice == papper && playerSelection == rock){return "Player Loses!"}

  else if (pcChoice == papper && playerSelection == scissors){wins++; return "Player Wins!"}

  else {return "It's a Draw!"}
}


function game() {

  for(let i = 0; i < 5; i++){
    
    const pcChoice = getComputerChoice();
    playerSelection;
    console.log("PC "+ pcChoice );
    console.log('Player '+playerSelection);
    let roundwinner = playRound(playerSelection,pcChoice);
    console.log(roundwinner);

    if(i === 2 && wins == 0){
      break;
    }

    if(i === 3 && wins <= 1) {
      break;
    }

    if(wins==3){
      break;
    }

  }

  if(wins >= 3) {
    console.log("You are the winner of this match")
  }
  else {console.log('You lost the game');}
}


