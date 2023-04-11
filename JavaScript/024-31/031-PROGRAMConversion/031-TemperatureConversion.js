document.getElementById("submitBtn").onclick = function() {

    let temp = Number(document.getElementById("textBox").value);

    if(document.getElementById("cBtn").checked ){
        temp = toCelsius(temp);
        document.getElementById("resLabel").innerHTML = `${temp}°C`;
    }
    else if(document.getElementById("fBtn").checked){
        temp = toFarenheit(temp);
        document.getElementById("resLabel").innerHTML = `${temp}°F`;
    }
    else{
        document.getElementById("resLabel").innerHTML = "Select a Unit";
    }
}

function toCelsius(temp){
    return (temp-32) * 5 / 9;
}

function toFarenheit(temp){
    return temp * 9 / 5 + 32;
}