console.log("Js listening");

const textArea = document.getElementById("textArea");
// const outerUl = document.getElementsByClassName("outerUl");
const outerUl = document.querySelector(".outerUl");
const addButton = document.querySelector(".addButton");

var list = [];
var value;

textArea.addEventListener("keyup", (e) => {
  console.log(e.target.value);

  if (textArea.value == "") alert("Oops! can't add blank list");
  else {
    value = textArea.value;
  }
});

addButton.onclick = function () {
  console.log("Added");

  list.unshift(value); //  append @beginning of the array
  // list = [value, ...list];
  console.log("Modified array => ", list);
  // console.log("value : ", value);

  var li = document.createElement("li");
  li.innerText = value;

  var span = document.createElement("span");
  var cross = document.createTextNode("X");
  span.appendChild(cross); // <span> X </span>
  // span.innerText = "X";
  span.classList.add("deleteBtn");
  console.log(span);

  li.appendChild(span);

  outerUl.appendChild(li);
  console.log(outerUl);

  textArea.value = "";
};

outerUl.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("addCheck");
  }
});

outerUl.addEventListener("click", function (e) {
  if (e.target.tagName === "SPAN") {
    // search span tag
    console.log(e.target); // this
    console.log(e.target.parentElement.nodeName);

    var targetLI = e.target.parentElement;
    targetLI.remove();
    // targetLI.style.display = "none";
  }
});

var Del = document.getElementsByClassName(".deleteBtn");
console.log(Del);
