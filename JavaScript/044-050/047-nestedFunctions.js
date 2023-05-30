// nested functions = Funções dentro de outras funções.

let username = "Bro";
let userInbox = 0;

login();



function login() {
  displayUsername();
  displayUserInbox();

  function displayUsername(){
    console.log(`Welcome ${username}!`);
  }
  
  function displayUserInbox(){
    console.log(`You have ${userInbox} new messages.`)
  }
}

