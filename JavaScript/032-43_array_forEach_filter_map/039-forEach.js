// array.forEach() = executa uma função callBack uma vez para CADA ELEMENTO do array

let students = ["spongebob", "patrick", "squidward", "bateman"];
students.forEach(capitalize);
students.forEach(print);

function capitalize(element, index, array){
    array[index] = element[0].toUpperCase() + element.substring(1);
}

function print(element){
    console.log(element);
}