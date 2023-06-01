// add/create HTML elements
// .innerHTML (vulnerável a ataques XSS, input de usuários que executam SCRIPT's maliciosos)
// .textContent (more secure, textContent pega esse script e lê apenas como texto normal, não como script)

// const nameTag = document.createElement("h1");
// nameTag.innerHTML = window.prompt("Enter your name: ");
// document.body.append(nameTag);

const myList = document.querySelector("#fruit");
const listItem = document.createElement("li");
listItem.textContent = "mango";
// myList.append(listItem);
// myList.prepend(listItem);
myList.insertBefore(listItem, myList.getElementsByTagName("li")[1]);