// checked retorna TRUE ou FALSE

document.getElementById("myButton").onclick = function() {

    const myCheckBox = document.getElementById("myCheckBox");
    const visaBtn = document.getElementById("visaBtn");
    const masterCardBtn = document.getElementById("masterCardBtn");
    const paypalBtn = document.getElementById("paypalBtn");

    if(myCheckBox.checked){
        console.log("You are subscribed!");
    }
    else{
        console.log("You are NOT subscribed!");
    }

    if(visaBtn.checked){
        console.log("You are paying with Visa.");
    }
    else if(masterCardBtn.checked){
        console.log("You are paying with MasterCard.");
    }
    else if(paypalBtn.checked){
        console.log("You are paying with Paypal.");
    }
    else{
        console.log("Please select a payment type.");
    }
}