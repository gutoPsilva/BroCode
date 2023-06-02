// canvas API = uma maneira de desenhar gráficos
//              usado em animações, jogos e visualização de dados
//              para desenhar no canvas é necessário um contexto de ESPAÇO

let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");

/* DRAW LINES
context.lineWidth = 5;
context.strokeStyle = "purple";
context.beginPath();
context.moveTo(0, 0);
context.lineTo(250, 250);
context.lineTo(250, 500);
context.moveTo(500, 0);
context.lineTo(250, 250);
context.stroke();
*/

/* TRIANGLE

context.fillStyle = "yellow";
context.lineWidth = 10;
context.strokeStyle = "grey";
context.beginPath();
context.moveTo(250, 0);
context.lineTo(0, 250);
context.lineTo(500, 250);
context.lineTo(250, 0);
context.stroke();
context.fill();

*/

// DRAW RECTANGLE
/*
context.fillStyle = 'black';
context.strokeStyle = 'black';
context.fillRect(0, 0, 250, 250);
context.strokeRect(0, 0, 250, 250);

context.fillStyle = 'red';
context.strokeStyle = 'black';
context.fillRect(0, 250, 250, 250);
context.strokeRect(0, 250, 250, 250);

context.fillStyle = 'green';
context.strokeStyle = 'black';
context.fillRect(250, 250, 250, 250);
context.strokeRect(250, 250, 250, 250);

context.fillStyle = 'blue';
context.strokeStyle = 'black';
context.fillRect(250, 0, 250, 250);
context.strokeRect(250, 0, 250, 250);
*/

// DRAW CIRCLE
// (x, y, r, sAngle, eAngle, counterclockwise)
/*
context.fillStyle = 'lightblue';
context.lineWidth = 10;
context.strokeStyle = 'darkblue'
context.beginPath();
context.arc(250, 250, 200, 0, 2 * Math.PI);
context.stroke();
context.fill();
*/

// DRAW TEXT
context.font = "50px MV Boli";
context.fillStyle = 'gray';
context.textAlign = 'center';
context.fillText("YOU WIN!", canvas.width / 2, canvas.height / 2);