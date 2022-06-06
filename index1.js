console.log("Welcome to the Javascript World.");

console.log(aa);
var aa = "Helloooooo  : )";
console.log(aa);

var message;
console.log(message);
message = "The variable Has been hoisted";

//   Callback Function
function callbackFunction(name) {
  console.log("Hello " + name);
}

function outerFunction(callback) {
  let name = "Niharika";
  callback(name);
}

outerFunction(callbackFunction);
