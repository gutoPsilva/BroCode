// error = erros são objetos com uma descrição de algo que deu errado
// não conseguiu abrir o arquivo, perdeu conexão, input errado de usuário, TypeError
// throw = executa um erro definido pelo usuário

try{
  let x = window.prompt("Enter a number");
  x = Number(x);

  if(isNaN(x)) throw "That wasn't a number!";
  if(x == "") throw "That was empty!";

  console.log(`${x} is a number`);
}
catch(error){
  console.log(error);
}
finally{
  console.log("This always executes");
}