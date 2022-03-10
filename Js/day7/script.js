// advanced array with es6 

const array = [1,2,3,4,5];

const double = [];
const newArray = array.forEach((num) => {
    double.push(num * 2);
})

console.log(double);

// map, filter , reduce 

const mapArray = array.map(num => num *2);
console.log("map " , mapArray);
// filter 
const filterArray = array.filter(num => num > 5);
console.log("filter ", filterArray);

// reduce 
const reduceArray = array.reduce((accumulator, num) =>{
    return accumulator + num;
}, 0);

console.log("reduce ", reduceArray);

// Advanced object in javascript es6
// reference type 

const object1 = { value : 10};
const object2 = object1;
const object3 = { value : 10};

//context vs scope 

const object4 = {
    a: function (){
        console.log(this);
    }
}