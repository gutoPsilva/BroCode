// cookie = um pequeno arquivo de texto que é armazenado no computador
//          usado para lembrar informações de um usuário
//          dados são salvos em pares de nome-valor

// console.log(navigator.cookieEnabled);
// document.cookie = "firstName=Patrick; expires=Sun, 1 January 2024 00:00:00 UTC; path=/";
// document.cookie = "lastName=Bateman; expires=Sun, 1 January 2000 00:00:00 UTC; path=/";
// console.log(document.cookie);

const firstText = document.querySelector("#firstText");
const lastText = document.querySelector("#lastText");
const submitButton = document.querySelector("#submitBtn");
const cookieButton = document.querySelector("#cookieBtn");

submitButton.addEventListener("click", () => {
  setCookie("firstName", firstText.value, 365);
  setCookie("lastName", lastText.value, 365);
});

cookieButton.addEventListener("click", () => {
  firstText.value = getCookie("firstName");
  lastText.value = getCookie("lastName");
});

setCookie("firstName", "SpongeBob", 365);
setCookie("lastName", "SquarePants", 365);

console.log(getCookie("firstName"));
console.log(getCookie("lastName"));

deleteCookie("firstName");
deleteCookie("lastName");

function setCookie(name, value, daysToLive){
  const date = new Date();
  date.setTime(date.getTime() + daysToLive * 24 * 60 * 60 * 1000); // H, M, S, MS
  let expires = "expires=" + date.toUTCString();
  document.cookie = `${name}=${value}; ${expires}; path=/`;
}

function deleteCookie(name){
  setCookie(name, null, null);
}

function getCookie(name){
  const cDecoded = decodeURIComponent(document.cookie);
  const cArray = cDecoded.split("; ");
  console.log(cArray);
  let result = null;

  cArray.forEach(element => {
    if(element.indexOf(name) == 0){
      result = element.substring(name.length + 1);
    }
  });
  return result;
}

