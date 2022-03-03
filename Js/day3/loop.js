var TodoList = [
    "Wake up",
    "Bath",
    "Drink water",
    "Code JavaScript",
];

for (var i = 0; i < TodoList.length; i++){
    console.log(TodoList[i]);
}

// function TodoFun (todo, i){
//     console.log(todo, i);
// }
// TodoList.forEach(TodoFun)

TodoList.forEach(function(todo, i){
    console.log(todo, i);
});
console.log(" ");
console.log("This is while loop")
var x = 0;
while (x < TodoList.length){
    console.log(TodoList[x]);
    x++;
}