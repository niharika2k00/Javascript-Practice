console.log("Welcome to the Javascript World.");

console.log(aa);
var aa = "Helloooooo  : )";
console.log(aa);

// var message;
// console.log(message); // undefined
// message = "The variable Has been hoisted";

/* let b = 10; // created in the script scope
{
  var a = 100;
  let b = 45; // created in the Block scope
  const c = 78;

  console.log(a);
  console.log(b);
  console.log(c);
} 

console.log("Outer ", b); */

/* function z() {
  var b = 1000;
  function x() {
    var a = 200;

    function y() {
      console.log("Value coming due to Lexical Environment : ", a, b);
    }

    y();
    return y;
  }

  x();
  return x;
}

var res = z();
console.log("Result from the func call " + res); */

// In JavaScript, all objects interact by REFERENCE when setting them equal to each other.
/* let c = { greeting: "Hey!" };
let d;

d = c;
c.greeting = "Hello";
console.log(d.greeting); // Hello
 */

var c = 21;
var girl = function () {
  console.log(c);
  var c = 20;
};
girl();

//  Output : undefined
