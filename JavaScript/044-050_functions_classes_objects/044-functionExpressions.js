// function expressions = função sem nome/ anônima
//                        ajuda a evitar que o escopo global fique poluido com muitos nomes de funções
//                        Write it, then forget about it.

let count = 0;

document.getElementById("increaseBtn").onclick = function(){
    count +=1;
    document.getElementById("myLabel").innerHTML = count;
}

document.getElementById("decreaseBtn").onclick = function(){
    count -=1;
    document.getElementById("myLabel").innerHTML = count;
}

/*
function increaseCount(){
    count +=1;
    document.getElementById("myLabel").innerHTML = count;
}

function decreaseCount(){
    count -=1;
    document.getElementById("myLabel").innerHTML = count;
}
*/