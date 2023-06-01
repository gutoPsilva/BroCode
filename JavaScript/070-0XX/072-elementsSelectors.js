/*
let element = document.getElementById('myTitle');
element.style.backgroundColor = 'lightgreen';

let fruits = document.getElementsByName("fruits");

fruits.forEach(fruit => {
  if(fruit.checked){
    console.log(fruit.value);
  }
});

let vegetables = document.getElementsByTagName('li');
vegetables[0].style.backgroundColor = 'lightgreen';

let desserts = document.getElementsByClassName("desserts");
desserts[2].style.backgroundColor = 'lightgreen';

*/
// querySelector permite pegar elementos pelo seu ID, classe, tag, atributo
// querySelectorAll permite pegar TODOS os elementos que tiverem esse ID, classe, tag OU atributo
// pega elemento pelo ID #
let element = document.querySelector("#myTitle");
element.style.backgroundColor = 'lightgreen';

// pega TODOS OS ELEMENTOS que tiverem a classe .
let multipleElements2 = document.querySelectorAll(".desserts");
multipleElements2.forEach(element => element.style.backgroundColor = 'lightpink');

// pega elemento pela classe .
let element2 = document.querySelector(".desserts");
element2.style.backgroundColor = 'lightblue';

// pega o elemento com a tag li, todos com li é querySelectorAll
let elementTag = document.querySelector("li");

// pega elemento por atributo HTML <label for="xx">
let elementAtri = document.querySelectorAll("[for]");
elementAtri.forEach(element => element.style.backgroundColor = 'pink');
