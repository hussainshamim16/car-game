// var userInput = prompt('your Name');
// var myvalue = userInput.toUpperCase();
// console.log(myvalue);
// conditions
var one = 2;
var two = 4;

var circle = document.getElementById("danger")
var gameArea = document.getElementById("gameArea")
var move = document.getElementById("playArea");
move.addEventListener("click",function mov(){
    if(one !== two){
    gameArea.style.alignItems = "flex-end";
    two = 2;
    
}
else{
    gameArea.style.alignItems = "flex-start";
    two = 4;
} 
})

for(i=1; i <= 10; i++){
    document.write(i)
}