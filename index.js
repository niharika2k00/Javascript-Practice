console.log("Welcome to the Javascript World.");

var box1 = document.querySelector(".box1");
var box2 = document.querySelector(".box2");
var box3 = document.querySelector(".box3");
var box4 = document.querySelector(".box4");

var effectBox = document.querySelector(".effector");

var inputBox = document.querySelector("#input");

// document.querySelector(".box2").style.backgroundColor = "deeppink";

// console.log(window);
// console.log(window.getComputedStyle(box2).backgroundColor);

box2.addEventListener("click", function (event) {
  event.target.style.backgroundColor = "green";
  console.log("BOX 2 color :  ", event.target.style.backgroundColor);
});

//  GRAB the Style
const getColor = (selector) => {
  return window.getComputedStyle(selector).backgroundColor;
};

var color = getColor(box3);
console.log("Color: " + color);

var toggle = (clickedElement, text) => {
  console.log("Initial ", text);

  if (text === "Yeah !") clickedElement.innerHTML = text;
  else clickedElement.innerHTML = "Yeah !";

  console.log("Final ", text);
};

// element.addEventListener(event, function, useCapture);     useCapture : BOOLEAN : event bubbling / event capturing.
function colorChanger(clickedElement, color) {
  clickedElement.addEventListener("mouseover", function () {
    effectBox.style.backgroundColor = color;

    const text = clickedElement.innerHTML;
    // toggle(clickedElement, text);
  });
}

colorChanger(box1, getColor(box1));
colorChanger(box2, getColor(box2));
colorChanger(box3, getColor(box3));
colorChanger(box4, getColor(box4));

var x = document.getElementById("frm1");

console.log(x.elements[1].value);

var text = "";
var i;
for (i = 0; i < x.length; i++) {
  text += x.elements[i].value + "<br>";
}

var node;
var HTag = document.createElement("h3");
var display = document.querySelector("#display");

inputBox.addEventListener("keyup", function (e) {
  console.log(e.target.value);

  display.innerText = e.target.value;

  // node = document.createTextNode(e.target.value);
  // HTag.appendChild(node);
  // display.appendChild(node);
});
