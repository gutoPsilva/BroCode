// templates literais = delimitados com ``(crase)
//           permite colocar texto com variáveis juntos facilmente, vars com ${var}

let userName = "Gustavo";
let items = 3;
let total = 75;

// substitui console.log("Hello", userName);

// console.log(`Hello ${userName}!`);
// console.log(`You have ${items} in your cart.`);
// console.log(`Your total is ${total} dollars.`);

let text = 
`Hello ${userName}!<br>
You have ${items} in your cart.<br>
Your total is ${total} dollars.`;

document.getElementById("myLabel").innerHTML = text;