let rock = "Rock";
let papper = "Papper";
let scissors = "Scissors";
let rounds = 0;
let lose =0;
let wins = 0;
let playerSelection;

const btnrock = document.getElementById('btn1');
const btnpapper = document.getElementById('btn2');
const btnscissors = document.getElementById('btn3');


  
btnrock.addEventListener('click', () => {

  playerSelection = rock;
  let pc = getComputerChoice();
  let result1 = playRound(playerSelection, pc);
  console.log(result1);
  document.querySelector('#console').innerText = result1
  rounds++;
  document.querySelector('#score').innerText=wins;
  document.querySelector('#loss').innerText=lose;
});

btnpapper.addEventListener('click', () => {

  playerSelection = papper;
  let pc = getComputerChoice()
  let result1 = playRound(playerSelection, pc);
  console.log(result1)
  document.querySelector('#console').innerText = result1
  rounds++
  document.querySelector('#score').innerText=wins;
  document.querySelector('#loss').innerText=lose;
});

btnscissors.addEventListener('click', () => {

  playerSelection = scissors;
  let pc = getComputerChoice()
  let result1 = playRound(playerSelection, pc);
  console.log(result1)
  document.querySelector('#console').innerText = result1
  rounds++
  document.querySelector('#score').innerText=wins;
  document.querySelector('#loss').innerText=lose;

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


  if (rounds === 5) {
    if(wins > lose) {
      alert('You win')
      return 'Winner'
    }
    else alert('You lose')
    return 'Loser'
  }
  if(pcChoice == rock && playerSelection == papper) {
    wins++;
    return "Player Wins!";
  }

  else if (pcChoice == rock && playerSelection == scissors) {
    return "Player Loses!"
  }

  else if (pcChoice == scissors && playerSelection == rock){ wins++; return "Player Wins!"}

  else if (pcChoice == scissors && playerSelection == papper){lose++; return "Player Loses!"}

  else if (pcChoice == papper && playerSelection == rock){lose++; return "Player Loses!"}

  else if (pcChoice == papper && playerSelection == scissors){wins++; return "Player Wins!"}

  else {return "It's a Draw!"}

}


