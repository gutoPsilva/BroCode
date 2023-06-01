// setInterval() = repete uma função constantemente a cada X milissegundos
//                 função assíncrona

let count = 0;

let max = window.prompt("Count up to what number?")
max = Number(max);

const myTimer = setInterval(countUp, 1000);

function countUp(){
  count+=1;
  console.log(count);
  if(count>=max){
    clearInterval(myTimer);
  }
}