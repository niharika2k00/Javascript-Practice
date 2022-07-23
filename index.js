console.log("Welcome to the Javascript World.");

var box1 = document.querySelector(".box1");
var box2 = document.querySelector(".box2");
var box3 = document.querySelector(".box3");
var box4 = document.querySelector(".box4");

var effectBox = document.querySelector(".effector");

var inputBox = document.querySelector("#input");

// document.querySelector(".box2").style.backgroundColor = "deeppink";
// console.log(window.getComputedStyle(box2).backgroundColor);

/* 
      GET THE COLOR OF AN ELEMENT
    ---------------------------------        
    1) If style is INLINE then use     ==>     event.target.style.backgroundColor;
    2) Else       ==>       window.getComputedStyle(box2).backgroundColor
*/

box2.addEventListener("click", function (event) {
  event.target.style.backgroundColor = "#ff595e";
  console.log("Get Box Color from Inline Styling :  ", event.target.style.backgroundColor);
});

//  GRAB the Style
const getColor = (selector) => {
  return window.getComputedStyle(selector).backgroundColor;
};

var color = getColor(box3);
console.log("Color: " + color);

var toggle = (clickedElement, text) => {
  console.log("Initial ", text);
  0;
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

var content;
var HTag = document.createElement("h3"); // Create  <h2> tag </h2>
var display = document.querySelector("#display"); // P Tag

inputBox.addEventListener("keyup", function (e) {
  console.log(e.target.value);
  console.log("Onchange => ", inputBox.value);

  display.innerHTML = "<h2>" + e.target.value + "</h2>"; // `<h2> val </h2>`
  // display.innerText = "<h2>" + e.target.value + "</h2>"; // returns the text content

  // content = document.createTextNode(e.target.value);
  // HTag.appendChild(content);
  // display.appendChild(HTag);
});

//  Inline ONCHANGE is also applicable.
inputBox.onchange = function () {
  inputBox.value = inputBox.value.toUpperCase();
};

const clickFunc = () => {
  window.location = "https://stackoverflow.com/questions/52229901/navigate-to-route-on-button-click";
};

const changeSelect = (selectOption) => {
  var value = selectOption.value;
  console.log(value);
};
