console.log("Welcome to the Javascript World.");

// var message;
// console.log(message); // undefined
// message = "The variable Has been hoisted";

// In JavaScript, all objects interact by REFERENCE when setting them equal to each other.
let c = { greeting: "Hey!" };
let d;

d = c;
c.greeting = "Hello";
console.log(d.greeting); // Hello

/* background-image: linear-gradient(rgba(0, 0, 0, 0.882), rgba(0, 0, 0, 0.886)), url(./images/Cse.jpg);

.table-row:nth-child(even) {
  background: rgba(238, 238, 238, 0.116);
} */

/* const obj = {
  fname: "Niharika",
  lname: "Dutta",
};

var display = function () {
  console.log("Firstname =  " + this.fname + "\tLastname  =  " + this.lname);
};

var res = display.bind(obj); //  return func
res();

Function.prototype.customBind = function (obj) {
  for (var i = 0; i < obj.length; i++) {}
};

var res1 = display.customBind(obj); //  return func
res1();
 */

const person1 = {
  fname: "Niharika",
  lname: "Dutta",
};

const person2 = {
  fname: "Teddy",
  lname: "Henfrey",
};

var display = function (place) {
  console.log("Name =  " + this.fname + " " + this.lname, "in", place);
};

// func.call()  =>  1st parameter refers to the object[this], then rest refers as variables.
display.call(person1, "Denmark");
display.call(person2);
