// class = template para criação de objetos com propriedades semelhantes
//         definir quais propriedades e métodos aquele tipo de objeto deve ter
//         use um CONSTRUTOR para ter propriedades únicas para cada objeto diferente.

class Player{
  score = 0;

  pause(){
    console.log('You paused the game.');
  }
  exit(){
    console.log('You exit the game.')
  }
}

const Player1 = new Player();
const Player2 = new Player();
const Player3 = new Player();
const Player4 = new Player();

Player1.score += 1;

console.log(Player1.score);
console.log(Player2.score);

Player1.pause();
Player1.exit();
Player2.exit();