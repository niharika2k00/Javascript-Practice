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

function x() {
  var a = 200,
    b = 500;
  function y() {
    console.log("Value coming due to Lexical Environment : ", a);
  }

  // y();
  return y;
}

var closure = x();
// console.log(closure);
closure();

// x()(); // calling the inenr func

let i = 0;
function fun() {
  i++;
  setTimeout(() => {
    console.log(i--);
  }, 400);
}

for (let i = 0; i < 3; i++) {
  fun(i);
}

let i = 0;

function a() {
  for (let i = 0; i < 3; i++) {
    function fun() {
      i++;
      setTimeout(() => {
        console.log(i--);
      }, 400);
    }

    fun(i);
  }
}

a();
