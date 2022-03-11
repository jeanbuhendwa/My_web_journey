//Es8 padding 
//.padStart() .padEnd()

"John".padStart(10); // "      johnn"
"john".padEnd(10); // "john     "


// multiple parameter
const fun = (a,b,c,d,e) => {
    console.log(a);
}

fun(1,2,3,4,5);

//object.value & object.entries
//object
let newObject = {
    username0 :'John',
    username1 : '12345',
    username2 : 'buhendwa',
}

Object.keys(newObject).forEach((key, index)=>{
    console.log(key, newObject[key]);
})

//values
Object.values(newObject).forEach(values => {
    console.log(values)
})

//entries
Object.entries(newObject).forEach(value => {
    console.log(value);
})

Object.entries(newObject).map(value => {
    return value[1] + value[0].replace('username', '');
})

//.flat and flatMap

const flatNum = [1,2,3,[4],[[3]]];
flatNum.flat(3);

flatNum.flatMap(addOn => addOn + "okay");

const userEmail = "           jgjb@gmail.com";
const userEmail2 = "jdjkjf@gmail.com           ";

console.log(userEmail.trimStart());
console.log(userEmail2.trimEnd());

// fromEntries 
userProfile = [['tomCommander', 23], ['john', 30]];
Object.fromEntries(userProfile);

const obj = Object.fromEntries(userProfile);
Object.entries(obj);

// Try and catch try and check a piece of code and catch errors

try {
    5 + 4;
} catch(error){
    console.log("you messed up" + error)
}

// advanced loop function in javascript es10
//for in and for of

const fruit = ['oranges', 'mango', 'grapes'];
const detailedFruit = {
    Oranges : 5,
    mangos : 10,
    grapes : 20
}
for (item of 'fruit'){
    console.log(item);
}

for (item in detailedFruit){
    console.log(item);
}

//ES2020
// BigInt 

var num = 2;
typeof num; // number 
typeof 2n; // bigint 


//Optional chaining operator ?. 
let john_pokemon = {
    pikachu : {
        species : 'mouse pokemon',
        height : 8.9,
        weight : 50,
    }
}
//by using the if statement

// if (john_pokemon.pikachu && john_pokemon.pikachu.weight){
//     const weight2 = john_pokemon.pikachu.weight;
//     console.log(weight2);
// } else{
//     console.log(weight2)
// }

//using the Optional chaining operator

const weightTot = john_pokemon?.kooobo?.weight;
console.log(weightTot);

//Nullish coalescing operator 

let judas_pokemon = {
    pikachu : {
        name : "game",
        scpecies : "snake pokemon",
        power : "Hello ",
    }
}

const power = judas_pokemon?.pikachu?.power || "No power"; // by using Or operator
console.log('OR ', power);

const powerNull = judas_pokemon?.pikachu?.power ?? "No power"; // by using Nullish coalescing operator
console.log('Nullish ', powerNull); 

//ES2021 
//Replace all function 
const str = "Hello, Javascript is the best of the best";
const newStr = str.replace('best', 'better');
const newStrAll = str.replaceAll('best', 'worst');

console.log('Replace ', newStr);
console.log('replace all ', newStrAll);