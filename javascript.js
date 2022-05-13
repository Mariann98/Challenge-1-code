function milesConvert(value) {
  document.getElementById("Earth_miles").innerHTML = value * 5.8043;
}

//let water = document.getElementById("water_supply");
//water.onmouseover = function () {
 // alert("50%");


 var dataButton = document.getElementsByClassName("data_button");

 for (var i=0; i < dataButton.length; i++) { 
     dataButton[i].addEventListener("mouseover", function () {
         this.style.color = "#c0a6f1";
     });
     dataButton[i].addEventListener("mouseout", function () {
       this.style.color = "";
     });
 }

let button = document.getElementById("data_buttons");
button.addEventListener("click",function(){
  alert("There is still 50% of water.");
});

let buttons = document.getElementById("data_buttons1");
buttons.addEventListener("click",function(){
  alert("There is still 30% of food left.");
});