

var button_1 = document.getElementById("button_1");
var button_2 = document.getElementById("button_2");
var button_3 = document.getElementById("button_3");
var button_4 = document.getElementById("button_4");
var button_5 = document.getElementById("button_5");

var buttons = document.getElementsByClassName("buttons")

// button_1.onclick = function (){
//     confirm("Are you sure?")
//     if (("Are you sure?")); {
//         button_1.style.backgroundColor = "green"}
//     else {
//         button_1.style.backgroundColor = "red"}
//     } 
    
button_1.onclick = function (){
    if (confirm("Are you sure?") ==true){
        button_1.style.backgroundColor = "green"}
    else{
        button_1.style.backgroundColor = "red"}
    } 



button_2.onclick = function (){
    if (confirm("Are you sure?") ==true){
        button_2.style.backgroundColor = "green"}
    else{
        button_2.style.backgroundColor = "white"}
    } 

button_3.onclick = function (){
    button_3.style.backgroundColor = "green" ;
}

button_4.onclick = function (){
    button_4.style.backgroundColor = "green" ;
}

button_5.onclick = function (){
    button_5.style.backgroundColor = "green" ;
}

// buttons[0].onclick = function(){
//     confirm("Emin misiniz?");
//     buttons[0].style.backgroundColor = "red";
// }

// buttons[5].onclick = function(){
//     if (confirm("Emin misiniz?")) {
//         buttons[5].style.backgroundColor = "blue";
//     } else {
//         buttons[5].style.backgroundColor = "red";
//         } 
//     }