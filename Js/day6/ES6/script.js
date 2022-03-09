const player = "Boody";
let experience = 100;
let wizardLevel = false;

if (experience > 90){
    let wizardLevel = true;
    console.log("Inside ", wizardLevel);
}
console.log("outside ", wizardLevel);

// const and let 
// const = a new javascript declaration that cannot be updated
// let = a new javascript declaration that can be updated 


//template strings
const name = "john";
const age = 40;
const pet = "horse";

const greetings =  `Hello ${name}, How are doing, you seem to be ${age-12}, and it like ${pet} is your favorite pet`;

function greets (name='', age = 30, pet = "cat"){
    return `Hello ${name}, How are doing, you seem to be ${age-12}, and it like ${pet} is your favorite pet`;
}

//Arrow function in javascript

//normal function 
function add(a,b){
    return a+b;
}

//with an arrow function 
const add2 = (a,b) => a+b;