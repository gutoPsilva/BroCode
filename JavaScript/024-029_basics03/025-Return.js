// return = retona um valor de volta a um ponto
//          quando você invoca uma função

let area;
let width = window.prompt("Enter width");
let height = window.prompt("Enter height");

area = getArea(width, height); // quando a função é completa, o resultado é atribuido a área.

console.log(`The area is ${area}`);

function getArea(width, height){
    return width*height;
}