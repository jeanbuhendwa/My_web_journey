var num = 4+4;
if (Number(num) === 8){
    console.log("You are smart");
}

function sayHello(){
    console.log("Helloooo");
}
sayHello();

var sayBye = function(){
    console.log("Bye Bye")
}
sayBye();

function sing(song){
    console.log(song);
}
sing("Eddy Kenzo");

function multiply (a, b){
    if (a > 10 || b > 10){
        return "That is too hard for me";
    } else{
        return a * b;
    }
}
alert(multiply(2,5));

function checkDriverAge (){
    var age = prompt("Enter your age ");
    if (Number(age) < 18){
        alert("You are too young to drive this car");
    } else if (Number(age) === 18){
        alert("Congratulation on your first year of driving");
    } else if (Number(age) > 18){
        alert("Have a nice ride");
    }
}

function checkDriverAge2(age){
    if (age < 18){
        return "You are too young to drive this car";
    } else if (age === 18){
        return "congratulation on your first year of driving";
    } else if (age > 18){
        return "Powering on, enjoy your ride";
    }
}