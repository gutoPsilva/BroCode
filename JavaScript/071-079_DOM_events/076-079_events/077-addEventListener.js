// .addEventListener(event, function, useCapture)
//  podemos adicionar vários eventos a um elemento HTML
//  o mesmo evento pode invocar diferentes funções
//  useCapture = true/false especifica qual elemento tem preferência quando ambos ocupam o mesmo espaço e executam e tem o mesmo evento.

const innerDiv = document.getElementById("innerDiv");
const outerDiv = document.getElementById("outerDiv");

innerDiv.addEventListener("click", changeBlue);
outerDiv.addEventListener("click", changeBlue, true);

function changeBlue(){
  alert(`You selected ${this.id}`);
  this.style.backgroundColor = 'lightblue';
}

// innerDiv.addEventListener("mouseover", changeRed);
// innerDiv.addEventListener("mouseout", changeGreen);

// function changeRed(){
//   innerDiv.style.backgroundColor = 'red';
// }

// function changeGreen(){
//   innerDiv.style.backgroundColor = 'lightgreen';
// }