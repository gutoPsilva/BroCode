// useful string properties & methods

let userName = "  Gustavo Pereira  ";
let phoneNumber = "123-456-7890";

//console.log(userName.length);  Tamanho, mede quantidade de caracteres incluindo espaços, 7 no caso
//console.log(userName.charAt(0));  Pega um único caracter, começa na posição 0, G no caso
//console.log(userName.indexOf("a"));  retorna posição do parâmetro fornecido, "a", no caso 4, começa do 0
//console.log(userName.lastIndexOf("a"));  retorna a último posição do parâmetro fornecido, no caso 14.
//userName = userName.trim(); corta espaços vazios ANTES E DEPOIS do texto, não no meio
//userName = userName.toUpperCase(); caixa alta
//userName = userName.toLowerCase(); caixa baixa

phoneNumber = phoneNumber.replaceAll("-", "/"); // substitui TODOS os (primeiro parâmetro) pelo (segundo parâmetro)


console.log(userName.trim());
console.log(phoneNumber);