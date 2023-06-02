// window = interface usada para dialogar com o navegador
//          o DOM é propriedade do window

// console.log(window.location.href);
// window.location.href = 'https://www.google.com';

// console.log(window.location.hostname);
console.log(window.location.pathname);

const myButton = document.querySelector("#myButton");
// myButton.addEventListener('click', () => window.close());
// myButton.addEventListener('click', () => window.open('https://www.google.com'));
// myButton.addEventListener('click', () => window.print());

// window.alert("Hello");
// window.confirm("Pres OK to continue.");

let age = window.prompt("Enter you age: ");
if(age < 18){
  window.alert("You must be 18+ to visit this site!");
  window.close();
}else{
  
}