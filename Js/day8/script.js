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
//the end