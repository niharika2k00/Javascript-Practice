console.log("Welcome to the Javascript World.");

var box1 = document.querySelector(".box1");
var box2 = document.querySelector(".box2");
var box3 = document.querySelector(".box3");
var box4 = document.querySelector(".box4");

var effectBox = document.querySelector(".effector");

// document.querySelector(".box2").style.backgroundColor = "deeppink";

// console.log(window);
// console.log(window.getComputedStyle(box2).backgroundColor);

//  GRAB the Style
const getColor = (selector) => {
  return window.getComputedStyle(selector).backgroundColor;
};

var color = getColor(box3);
console.log("Color: " + color);

// element.addEventListener(event, function, useCapture);     useCapture : BOOLEAN : event bubbling / event capturing.

function colorChanger(clickedElement, color) {
  clickedElement.addEventListener("mouseover", function () {
    effectBox.style.backgroundColor = color;
  });
}

colorChanger(box1, getColor(box1));
colorChanger(box2, getColor(box2));
colorChanger(box3, getColor(box3));
colorChanger(box4, getColor(box4));
