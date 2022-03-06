// document.getElementsByTagName("h1");
// document.getElementById("first");
// document.querySelector("Select the element");
// document.querySelectorAll("select all the element here by tagname");
// document.querySelector("select the tag here").getAttribute("get the attribute name here");
// document.querySelector("select the tag element here").setAttribute("select the attribute", "Change it here"); 

// var button = document.getElementsByTagName("button")[0];

// button.addEventListener("click", function(){
//     console.log("Click...");
// });

// button.addEventListener("mouseenter", function(){
//     console.log("Mouse enter...");
// })

// button.addEventListener("mouseleave", function(){
//     console.log("mouseleave...");
// })

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength (){
    return input.value.length;
}
function createElement (){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}
function addAfterClick (){
    if (inputLength()>0){
        createElement();
    }
}
function addAfterKeyPress (event){
    if (inputLength()>0 && event.keyCode === 13){
        createElement();
    }
}
button.addEventListener("click", addAfterClick);

input.addEventListener("keypress", addAfterKeyPress);