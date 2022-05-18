function milesConvert(value) {
  document.getElementById("earth_miles").innerHTML = value * 5.8043;
}
var dataButton = document.getElementsByClassName("data_button");
for (var i = 0; i < dataButton.length; i++) {
  dataButton[i].addEventListener("mouseover", function () {
    this.style.color = "#c0a6f1";
  });
  dataButton[i].addEventListener("mouseout", function () {
    this.style.color = "";
  });
}

let button = document.getElementById("data_buttons");
let waterData = document.getElementById("water_data");
button.addEventListener("click", function () {
  waterData.classList.remove("hidden");
});

let buttons = document.getElementById("data_buttons1");
buttons.addEventListener("click", function () {
  alert("There is still 30% of food left.");
});
