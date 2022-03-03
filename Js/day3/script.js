var user = {
    name : "John",
    age : 32,
    isMarried : true,
    hobby : "coding",
    fruits : ["banana", "orange", "pineapple"],
    Alert : function (){
        alert("Ooopsss");
    }
};

var list = [
    {
        username : "JohnBuh",
        password : "secret",
    },
    {
        username : "jbrng",
        password : "secret",
    }
];
var database = [
    {
        username: "john",
        password: "secret",
    }
];

var newsFeed = [
    {
        username : "andrei",
        feed : "How cool is javascript!! come we learn new tech...",
    },
    {
        username : "Koffi",
        feed : "Music is my life, i will sing forever and ever",
    }
];

var usernamePrompt = prompt("Enter your username: ");
var passwordPrompt = prompt("Enter your password: ");

function signIn (user, pass){
    if (user === database[0].username && pass === database[0].password){
        console.log(newsFeed);
    } else {
        alert("Ooops!!! Please enter correct information")
    }
}

signIn(usernamePrompt, passwordPrompt);