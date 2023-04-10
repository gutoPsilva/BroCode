let x = Math.floor(Math.random() * 6) + 1;
let y = Math.floor(Math.random() * 6) + 1;
let z = Math.floor(Math.random() * 6) + 1;
// Math.Random gera aleatórios entre 0.0 até 1.0, multiplicar por 6 gera de 0.0 até 5.0
// Math.floor arredonda para o inteiro MENOR, que é 0, portanto, o + 1 resulta em 1.

document.getElementById("rollBtn").onclick = function() {

    x = Math.floor(Math.random() * 6) + 1;
    y = Math.floor(Math.random() * 6) + 1;
    z = Math.floor(Math.random() * 6) + 1;

    document.getElementById("xlabel").innerHTML = x;
    document.getElementById("ylabel").innerHTML = y;
    document.getElementById("zlabel").innerHTML = z;
    if (x == y && y == z){
        window.alert("TÁ PORRA MENÓ 3 IGUAL VEINHO, COMEÇA A JOGAR NO BICHO E FALA Q O PAI TE ENSINOKKKKKKKKKKKKKK")
    }
}