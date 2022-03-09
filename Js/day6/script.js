//this is javascript scope

var fun = "hello";

function funnier (){
    var fun = "Good";
    console.log(3, fun);
}
function funniest (){
    var fun = "Hiiiii";
    console.log(2, fun);
}
function funniest2(){
    var fun = "ahhhhhh";
    console.log(1, fun);
}

funnier();
funniest();
funniest2();

//javascript control flow  .. Termary Operator

function isUserValid(bool){
    return bool;
}
var answer = isUserValid(true)? "You may enter" : "Access denied";

var autoAnswer = "Your account number is " + (isUserValid(true)? "12345" : "Is not valid");

//Swithc operator javascript

function moveCommand(direction){
    var whatHappened;
    switch(direction){
        case "forward" :
            whatHappened = "You are moving in the right direction";
            break;
        case "back" :
            whatHappened = "You are moving in the wrong direction";
            break;
        case "left" :
            whatHappened = "You are going to the left side";
            break;
        case "right" :
            whatHappened = "you are going to the right side";
            break;
        default:
            whatHappened = "Please enter the valid command";
    }
    return whatHappened;
}