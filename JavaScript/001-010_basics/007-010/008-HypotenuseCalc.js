let a;
let b;
let c;

/*
a = window.prompt("Enter side A");
a = Number(a)

b = window.prompt("Enter side B");
b = Number(b)

c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2)); // exponencial 2 A e B, raíz quadrada da soma de ambos
console.log(`Side C: ${c}`);
*/

document.getElementById("submitButton").onclick = function(){
    a = document.getElementById("aText").value;
    a = Number(a);

    b = document.getElementById("bText").value;
    b = Number(b);

    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2)); // exponencial 2 A e B, raíz quadrada da soma de ambos
    
    document.getElementById("cLabel").innerHTML = `Side C: ${c}`;
}