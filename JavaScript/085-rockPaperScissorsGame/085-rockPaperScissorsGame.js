const playerText = document.querySelector('#playerText');
const computerrText = document.querySelector('#computerText');
const resultText = document.querySelector('#resultText');
const choiceButtons = document.querySelectorAll('.choiceBtn');
let player;
let computer;
let result;

choiceButtons.forEach(button => button.addEventListener('click', () => {
  player = button.textContent;
  computerTurn();
  playerText.textContent = `Player: ${player}`;
  computerrText.textContent = `Computer: ${computer}`;
  resultText.textContent = checkWinner();
}));

function computerTurn(){
  const randNumb = Math.floor(Math.random() * 3) + 1;
  
  switch(randNumb){
    case 1:
      computer = "Rock";
      break;
    case 2:
      computer = "Paper"
      break;
    case 3:
      computer = "Scissors";
      break;
  }
}

function checkWinner(){
  if(player == computer){
    return "Draw!";
  }
  else if(computer == "Rock"){
    return (player == "Paper") ? "You Win!" : "You Lose!";
  }
  else if(computer == "Paper"){
    return (player == "Scissors") ? "You Win!" : "You Lose!";
  }
  else if(computer == "Scissors"){
    return (player == "Rock") ? "You Win!" : "You Lose!";
  }
}