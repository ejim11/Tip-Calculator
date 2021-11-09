"use strict";

let billInput = document.getElementById("billInput");
let numOfPeople = document.getElementById("numOfPeople");
let tipAmount = document.getElementById("tipAmount");
let totalAmount = document.getElementById("totalAmount");
let billValue, numOfPeopleValue, now;

//
//
// adding event listerners( CLICK) to the number of people input

numOfPeople.addEventListener("input", function () {
  billValue = Number(billInput.value);
  numOfPeopleValue = Number(numOfPeople.value);
  now = billValue * numOfPeopleValue * (percentTip / 100 || input / 100);
  if (numOfPeopleValue >= 1) {
    tipAmount.textContent = (now / numOfPeopleValue).toFixed(2);
  } else {
    tipAmount.textContent = "0.00";
  }
  totalAmount.textContent = now.toFixed(2);
  if (numOfPeopleValue) {
    warning.classList.remove("active");
    noOfPeople.classList.remove("borderColor");
  }
});

//
// creating an event listerner for the tips and the custom buttons and input corresponsively
//
//
const noOfPeople = document.querySelector(".noOfPeople");
// storing the dom node of the number of pople div
const warning = document.querySelector(".warning");
// storing the warning element node for the num of people input
let input, custom, tips, givenTip, targetValue, percentTip, target;
// storing the percent tip to hold the value of the clicked given tip button, targetValue to hold the target.value and input to hold the custom input value
// storing the custom input node, tips node containing all the inputs, givenTip node containg only given tips button
custom = document.querySelector(".custom");
tips = document.getElementById("tips");
givenTip = document.querySelectorAll(".givenTip");
//
function removeTipColor() {
  // function to remove the tip color when another tip or custo is clicked or inputted respectively
  for (let n of givenTip) {
    n.classList.remove("colorTip");
  }
}
function warningOnNumOfPeople() {
  // function to show warning to the num of people after given tip button has been clicked or the custom input given a value
  warning.classList.add("active");
  noOfPeople.classList.add("borderColor");
}
tips.addEventListener(
  // adding event listerner to the tips containing all input. this technique makes use of event delegation
  "click",
  function (e) {
    target = e.target;

    if (target.classList.contains("givenTip")) {
      warningOnNumOfPeople();
      e.preventDefault();
      targetValue = target.value;
      percentTip = Number(targetValue.slice(0, targetValue.indexOf("%")));
      removeTipColor();
      target.classList.add("colorTip");
    } else {
      custom.addEventListener("input", function () {
        percentTip = 0;
        input = custom.value;
        warningOnNumOfPeople();
        removeTipColor();
      });
    }
  },
  false
);

//
//
//
// reset button
const reset = document.querySelector(".reset");
reset.addEventListener(
  // adding an event listerner to the reset button
  "click",
  function () {
    document.getElementById("billInput").value = "";
    document.getElementById("numOfPeople").value = "";
    document.querySelector(".custom").value = "";
    document.getElementById("totalAmount").textContent = "0.00";
    tipAmount.textContent = "0.00";
    target.classList.remove("colorTip");
    warning.classList.remove("active");
    noOfPeople.classList.remove("borderColor");
    percentTip = 0;
  },
  false
);
