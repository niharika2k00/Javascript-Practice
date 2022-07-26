console.log("Js Listening");

const textArea = document.getElementById("textArea");
// const outerUl = document.getElementsByClassName("outerUl");
const outerUl = document.querySelector(".outerUl");
const addButton = document.querySelector(".addButton");

var list = [];
let value;

textArea.addEventListener("keyup", (e) => {
  // console.log(e.target.value);
  value = textArea.value;
});

addButton.onclick = function () {
  if (textArea.value === "") alert("Oops! can't add blank list");
  else addHandler();
};

//  @Add Handler
var addHandler = () => {
  list.unshift(value); //  append @beginning of the array
  // list = [value, ...list];
  console.log("Modified array => ", list);

  var li = document.createElement("li");
  var textNode = document.createElement("text"); // Inline text
  textNode.style.cssText += "font-size : 1.2rem;";
  li.setAttribute("class", "listStyle");
  textNode.innerText = value;
  li.appendChild(textNode);

  // ul > li > span > X
  var span = document.createElement("span");
  var cross = document.createTextNode("X");
  span.appendChild(cross); // <span> X </span>
  span.classList.add("deleteBtn"); // add style class
  // console.log(span);

  li.appendChild(span);

  outerUl.appendChild(li);
  console.log(outerUl);

  textArea.value = "";
};

//  @Check (Complete) Mechanism
outerUl.addEventListener("click", function (e) {
  if (e.target.tagName === "TEXT") {
    e.target.classList.toggle("addCheck");
  }
});

//  @Delete Functionality
outerUl.addEventListener("click", function (e) {
  if (e.target.tagName === "SPAN") {
    console.log(e.target.parentElement.nodeName);

    var targetLI = e.target.parentElement;
    targetLI.remove();
  }
});
