// switch = statement que examina um valor 
//          tal valor pode se encaixar em uma das cláusulas JÁ ESTABELECIDAS.
//          mais eficiente que "else if" em casos onde os valores são específicos e não fogem daquilo.

/*
if(grade == "A"){
    console.log("You did great!");
}
else if(grade == "B"){
    console.log("You did good!");
}
else if(grade == "C"){
    console.log("You did okay!");
}
else if(grade == "D"){
    console.log("You have passed... barely.");
}
else if(grade == "F"){
    console.log("You failed.");
}
else{
    console.log(`${grade} is not a letter grade.`)
}
*/

let grade = 50;

switch(true){
    case grade >= 95:
        console.log("You did great!");
        break;
    case grade >= 80:
        console.log("You did good!");
        break;
    case grade >= 70:
        console.log("You did okay!");
        break;
    case grade >= 50:
        console.log("You passed... barely.");
        break;
    case grade < 50:
        console.log("You failed.");
        break;
    default:
        console.log(`${grade} isn't a letter grade.`);
}